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

    public partial class CustomerCustomerDemoForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.CustomerCustomerDemo";
    
        public CustomerCustomerDemoForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor CustomerID { get { return ById<StringEditor>("CustomerID"); } }
        public StringEditor CustomerTypeID { get { return ById<StringEditor>("CustomerTypeID"); } }
    }
}

