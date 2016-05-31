using System.Web.Http;
using BusinessLogic.Models;
using BusinessLogic.Repository;
using EZECastleIntegration.UI.Controllers.WebApiControllers.Common;

namespace EZECastleIntegration.UI.Controllers.WebApiControllers.Index
{
    [Route("api/index/ContactInfo")]
    public class ContactInfoController : ApiControllerBase
    {
        private IRepository<ContactUs> _repository;

        public ContactInfoController(IRepository<ContactUs> repository)
        {
            _repository = repository;
        }
       
        // GET:api/index/ContactInfo
        public ContactUs Get()
        {
            return _repository.Items[0];
        }
        
    }
}
