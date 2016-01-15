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

    public partial class UserForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Administration.User";
    
        public UserForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Username { get { return ById<StringEditor>("Username"); } }
        public StringEditor DisplayName { get { return ById<StringEditor>("DisplayName"); } }
        public EmailEditor Email { get { return ById<EmailEditor>("Email"); } }
        public PasswordEditor Password { get { return ById<PasswordEditor>("Password"); } }
        public PasswordEditor PasswordConfirm { get { return ById<PasswordEditor>("PasswordConfirm"); } }
        public StringEditor Source { get { return ById<StringEditor>("Source"); } }
    }
}

