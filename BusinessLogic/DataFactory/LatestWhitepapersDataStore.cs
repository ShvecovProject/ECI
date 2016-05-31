using System;
using System.Collections.Generic;
using BusinessLogic.Models;

namespace BusinessLogic.DataFactory
{
   public class LatestWhitepapersDataStore:IDataFactory<LatestWhitepaper>
    {
        private static Lazy<LatestWhitepapersDataStore> _instance = new Lazy<LatestWhitepapersDataStore>(() => new LatestWhitepapersDataStore());

        public static IDataFactory<LatestWhitepaper> Instance
        {
            get { return _instance.Value; }
        }
        public LatestWhitepapersDataStore()
        {
            Collection = new List<LatestWhitepaper>
            {
               new LatestWhitepaper {Id = 1, Name="Whitepapaers 1"},
               new LatestWhitepaper {Id=2, Name = "Whitepapaers 2"}
            };
        }

        public List<LatestWhitepaper> Collection { get; }
    }
}
