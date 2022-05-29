import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Section from '../../../../docs/components/Section';
import MDBInput from '../../../components/Input/Input/index';

export default class InputPage extends Component {
  static navigationOptions = {
    title: 'Input'
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Section header="Basic">
            <MDBInput label="Basic"></MDBInput>
          </Section>
          <Section header="With error">
            <MDBInput label="With error" errorMessage="Error message"></MDBInput>
          </Section>
        </View>
      </ScrollView>
    );
  }
}
