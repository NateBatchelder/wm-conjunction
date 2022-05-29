import React, { Component } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import * as Colors from '../../utils/colors';
import * as LightenColors from '../../utils/lightenColors';
import PropTypes from 'prop-types';

export default class MDBSwitch extends Component {
  state = {
    value: false
  };

  componentDidMount() {
    this.setState({ value: this.props.checked });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.checked !== prevProps.checked) {
      this.setState({ value: this.props.checked });
    }
  }

  handleChange = value => this.setState({ value });

  render() {
    const { checked, labelLeft, labelRight, thumbColor, trackColor, ...attributes } = this.props;
    const { value } = this.state;
    const styleTh = thumbColor ? Colors[thumbColor] || thumbColor : Colors['defaultColor'];
    const styleTrack = trackColor != null ? LightenColors[trackColor] || trackColor : LightenColors['defaultColor'];

    return (
      <View style={styles.container} {...attributes}>
        <Text>{labelLeft}</Text>
        <Switch
          value={value}
          onValueChange={this.handleChange}
          thumbColor={value ? styleTh : null}
          trackColor={{
            true: value ? styleTrack : null,
            false: null
          }}
        />
        <Text>{labelRight}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  }
});

MDBSwitch.propTypes = {
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string
};

MDBSwitch.defaultProps = {
  labelLeft: 'Off',
  labelRight: 'On'
};
