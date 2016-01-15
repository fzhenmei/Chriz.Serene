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

    public partial class ShipperForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Shipper";
    
        public ShipperForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor CompanyName { get { return ById<StringEditor>("CompanyName"); } }
        public PhoneEditor Phone { get { return ById<PhoneEditor>("Phone"); } }
    }
}

