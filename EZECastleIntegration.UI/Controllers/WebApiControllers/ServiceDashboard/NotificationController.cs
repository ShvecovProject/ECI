using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EZECastleIntegration.UI.Controllers.WebApiControllers.ServiceDashboard
{
    [Route("api/serviceDashboard/Notification")]
    public class NotificationController : ApiController
    {
        // GET: api/serviceDashboard/Notification
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET:api/serviceDashboard/Notification/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/serviceDashboard/Notification
        public void Post([FromBody]string value)
        {
        }

        // PUT:api/serviceDashboard/Notification/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/serviceDashboard/Notification/5
        public void Delete(int id)
        {
        }
    }
}
