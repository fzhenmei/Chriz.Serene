﻿
namespace Chriz.Serene
{
    using Serenity;

    public class Authorization
    {
        public static ScriptUserDefinition UserDefinition { get { return Q.GetRemoteData<ScriptUserDefinition>("UserData"); } }

        public static bool HasPermission(string permissionKey)
        {
            return UserDefinition.Permissions[permissionKey];
        }
    }
}