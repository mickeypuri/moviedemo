import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateSearchString,
    updateMovies,
    selectSearchString,
    selectMovies
} from './movieSlice';
import styles from './Counter.module.css';

export function Movie() {
  const searchString = useSelector(selectSearchString);
  const movieList = useSelector(selectMovies);
  const dispatch = useDispatch();

  return ( );
}
