import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scs } from '../../utils/helpers';
import { basicColors, gradients } from '../../utils/test';
import Icon from '../Icon';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

const MDBNavbar = props => {
  const {
    color,
    iconColor,
    icon,
    iconSize,
    children,
    gradient,
    isGradient,
    style,
    textColor,
    textFontSize,
    ...attributes
  } = props;

  const dynamicColor = scs(color, basicColors, true, ['backgroundColor']);
  const dynamicGradient = gradient !== '' ? scs(gradient, gradients, false) : '';

  const navbarContent = () => {
    return (
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        {icon ? (
          <>
            <Text style={StyleSheet.flatten([{ fontSize: textFontSize, color: textColor }])}>{children}</Text>
            <Icon color={iconColor} icon={icon} size={iconSize}></Icon>
          </>
        ) : (
          <Text style={StyleSheet.flatten([{ fontSize: textFontSize, color: textColor }])}>{children}</Text>
        )}
      </View>
    );
  };

  if (gradient !== '') {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={dynamicGradient}
        style={StyleSheet.flatten([styles.navbar, style])}
      >
        {navbarContent()}
      </LinearGradient>
    );
  } else {
    return <View style={StyleSheet.flatten([styles.navbar, dynamicColor, style])}>{navbarContent()}</View>;
  }
};

const styles = StyleSheet.create({
  navbar: {
    paddingTop: 12,
    paddingRight: 14,
    paddingBottom: 12,
    paddingLeft: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.16,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
    zIndex: 100
  }
});

MDBNavbar.propTypes = {
  color: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  children: PropTypes.node,
  gradient: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isGradient: PropTypes.bool,
  textColor: PropTypes.string,
  textFontSize: PropTypes.number
};

MDBNavbar.defaultProps = {
  color: 'primary',
  isGradient: false,
  textColor: '#fff',
  textFontSize: 18,
  gradient: ''
};

export default MDBNavbar;
