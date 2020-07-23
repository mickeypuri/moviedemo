import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './common-components/header/header.component';
import  SearchIcon  from './features/movie-search/search-icon/search-icon.component';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <SearchIcon />
      <Counter />
    </>
  );
}

export default App;
