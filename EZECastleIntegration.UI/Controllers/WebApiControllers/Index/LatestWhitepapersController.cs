using System;
using System.Collections.Generic;
using System.Web.Http;
using BusinessLogic.Models;
using BusinessLogic.Repository;
using EZECastleIntegration.UI.Controllers.WebApiControllers.Common;

namespace EZECastleIntegration.UI.Controllers.WebApiControllers.Index
{
    [Route("api/index/LatestWhitepapers")]
    public class LatestWhitepapersController : ApiControllerBase
    {
        private readonly IRepository<LatestWhitepaper> _repository;

        public LatestWhitepapersController(IRepository<LatestWhitepaper> repository)
        {
            _repository = repository;
        }
        // GET: api/LatestWhitepapers
        public IEnumerable<LatestWhitepaper> Get()
        {
            return _repository.GetAll();
        }

        // GET: api/index/LatestWhitepapers/5
        public LatestWhitepaper Get(int id)
        {
           return _repository.GetById(id);
        }

        // POST:api/index/LatestWhitepapers
        public void Post([FromBody] LatestWhitepaper value)
        {
            _repository.Add(value);
        }
    }
}
