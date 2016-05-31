using System;
using System.Collections.Generic;
using BusinessLogic.Models;

namespace BusinessLogic.DataFactory
{
    public class RecentNewsDataStore : IDataFactory<RecentNews>
    {
        private static Lazy<RecentNewsDataStore> _instance = new Lazy<RecentNewsDataStore>(()=>new RecentNewsDataStore());

        public static IDataFactory<RecentNews> Instance
        {
            get { return _instance.Value; }
        }
        public RecentNewsDataStore()
        {
            Collection = new List<RecentNews>
            {
                new RecentNews
                {
                    Id = 1,
                    RecentNewsText =
                        "ECI Telecom Ltd delivers comprehensive networking solutions to service providers around the globe. ECI was founded in 1961 as a manufacturer of advanced telecommunications equipment. The company provides, next generation packet optical transport products, a variety of SDN/NFV applications, a comprehensive cyber security solution and a full range of professional services."
                }
            };
        }

        public List<RecentNews> Collection { get; } 
    }
}
