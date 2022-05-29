import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Section from '../../../../docs/components/Section';
import MDBMask from '../../../components/Mask';

export default class MasksPage extends Component {
  static navigationOptions = {
    title: 'Masks'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View>
          <Section header="Image with text" style={{ position: 'relative' }}>
            <MDBMask source={require('../../../../docs/img/img_(22).jpg')} style={{ marginBottom: 10 }}>
              <Text style={{ color: '#fff' }}> Text </Text>
            </MDBMask>
          </Section>
          <Section header="Overlays">
            <MDBMask
              style={{ marginBottom: 10 }}
              source={require('../../../../docs/img/img_(22).jpg')}
              overlay="dark"
              slight
            >
              <Text style={{ color: '#fff' }}> Dark slight </Text>
            </MDBMask>
            <MDBMask
              style={{ marginBottom: 10 }}
              source={require('../../../../docs/img/img_(22).jpg')}
              overlay="dark"
              light
            >
              <Text style={{ color: '#fff' }}> Dark light </Text>
            </MDBMask>
            <MDBMask style={{ marginBottom: 10 }} source={require('../../../../docs/img/img_(22).jpg')} overlay="dark">
              <Text style={{ color: '#fff' }}> Dark strong </Text>
            </MDBMask>
          </Section>
        </View>
      </ScrollView>
    );
  }
}
