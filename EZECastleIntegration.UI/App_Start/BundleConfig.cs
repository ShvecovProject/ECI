using System.Web.Optimization;

namespace EZECastleIntegration.UI.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/vendors").Include(
                "~/scripts/vendors/modernizr-2.8.3.js",
                 "~/scripts/vendors/jquery-1.9.1.min.js",
                 "~/scripts/vendors/bootstrap.min.js",
                 "~/scripts/vendors/angular.js",
                 "~/scripts/vendors/angular-route.min.js",
                 "~/scripts/vendors/angular-resource.min.js",
                 "~/scripts/vendors/angular-cookies.js",
                 "~/scripts/vendors/angular-base64.js",
                "~/scripts/vendors/ui-bootstrap.min.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/spa").Include(

                ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/css/bootstrap.min.css",
                "~/Content/css/style.css"
                ));
        }
    }
}