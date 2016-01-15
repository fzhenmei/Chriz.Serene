using System.Web.Mvc;
using Serenity.Web;

namespace Chriz.Serene.MovieDB.Pages
{
    [RoutePrefix("MovieDB/Movie"), Route("{action=index}")]
    public class MovieController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/MovieDB/Movie/MovieIndex.cshtml");
        }
    }
}