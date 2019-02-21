import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import Home from './src/screens/Home';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;