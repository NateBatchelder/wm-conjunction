import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { screenWidth, dynamicStyles } from '../../utils/helpers';

export default class MDBImage extends Component {
  state = {
    arr: []
  };

  componentDidMount() {
    this.setState(prev => ({
      arr: [...prev.arr, this.props.styleName ? this.props.styleName : 'featured']
    }));
  }

  render() {
    const { style, styleName, ...attributies } = this.props;

    return (
      <View>
        <Image style={[dynamicStyles(this.state.arr, imgStyles), style]} styleName={styleName} {...attributies}></Image>
      </View>
    );
  }
}

const imgStyles = StyleSheet.create({
  featured: {
    width: (365 / 375) * screenWidth,
    height: (345 / 375) * screenWidth
  },
  cardTop: {
    width: (365 / 375) * screenWidth - 8,
    height: (345 / 375) * screenWidth - 8
  },
  small: {
    width: 65,
    height: 65
  },
  large: {
    width: screenWidth,
    height: (280 / 375) * screenWidth
  },
  largePortrait: {
    width: screenWidth,
    height: (280 / 375) * screenWidth
  },
  largeBanner: {
    width: screenWidth,
    height: (200 / 375) * screenWidth
  },
  largeSquare: {
    width: screenWidth,
    height: window.height
  },
  largeWide: {
    width: screenWidth,
    height: (238 / 375) * screenWidth
  },
  largeUltraWide: {
    width: screenWidth,
    height: (130 / 375) * screenWidth
  },
  mediumAvatar: {
    borderRadius: 72.5
  },
  medium: {
    width: 145,
    height: 92
  },
  mediumWide: {
    width: 180 / 375,
    height: screenWidth * 85
  },
  mediumPortrait: {
    width: 209 / 375,
    height: 139
  },
  smallAvatar: {
    width: 25,
    height: 25,
    borderRadius: 100
  }
});
