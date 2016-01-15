
namespace Chriz.Serene.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(MovieRow.IdProperty), NameProperty(MovieRow.NameProperty)]
    [FormKey("MovieDB.Movie"), LocalTextPrefix(MovieRow.LocalTextPrefix), Service(MovieService.BaseUrl)]
    public class MovieDialog : EntityDialog<MovieRow>
    {
        protected MovieForm form;

        public MovieDialog()
        {
            form = new MovieForm(this.IdPrefix);
        }
    }
}