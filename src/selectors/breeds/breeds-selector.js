import { createSelector } from 'reselect';

const breedsData = state => state.breedsReducer.breedsData;

/**
 * Data obtained from the api, is an objected
 * Transformed data into array of objects, ([{affrenpinscher: 3}, {african: 1}...])
 * So that the array of objects, can be easily consumed in components
 */
export const getUpdatedData = createSelector(
    [breedsData],
    (data) => {
        const updatedData = Object.keys(data).map(item => {
            return { name: item,
                     breeds: data[item]};

        }) 

        return updatedData;
    });