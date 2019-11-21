import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listAllBreeds } from '../actions/breeds-list';
import { getUpdatedData } from '../selectors/breeds/breeds-selector'
import BreedComponent from './BreedComponent';
import BreedsDetailsComponent from './BreedsDetailsComponent';

const MainContainer = (props) => {

    useEffect(() => {
        props.listAllBreeds('https://dog.ceo/api/breeds/list/all')
    }, [])
    
    /**
     * If showBreedsListPage state flag is true, breeds list page is rendered, 
     * else the Details Images page is rendered
     */
    if (props.showBreedsListPage) {
        return (
            <div className="main-container">
                <h3 className="title"> Dog Breeds</h3>
                    {props.breedsData.map((dog, index) => {
                        return <div key={index} className="breeds-container"> <BreedComponent name={dog.name} breeds={dog.breeds}/></div>
                    })}
            </div>
        )
    }

    return (
        <BreedsDetailsComponent />
    )
    
};

const mapStateToProps = state => {
    return {
        breedsData: getUpdatedData(state),
        showBreedsListPage: state.breedsReducer.showBreedsListPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        listAllBreeds: (url) => dispatch(listAllBreeds(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);