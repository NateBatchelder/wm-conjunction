import React, { Fragment } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MDBCardLink = props => {
  return (
    <TouchableOpacity style={styles.cardLink}>
      <Text style={styles.cardLinkText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardLink: {
    marginRight: 12
  },
  cardLinkText: {
    color: '#000'
  }
});

export default MDBCardLink;
