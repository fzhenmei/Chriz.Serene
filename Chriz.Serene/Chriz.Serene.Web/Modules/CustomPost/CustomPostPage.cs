using System;
using System.IO;
using System.Net;
using System.Web.Mvc;

namespace Chriz.Serene.CustomPost.Pages
{
    [RoutePrefix("CustomPost"), Route("{action=index}")]
    public class CustomPostController : Controller
    {
        public ActionResult Index()
        {
            return Content("OK");
        }

        [HttpPost]
        public ActionResult DoPost()
        {
            try
            {
                var req = Request.InputStream;
                req.Seek(0, SeekOrigin.Begin);
                var content = new StreamReader(req).ReadToEnd();
                return Content(content);
            }
            catch (Exception ex)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
        }
    }
}