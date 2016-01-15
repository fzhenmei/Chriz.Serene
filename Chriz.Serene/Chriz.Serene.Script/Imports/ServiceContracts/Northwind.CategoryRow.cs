﻿
namespace Chriz.Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class CategoryRow
    {
        [InlineConstant] public const string IdProperty = "CategoryID";
        [InlineConstant] public const string NameProperty = "CategoryName";
        [InlineConstant] public const string LocalTextPrefix = "Northwind.Category";
        [InlineConstant] public const string LookupKey = "Northwind.Category";
    
        public static Lookup<CategoryRow> Lookup { [InlineCode("Q.getLookup('Northwind.Category')")] get { return null; } }
    
        public Int32? CategoryID { get; set; }
        public String CategoryName { get; set; }
        public String Description { get; set; }
        public byte[] Picture { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string CategoryID = "CategoryID";
            [InlineConstant] public const string CategoryName = "CategoryName";
            [InlineConstant] public const string Description = "Description";
            [InlineConstant] public const string Picture = "Picture";
        }
    }
    
}

