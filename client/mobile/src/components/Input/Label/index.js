/*

* These components ( Input, Label, Underline ) were created by Rubén Sospedra https://github.com/sospedra.
* Based on https://github.com/sospedra/reinput and modified by MDB Team.
* All used software is on MIT License.

*/

import React, { Component } from 'react';
import { Text, Animated } from 'react-native';
import { basicColors } from '../../../utils/test';

export default class MDBLabel extends Component {
  static defaultProps = {
    labelActiveScale: 0.8,
    labelActiveTop: -15,
    labelColor: 'grey',
    labelDuration: 200
  };

  state = {
    animatedScale: new Animated.Value(this.props.hasValue || this.props.focused ? this.props.labelActiveScale : 1),
    animatedTranslate: new Animated.Value(this.props.hasValue || this.props.focused ? this.props.labelActiveTop : 0)
  };
  componentDidUpdate(prevProps) {
    const { labelDuration, labelActiveScale, labelActiveTop, hasValue, focused } = this.props;
    const { animatedScale, animatedTranslate } = this.state;
    const wasActive = prevProps.hasValue || prevProps.focused;
    const isActive = hasValue || focused;

    if (wasActive === isActive) {
      return;
    }

    Animated.timing(animatedScale, {
      duration: labelDuration,
      toValue: isActive ? labelActiveScale : 1,
      useNativeDriver: true
    }).start();

    Animated.timing(animatedTranslate, {
      duration: labelDuration,
      toValue: isActive ? labelActiveTop : 0,
      useNativeDriver: true
    }).start();
  }

  checkLabelColor = () => {
    const { error, focused, errorColor, labelActiveColor, activeColor } = this.props;

    if (error) {
      return errorColor;
    } else if (focused) {
      return labelActiveColor || activeColor || basicColors[0].color;
    } else {
      return 'grey';
    }
  };

  render() {
    const { animatedScale, animatedTranslate } = this.state;
    const { label } = this.props;
    const animateInput = {
      transform: [{ translateY: animatedTranslate }, { scaleY: animatedScale }]
    };

    return (
      <Animated.View numberOfLines={1} style={animateInput}>
        <Text style={{ paddingLeft: 1, top: 20, color: this.checkLabelColor() }}>{label}</Text>
      </Animated.View>
    );
  }
}
