using System.Web;
using System.Web.Optimization;

namespace GopherGmConnect
{
    public class BundleConfig
    {


        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {

            //bundles.Add(new ScriptBundle("~/bundles/angular").IncludeDirectory("~/Scripts/angular", "*.js", true));


            bundles.Add(new ScriptBundle("~/bundles/ember/controllers").IncludeDirectory("~/Scripts/ember/controllers", "*.js"));
            bundles.Add(new ScriptBundle("~/bundles/ember/routes").IncludeDirectory("~/Scripts/ember/routes", "*.js"));
            bundles.Add(new ScriptBundle("~/bundles/ember/models").IncludeDirectory("~/Scripts/ember/models", "*.js"));
            bundles.Add(new ScriptBundle("~/bundles/ember/views").IncludeDirectory("~/Scripts/ember/views", "*.js"));
            bundles.Add(new ScriptBundle("~/bundles/ember/helpers").IncludeDirectory("~/Scripts/ember/helpers", "*.js"));
            bundles.Add(new ScriptBundle("~/bundles/ember/components").IncludeDirectory("~/Scripts/ember/components", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/templates").Include(
                        "~/Scripts/ember/templates/templates.js"));

            bundles.Add(new ScriptBundle("~/bundles/ember").Include(
                        "~/Scripts/ember/app.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                        "~/Scripts/Contracts.js",
                        "~/Scripts/League.js"));

            bundles.Add(new ScriptBundle("~/bundles/pizza").Include(
                        "~/Scripts/Pizza/js/pizza.js"
                ));


            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/style").Include(
                        "~/Content/less/compiled/styles.css"));

            bundles.Add(new StyleBundle("~/Content/Pizza").Include(
                        "~/Scripts/Pizza/css/pizza.css"));


        }
    }
}