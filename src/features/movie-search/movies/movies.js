import React from 'react';
import MovieCard from '../movie-card/card.component';
import mapImdbData from '../mapper';
import { useSelector } from 'react-redux';
import { selectMovies, selectMovieSearch, selectLastSearch } from '../movieSlice';
import styles from './movies.module.css';

const Movies = () => {
  const movieList = useSelector(selectMovies);
  const movieSearchString = useSelector(selectMovieSearch);
  const lastSearchString = useSelector(selectLastSearch);

  if (movieList.length > 0) {
    return ( 
      <div className={styles.container}>
        {
          movieList.map(mapImdbData).map(movieData => (
            <MovieCard {...movieData} />
          ))
        }
      </div>
    );
  } else if (movieSearchString === lastSearchString && movieSearchString !== '') {
    return (
      <div className={styles.noResultContainer}>
        No results found for<span className={styles.noResult}>{ movieSearchString }</span> 
        please change your search and retry
      </div>
    );
  }
  return null;
};

export default Movies;
