import React, { Component } from 'react';
import { Alert, Text, View, ScrollView } from 'react-native';
import Section from '../../../../docs/components/Section';
import MDBModal from '../../../components/Modal';
import MDBButton from '../../../components/Button/Button';

export default class ModalPage extends Component {
  static navigationOptions = {
    title: 'Modals'
  };

  state = {
    basic: false
  };

  toggleModal = modal => this.setState({ [modal]: !this.state[modal] });

  basic = () => {
    Alert.alert(
      'Modal title',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    );
  };

  confirm = () => {
    Alert.alert('Modal title', 'Are you ready?', [
      { text: 'No', onPress: () => console.log(false) },
      { text: 'yes', onPress: () => console.log(true) }
    ]);
  };

  render() {
    const { basic } = this.state;
    return (
      <ScrollView>
        <View>
          <Section header="Basic">
            <MDBButton onPress={() => this.toggleModal('basic')}>Click to open</MDBButton>
            <MDBModal
              open={basic}
              onClose={() => {
                this.toggleModal('basic');
              }}
            >
              <Text
                header
                style={{
                  fontWeight: '600',
                  fontSize: 24
                }}
              >
                Hello!!!
              </Text>
              <Text>Modal example</Text>
            </MDBModal>
          </Section>
          <Section header="Alert" column>
            <MDBButton color="primary" onPress={this.basic}>
              Basic
            </MDBButton>
            <MDBButton color="danger" onPress={this.confirm}>
              Confirm
            </MDBButton>
          </Section>
        </View>
      </ScrollView>
    );
  }
}
