
import { 
    FETCH_BREEDS_REQUEST,
    FETCH_BREEDS_SUCCESS,
    FETCH_BREEDS_FAILURE,
    TOGGLE_BREED_PAGE_VIEW,
    SET_SELECTED_BREED
  } from './action_types';

import axios from 'axios';

  // Method to dispatch the reducer to set the loading state, when api is being called

  const fetchBreedsRequest = (isLoading) =>  ({
    type: FETCH_BREEDS_REQUEST,
    payload: { isLoading }
  });

  // Method to dispatch reducer when breed list is successfully fetched and set the data in state

  const fetchBreedsSuccess = (data) => ({
      type: FETCH_BREEDS_SUCCESS,
      payload: { data }
  });

  // Method to dispatch reducer when breeds list fetch fails and set the error in the state

  const fetchBreedsFailure = (error) => ({
      type: FETCH_BREEDS_FAILURE,
      payload: { error }
  })

  /**
   *  Api call to fetch breeds list
   *  Dispatches success reducer, if response is successfully fetched
   *  Dispatched failure reducer, if api call fails
   */

  export const listAllBreeds = (url) => {
    return (dispatch) => {
        dispatch(fetchBreedsRequest(true));
        axios.get(url)
        .then(response => {
            dispatch(fetchBreedsSuccess(response.data.message))
        })
        .catch(error => {
            dispatch(fetchBreedsFailure(error))
        })
    }
  }

  // Method to dispatch reducer, when page is toggled from list page to images page and back

  export const togglePage = (listPageFlag) => ({
    type: TOGGLE_BREED_PAGE_VIEW,
    payload: { listPageFlag }
  })

  // Method to dispatch reducer which sets the selected breed, chosen to see further images
  export const setSelectedBreed = (name) => ({
    type: SET_SELECTED_BREED,
    payload: { name }
  })