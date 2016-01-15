﻿
namespace Chriz.Serene.Membership
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class ResetPasswordRequest : ServiceRequest
    {
        public String Token { get; set; }
        public String NewPassword { get; set; }
        public String ConfirmPassword { get; set; }
    }
    
}

