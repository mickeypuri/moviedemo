import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    searchString: '',
    movies: []
  },
  reducers: {
    updateSearchString: (state, action) => {
        state.searchString = action.payload;
    },
    receivedMovies: (state, action) => {
        state.movies = action.payload;
    }
  },
});

export const { updateSearchString, receivedMovies } = movieSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchMovies = searchString => dispatch => {

};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectSearchString = state => state.movie.searchString;

export const selectMovies = state => state.movie.movies;

export default movieSlice.reducer;
