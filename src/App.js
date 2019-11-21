import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store'
import MainContainer from './components/MainContainer';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainContainer />
        </div>
      </Provider>
    );
  }
}

export default App;


