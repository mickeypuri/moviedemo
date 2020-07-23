import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from './movie.service';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    searchString: '',
    movies: [
      {
        "Title": "Mary Poppins",
        "Year": "1964",
        "Rated": "G",
        "Released": "18 Jun 1965",
        "Runtime": "139 min",
        "Genre": "Comedy, Family, Fantasy, Musical",
        "Director": "Robert Stevenson",
        "Writer": "Bill Walsh (screenplay), Don DaGradi (screenplay), P.L. Travers (based on: The \"Mary Poppins\" books by)",
        "Actors": "Julie Andrews, Dick Van Dyke, David Tomlinson, Glynis Johns",
        "Plot": "In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Won 5 Oscars. Another 15 wins & 17 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmJkODczNjItNDI5Yy00MGI1LTkyOWItZDNmNjM4ZGI1ZDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "7.8",
        "imdbVotes": "153,025",
        "imdbID": "tt0058331",
        "Type": "movie",
        "DVD": "24 Mar 1998",
        "BoxOffice": "N/A",
        "Production": "Walt Disney Productions",
        "Website": "N/A",
        "Response": "True"
    },
    {
      "Title": "Mary Poppins",
      "Year": "1964",
      "Rated": "G",
      "Released": "18 Jun 1965",
      "Runtime": "139 min",
      "Genre": "Comedy, Family, Fantasy, Musical",
      "Director": "Robert Stevenson",
      "Writer": "Bill Walsh (screenplay), Don DaGradi (screenplay), P.L. Travers (based on: The \"Mary Poppins\" books by)",
      "Actors": "Julie Andrews, Dick Van Dyke, David Tomlinson, Glynis Johns",
      "Plot": "In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father.",
      "Language": "English",
      "Country": "USA",
      "Awards": "Won 5 Oscars. Another 15 wins & 17 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmJkODczNjItNDI5Yy00MGI1LTkyOWItZDNmNjM4ZGI1ZDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
      "Ratings": [
          {
              "Source": "Internet Movie Database",
              "Value": "7.8/10"
          },
          {
              "Source": "Rotten Tomatoes",
              "Value": "100%"
          },
          {
              "Source": "Metacritic",
              "Value": "88/100"
          }
      ],
      "Metascore": "88",
      "imdbRating": "7.8",
      "imdbVotes": "153,025",
      "imdbID": "tt0058332",
      "Type": "movie",
      "DVD": "24 Mar 1998",
      "BoxOffice": "N/A",
      "Production": "Walt Disney Productions",
      "Website": "N/A",
      "Response": "True"
  },
  {
    "Title": "Mary Poppins",
    "Year": "1964",
    "Rated": "G",
    "Released": "18 Jun 1965",
    "Runtime": "139 min",
    "Genre": "Comedy, Family, Fantasy, Musical",
    "Director": "Robert Stevenson",
    "Writer": "Bill Walsh (screenplay), Don DaGradi (screenplay), P.L. Travers (based on: The \"Mary Poppins\" books by)",
    "Actors": "Julie Andrews, Dick Van Dyke, David Tomlinson, Glynis Johns",
    "Plot": "In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 5 Oscars. Another 15 wins & 17 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmJkODczNjItNDI5Yy00MGI1LTkyOWItZDNmNjM4ZGI1ZDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "100%"
        },
        {
            "Source": "Metacritic",
            "Value": "88/100"
        }
    ],
    "Metascore": "88",
    "imdbRating": "7.8",
    "imdbVotes": "153,025",
    "imdbID": "tt0058333",
    "Type": "movie",
    "DVD": "24 Mar 1998",
    "BoxOffice": "N/A",
    "Production": "Walt Disney Productions",
    "Website": "N/A",
    "Response": "True"
},
{
  "Title": "Mary Poppins",
  "Year": "1964",
  "Rated": "G",
  "Released": "18 Jun 1965",
  "Runtime": "139 min",
  "Genre": "Comedy, Family, Fantasy, Musical",
  "Director": "Robert Stevenson",
  "Writer": "Bill Walsh (screenplay), Don DaGradi (screenplay), P.L. Travers (based on: The \"Mary Poppins\" books by)",
  "Actors": "Julie Andrews, Dick Van Dyke, David Tomlinson, Glynis Johns",
  "Plot": "In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Won 5 Oscars. Another 15 wins & 17 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNmJkODczNjItNDI5Yy00MGI1LTkyOWItZDNmNjM4ZGI1ZDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "7.8/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "100%"
      },
      {
          "Source": "Metacritic",
          "Value": "88/100"
      }
  ],
  "Metascore": "88",
  "imdbRating": "7.8",
  "imdbVotes": "153,025",
  "imdbID": "tt0058334",
  "Type": "movie",
  "DVD": "24 Mar 1998",
  "BoxOffice": "N/A",
  "Production": "Walt Disney Productions",
  "Website": "N/A",
  "Response": "True"
},
{
  "Title": "Mary Poppins",
  "Year": "1964",
  "Rated": "G",
  "Released": "18 Jun 1965",
  "Runtime": "139 min",
  "Genre": "Comedy, Family, Fantasy, Musical",
  "Director": "Robert Stevenson",
  "Writer": "Bill Walsh (screenplay), Don DaGradi (screenplay), P.L. Travers (based on: The \"Mary Poppins\" books by)",
  "Actors": "Julie Andrews, Dick Van Dyke, David Tomlinson, Glynis Johns",
  "Plot": "In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Won 5 Oscars. Another 15 wins & 17 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNmJkODczNjItNDI5Yy00MGI1LTkyOWItZDNmNjM4ZGI1ZDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "7.8/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "100%"
      },
      {
          "Source": "Metacritic",
          "Value": "88/100"
      }
  ],
  "Metascore": "88",
  "imdbRating": "7.8",
  "imdbVotes": "153,025",
  "imdbID": "tt0058335",
  "Type": "movie",
  "DVD": "24 Mar 1998",
  "BoxOffice": "N/A",
  "Production": "Walt Disney Productions",
  "Website": "N/A",
  "Response": "True"
}

    ]
  },
  reducers: {
    updateMovieSearch: (state, action) => {
        state.searchString = action.payload;
    },
    receivedMovies: (state, action) => {
        state.movies = action.payload;
    }
  },
});

export const { updateMovieSearch, receivedMovies } = movieSlice.actions;

export const updateMovies = searchString => dispatch => {
    fetchMovies(searchString)
        .then(movieData => dispatch(receivedMovies(movieData)));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMovieSearch = state => state.movie.searchString;

export const selectMovies = state => state.movie.movies;

export default movieSlice.reducer;
