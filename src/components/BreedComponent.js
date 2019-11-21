import React from 'react';
import { connect } from 'react-redux';
import { togglePage, setSelectedBreed } from '../actions/breeds-list'

const BreedComponent = (props) => {

    /**
     * When a breed is selected, this method is called
     * Sets the selectedBreed in the state
     * Toggles the page view from List page vies to Images page
     */
    const toggleShowBreedsPage = () => {
        props.setSelectedBreed(props.name)
        props.togglePage(!props.showBreedsListPage);
    }
  
    return (
        <button className="btn breed-group" onClick={toggleShowBreedsPage}>
            <span className="breed-group-name">
                {props.name} 
            </span> 
            <span className="breeds-number">
                {props.breeds.length} 
            </span>
        </button>
    )
}


const mapStateToProps = state => {
    return {
        showBreedsListPage: state.breedsReducer.showBreedsListPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        togglePage: (listPageFlag) => dispatch(togglePage(listPageFlag)),
        setSelectedBreed: (name) => dispatch(setSelectedBreed(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedComponent);