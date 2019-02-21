import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { setModalVisible } from '../redux/actions/home';
import Input from './redux-form/Input';

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
          {this.props.pristine? (
            <Text style={[styles.textButton, {textAlign: 'right', color: '#dadada'}]}>Add</Text>
          ):(
            <TouchableOpacity>
              <Text style={[styles.textButton, {textAlign: 'right'}]}>Add</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.form}>
          <Field
            name='name'
            placeholder='name'
            height={40}
            component={Input}
          />
          <Field
            name='description'
            placeholder='description'
            height={100}
            multiline={true}
            numberOfLines={5}
            component={Input}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '80%'
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
  }
})

export default reduxForm({form: 'addEvent'})(connect()(FormAddEvent));