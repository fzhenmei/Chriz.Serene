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

    public partial class CategoryForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Category";
    
        public CategoryForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor CategoryName { get { return ById<StringEditor>("CategoryName"); } }
        public StringEditor Description { get { return ById<StringEditor>("Description"); } }
    }
}

