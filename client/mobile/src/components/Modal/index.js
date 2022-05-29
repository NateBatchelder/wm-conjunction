import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';
import Button from '../Button/Button/';

export default class MDBModal extends Component {
  render() {
    const { alert, animationType, children, open, onClose } = this.props;

    const modal = (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType={animationType}
          transparent={false}
          visible={open}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
          style={{
            position: 'relative'
          }}
        >
          <View style={{ margin: 22 }}>
            <View>
              {children}
              <TouchableHighlight
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0
                }}
                onPress={onClose}
              >
                <Button onPress={onClose} color="transparent" textColor="black" noShadow>
                  X
                </Button>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
    return alert ? alert : modal;
  }
}
Modal.propTypes = {
  animationType: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  animationType: 'slide',
  open: false,
  onClose: () => {}
};
