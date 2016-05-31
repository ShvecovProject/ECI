using System;

namespace BusinessLogic.Models
{
    public class LatestWhitepaper:IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Uri UrlToDocument { get; set; }
    }
}
