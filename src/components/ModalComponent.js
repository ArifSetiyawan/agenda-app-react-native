import React, { Component } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { setModalVisible } from '../redux/actions/home';
import FormAddEvent from './FormAddEvent';

class ModalComponent extends Component {

  handleVisibleModal(visible){
    this.props.dispatch(setModalVisible(visible))
  }

  render() {
    return (
      <Modal
        visible={this.props.home.modalVisible}
        animationType='fade'
        transparent={true}
        onRequestClose={() => this.handleVisibleModal(false)}
      >
        <View style={styles.container}>
          <FormAddEvent />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  }
})

const mapStateTopProps = (state) => ({
  home: state.home
})

export default connect(mapStateTopProps)(ModalComponent);