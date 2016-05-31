using System.Security.Principal;

namespace EZECastleIntegration.UI.App_Start.Infrastructure
{
    public interface IEzePrincipal : IPrincipal
    {
        string UserId { get; }
        string MemeberName { get; set; }
        int CompanyId { get; set; }
        string Login { get; set; }
    }
}