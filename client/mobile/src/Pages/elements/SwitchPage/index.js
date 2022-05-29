import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Section from '../../../../docs/components/Section';
import MDBSwitch from '../../../components/Switch';
export default class SwitchPage extends Component {
  static navigationOptions = {
    title: 'Switch'
  };

  state = {
    switch: false
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Section header="Basic" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <MDBSwitch checked={this.state.switch} />
          </Section>

          <Section header="Colors" style={{ justifyContent: 'space-between' }} column>
            <MDBSwitch thumbColor="warning" trackColor="warning" />
            <MDBSwitch thumbColor="success" trackColor="success" />
            <MDBSwitch thumbColor="info" trackColor="info" />
          </Section>
        </View>
      </ScrollView>
    );
  }
}
