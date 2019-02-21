import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { setModalVisible } from '../redux/actions/home';

class ModalComponent extends Component {

  handleVisibleModal(visible){
    this.props.dispatch(setModalVisible(visible))
  }

  render() {
    return (
      <Modal
        visible={this.props.home.modalVisible}
        animationType='slide'
        transparent={true}
        onRequestClose={() => this.handleVisibleModal(false)}
      >
        <TouchableOpacity onPress={() => this.handleVisibleModal(false)}>
          <Text>Close</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const mapStateTopProps = (state) => ({
  home: state.home
})

export default connect(mapStateTopProps)(ModalComponent);