import React, { useState } from "react";

const App = () => {
  const [imageData, setImageData] = useState(null);
  // const apiKey = ' '; 
  const category = 'nature';

  const handleGetPictureClick = async () => {
    try {
      const url = 'https://api.api-ninjas.com/v1/randomimage?category=' + category;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'api key',
          'Accept': 'image/jpg',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.blob();
              
      setImageData(URL.createObjectURL(result));
      } catch (error) {
      console.error('Error:', error);
      }
  };

    return (
      <div>
        <h2>Nature Background</h2>
        <button className={'btn'} onClick={handleGetPictureClick}>Get Picture</button>
        {imageData && (
        <img src={imageData} alt="Nature Pic" />
        )}
        {/* <img src={imageData} alt="nature-pic" /> */}
        {/* <h2>{pictureData.title}</h2>
        <p>{pictureData.explanation}</p> */}
      </div>
    );
};

export default App;
