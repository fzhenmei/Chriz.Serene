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

    public partial class OrderForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Order";
    
        public OrderForm(string idPrefix) : base(idPrefix) {}
    
        public CustomerEditor CustomerID { get { return ById<CustomerEditor>("CustomerID"); } }
        public DateEditor OrderDate { get { return ById<DateEditor>("OrderDate"); } }
        public DateEditor RequiredDate { get { return ById<DateEditor>("RequiredDate"); } }
        public LookupEditor EmployeeID { get { return ById<LookupEditor>("EmployeeID"); } }
        public OrderDetailsEditor DetailList { get { return ById<OrderDetailsEditor>("DetailList"); } }
        public DateEditor ShippedDate { get { return ById<DateEditor>("ShippedDate"); } }
        public LookupEditor ShipVia { get { return ById<LookupEditor>("ShipVia"); } }
        public DecimalEditor Freight { get { return ById<DecimalEditor>("Freight"); } }
        public StringEditor ShipName { get { return ById<StringEditor>("ShipName"); } }
        public StringEditor ShipAddress { get { return ById<StringEditor>("ShipAddress"); } }
        public StringEditor ShipCity { get { return ById<StringEditor>("ShipCity"); } }
        public StringEditor ShipRegion { get { return ById<StringEditor>("ShipRegion"); } }
        public StringEditor ShipPostalCode { get { return ById<StringEditor>("ShipPostalCode"); } }
        public StringEditor ShipCountry { get { return ById<StringEditor>("ShipCountry"); } }
    }
}

