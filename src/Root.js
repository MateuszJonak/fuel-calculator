import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure';
import FramesAppNavigator from './frames/App/Navigator';

class Root extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <FramesAppNavigator />
      </Provider>
    );
  }
}

export default Root;
