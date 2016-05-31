namespace EZECastleIntegration.UI.Okta
{
   public interface IOktaProvider
    {
        bool ValidateUser(string username, string password);
        bool ValidateSession(string sessionId);
        void Logout(string sessionId);
    }
}
