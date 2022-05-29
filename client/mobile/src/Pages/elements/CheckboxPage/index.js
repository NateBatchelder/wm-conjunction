import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Section from '../../../../docs/components/Section';
import MDBCheckbox, { SelectedItemsToArray } from '../../../components/Checkbox';

export default class CheckboxPage extends Component {
  static navigationOptions = {
    title: 'Checkbox'
  };
  selectedArrayOBJ = new SelectedItemsToArray();

  render() {
    return (
      <ScrollView>
        <View>
          <Section header="Basic">
            <MDBCheckbox keyValue={1} selectedArrayObject={this.selectedArrayOBJ} />
            <MDBCheckbox keyValue={2} selectedArrayObject={this.selectedArrayOBJ} />
          </Section>

          <Section header="Colorful examples">
            <MDBCheckbox keyValue={11} color="danger" selectedArrayObject={this.selectedArrayOBJ} />
            <MDBCheckbox keyValue={14} color="success" selectedArrayObject={this.selectedArrayOBJ} />
            <MDBCheckbox keyValue={15} color="secondary" selectedArrayObject={this.selectedArrayOBJ} />
            <MDBCheckbox keyValue={17} color="dark" selectedArrayObject={this.selectedArrayOBJ} />
          </Section>

          <Section header="Toggle example">
            <MDBCheckbox
              keyValue={7}
              label="Click to toggle"
              labelColor="black"
              color="blue"
              selectedArrayObject={this.selectedArrayOBJ}
            />
          </Section>
          <Section header="Rounded examples">
            <MDBCheckbox keyValue={117} selectedArrayObject={this.selectedArrayOBJ} rounded />
            <MDBCheckbox rounded keyValue={152} color="secondary" selectedArrayObject={this.selectedArrayOBJ} />
            <MDBCheckbox rounded keyValue={172} color="info" selectedArrayObject={this.selectedArrayOBJ} />
          </Section>
          <Section header="With difrrent icons">
            <MDBCheckbox keyValue={1171} selectedArrayObject={this.selectedArrayOBJ} icon="home" iconColor="black" />
            <MDBCheckbox
              keyValue={1521}
              color="purple"
              selectedArrayObject={this.selectedArrayOBJ}
              icon={['fab', 'mdb']}
            />
            <MDBCheckbox keyValue={987} color="brown" selectedArrayObject={this.selectedArrayOBJ} icon="arrow-up" />
          </Section>
          <Section header="With difrrent sizes">
            <MDBCheckbox keyValue={678} color="pink" selectedArrayObject={this.selectedArrayOBJ} size={15} />
            <MDBCheckbox keyValue={364} color="orange" selectedArrayObject={this.selectedArrayOBJ} size={25} />
            <MDBCheckbox keyValue={467} color="green" selectedArrayObject={this.selectedArrayOBJ} size={35} />
          </Section>
        </View>
      </ScrollView>
    );
  }
}
