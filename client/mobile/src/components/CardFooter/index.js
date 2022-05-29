import React, { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';

const MDBCardFooter = props => {
  const { align } = props;

  const computedStyles = {
    textAlign: align === 'right' ? align : 'left'
  };

  return <View style={{ ...styles.cardFooter, ...computedStyles }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  cardFooter: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10
  }
});

export default MDBCardFooter;
