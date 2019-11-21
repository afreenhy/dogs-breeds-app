import React, { useEffect } from 'react';
import { togglePage } from '../actions/breeds-list';
import { fetchBreedImages, clearImageData } from '../actions/breeds-details';
import { connect } from 'react-redux';

const BreedsDetailsComponent = (props) => {

    useEffect(() => {
        const breedName = props.selectedBreed;
        props.fetchBreedImages(`https://dog.ceo/api/breed/${breedName}/images/random/2`);
    },[])

    /**
     * Method is called, when go back from images to list page
     * The images shown in the Details Images pages are cleared, so that the traces are not left when new breed is selected
     * The showBreedsListPage flag is toggled
     */
    const toggleDetailsPage = () => {
        props.clearImageData();
        props.togglePage(!props.showBreedsListPage);
    }

    return (
        <div className="breed-details-container">
            <button className="back-button" onClick={toggleDetailsPage}> Back </button>
            <div className='details-box'>
                <div className='breed-name'>{props.selectedBreed}</div>
                <img className='image-1' src={props.breedsImages[0]}></img>
                <img className='image-2' src={props.breedsImages[1]}></img>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        showBreedsListPage: state.breedsReducer.showBreedsListPage,
        breedsImages: state.breedsTypesReducer.breedsImages,
        selectedBreed: state.breedsReducer.selectedBreed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        togglePage: (listPageFlag) => dispatch(togglePage(listPageFlag)),
        fetchBreedImages: (url) => dispatch(fetchBreedImages(url)),
        clearImageData: () => dispatch(clearImageData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedsDetailsComponent);