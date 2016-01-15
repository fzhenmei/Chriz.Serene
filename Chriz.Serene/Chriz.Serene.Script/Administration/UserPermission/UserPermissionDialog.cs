﻿namespace Chriz.Serene.Administration
{
    using jQueryApi.UI.Widgets;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Html;
    using System.Runtime.CompilerServices;
    using System.Linq;

    public class UserPermissionDialog : TemplatedDialog<UserPermissionDialogOptions>
    {
        private PermissionCheckEditor permissions;

        public UserPermissionDialog(UserPermissionDialogOptions opt)
            : base(opt)
        {
            permissions = new PermissionCheckEditor(this.ById("Permissions"),
                new PermissionCheckEditorOptions { ShowRevoke = true });

            UserPermissionService.List(new UserPermissionListRequest
            {
                UserID = options.UserID,
                Module = null,
                Submodule = null
            }, response =>
            {
                permissions.Value = response.Entities;
            });

            UserPermissionService.ListRolePermissions(new UserPermissionListRequest
            {
                UserID = options.UserID,
                Module = null,
                Submodule = null
            }, response =>
            {
                permissions.RolePermissions = response.Entities;
            });
        }

        protected override DialogOptions GetDialogOptions()
        {
            var opt = base.GetDialogOptions();
            opt.Buttons = new List<DialogButton>
            {
                new DialogButton {
                    Text = Q.Text("Dialogs.OkButton"),
                    Click = delegate
                    {
                        UserPermissionService.Update(new UserPermissionUpdateRequest
                        {
                            UserID = options.UserID,
                            Permissions = permissions.Value,
                            Module = null,
                            Submodule = null
                        }, response => {
                            DialogClose();
                            Window.SetTimeout(delegate()
                            {
                                Q.NotifySuccess(Q.Text("Site.UserPermissionDialog.SaveSuccess"));
                            }, 0);
                        });
                    },
                },
                new DialogButton {
                    Text = Q.Text("Dialogs.CancelButton"),
                    Click = DialogClose
                }
            };
            opt.Title = String.Format(Q.Text("Site.UserPermissionDialog.DialogTitle"), options.Username);
            return opt;
        }

        protected override string GetTemplate()
        {
            return "<div id='~_Permissions'></div>";
        }
    }

    [Imported, Serializable]
    public class UserPermissionDialogOptions
    {
        public int UserID { get; set; }
        public string Username { get; set; }
    }
}