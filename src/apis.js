const API_KEY = process.env.REACT_APP_CAT_API_KEY;
if (!API_KEY) { throw new Error("REACT_APP_CAT_API_KEY not found. Please set it in .env file.") }

const API_URL = "https://api.thecatapi.com/v1";

function request(endpoint, options = {}) {
  const headers = options.headers || {};
  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    redirect: "follow",
    headers: Object.assign({
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    }, headers)
  })
    .then(res => res.json())
}

function getAllImages(limit = 10) {
  return request(`/images/search?limit=${limit}`)
}

function getMyUploadedImages() {
  return request(`/images`)
}

function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  return request(`/images/upload`, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
}

function deleteImage(id) {
  return request(`/images/${id}`, {
    method: "DELETE",
  })
}

function getVotes() {
  return request(`/votes`)
}

function getRandomFacts() {
  return request(`/facts`)
}

function getFavorites() {
  return request(`/favourites`);
}

function createFavorite(imageId, subId) {
  const payload = {
    image_id: imageId,
    sub_id: subId
  };
  return request(`/favourites`, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

function deleteFavorite(favouriteId) {
  return request(`/favourites/${favouriteId}`, {
    method: 'DELETE',
  });
}

export { getAllImages, getMyUploadedImages, uploadImage, deleteImage, getVotes, getRandomFacts, getFavorites, createFavorite, deleteFavorite };