import React, { useState, useEffect } from 'react';

function RandomCatComponent() {
  const [cat, setCat] = useState(null);

  useEffect(() => {
    const fetchCat = async () => {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1'); // Fetches one random cat
      const data = await response.json();
      setCat(data[0]);
    };

    fetchCat();
  }, []); // Empty dependency array ensures the fetch happens only once

  return (
    <div>
      {cat && (
        <>
          <h2>Random Cat</h2>
          <img src={cat.url} alt="Random Cat" />
        </>
      )}
    </div>
  );
}

export default RandomCatComponent;