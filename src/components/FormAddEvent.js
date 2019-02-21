import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { setModalVisible } from '../redux/actions/home';

class FormAddEvent extends Component {

  handleVisibleModal(visible){
    this.props.dispatch(setModalVisible(visible))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.handleVisibleModal(false)}>
            <Text style={styles.textButton}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.titleHeader}>New Event</Text>
          <TouchableOpacity>
            <Text style={[styles.textButton, {textAlign: 'right'}]}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder='name'
            style={styles.input}
          />
          <TextInput
            placeholder='description'
            style={[styles.input, {height: 100}]}
            multiline={true}
            numberOfLines={5}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5
  },
  header: {
    borderBottomColor: '#ababab',
    borderBottomWidth: 0.5,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  titleHeader: {
    fontWeight: 'bold'
  },
  textButton: {
    color: '#f39c12',
    width: 50
  },
  form: {
    paddingHorizontal: 5
  },
  input: {
    borderRadius: 5,
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    height: 40
  }
})

export default connect()(FormAddEvent);