import * as types from '../../actions/action_types';

const initialState = {
    breedsTypesLoading: false,
    breedsTypesFetchFailure: false,
    breedsTypesData: [],
    fetchBreedsTypesError: null,
    breedsImagesLoading: false,
    breedsImagesFetchFail: false,
    breedsImagesFetchError: null,
    breedsImages: []
};

const breedsTypesReducer = (state = initialState, action) => {
    switch(action.type) {
       
        case types.FETCH_BREEDS_IMAGES_REQUEST: return {
            ...state,
            breedsImagesLoading: true
        }
        case types.FETCH_BREEDS_IMAGES_SUCCESS: return {
            ...state,
            breedsImagesLoading: false,
            breedsImages: action.payload.data
        }
        case types.FETCH_BREEDS_IMAGES_FAILURE: return {
            ...state,
            breedsImagesLoading: false,
            breedsImagesFetchFail: true,
            breedsImagesFetchError: action.payload.error
        }
        case types.CLEAR_IMAGE_DATA: return {
            ...state,
            breedsImages: []
        }
        default: return state;
    }
}

export default breedsTypesReducer;