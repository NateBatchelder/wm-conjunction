import React from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet, Platform } from 'react-native';
import Icon from '../Icon';
import { screenWidth } from '../../utils/helpers';
import * as Shadows from '../../utils/shadows';
import { basicColors } from '../../utils/test';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../Button/Button';

export default class MDBDropdown extends React.Component {
  state = {
    open: false
  };

  openMenu = () => {
    this.setState(prev => ({ open: !prev.open }));
  };

  moveAndCloseMenu = e => {
    this.props.navigator ? this.props.navigator.navigate(e) : null;

    this.setState({ open: false });
  };

  render() {
    const {
      arr,
      icon,
      iconDropdown,
      iconColor,
      title,
      btnColor,
      dropdownColor,
      dropdownTextColor,
      dropdownBorder
    } = this.props;

    const elements = arr.map((e, i) => {
      return (
        <View key={i}>
          <TouchableOpacity
            onPress={(el = e) => this.moveAndCloseMenu(el)}
            style={StyleSheet.flatten([
              {
                padding: 15,
                textAlign: 'left',
                margin: 0,
                backgroundColor: dropdownColor ? dropdownColor : basicColors[0].color,
                borderWidth: 0
              }
            ])}
          >
            <Text
              style={{
                color: dropdownTextColor ? dropdownTextColor : '#fff'
              }}
            >
              {e}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });

    const elements1 = arr.map((e, i) => {
      return (
        <View
          key={i}
          style={{
            postion: 'absolute',
            top: 0,
            right: 0,
            zIndex: 10
          }}
        >
          <TouchableOpacity
            onPress={(el = e) => this.moveAndCloseMenu(el)}
            style={StyleSheet.flatten([
              {
                padding: 15,
                textAlign: 'left',
                margin: 0,
                backgroundColor: dropdownColor ? dropdownColor : basicColors[0].color,
                borderWidth: 0
              }
            ])}
          >
            <Text
              style={{
                color: dropdownTextColor ? dropdownTextColor : '#fff'
              }}
            >
              {e}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
    return (
      <>
        {icon ? (
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <TouchableWithoutFeedback onPress={this.openMenu}>
              <Icon icon={iconDropdown} color={iconColor} style={{ marginRight: 15 }} />
            </TouchableWithoutFeedback>

            {this.state.open && (
              <View style={{ postion: 'absolute', top: Platform.OS === 'ios' ? 166 : 190, right: 0 }}>{elements}</View>
            )}
          </View>
        ) : (
          <View style={{ position: 'relative' }}>
            <Button title={title} color={btnColor} onPressed={this.openMenu}></Button>
            {this.state.open && elements1}
          </View>
        )}
      </>
    );
  }
}
