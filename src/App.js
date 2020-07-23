import React from 'react';
import Header from './common-components/header/header.component';
import SearchBox from './features/movie-search/search-box/search-box.component';
import Movies from './features/movie-search/movies/movies';
import { Counter } from './features/counter/Counter';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <SearchBox  />
      <Movies />
      <Counter />
    </>
  );
}

export default App;
