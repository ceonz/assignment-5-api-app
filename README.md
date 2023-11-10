# Assignment5 Api App

--- 

## Favouriting

### API Provider: TheCatAPI

### API Name: Create a Favourite

Successful API call in Postman
![Successful API call in Postman](https://i.imgur.com/ZNu7rj5.png)

### API Documentation: [TheCatAPI Favourites Documentation](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=mkzf_eYzV)

### Usage 
This endpoint is used to allow users to favorite and unfavorite cat images. Users can click on a button to favorite, which sends a `POST` request, and click again to unfavorite, sending a `DELETE` request.

### Challenges
Ensuring that the state updates immediately after favoriting/unfavoriting without a page refresh was critical for a seamless user experience. We stored a unique `sub_id` in `localStorage` to maintain session consistency.

### Issues Encountered
Initially, unfavoriting images was not intuitive as it required finding the favorite ID associated with an image. Refactoring the code to correctly match images to their favorite records resolved this issue.

--- 

## Choosing Breed

### API Provider: TheCatAPI

### API Name: Filter by Breed

Successful API call in Postman
![Successful API call in Postman](https://imgur.com/a/DubsuNT.png)

### API Documentation: [TheCatAPI Favourites Documentation](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=gpN-ReBkp)

### Usage 
This endpoint is used to allow users to filter cat images by their breed. Users can type in a breed's unique 4 character id which is the first 4 letters in the breed name, in order to return an image of the entered breed.

### Challenges
Initially had attempted making this into a dropdown selector, however faced issues in obtaining all cat breed names. By having the user enter the breed, the id can be concatenated to the api endpoint and retrieve the desired image.

--- 