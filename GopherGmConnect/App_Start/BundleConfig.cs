using System.Web;
using System.Web.Optimization;

namespace GopherGmConnect
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/ember/controllers").IncludeDirectory("~/Scripts/ember/controllers", "*.js"));
            bundles.Add(new ScriptBundle("~/bundles/ember/routes").IncludeDirectory("~/Scripts/ember/routes", "*.js"));
            bundles.Add(new ScriptBundle("~/bundles/ember/models").IncludeDirectory("~/Scripts/ember/models", "*.js"));
            bundles.Add(new ScriptBundle("~/bundles/ember/views").IncludeDirectory("~/Scripts/ember/views", "*.js"));
            bundles.Add(new ScriptBundle("~/bundles/ember/helpers").IncludeDirectory("~/Scripts/ember/helpers", "*.js"));


            bundles.Add(new ScriptBundle("~/bundles/charts").Include(
                        "~/Scripts/Chart.js"));

            bundles.Add(new ScriptBundle("~/bundles/ember").Include(
                        "~/Scripts/ember/handlebars.js",
                        "~/Scripts/ember/ember-1.0.0-rc.6.js",
                        "~/Scripts/ember/app.js",
                        "~/Scripts/ember/ember-animated-outlet.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                        "~/Scripts/teams.js",
                        "~/Scripts/Potential.js",
                        "~/Scripts/Contracts.js",
                        "~/Scripts/PlayerInfo.js",
                        "~/Scripts/League.js",
                        "~/Scripts/player_list.js"));

            bundles.Add(new ScriptBundle("~/bundles/typeahead").Include(
                        "~/Scripts/hogan-2.0.0.js",
                        "~/Scripts/typeahead.js"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                        "~/Scripts/knockout-2.2.1.js",
                        "~/Scripts/knockout.mapping-latest.js",
                        "~/Scripts/app.js"));

            bundles.Add(new StyleBundle("~/Content/bootstrap").Include(
                        "~/Scripts/ember/ember-animated-outlet.css",
                        "~/Content/bootstrap.css",
                        "~/Content/bootstrap-responsive.css"));

            bundles.Add(new StyleBundle("~/Content/bootstrap3").Include(
                        "~/Content/css/bootstrap.css", 
                        "~/Content/css/typeahead.js-bootstrap.css"));

            bundles.Add(new StyleBundle("~/Content/emberanimation").Include(
            "~/Scripts/ember/ember-animated-outlet.css"));
    

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                        "~/Content/js/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap3").Include(
                        "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/style").Include(
                        "~/Content/site.css",
                        "~/Content/loader.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));
        }
    }
}