
namespace Chriz.Serene.MovieDB
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class MovieForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "MovieDB.Movie";
    
        public MovieForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Title { get { return ById<StringEditor>("Title"); } }
        public StringEditor Description { get { return ById<StringEditor>("Description"); } }
        public StringEditor Storyline { get { return ById<StringEditor>("Storyline"); } }
        public IntegerEditor Year { get { return ById<IntegerEditor>("Year"); } }
        public DateEditor ReleaseDate { get { return ById<DateEditor>("ReleaseDate"); } }
        public IntegerEditor Runtime { get { return ById<IntegerEditor>("Runtime"); } }
    }
}

