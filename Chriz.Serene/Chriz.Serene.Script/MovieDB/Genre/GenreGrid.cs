
namespace Chriz.Serene.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("MovieDB.Genre"), IdProperty(GenreRow.IdProperty), NameProperty(GenreRow.NameProperty)]
    [DialogType(typeof(GenreDialog)), LocalTextPrefix(GenreRow.LocalTextPrefix), Service(GenreService.BaseUrl)]
    public class GenreGrid : EntityGrid<GenreRow>
    {
        public GenreGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}