using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Dispatcher;
using EZECastleIntegration.UI.App_Start.Infrastructure;
using EZECastleIntegration.UI.Okta;

namespace EZECastleIntegration.UI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            DelegatingHandler[] handlers = new DelegatingHandler[]
            {
                new ApiKeyHandler(new OktaProvider())
            };

            var routeHandlers = HttpClientFactory.CreatePipeline(new HttpControllerDispatcher(config), handlers);

            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "Login",
                routeTemplate: "api/Auth/{action}/{data}",
                defaults:new {Controller= "Auth", data = RouteParameter.Optional }
                );

            config.Routes.MapHttpRoute(
               name: "Index",
               routeTemplate: "api/index",
               defaults:new {Controller="Index"}
               );


            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                handler: routeHandlers,
                constraints: null,
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
