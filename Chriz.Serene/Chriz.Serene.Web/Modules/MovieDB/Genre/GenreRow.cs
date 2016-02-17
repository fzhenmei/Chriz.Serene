using System;
using System.ComponentModel;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;

namespace Chriz.Serene.MovieDB.Entities
{
    [ConnectionKey("Default"), DisplayName("Genre"), InstanceName("Genre"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("MovieDB.Genre")]
    public sealed class GenreRow : Row, IIdRow, INameRow
    {
        public static readonly RowFields Fields = new RowFields().Init();

        public GenreRow()
            : base(Fields)
        {
        }

        [DisplayName("Genre Id"), Identity]
        public Int32? GenreId
        {
            get { return Fields.GenreId[this]; }
            set { Fields.GenreId[this] = value; }
        }

        [DisplayName("Name"), Size(1000), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.GenreId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field GenreId;
            public readonly StringField Name;

            public RowFields()
                : base("[mov].[Genre]")
            {
                LocalTextPrefix = "MovieDB.Genre";
            }
        }
    }
}