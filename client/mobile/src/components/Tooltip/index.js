import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Tooltips from 'react-native-tooltips';
import Button from '../Button/Button';

export default class MDBTooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      reference: undefined
    };
  }

  _onPress(parent, target) {
    this.setState({
      visible: !this.state.visible,
      parent: parent,
      target: target
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          ref={parent => {
            this.parent = parent;
          }}
          style={styles.container1}
        >
          <Button
            title={this.props.btnTitle}
            ref={target => {
              this.target1 = target;
            }}
            onPressed={() => {
              this._onPress(this.parent, this.target1);
            }}
          ></Button>
        </View>
        <Tooltips
          text="Long Press Description"
          visible={this.state.visible}
          parent={this.state.parent}
          target={this.state.target}
          autoHide={true}
          clickToHide={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
