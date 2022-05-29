import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import MDBCarousel from '../../../components/Carousel';
import Section from '../../../../docs/components/Section';
export default class CarouselPage extends Component {
  static navigationOptions = {
    title: 'Carousel'
  };

  render() {
    const img = [
      'https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg',
      'https://mdbootstrap.com/img/Photos/Slides/img%20(36).jpg',
      'https://mdbootstrap.com/img/Photos/Slides/img%20(37).jpg'
    ];

    return (
      <ScrollView>
        <Section header="Basic">
          <MDBCarousel images={img} />
        </Section>
        <Section header="With FullBackground">
          <MDBCarousel images={img} fullBackground />
        </Section>
      </ScrollView>
    );
  }
}
