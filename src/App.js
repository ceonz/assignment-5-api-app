import { useState } from 'react';

export default function App() {
  const [catImages, setCatImages] = useState([]);
  const [breed, setBreed] = useState('ex. beng ( only include first 4 letters )');

  function handleBreedChange(e) {
    setBreed(e.target.value);
  }

  function getCatImages() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => response.json())
      .then((data) => setCatImages(data));
  }
  
  function getCatBreedImages() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=1&breed_ids='+breed)
      .then((response) => response.json())
      .then((data) => setCatImages(data));
  }

  return (
    <main className="container">
      <button onClick={getCatImages}>Get Cat Images</button>
      <label>
        Find Picture of Specific Cat Breeds:
        <input onChange={handleBreedChange} value={breed} />
      </label>
      <button onClick={getCatBreedImages}>Get Image</button>
      {catImages && (
        <figure>
          <figcaption>{catImages.name}</figcaption>
        </figure>
      )}

      <div className="image-grid">
        {catImages.map((catImage) => (
          <img
            key={catImage.id}
            src={catImage.url}
            alt="Random cat"
            width="300"
            height="300"
          />
        ))}
      </div>
    </main>
  );
}
