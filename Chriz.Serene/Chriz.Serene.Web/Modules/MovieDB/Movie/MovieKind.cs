using System.ComponentModel;
using Serenity.ComponentModel;

namespace Chriz.Serene.Modules.MovieDB.Movie
{
    [EnumKey("MovieDB.MovieKind")]
    public enum MovieKind
    {
        [Description("Film")] Film = 1,
        [Description("TV Series")] TvSeries = 2,
        [Description("Mini Series")] MiniSeries = 3
    }
}