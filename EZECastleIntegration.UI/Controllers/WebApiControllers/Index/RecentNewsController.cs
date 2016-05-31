using System.Collections.Generic;
using System.Web.Http;
using BusinessLogic.Models;
using BusinessLogic.Repository;
using EZECastleIntegration.UI.Controllers.WebApiControllers.Common;

namespace EZECastleIntegration.UI.Controllers.WebApiControllers.Index
{
    [Route("api/index/RecentNews")]
    public class RecentNewsController : ApiControllerBase
    {
        private readonly IRepository<RecentNews> _repository;
        public RecentNewsController(IRepository<RecentNews> repository)
        {
            _repository = repository;
        }
        public IEnumerable<RecentNews>  Get()
        {
            return _repository.Items;
        }
    }
}
