import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie-search/movieSlice';

export default configureStore({
  reducer: {
    movie: movieReducer
  },
});
