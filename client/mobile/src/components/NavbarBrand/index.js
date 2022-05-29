import React, { Fragment } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MDBNavbarBrand = props => {
  return (
    <TouchableOpacity style={styles.brand}>
      <Text style={styles.brandText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  brand: {
    marginRight: 16
  },
  brandText: {
    color: '#fff',
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20
  }
});

export default MDBNavbarBrand;
