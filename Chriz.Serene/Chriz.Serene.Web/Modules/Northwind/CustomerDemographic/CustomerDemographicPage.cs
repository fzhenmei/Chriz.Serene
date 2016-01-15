﻿

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Northwind/CustomerDemographic", url: "~/Northwind/CustomerDemographic", permission: "Northwind")]

namespace Chriz.Serene.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/CustomerDemographic"), Route("{action=index}")]
    public class CustomerDemographicController : Controller
    {
        [PageAuthorize(Northwind.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.CustomerDemographic.CustomerDemographicIndex);
        }
    }
}