
namespace Chriz.Serene.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty(GenreRow.IdProperty), NameProperty(GenreRow.NameProperty)]
    [FormKey("MovieDB.Genre"), LocalTextPrefix(GenreRow.LocalTextPrefix), Service(GenreService.BaseUrl)]
    public class GenreDialog : EntityDialog<GenreRow>
    {
        protected GenreForm form;

        public GenreDialog()
        {
            form = new GenreForm(this.IdPrefix);
        }
    }
}