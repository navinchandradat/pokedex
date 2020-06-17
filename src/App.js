import React from 'react';
import PokedexHeader from './components/PokedexHeader'
import './App.css';

function App() {
  return (
    <div className="App">
      <PokedexHeader author={' @navin_c'} name={'Navin'} />
    </div>
  );
}

export default App;
