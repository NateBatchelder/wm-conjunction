import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scs } from '../../utils/helpers';
import { basicColors } from '../../utils/test';

const MDBFooterCopyright = ({ children, style, color, textColor, ...attributes }) => {
  return (
    <View
      style={StyleSheet.flatten([
        { ...styles.copyright },
        style,
        scs(color, basicColors, true, ['backgroundColor', 'borderColor'])
      ])}
      {...attributes}
    >
      <Text
        style={StyleSheet.flatten([
          styles.copyrightText,
          scs(textColor ? textColor : 'light', basicColors, true, ['color', 'borderColor'])
        ])}
      >
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  copyright: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
    padding: 16,
    width: '100%'
  },
  copyrightText: {
    color: 'rgba(255, 255, 255, .6)',
    textAlign: 'center'
  }
});

export default MDBFooterCopyright;
