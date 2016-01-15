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
    public partial class RegionRow
    {
        [InlineConstant] public const string IdProperty = "RegionID";
        [InlineConstant] public const string NameProperty = "RegionDescription";
        [InlineConstant] public const string LocalTextPrefix = "Northwind.Region";
        [InlineConstant] public const string LookupKey = "Northwind.Region";
    
        public static Lookup<RegionRow> Lookup { [InlineCode("Q.getLookup('Northwind.Region')")] get { return null; } }
    
        public Int32? RegionID { get; set; }
        public String RegionDescription { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string RegionID = "RegionID";
            [InlineConstant] public const string RegionDescription = "RegionDescription";
        }
    }
    
}

