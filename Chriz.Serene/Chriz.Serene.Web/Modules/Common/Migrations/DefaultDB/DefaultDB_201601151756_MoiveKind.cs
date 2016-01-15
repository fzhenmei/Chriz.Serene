using FluentMigrator;

namespace Chriz.Serene.Migrations.DefaultDB
{
    [Migration(201601151756)]
    public class DefaultDB_201601151756_MoiveKind : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Movie").InSchema("mov")
                .AddColumn("Kind").AsInt32().NotNullable()
                    .WithDefaultValue(1);
        }
    }
}