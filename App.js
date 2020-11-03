import React, {Component} from 'react';
import {Provider} from 'react-redux';

// import store
import store from './src/redux/store';

import Main from './src/screens/Main';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
