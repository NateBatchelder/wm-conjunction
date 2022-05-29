/*

* These components ( Input, Label, Underline ) were created by Rubén Sospedra https://github.com/sospedra.
* Based on https://github.com/sospedra/reinput and modified by MDB Team.
* All used software is on MIT License.

*/

import React from 'react';
import { View, Animated } from 'react-native';

import { defaultProps, propTypes } from './props';
import { basicColors } from '../../../utils/test';

export default class MDBUnderline extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    animatedOpacity: new Animated.Value(this.props.error ? 1 : 0),
    animatedScaleX: new Animated.Value(this.props.error ? 1 : 0.01)
  };

  componentDidUpdate(prevProps) {
    const { error, focused } = this.props;

    if (prevProps.focused !== focused || prevProps.error !== error) {
      focused || error ? this.animateActive() : this.animateDefault();
    }
  }

  animateActive() {
    Animated.parallel([
      Animated.timing(this.state.animatedOpacity, {
        duration: 0,
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.timing(this.state.animatedScaleX, {
        duration: this.props.underlineDuration,
        toValue: 1,
        useNativeDriver: true
      })
    ]).start();
  }

  animateDefault() {
    Animated.sequence([
      Animated.timing(this.state.animatedScaleX, {
        duration: this.props.underlineDuration,
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.timing(this.state.animatedOpacity, {
        duration: 0,
        toValue: 0,
        useNativeDriver: true
      })
    ]).start();
  }

  render() {
    const {
      error,
      errorColor,
      underlineColor,
      underlineActiveColor,
      activeColor,
      underlineActiveHeight,
      underlineHeight,
      animatedOpacity,
      focused
    } = this.props;

    const underLine = {
      borderColor: (error && errorColor) || underlineActiveColor || activeColor || basicColors[0].color,
      borderTopWidth: underlineActiveHeight,
      marginTop: -underlineHeight,
      opacity: animatedOpacity
    };

    return (
      <View
        style={{
          borderColor: underlineColor,
          borderTopWidth: underlineHeight
        }}
      >
        <Animated.View style={focused ? underLine : null} />
      </View>
    );
  }
}
