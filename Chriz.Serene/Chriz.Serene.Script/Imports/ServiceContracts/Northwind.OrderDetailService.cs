﻿namespace Chriz.Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class OrderDetailService
    {
        [InlineConstant] public const string BaseUrl = "Northwind/OrderDetail";
    
        [InlineCode("Q.serviceRequest('Northwind/OrderDetail/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<OrderDetailRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Northwind/OrderDetail/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<OrderDetailRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Retrieve = "Northwind/OrderDetail/Retrieve";
            [InlineConstant] public const string List = "Northwind/OrderDetail/List";
        }
    }
    
}

