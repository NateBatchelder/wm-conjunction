import React, { Component } from 'react';
import { Text } from 'react-native';
import MDBCollapse from '../../../components/Collapse';
import Section from '../../../../docs/components/Section';

export default class CollapsePage extends Component {
  static navigationOptions = {
    title: 'Collapse'
  };

  render() {
    return (
      <Section header="Basic">
        <MDBCollapse btnTitle="Collapse">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sed perspiciatis aspernatur, exercitationem recusandae autem harum quae asperiores dolore, corrupti
            ullam nisi suscipit rem ipsum eaque! Esse error rerum ea obcaecati consectetur ex maiores corrupti amet
            laudantium ad fuga quas at, fugit vel minus voluptates praesentium cupiditate dolorem necessitatibus
            molestiae asperiores.
          </Text>
        </MDBCollapse>
      </Section>
    );
  }
}
