import React, { Component } from 'react';
import { Text } from 'react-native';
import MDBFooterCopyright from '../../../components/FooterCopyright';
import Section from '../../../../docs/components/Section';
import { basicColors } from '../../../utils/test';

export default class FooterPage extends Component {
  static navigationOptions = {
    title: 'Footer'
  };

  render() {
    return (
      <>
        <Section header="Basic">
          <MDBFooterCopyright color="primary" textColor="#fff">
            &copy; MDBootstrap 2019
          </MDBFooterCopyright>
        </Section>
        <Section header="Colorfully">
          <MDBFooterCopyright color="secondary" textColor="light">
            &copy; MDBootstrap 2019
          </MDBFooterCopyright>
          <MDBFooterCopyright color="red" textColor="light">
            &copy; MDBootstrap 2019
          </MDBFooterCopyright>
          <MDBFooterCopyright color="rgb(20,145,55)" textColor="#fff">
            &copy; MDBootstrap 2019
          </MDBFooterCopyright>
          <MDBFooterCopyright color="dark" textColor="#fff">
            &copy; MDBootstrap 2019
          </MDBFooterCopyright>
          <MDBFooterCopyright color="info" textColor="rgb(255,255,255)">
            &copy; MDBootstrap 2019
          </MDBFooterCopyright>
          <MDBFooterCopyright color="light" textColor="dark">
            &copy; MDBootstrap 2019
          </MDBFooterCopyright>
        </Section>
      </>
    );
  }
}
