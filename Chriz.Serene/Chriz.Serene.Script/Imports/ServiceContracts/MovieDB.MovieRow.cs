
namespace Chriz.Serene.MovieDB
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class MovieRow
    {
        [InlineConstant] public const string IdProperty = "MovieId";
        [InlineConstant] public const string NameProperty = "Title";
        [InlineConstant] public const string LocalTextPrefix = "MovieDB.Movie";
    
        public String Description { get; set; }
        public Int32? MovieId { get; set; }
        public String ReleaseDate { get; set; }
        public Int32? Runtime { get; set; }
        public String Storyline { get; set; }
        public String Title { get; set; }
        public Int32? Year { get; set; }
        public Serene.Modules.MovieDB.Movie.MovieKind? Kind { get; set; }
        public Int32? GenreId { get; set; }
        public String GenreName { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Description = "Description";
            [InlineConstant] public const string MovieId = "MovieId";
            [InlineConstant] public const string ReleaseDate = "ReleaseDate";
            [InlineConstant] public const string Runtime = "Runtime";
            [InlineConstant] public const string Storyline = "Storyline";
            [InlineConstant] public const string Title = "Title";
            [InlineConstant] public const string Year = "Year";
            [InlineConstant] public const string Kind = "Kind";
            [InlineConstant] public const string GenreId = "GenreId";
            [InlineConstant] public const string GenreName = "GenreName";
        }
    }
    
}

