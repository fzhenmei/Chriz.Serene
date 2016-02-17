
namespace Chriz.Serene.Modules.MovieDB.Movie
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [EnumKey("MovieDB.MovieKind"), PreserveMemberCase]
    public enum MovieKind
    {
        Film = 1,
        TvSeries = 2,
        MiniSeries = 3
    }
    
}

