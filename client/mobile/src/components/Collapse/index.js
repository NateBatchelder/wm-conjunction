import React, { Component } from 'react';
import { Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
import Button from '../Button/Button';

export default class MDBCollapse extends Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <>
        <Button title={this.props.btnTitle} onPressed={this.changeLayout}></Button>
        <View
          style={{
            height: this.state.expanded ? null : 0,
            overflow: 'hidden',
            padding: 10,
            paddingTop: 0,
            paddingBottom: 0
          }}
        >
          <Text>{this.props.children}</Text>
        </View>
      </>
    );
  }
}
