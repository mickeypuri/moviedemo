import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateSearchString,
    receivedMovies,

} from './movieSlice';
import styles from './Counter.module.css';

export function Movie() {
  const searchString = useSelector(updateSearchString);
  const dispatch = useDispatch();

  return ( );
}
