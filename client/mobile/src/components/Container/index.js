import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MDBContainer = props => {
  const { style } = props;

  return <View style={{ ...styles.container, ...style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16
  }
});

export default MDBContainer;
