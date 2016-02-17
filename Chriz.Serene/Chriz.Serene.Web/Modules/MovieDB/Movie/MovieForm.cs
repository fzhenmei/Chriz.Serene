using System;
using Chriz.Serene.Modules.MovieDB.Movie;
using Chriz.Serene.MovieDB.Entities;
using Serenity.ComponentModel;

namespace Chriz.Serene.MovieDB.Forms
{
    [FormScript("MovieDB.Movie")]
    [BasedOnRow(typeof (MovieRow))]
    public class MovieForm
    {
        public String Title { get; set; }

        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [TextAreaEditor(Rows = 8)]
        public String Storyline { get; set; }

        public Int32 Year { get; set; }
        public DateTime ReleaseDate { get; set; }
        public Int32 Runtime { get; set; }
        public MovieKind Kind { get; set; }
        public int GenreId { get; set; }
    }
}