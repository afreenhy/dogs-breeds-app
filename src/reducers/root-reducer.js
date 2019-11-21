import { combineReducers } from 'redux';
import breedsReducer from './breeds/breeds-reducer';
import breedsTypesReducer from './breeds-types/breeds-types-reducer';

export default combineReducers({
    breedsReducer,
    breedsTypesReducer
});