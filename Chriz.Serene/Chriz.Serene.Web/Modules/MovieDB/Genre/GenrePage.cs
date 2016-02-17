using System.Web.Mvc;
using Serenity.Web;

namespace Chriz.Serene.MovieDB.Pages
{
    [RoutePrefix("MovieDB/Genre"), Route("{action=index}")]
    public class GenreController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/MovieDB/Genre/GenreIndex.cshtml");
        }
    }
}