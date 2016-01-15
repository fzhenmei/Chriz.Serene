using System.Collections.Generic;
using jQueryApi;
using Serenity;

namespace Chriz.Serene.MovieDB
{
    [ColumnsKey("MovieDB.Movie"), IdProperty(MovieRow.IdProperty), NameProperty(MovieRow.NameProperty)]
    [DialogType(typeof (MovieDialog)), LocalTextPrefix(MovieRow.LocalTextPrefix), Service(MovieService.BaseUrl)]
    public class MovieGrid : EntityGrid<MovieRow>
    {
        public MovieGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override List<QuickSearchField> GetQuickSearchFields()
        {
            return new List<QuickSearchField>
            {
                new QuickSearchField {Name = "", Title = "all"},
                new QuickSearchField
                {
                    Name = MovieRow.Fields.Description,
                    Title = "description"
                },
                new QuickSearchField
                {
                    Name = MovieRow.Fields.Storyline,
                    Title = "storyline"
                },
                new QuickSearchField
                {
                    Name = MovieRow.Fields.Year,
                    Title = "year"
                }
            };
        }
    }
}