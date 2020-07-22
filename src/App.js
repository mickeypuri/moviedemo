import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './common-components/header/header.component';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Counter />
    </>
  );
}

export default App;
