namespace EZECastleIntegration.UI.Models.User
{
    public class SimpleUserData
    {
        public string Id { get;} 
        public string Login { get; }
        public string MemberName { get; }
        public string SessionToken { get; }
        public int CompanyId { get; }

        public SimpleUserData(string id, string login, string sessionToken, int companyId,string memeberName)
        {
            Id = id;
            Login = login;
            SessionToken = sessionToken;
            CompanyId = companyId;
            MemberName = memeberName;
        }
    }
}