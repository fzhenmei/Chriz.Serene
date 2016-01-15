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

    public partial class CustomerDemographicForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.CustomerDemographic";
    
        public CustomerDemographicForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor CustomerTypeID { get { return ById<StringEditor>("CustomerTypeID"); } }
        public StringEditor CustomerDesc { get { return ById<StringEditor>("CustomerDesc"); } }
    }
}

