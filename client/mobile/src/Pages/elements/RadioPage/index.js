import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Section from '../../../../docs/components/Section';
import MDBRadio from '../../../components/RadioButton';
export default class RadioPage extends Component {
  static navigationOptions = {
    title: 'Radio'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View>
          <Section header="Basic" column>
            <MDBRadio
              leftRadio
              options={[{ text: 'Option 1', key: '1' }, { text: 'Option 2', key: '2' }, { text: 'Option 3', key: '3' }]}
              require
            />
          </Section>
          <Section header="Multiple" column>
            <MDBRadio leftRadio options={[{ text: 'Option 1', key: '1' }]} />
            <MDBRadio leftRadio options={[{ text: 'Option 2', key: '2' }]} />
            <MDBRadio leftRadio options={[{ text: 'Option 3', key: '3' }]} />
          </Section>
          <Section header="Right" column>
            <MDBRadio
              options={[{ text: 'Option 1', key: '1' }, { text: 'Option 2', key: '2' }, { text: 'Option 3', key: '3' }]}
              require
            />
          </Section>
          <Section header="Colors" column>
            <MDBRadio color="danger" leftRadio options={[{ text: 'Option 1', key: '1' }]} />
            <MDBRadio color="brown" leftRadio options={[{ text: 'Option 2', key: '2' }]} />
            <MDBRadio color="pink" leftRadio options={[{ text: 'Option 3', key: '3' }]} />
          </Section>
        </View>
      </ScrollView>
    );
  }
}
