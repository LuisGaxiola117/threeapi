import React, { useState, useEffect } from 'react';
import './PokemonCard.css'; // Asegúrate de importar el CSS

function PokemonCard({ name }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [name]);

  return (
    <div className="pokemon-card">
      {pokemon && (
        <>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div className="attack">
            <h3>Revengeful Storm</h3>
            <p>80+</p>
            <p>If you have more Prize cards remaining than your opponent, this attack does 100 more damage.</p>
          </div>
          <div className="attack">
            <h3>Berserker Tackle</h3>
            <p>200</p>
            <p>This Pokémon also does 50 damage to itself.</p>
          </div>
          <div className="description">
            <p>{pokemon.name} is known as the Atrocious Pokémon.</p>
          </div>
          <div className="weakness">
            <p>Weakness: ⚡ x2</p>
          </div>
          <div className="resistance">
            <p>Resistance: ⭐</p>
          </div>
        </>
      )}
    </div>
  );
}

export default PokemonCard;

