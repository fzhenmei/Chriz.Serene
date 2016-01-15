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

    public partial class SupplierForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Supplier";
    
        public SupplierForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor CompanyName { get { return ById<StringEditor>("CompanyName"); } }
        public StringEditor ContactName { get { return ById<StringEditor>("ContactName"); } }
        public StringEditor ContactTitle { get { return ById<StringEditor>("ContactTitle"); } }
        public StringEditor Address { get { return ById<StringEditor>("Address"); } }
        public StringEditor City { get { return ById<StringEditor>("City"); } }
        public StringEditor Region { get { return ById<StringEditor>("Region"); } }
        public StringEditor PostalCode { get { return ById<StringEditor>("PostalCode"); } }
        public StringEditor Country { get { return ById<StringEditor>("Country"); } }
        public StringEditor Phone { get { return ById<StringEditor>("Phone"); } }
        public StringEditor Fax { get { return ById<StringEditor>("Fax"); } }
        public StringEditor HomePage { get { return ById<StringEditor>("HomePage"); } }
    }
}

