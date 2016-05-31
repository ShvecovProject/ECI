using System.Reflection;
using System.Web.Http;
using Autofac;
using Autofac.Integration.WebApi;
using BusinessLogic.DataFactory;
using BusinessLogic.Models;
using BusinessLogic.Repository;
using EZECastleIntegration.UI.Okta;

namespace EZECastleIntegration.UI.App_Start
{
    public class AutofacWebApiConfig
    {
        public static IContainer Container;

        public static void Initialize(HttpConfiguration config)
        {
            Initialize(config, RegisterServices(new ContainerBuilder()));
        }

        public static void Initialize(HttpConfiguration config, IContainer container)
        {
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }

        private static IContainer RegisterServices(ContainerBuilder containerBuilder)
        {
            containerBuilder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            containerBuilder.RegisterType<OktaProvider>().As<IOktaProvider>();
            containerBuilder.RegisterType<Repository<RecentNews>>()
                .As<IRepository<RecentNews>>()
                .WithParameter("dataFactory", new RecentNewsDataStore());

            containerBuilder.RegisterType<Repository<LatestWhitepaper>>()
              .As<IRepository<LatestWhitepaper>>()
              .WithParameter("dataFactory", new LatestWhitepapersDataStore());

            containerBuilder.RegisterType<Repository<ContactUs>>()
            .As<IRepository<ContactUs>>()
            .WithParameter("dataFactory", new ContactUsDataStore());

            Container = containerBuilder.Build();
            return Container;
        }
    }
}