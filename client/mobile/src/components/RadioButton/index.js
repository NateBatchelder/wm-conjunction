import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { scs } from '../../utils/helpers';
import { basicColors } from '../../utils/test';
import PropTypes from 'prop-types';

export default class MDBRadioButton extends Component {
  state = {
    value: null
  };

  setActive = key => {
    if (this.state.value === key) !this.props.require && this.setState({ value: null });
    else this.setState({ value: key });
  };

  render() {
    const { options, leftRadio, color, ...attributes } = this.props;

    const renderButtons = options.map(item => {
      let isLeft = leftRadio;

      isLeft
        ? (isLeft = (
            <View key={item.key} style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.circle,
                  this.state.value === item.key ? scs(color, basicColors, true, ['borderColor']) : null
                ]}
                onPress={() => this.setActive(item.key)}
                {...attributes}
              >
                {this.state.value === item.key && (
                  <View
                    style={[
                      styles.checkedCircle,
                      this.state.value === item.key
                        ? scs(color, basicColors, true, ['borderColor', 'backgroundColor'])
                        : null
                    ]}
                  />
                )}
              </TouchableOpacity>
              <Text style={{ marginLeft: 5 }}>{item.text}</Text>
            </View>
          ))
        : (isLeft = (
            <View key={item.key} style={styles.buttonContainer}>
              <Text style={{ marginRight: 5 }}>{item.text}</Text>
              <TouchableOpacity
                style={[
                  styles.circle,
                  this.state.value === item.key ? scs(color, basicColors, true, ['borderColor']) : null
                ]}
                onPress={() => this.setActive(item.key)}
                {...attributes}
              >
                {this.state.value === item.key && (
                  <View
                    style={[
                      styles.checkedCircle,
                      this.state.value === item.key
                        ? scs(color, basicColors, true, ['borderColor', 'backgroundColor'])
                        : null
                    ]}
                  />
                )}
              </TouchableOpacity>
            </View>
          ));

      return isLeft;
    });

    return renderButtons;
  }
}
const styles = {
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkedCircle: {
    width: 10,
    height: 10,
    borderRadius: 7,
    backgroundColor: '#794F9B',
    borderWidth: 2
  },
  borderDefault: {
    borderColor: basicColors[0].color
  },
  bgDefault: {
    backgroundColor: basicColors[0].color
  }
};

MDBRadioButton.propTypes = {
  color: PropTypes.string,
  leftRadio: PropTypes.bool,
  options: PropTypes.array,
  require: PropTypes.bool
};

MDBRadioButton.defaultProps = {
  color: basicColors[0].color,
  leftRadio: false,
  options: [
    {
      key: 'RN',
      text: 'MDB RN'
    }
  ],
  require: false
};
