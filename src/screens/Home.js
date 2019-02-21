import React, { Component } from 'react';
import { View } from 'react-native';

import CalendarComponent from '../components/CalendarComponent';

class Home extends Component {

  render() {
    return (
      <View>
        <CalendarComponent />
      </View>
    );
  }
}

export default Home;