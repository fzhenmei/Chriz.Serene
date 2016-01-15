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
    public partial class TerritoryRow
    {
        [InlineConstant] public const string IdProperty = "ID";
        [InlineConstant] public const string NameProperty = "TerritoryID";
        [InlineConstant] public const string LocalTextPrefix = "Northwind.Territory";
        [InlineConstant] public const string LookupKey = "Northwind.Territory";
    
        public static Lookup<TerritoryRow> Lookup { [InlineCode("Q.getLookup('Northwind.Territory')")] get { return null; } }
    
        public Int32? ID { get; set; }
        public String TerritoryID { get; set; }
        public String TerritoryDescription { get; set; }
        public Int32? RegionID { get; set; }
        public String RegionDescription { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string ID = "ID";
            [InlineConstant] public const string TerritoryID = "TerritoryID";
            [InlineConstant] public const string TerritoryDescription = "TerritoryDescription";
            [InlineConstant] public const string RegionID = "RegionID";
            [InlineConstant] public const string RegionDescription = "RegionDescription";
        }
    }
    
}

