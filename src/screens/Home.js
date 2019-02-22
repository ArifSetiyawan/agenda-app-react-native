import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';

import CalendarComponent from '../components/CalendarComponent';
import ModalComponent from '../components/ModalComponent';
import { setModalVisible } from '../redux/actions/home';

class Home extends Component {

  handleVisibleModal(visible,modal,date){
    this.props.dispatch(setModalVisible(visible,modal,date))
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#3498db' barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Agenda App</Text>
        </View>
        <CalendarComponent />
        <ModalComponent />
        <TouchableOpacity onPress={() => this.handleVisibleModal(true,'addEvent',this.props.home.dateNow)} style={styles.button}>
          <Icon name='plus' type='AntDesign' style={styles.iconButton} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
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
  },
  header: {
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 0.5
  },
  titleHeader: {
    fontWeight: 'bold',
    fontSize: 18
  }
})

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps)(Home);