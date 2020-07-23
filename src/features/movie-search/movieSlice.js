import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from './movie.service';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    searchString: '',
    movies: []
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
