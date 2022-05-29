/*

* These components ( Input, Label, Underline ) were created by Rubén Sospedra https://github.com/sospedra.
* Based on https://github.com/sospedra/reinput and modified by MDB Team.
* All used software is on MIT License.

*/

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Label from '../Label/index';
import { pickLabelProps } from '../Label/props';
import Underline from '../Underline/index';
import { pickUnderlineProps } from '../Underline/props';
import { defaultProps, propTypes, pickTextInputProps } from './props';
import * as styles from './styles';
import ErrorMessage from '../ErrorMessage/index';
export default class MDBInput extends Component {
  static propTypes = { ...propTypes, ...TextInput.propTypes };
  static defaultProps = defaultProps;

  state = {
    focused: false,
    height: this.props.fontSize * styles.SCALE_FACTOR,
    rootStyle: styles.row,
    value: this.props.value != null ? this.props.value : this.props.defaultValue
  };

  handleFocus = (...args) => {
    this.setState({ focused: true });
    this.props.onFocus(...args);
  };

  handleBlur = (...args) => {
    this.setState({ focused: false });
    this.props.onBlur(...args);
  };

  getValue = () => {
    return this.isValueLocked() ? this.props.value : this.state.value;
  };
  setValue = (value, ...args) => {
    if (!this.isValueLocked()) {
      this.setState({ value });
    }
    this.props.onChangeText(value, ...args);
  };
  handleContentSizeChange = event => {
    const { onContentSizeChange, fontSize } = this.props;
    const { height } = event.nativeEvent.contentSize;

    this.setState({
      height: Math.max(fontSize * styles.SCALE_FACTOR, Math.ceil(height))
    });

    onContentSizeChange(event);
  };

  isValueLocked = () => this.props.value !== undefined;

  hasValueWithContent = value => {
    return typeof value === 'string' && value.length > 0;
  };

  register = ref => {
    this.ref = ref;
    this.props.register && this.props.register(ref);
  };

  focus = () => this.ref && this.ref.focus();

  render() {
    const { focused } = this.state;
    const value = this.getValue();
    const hasValue = this.hasValueWithContent(value);

    return (
      <View onLayout={this.props.onLayout} style={[this.state.rootStyle, this.props.style]}>
        <View style={styles.container(this.props)}>
          <View
            accessible={this.props.accessible}
            accessibilityLabel={this.props.accessibilityLabel || this.props.label}
            style={{ backgroundColor: this.props.backgroundColor }}
          >
            <Label {...pickLabelProps({ ...this.props, hasValue, focused })} />
            <TextInput
              {...pickTextInputProps(this.props)}
              onBlur={this.handleBlur}
              onChangeText={this.setValue}
              onContentSizeChange={this.handleContentSizeChange}
              onFocus={this.handleFocus}
              placeholder={undefined}
              ref={this.register}
              style={styles.input(this.props, this.state.height, hasValue)}
              underlineColorAndroid="transparent"
              value={value}
            />
          </View>
          <Underline {...pickUnderlineProps({ ...this.props, focused })} />
          <ErrorMessage errorMessage={this.props.errorMessage} errorStyle={this.props.errorStyle}></ErrorMessage>
        </View>
      </View>
    );
  }
}
