# Assignment5 Api App

--- 

## Favouriting

### API Provider: TheCatAPI

### API Name: Create a Favourite

Successful API call in Postman
![Successful API call in Postman](https://i.imgur.com/ZNu7rj5.png)

### [TheCatAPI Favourites Documentation](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=mkzf_eYzV)

### Usage 
This endpoint is used to allow users to favorite and unfavorite cat images. Users can click on a button to favorite, which sends a `POST` request, and click again to unfavorite, sending a `DELETE` request.

### Challenges
Ensuring that the state updates immediately after favoriting/unfavoriting without a page refresh was critical for a seamless user experience. We stored a unique `sub_id` in `localStorage` to maintain session consistency.

### Issues Encountered
Initially, unfavoriting images was not intuitive as it required finding the favorite ID associated with an image. Refactoring the code to correctly match images to their favorite records resolved this issue.

--- 