import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { basicColors } from '../../../utils/test';

const MDBErrorMessage = props => {
  const { errorMessage, errorStyle } = props;

  return (
    <View>
      {!!errorMessage && (
        <Text
          style={StyleSheet.flatten([
            styles.error,
            {
              color: basicColors[3].color
            },
            !!errorStyle ? errorStyle : null
          ])}
        >
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

const styles = {
  error: {
    margin: 5,
    fontSize: 12,
    color: 'red'
  }
};

export default MDBErrorMessage;
