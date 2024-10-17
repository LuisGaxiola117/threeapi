import React from 'react';
import JokeComponent from './components/JokeComponent';
import RandomCatComponent from './components/RandomCatComponent';
import PokemonCard from './components/PokemonCard';
function App() {
  return (
    <div className="App">
      <h1>Prueba de apis</h1>
      <JokeComponent />
      <hr /> 
      <h2>imagen random de gatos</h2>
      <RandomCatComponent />
      <hr />
      <h2>Carta Pokemon</h2>
      <PokemonCard name="gyarados" />
    </div>
  );
}
export default App