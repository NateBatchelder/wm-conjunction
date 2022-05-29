import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Section from '../../../../docs/components/Section';
import MDBTooltip from '../../../components/Tooltip';

export default class TooltipPage extends Component {
  static navigationOptions = {
    title: 'Tooltips'
  };

  render() {
    return (
      <ScrollView>
        <Section header="Basic" column center>
          <MDBTooltip text="Basic" btnTitle="Basic" direction="top">
            <Text> Basic</Text>
          </MDBTooltip>
        </Section>
      </ScrollView>
    );
  }
}
