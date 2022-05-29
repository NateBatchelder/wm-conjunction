import React, { Fragment } from 'react';
import { Image, StyleSheet } from 'react-native';

const MDBCardImgTop = props => {
  return <Image source={{ uri: props.src }}>{props.children}</Image>;
};

const styles = StyleSheet.create({
  // cardImgTop: {
  //   flex: 1
  // }
});

export default MDBCardImgTop;
