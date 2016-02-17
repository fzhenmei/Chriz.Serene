using System;
using System.ComponentModel;
using Chriz.Serene.MovieDB.Entities;
using Serenity.ComponentModel;

namespace Chriz.Serene.MovieDB.Columns
{
    [ColumnsScript("MovieDB.Movie")]
    [BasedOnRow(typeof (MovieRow))]
    public class MovieColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MovieId { get; set; }

        [EditLink]
        public String Title { get; set; }

        [Width(100)]
        public String GenreName { get; set; }

        public String Description { get; set; }
        public String Storyline { get; set; }
        public Int32 Year { get; set; }
        public DateTime ReleaseDate { get; set; }
        public Int32 Runtime { get; set; }
    }
}