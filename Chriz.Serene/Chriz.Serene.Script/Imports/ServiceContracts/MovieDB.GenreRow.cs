
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
    public partial class GenreRow
    {
        [InlineConstant] public const string IdProperty = "GenreId";
        [InlineConstant] public const string NameProperty = "Name";
        [InlineConstant] public const string LocalTextPrefix = "MovieDB.Genre";
        [InlineConstant] public const string LookupKey = "MovieDB.Genre";
    
        public static Lookup<GenreRow> Lookup { [InlineCode("Q.getLookup('MovieDB.Genre')")] get { return null; } }
    
        public Int32? GenreId { get; set; }
        public String Name { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string GenreId = "GenreId";
            [InlineConstant] public const string Name = "Name";
        }
    }
    
}

