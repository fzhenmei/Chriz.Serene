using FluentMigrator;

namespace Chriz.Serene.Migrations.DefaultDB
{
    [Migration(201602171205)]
    public class DefaultDB_201602171205_Genre : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Genre").InSchema("mov")
                .WithColumn("GenreId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(1000).NotNullable();

            Alter.Table("Movie").InSchema("mov")
                .AddColumn("GenreId").AsInt32().Nullable();
        }
    }
}