import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
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
      <View style={styles.container}>
        <CalendarComponent />
        <ModalComponent />
        <TouchableOpacity onPress={() => this.handleVisibleModal(true)} style={styles.button}>
          <Icon name='plus' type='AntDesign' style={styles.iconButton} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: '#2ecc71',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30
  },
  iconButton: {
    color: '#fff'
  }
})

export default connect()(Home);