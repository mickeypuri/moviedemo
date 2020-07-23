import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie-search/movieSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    movie: movieReducer
  },
});
