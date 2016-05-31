using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EZECastleIntegration.UI.Controllers.WebApiControllers.ServiceDashboard
{
    [Route("api/serviceDashboard/Application")]
    public class ApplicationController : ApiController
    {
        // GET: api/serviceDashboard/Application
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/serviceDashboard/Application/5
        public string Get(int id)
        {
            return "value";
        }

        // POST:api/serviceDashboard/Application
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/serviceDashboard/Application/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/serviceDashboard/Application/5
        public void Delete(int id)
        {
        }
    }
}
