import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Colors from '../../utils/colors';

const MDBFooter = props => {
  const { color } = props;

  const computedStyles = {
    backgroundColor: color ? Colors[color] : Colors['primary']
  };

  return <View style={{ ...styles.footer, ...computedStyles }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  footer: {
    paddingTop: 15,
    marginTop: 10
  }
});

export default MDBFooter;
