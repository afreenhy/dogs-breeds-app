import * as types from '../../actions/action_types';

const initialState = {
    breedsLoading: false,
    breedsFetchFailure: false,
    breedsData: [],
    fetchError: null,
    showBreedsListPage: true,
    selectedBreed: ''
};

const breedsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_BREEDS_REQUEST: return {
            ...state,
            breedsLoading: action.payload.isLoading
        }
        case types.FETCH_BREEDS_SUCCESS: return {
            ...state,
            breedsLoading: false,
            breedsData: action.payload.data
        }
        case types.FETCH_BREEDS_FAILURE: return {
            ...state,
            breedsLoading: false,
            breedsFetchFailure: true,
            fetchError: action.payload.error
        }
        case types.TOGGLE_BREED_PAGE_VIEW: return {
            ...state,
            showBreedsListPage: action.payload.listPageFlag
        }
        case types.SET_SELECTED_BREED: return {
            ...state,
            selectedBreed: action.payload.name
        }
        default: return state;
    }
}

export default breedsReducer;