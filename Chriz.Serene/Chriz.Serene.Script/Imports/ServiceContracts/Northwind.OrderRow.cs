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
    public partial class OrderRow
    {
        [InlineConstant] public const string IdProperty = "OrderID";
        [InlineConstant] public const string NameProperty = "CustomerID";
        [InlineConstant] public const string LocalTextPrefix = "Northwind.Order";
        [InlineConstant] public const string LookupKey = "Northwind.OrderShipCity";
    
        public static Lookup<OrderRow> Lookup { [InlineCode("Q.getLookup('Northwind.OrderShipCity')")] get { return null; } }
    
        public Int32? OrderID { get; set; }
        public String CustomerID { get; set; }
        public Int32? EmployeeID { get; set; }
        public String OrderDate { get; set; }
        public String RequiredDate { get; set; }
        public String ShippedDate { get; set; }
        public Int32? ShipVia { get; set; }
        public Decimal? Freight { get; set; }
        public String ShipName { get; set; }
        public String ShipAddress { get; set; }
        public String ShipCity { get; set; }
        public String ShipRegion { get; set; }
        public String ShipPostalCode { get; set; }
        public String ShipCountry { get; set; }
        public String CustomerCompanyName { get; set; }
        public String CustomerContactName { get; set; }
        public String CustomerContactTitle { get; set; }
        public String CustomerCity { get; set; }
        public String CustomerRegion { get; set; }
        public String CustomerCountry { get; set; }
        public String CustomerPhone { get; set; }
        public String CustomerFax { get; set; }
        public String EmployeeFullName { get; set; }
        public Gender? EmployeeGender { get; set; }
        public String ShipViaCompanyName { get; set; }
        public String ShipViaPhone { get; set; }
        public OrderShippingState? ShippingState { get; set; }
        public List<OrderDetailRow> DetailList { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string OrderID = "OrderID";
            [InlineConstant] public const string CustomerID = "CustomerID";
            [InlineConstant] public const string EmployeeID = "EmployeeID";
            [InlineConstant] public const string OrderDate = "OrderDate";
            [InlineConstant] public const string RequiredDate = "RequiredDate";
            [InlineConstant] public const string ShippedDate = "ShippedDate";
            [InlineConstant] public const string ShipVia = "ShipVia";
            [InlineConstant] public const string Freight = "Freight";
            [InlineConstant] public const string ShipName = "ShipName";
            [InlineConstant] public const string ShipAddress = "ShipAddress";
            [InlineConstant] public const string ShipCity = "ShipCity";
            [InlineConstant] public const string ShipRegion = "ShipRegion";
            [InlineConstant] public const string ShipPostalCode = "ShipPostalCode";
            [InlineConstant] public const string ShipCountry = "ShipCountry";
            [InlineConstant] public const string CustomerCompanyName = "CustomerCompanyName";
            [InlineConstant] public const string CustomerContactName = "CustomerContactName";
            [InlineConstant] public const string CustomerContactTitle = "CustomerContactTitle";
            [InlineConstant] public const string CustomerCity = "CustomerCity";
            [InlineConstant] public const string CustomerRegion = "CustomerRegion";
            [InlineConstant] public const string CustomerCountry = "CustomerCountry";
            [InlineConstant] public const string CustomerPhone = "CustomerPhone";
            [InlineConstant] public const string CustomerFax = "CustomerFax";
            [InlineConstant] public const string EmployeeFullName = "EmployeeFullName";
            [InlineConstant] public const string EmployeeGender = "EmployeeGender";
            [InlineConstant] public const string ShipViaCompanyName = "ShipViaCompanyName";
            [InlineConstant] public const string ShipViaPhone = "ShipViaPhone";
            [InlineConstant] public const string ShippingState = "ShippingState";
            [InlineConstant] public const string DetailList = "DetailList";
        }
    }
    
}

