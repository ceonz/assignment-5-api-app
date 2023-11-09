import { useState, useEffect } from 'react';
import { getFavorites, createFavorite, deleteFavorite } from './apis';

export default function App() {
  const [catImages, setCatImages] = useState([]);
  const [breed, setBreed] = useState('ex. beng ( only include first 4 letters )');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  function getSubId() {
    let subId = localStorage.getItem('sub_id');
    if (!subId) {
      subId = 'user_' + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('sub_id', subId);
    }
    return subId;
  }

  const subId = getSubId(); 

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

  function handleCreateFavorite(imageId) {
    createFavorite(imageId, subId).then(data => {
      console.log('Favorite created: ', data);
      getFavorites().then(setFavorites);
    });
  }

  function handleDeleteFavorite(imageId) {
    const favoriteToDelete = favorites.find(fav => fav.image_id === imageId);
    if (favoriteToDelete) {
      deleteFavorite(favoriteToDelete.id).then(response => {
        if (response.message === "SUCCESS") {
          setFavorites(currentFavorites => currentFavorites.filter(fav => fav.image_id !== imageId));
        } else {
          console.error('Error deleting favorite:', response);
        }
      }).catch(error => {
        console.error('Error deleting favorite: ', error);
      });
    } else {
      console.error('Favorite to delete not found.');
    }
  }


  return (
    <main className="container">
      <button onClick={getCatImages}>Get Cat Images</button>
      <label>
        Find Picture of Specific Cat Breeds:
        <input onChange={handleBreedChange} value={breed} />
      </label>
      <button onClick={getCatBreedImages}>Get Image</button>
      <div className="image-grid">
        {catImages.map((catImage) => {
          const isFavorited = favorites.some(fav => fav.image_id === catImage.id);
          return (
            <div key={catImage.id} className="cat-card">
              <img
                src={catImage.url}
                alt="Random cat"
                width="300"
                height="300"
              />
              <button onClick={() => isFavorited ? handleDeleteFavorite(catImage.id) : handleCreateFavorite(catImage.id)}>
                {isFavorited ? 'Unfavorite' : 'Favorite'}
              </button>
            </div>
          );
        })}
      </div>
      <h2>Favorites:</h2>
      <div className="favorites-grid">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="favorite-card">
            <img
              src={favorite.image.url}
              alt="Favorited cat"
              width="300"
              height="300"
            />
            <button onClick={() => handleDeleteFavorite(favorite.image_id)}>
              Unfavorite
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
