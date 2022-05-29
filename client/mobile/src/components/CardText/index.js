import React, { Fragment } from 'react';
import { Text, StyleSheet } from 'react-native';

const MDBCardText = props => {
  return <Text style={styles.cardText}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  cardText: {
    fontSize: 14.4,
    color: '#747373',
    marginBottom: 16
  }
});

export default MDBCardText;
