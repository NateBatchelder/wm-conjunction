import React, { Component } from 'react';
import { Text } from 'react-native';
import MDBNavbar from '../../../components/Navbar';
import Section from '../../../../docs/components/Section';
import { Header } from 'react-navigation-stack';
import { ScrollView } from 'react-native-gesture-handler';

export default class NavbarPage extends Component {
  static navigationOptions = {
    headerBackground: (
      <MDBNavbar style={{ height: Header.HEIGHT }} icon={['fab', 'mdb']} iconColor="#fff" iconSize={24}></MDBNavbar>
    ),
    title: 'Navbar'
  };

  render() {
    return (
      <>
        <ScrollView>
          <Section header="Basic">
            <MDBNavbar>Navbar</MDBNavbar>
          </Section>
          <Section header="Colors">
            <MDBNavbar color="danger">Navbar</MDBNavbar>
            <MDBNavbar color="success">Navbar</MDBNavbar>
          </Section>
          <Section header="With Icon">
            <MDBNavbar icon={['fab', 'mdb']} iconColor="#fff" iconSize={24}>
              Navbar
            </MDBNavbar>
          </Section>
          <Section header="Gradient">
            <MDBNavbar gradient="peach">Navbar</MDBNavbar>
            <MDBNavbar gradient="blue">Navbar</MDBNavbar>
            <MDBNavbar gradient="purple">Navbar</MDBNavbar>
            <MDBNavbar gradient="aqua">Navbar</MDBNavbar>
          </Section>
        </ScrollView>
      </>
    );
  }
}
