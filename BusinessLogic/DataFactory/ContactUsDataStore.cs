using System;
using System.Collections.Generic;
using BusinessLogic.Models;

namespace BusinessLogic.DataFactory
{
    public class ContactUsDataStore:IDataFactory<ContactUs>
    {
        private static Lazy<ContactUsDataStore> _instance = new Lazy<ContactUsDataStore>(() => new ContactUsDataStore());

        public static IDataFactory<ContactUs> Instance
        {
            get { return _instance.Value; }
        }
        public ContactUsDataStore()
        {
            Collection = new List<ContactUs>
            {
               new ContactUs { Id = 1, Appartment = "Suite 900",CompanyName = "Eze Company",PostCode = "94103",State = "CA",Street ="1355 Market Street",Telephone = "(123) 456-7890"},
            
            };
        }

        public List<ContactUs> Collection { get; }
    }
}
