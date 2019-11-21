import {
    FETCH_BREEDS_IMAGES_REQUEST,
    FETCH_BREEDS_IMAGES_SUCCESS,
    FETCH_BREEDS_IMAGES_FAILURE,
    CLEAR_IMAGE_DATA
}
 from './action_types';

 import axios from 'axios';

  // Method to dispatch the reducer to set the loading state, when api is being called
    
  const fetchBreedsImagesRequest = (isLoading) =>  ({
    type: FETCH_BREEDS_IMAGES_REQUEST,
    payload: { isLoading }
  });

  // Method to dispatch reducer when images are successfully fetched and set the data in state

  const fetchBreedsImagesSuccess = (data) => ({
      type: FETCH_BREEDS_IMAGES_SUCCESS,
      payload: { data }
  });

  // Method to dispatch reducer when images fetch fails and set the error in the state

  const fetchBreedsImagesFailure = (error) => ({
      type: FETCH_BREEDS_IMAGES_FAILURE,
      payload: { error }
  })

  /**
   *  Api call to fetch random images of the selected breed
   *  Dispatches success reducer, if response is successfully fetched
   *  Dispatched failure reducer, if api call fails
   */

  export const fetchBreedImages = (url) => {
    return (dispatch) => {
        dispatch(fetchBreedsImagesRequest(true));
        axios.get(url)
        .then(response => {
            dispatch(fetchBreedsImagesSuccess(response.data.message))
        })
        .catch(error => {
            dispatch(fetchBreedsImagesFailure(error))
        })
    }
  }

  export const clearImageData = () => ({
      type: CLEAR_IMAGE_DATA
  })