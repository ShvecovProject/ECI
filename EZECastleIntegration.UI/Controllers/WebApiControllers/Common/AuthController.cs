using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web;
using System.Web.Http;
using EZECastleIntegration.UI.App_Start.Infrastructure;
using EZECastleIntegration.UI.Models.User;
using EZECastleIntegration.UI.Okta;

namespace EZECastleIntegration.UI.Controllers.WebApiControllers.Common
{
    public class AuthController : ApiControllerBase
    {
        private readonly IOktaProvider _oktaProvider;

        public AuthController(IOktaProvider oktaProvider)
        {
            _oktaProvider = oktaProvider;
        }

        [HttpPost]
        [ActionName("authentificate")]
        public HttpResponseMessage Authentificate(HttpRequestMessage request, [FromBody] CredentialsData viewModel)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                if (_oktaProvider.ValidateUser(viewModel.Email, viewModel.Password))
                {
                    try
                    {
                        var principal = Thread.CurrentPrincipal as EzePrincipal;
                        if (principal != null)
                        {
                            var userData = new SimpleUserData(principal.UserId, principal.Login, principal.Identity.Name,
                                principal.CompanyId, principal.MemeberName);
                            response = request.CreateResponse(HttpStatusCode.OK,
                                new {userData = userData, loginSuccess = true});

                        }
                    }
                    catch (Exception ex)
                    {
                        response = request.CreateResponse(HttpStatusCode.OK,
                            new {loginSuccess = false, message = ex.Message});
                    }
                }
                else
                {
                    response = request.CreateResponse(HttpStatusCode.OK,
                        new {loginSuccess = false, message = HttpContext.Current.Items["authnError"]});

                }
                return response;
            });
        }

        [HttpGet]
        [ActionName("validateSession")]
        public HttpResponseMessage ValidateSession(HttpRequestMessage request)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                IEnumerable<string> foundValues = null;
                if (request.Headers.TryGetValues("ECIDataToken", out foundValues))
                {
                    var values = foundValues as string[] ?? foundValues.ToArray();
                        string token = values.Single();
                        OktaProvider okta = new OktaProvider();
                        if (okta.ValidateSession(token))
                        {
                            response = request.CreateResponse(HttpStatusCode.OK, new {validation = true});
                        }
                        else
                        {
                            response = request.CreateResponse(HttpStatusCode.OK,
                                new { validation = false, errorMessage = HttpContext.Current.Items["validateSession"]});
                        }
                }
                else
                {
                    response = request.CreateResponse(HttpStatusCode.OK, new { validation = false});
                }
                return response;
            });
        }
        [HttpGet]
        [ActionName("logout")]
        public HttpResponseMessage Logout(HttpRequestMessage request)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                IEnumerable<string> foundValues = null;
                if (request.Headers.TryGetValues("ECIDataToken", out foundValues))
                {
                    var values = foundValues as string[] ?? foundValues.ToArray();
                    string token = values.Single();
                    _oktaProvider.Logout(token);
                }
                return request.CreateResponse(HttpStatusCode.OK);
            });
        }

    }
}
