﻿
namespace Chriz.Serene.Administration
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class RoleRow
    {
        [InlineConstant] public const string IdProperty = "RoleId";
        [InlineConstant] public const string NameProperty = "RoleName";
        [InlineConstant] public const string LocalTextPrefix = "Administration.Role";
        [InlineConstant] public const string LookupKey = "Administration.Role";
    
        public static Lookup<RoleRow> Lookup { [InlineCode("Q.getLookup('Administration.Role')")] get { return null; } }
    
        public Int32? RoleId { get; set; }
        public String RoleName { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string RoleId = "RoleId";
            [InlineConstant] public const string RoleName = "RoleName";
        }
    }
    
}

