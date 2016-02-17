using System;
using System.ComponentModel;
using Chriz.Serene.Modules.MovieDB.Movie;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;

namespace Chriz.Serene.MovieDB.Entities
{
    [ConnectionKey("Default"), DisplayName("Movie"), InstanceName("Movie"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class MovieRow : Row, IIdRow, INameRow
    {
        public static readonly RowFields Fields = new RowFields().Init();

        public MovieRow()
            : base(Fields)
        {
        }

        [DisplayName("Movie Id"), Identity]
        public int? MovieId
        {
            get { return Fields.MovieId[this]; }
            set { Fields.MovieId[this] = value; }
        }

        [DisplayName("Title"), Size(200), NotNull, QuickSearch]
        public string Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Description"), Size(1000), QuickSearch]
        public string Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Storyline"), QuickSearch]
        public string Storyline
        {
            get { return Fields.Storyline[this]; }
            set { Fields.Storyline[this] = value; }
        }

        [DisplayName("Year"), QuickSearch(SearchType.Equals, numericOnly: 1)]
        public int? Year
        {
            get { return Fields.Year[this]; }
            set { Fields.Year[this] = value; }
        }

        [DisplayName("Release Date")]
        public DateTime? ReleaseDate
        {
            get { return Fields.ReleaseDate[this]; }
            set { Fields.ReleaseDate[this] = value; }
        }

        [DisplayName("Runtime (mins)")]
        public int? Runtime
        {
            get { return Fields.Runtime[this]; }
            set { Fields.Runtime[this] = value; }
        }

        [DisplayName("Kind"), NotNull, DefaultValue(1)]
        public MovieKind? Kind
        {
            get { return (MovieKind?)Fields.Kind[this]; }
            set { Fields.Kind[this] = (Int32?)value; }
        }

        [DisplayName("Genre"), ForeignKey("[mov].Genre", "GenreId"), LeftJoin("g")]
        [LookupEditor("MovieDB.Genre", InplaceAdd = true)]
        public Int32? GenreId
        {
            get { return Fields.GenreId[this]; }
            set { Fields.GenreId[this] = value; }
        }

        [DisplayName("Genre"), Expression("g.Name")]
        public String GenreName
        {
            get { return Fields.GenreName[this]; }
            set { Fields.GenreName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MovieId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public class RowFields : RowFieldsBase
        {
            public readonly StringField Description;
            public readonly Int32Field MovieId;
            public readonly DateTimeField ReleaseDate;
            public readonly Int32Field Runtime;
            public readonly StringField Storyline;
            public readonly StringField Title;
            public readonly Int32Field Year;
            public readonly Int32Field Kind;
            public readonly Int32Field GenreId;
            public readonly StringField GenreName;

            public RowFields()
                : base("[mov].[Movie]")
            {
                LocalTextPrefix = "MovieDB.Movie";
            }
        }
    }
}