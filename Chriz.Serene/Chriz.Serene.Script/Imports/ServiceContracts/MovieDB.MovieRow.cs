
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

        public Int32? MovieId { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public String Storyline { get; set; }
        public Int32? Year { get; set; }
        public String ReleaseDate { get; set; }
        public Int32? Runtime { get; set; }

        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string MovieId = "MovieId";
            [InlineConstant] public const string Title = "Title";
            [InlineConstant] public const string Description = "Description";
            [InlineConstant] public const string Storyline = "Storyline";
            [InlineConstant] public const string Year = "Year";
            [InlineConstant] public const string ReleaseDate = "ReleaseDate";
            [InlineConstant] public const string Runtime = "Runtime";
        }
    }
}