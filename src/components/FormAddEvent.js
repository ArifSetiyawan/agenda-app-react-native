import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { setModalVisible, addEvent, setModalVisibleInEventList } from '../redux/actions/home';
import Input from './redux-form/Input';

class FormAddEvent extends Component {

  handleVisibleModal(visible){
    if(this.props.home.modalVisibleInEventList){
      this.props.dispatch(setModalVisibleInEventList(visible, this.props.home.selectedDate))
    } else {
      this.props.dispatch(setModalVisible(visible))
    }
  }

  handleAdd = (value) => {
    this.props.dispatch(addEvent(value,this.props.home.selectedDate))
    if(this.props.home.modalVisibleInEventList){
      this.props.dispatch(setModalVisibleInEventList(false, this.props.home.selectedDate))
    } else {
      this.props.dispatch(setModalVisible(false))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.handleVisibleModal(false)}>
            <Text style={[styles.textButton, {color: '#e74c3c'}]}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.titleHeader}>New Event</Text>
          {this.props.pristine? (
            <Text style={[styles.textButton, {textAlign: 'right', color: '#dadada'}]}>Add</Text>
          ):(
            <TouchableOpacity onPress={this.props.handleSubmit(this.handleAdd)}>
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
          <Text style={{textAlign: 'center', marginVertical: 10}}>{this.props.home.selectedDate}</Text>
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
    color: '#2ecc71',
    width: 50
  },
  form: {
    paddingHorizontal: 5
  }
})

const mapStateToProps = (state) => ({
  home: state.home
})

export default reduxForm({form: 'addEvent'})(connect(mapStateToProps)(FormAddEvent));