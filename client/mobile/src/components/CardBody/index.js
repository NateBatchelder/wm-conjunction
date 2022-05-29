import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MDBCardBody = props => {
  return <View style={styles.cardBody}>{props.children}</View>;
};

const styles = StyleSheet.create({
  cardBody: {
    padding: 18
  }
});

export default MDBCardBody;
