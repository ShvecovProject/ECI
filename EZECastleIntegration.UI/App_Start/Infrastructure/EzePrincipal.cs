using System.Security.Principal;
namespace EZECastleIntegration.UI.App_Start.Infrastructure
{
    public class EzePrincipal:IEzePrincipal
    {
        public EzePrincipal(string token, string userId)
        {
            Identity = new GenericIdentity(token);
            UserId = userId;
        }
        public bool IsInRole(string role)
        {
            return false;
        }

        public string Login { get; set; }
        public IIdentity Identity { get; }
        public string UserId { get; }
        public string MemeberName { get; set; }
        public int CompanyId { get; set; }
    }
}