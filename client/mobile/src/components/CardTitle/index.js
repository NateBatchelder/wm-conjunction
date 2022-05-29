import React, { Fragment } from 'react';
import { Text, StyleSheet } from 'react-native';

const MDBCardTitle = ({ children, style, ...attributes }) => {
  return (
    <Text style={StyleSheet.flatten([styles.cardTitle, style])} {...attributes}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 20,
    color: '#212529',
    marginBottom: 12
  }
});

export default MDBCardTitle;
