
namespace Chriz.Serene.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("MovieDB.Movie"), IdProperty(MovieRow.IdProperty), NameProperty(MovieRow.NameProperty)]
    [DialogType(typeof(MovieDialog)), LocalTextPrefix(MovieRow.LocalTextPrefix), Service(MovieService.BaseUrl)]
    public class MovieGrid : EntityGrid<MovieRow>
    {
        public MovieGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}