using Serenity;
using System.Html;

namespace Chriz.Serene
{
    public static class ScriptInitialization
    {
        static ScriptInitialization()
        {
            Q.Config.RootNamespaces.Add("Chriz.Serene");
        }
    }
}