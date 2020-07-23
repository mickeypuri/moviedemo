import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './common-components/header/header.component';
import  SearchIcon  from './features/movie-search/search-icon/search-icon.component';
import MovieCard from './features/movie-search/movie-card/card.component';

import './App.css';

const tempProp = {
  heading: 'Mary Poppins',
  subTitle: "A classic film for the family",
  imgUrl: "https://m.media-amazon.com/images/M/MV5BNmJkODczNjItNDI5Yy00MGI1LTkyOWItZDNmNjM4ZGI1ZDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
  callout: "This is a great film ..."
};

function App() {
  return (
    <>
      <Header />
      <MovieCard {...tempProp} />
      <SearchIcon />
      <Counter />
    </>
  );
}

export default App;
