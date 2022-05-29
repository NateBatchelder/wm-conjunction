import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Dropdown from '../../../components/Dropdown';
import Section from '../../../../docs/components/Section';

export default class DropdownsPage extends Component {
  static navigationOptions = {
    title: 'Dropdowns'
  };

  render() {
    return (
      <ScrollView>
        <Section header="Basic" column>
          <Dropdown
            arr={['Test1', 'Test2', 'Test3', 'Test4', 'Test5', 'Test6', 'Test7']}
            title="Dropdown"
            btnColor="danger"
            dropdownColor="primary"
            dropdownTextColor="black"
          ></Dropdown>
        </Section>
      </ScrollView>
    );
  }
}
