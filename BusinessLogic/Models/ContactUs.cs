namespace BusinessLogic.Models
{
    public class ContactUs:IEntity
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string PostCode { get; set; }
        public string Street { get; set; }
        public string Appartment { get; set; }
        public string State { get; set; }
        public string Telephone { get; set; }
    }
}
