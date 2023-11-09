import { useState } from 'react';

export default function App() {
  const [catImages, setCatImages] = useState([]);

  function getCatImages() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => response.json())
      .then((data) => setCatImages(data));
  }

  return (
    <main className="container">
      <button onClick={getCatImages}>Get Cat Images</button>
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
