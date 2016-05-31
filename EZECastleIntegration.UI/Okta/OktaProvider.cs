using System;
using System.Configuration;
using System.Threading;
using System.Web;
using EZECastleIntegration.UI.App_Start.Infrastructure;
using Okta.Core;
using Okta.Core.Clients;
using Okta.Core.Models;

namespace EZECastleIntegration.UI.Okta
{

    public class OktaProvider: IOktaProvider
    {
        public OktaSettings Settings{ get; set; }
        public OktaClient Client { get; set; }
        public UsersClient Users { get; set; }
        public GroupsClient Groups { get; set; }
        public SessionsClient Sessions { get; set; }
        public AppsClient Apps { get; set; }
        public AuthClient Authn { get; set; }
        public OrgFactorsClient Factors { get; set; }
        public OktaProvider()
        {
            var apiToken = ConfigurationManager.AppSettings["okta:ApiToken"];
            var baseUri = new Uri(ConfigurationManager.AppSettings["okta:ApiUrl"]);
            Setup(apiToken, baseUri);
        }

        private void Setup(string apiToken, Uri baseUri)
        {
            Settings = new OktaSettings
            {
                ApiToken = apiToken,
                BaseUri = baseUri
            };

            Client = new OktaClient(Settings);
            Users = Client.GetUsersClient();
            Groups = Client.GetGroupsClient();
            Sessions = Client.GetSessionsClient();
            Apps = Client.GetAppsClient();
            Authn = new AuthClient(Settings);
            Factors = new OrgFactorsClient(Settings);
        }

        public bool ValidateUser(string username, string password)
        {
            try
            {
                AuthResponse response = this.Authn.Authenticate(username, password);
                if (response.Status == AuthStatus.Success)
                {
                    HttpContext.Current.Items["login"] = response.Embedded.User.Profile.Login;
                }
                HttpContext.Current.Items[username] = response;
                if (response.Status == AuthStatus.Success)
                {
                    var currentUser = GetOktaUser(response.Embedded.User.Id);
                    var isHaveCompanyName =
                               currentUser.Profile.GetUnmappedPropertyNames().Contains("Company_RecID");
                    int companyId;
                    if (isHaveCompanyName)
                    {
                        companyId =
                            Convert.ToInt32(currentUser.Profile.GetProperty("Company_RecID"));
                    }
                    else
                    {
                        throw new Exception("Property Company Id is undefined");
                    }

                    IEzePrincipal principal = new EzePrincipal(CreateSession(response.SessionToken), response.Embedded.User.Id);
                    principal.MemeberName = response.Embedded.User.Profile.FirstName;
                    principal.CompanyId = companyId;
                    principal.Login = response.Embedded.User.Profile.Login;
                    SetPrincipal(principal);
                    return true;
                }
            }
            catch (OktaException e)
            {
                var reason = e.ErrorSummary;
                HttpContext.Current.Items["authnError"] = reason;
            }
            return false;
        }

        private string CreateSession(string sessionToken)
        {
            return Sessions.CreateSession(sessionToken).Id;
        }

        private User GetOktaUser(string userId)
        {
            return Users.Get(userId);
        }

        public bool ValidateSession(string sessionId)
        {
            try
            {
                Sessions.Validate(sessionId);
                return true;
            }
            catch (OktaException exception)
            {
                var reason = exception.ErrorSummary;
                HttpContext.Current.Items["validateSession"] = reason;
            }
            return false;
        }

        public void Logout(string sessionId)
        {
            try
            {
                Sessions.Close(sessionId);
                Thread.CurrentPrincipal = null;
            }
            catch (OktaException)
            {
                
            }
        }

        public void SetPrincipal(IEzePrincipal principal)
        {
            Thread.CurrentPrincipal = principal;
            if (HttpContext.Current != null)
            {
                HttpContext.Current.User = principal;
            }
        }

    }
}