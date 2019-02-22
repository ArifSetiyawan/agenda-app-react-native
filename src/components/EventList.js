import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';

import { setModalVisible } from '../redux/actions/home';

class EventList extends Component {

  handleVisibleModal(visible,modal = '',date){
    this.props.dispatch(setModalVisible(visible,modal,date))
  }

  _renderItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  )

  render() {

    const events = this.props.home.events.filter(item => {
      return item.date===this.props.home.selectedDate
    })

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.buttonClose} onPress={() => this.handleVisibleModal(false)}>
            <Icon name='down' type='AntDesign' style={styles.iconButtonClose} />
          </TouchableOpacity>
          <Text style={styles.titleHeader}>{this.props.home.selectedDate}</Text>
        </View>
        {events.length===0? (
          <View style={{flex: 1, alignItems: 'center', marginTop: '50%'}}>
            <Text style={{textAlign: 'center'}}>Empty</Text>
          </View>
        ):(
          <FlatList
            data={events}
            keyExtractor={(item,index) => index.toString()}
            renderItem={this._renderItem}
          />
        )}
        <TouchableOpacity onPress={() => this.handleVisibleModal(true,'addEvent',this.props.home.selectedDate)} style={styles.button}>
          <Icon name='plus' type='AntDesign' style={styles.iconButton} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 10
  },
  titleHeader: {
    fontWeight: 'bold'
  },
  buttonClose: {
    marginRight: 10
  },
  iconButtonClose: {
    color: '#f39c12',
    fontSize: 20
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

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps)(EventList);