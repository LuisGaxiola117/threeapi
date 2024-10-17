import React, { useState, useEffect } from 'react';
import './JokeComponent.css'; // Asegúrate de que la ruta sea correcta

function JokeComponent() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch('https://api.chucknorris.io/jokes/random'); // Reemplaza con la URL de tu API de bromas preferida
      const data = await response.json();
      setJoke(data.value);
    };

    fetchJoke();
  }, []);

  return (
    <div className="joke-container">
      {joke && <p className="joke-text">{joke}</p>}
    </div>
  );
}

export default JokeComponent;
