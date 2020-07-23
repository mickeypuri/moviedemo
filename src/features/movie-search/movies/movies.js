import React from 'react';
import MovieCard from '../movie-card/card.component';
import mapImdbData from '../mapper';
import { useSelector } from 'react-redux';
import { selectMovies, selectMovieSearch } from '../movieSlice';
import styles from './movies.module.css';

/* const tempProp = {
  heading: 'Mary Poppins',
  subTitle: "A classic film for the family",
  imgUrl: "https://m.media-amazon.com/images/M/MV5BNmJkODczNjItNDI5Yy00MGI1LTkyOWItZDNmNjM4ZGI1ZDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
  callout: {
        plot: 'This is the plot, yada yada', 
        awards: 'Theres are the awards', 
        actors: 'These are the actors in the movie'
  },
  key: 1
}; */

const Movies = () => {
  const movieList = useSelector(selectMovies);
  const movieSearchString = useSelector(selectMovieSearch);

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
  } else if (movieSearchString !== '') {
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
