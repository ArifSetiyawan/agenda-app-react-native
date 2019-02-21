import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import CalendarComponent from '../components/CalendarComponent';
import ModalComponent from '../components/ModalComponent';
import { setModalVisible } from '../redux/actions/home';

class Home extends Component {

  handleVisibleModal(visible){
    this.props.dispatch(setModalVisible(visible))
  }

  render() {
    return (
      <View>
        <CalendarComponent />
        <ModalComponent />
        <TouchableOpacity onPress={() => this.handleVisibleModal(true)}>
          <Text>Open Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(Home);