using System.Web.Optimization;

namespace Web.UI
{
    public class BundleConfig
    {
         public static void RegisterBundles(BundleCollection bundles)
         {
             bundles.UseCdn = true;


             bundles.Add(new StyleBundle("~/styles/app-styles")
                 .IncludeDirectory("~/Styles", "*.css",searchSubdirectories:false));

             // Scripts
             bundles.Add(new ScriptBundle("~/bundles/modernizr")
                 .Include("~/Scripts/modernizr-{version}.js"));

             bundles.Add(new ScriptBundle("~/bundles/jquery", 
                 "//code.jquery.com/jquery-1.8.2.min.js")
                 .Include("~/Scripts/lib/jquery-{version}.js"));

             bundles.Add(new ScriptBundle("~/bundles/lib-scripts")
                 .Include(
                    "~/scripts/lib/sammy-{version}.js", 
                    "~/Scripts/lib/knockout-{version}.js",
                    "~/Scripts/lib/underscore.js"));

             bundles.Add(new ScriptBundle("~/bundles/app-scripts")
                 .IncludeDirectory("~/Scripts/app", "*.js", searchSubdirectories:true));
         }
    }
}