using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
namespace EZECastleIntegration.UI.Controllers.WebApiControllers.Common
{
    public class ApiControllerBase:ApiController
    {
        protected HttpResponseMessage CreateHttpResponse(HttpRequestMessage request, Func<HttpResponseMessage> function)
        {
            HttpResponseMessage response;
            try
            {
                response = function.Invoke();
            }
            catch (Exception ex)
            {
                response = request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
            return response;
        }
    }
}