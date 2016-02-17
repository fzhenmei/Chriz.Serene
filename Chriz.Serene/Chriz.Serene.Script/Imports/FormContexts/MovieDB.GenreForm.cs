
namespace Chriz.Serene.MovieDB
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class GenreForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "MovieDB.Genre";
    
        public GenreForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Name { get { return ById<StringEditor>("Name"); } }
    }
}

