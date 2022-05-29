import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { basicColors } from '../../utils/test';
import { scs } from '../../utils/helpers';

export class SelectedItemsToArray {
  selectedItemsArray = [];

  pushItem = option => {
    this.selectedItemsArray.push(option);
  };

  getArray = () => {
    return this.selectedItemsArray;
  };
}

export default class MDBCheckbox extends Component {
  state = { checked: null };

  componentDidMount() {
    const { checked, selectedArrayObject, keyValue, label, value } = this.props;

    if (checked) {
      this.setState({ checked: true }, () => {
        selectedArrayObject.pushItem({
          key: keyValue,
          label: label,
          value: value
        });
      });
    } else {
      this.setState({ checked: false });
    }
  }

  getSelectedItems = () => {
    const { selectedArrayObject } = this.props;

    if (selectedArrayObject.getArray().length == 0) {
    } else {
      this.setState(() => {
        return {
          selectedItems: selectedArrayObject
            .getArray()
            .map(item => item.value)
            .join()
        };
      });
    }
  };

  toggleState = (key, label, value) => {
    const { selectedArrayObject } = this.props;
    const { checked } = this.state;

    this.setState({ checked: !checked }, () => {
      if (checked) {
        selectedArrayObject.pushItem({ key: key, label: label, value: value });
      } else {
        selectedArrayObject.getArray().splice(selectedArrayObject.getArray().findIndex(x => x.key == key), 1);
      }
    });
  };

  render() {
    const { keyValue, label, labelColor, value, size, color, rounded, icon, iconColor, ...attributes } = this.props;

    return (
      <View style={styles.MainContainer}>
        <TouchableHighlight
          {...attributes}
          onPress={this.toggleState}
          underlayColor="transparent"
          style={{ marginVertical: 10 }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={StyleSheet.flatten([
                {
                  width: size,
                  height: size,
                  borderRadius: rounded ? 100 : 0,
                  padding: 3
                },
                scs(color, basicColors, true, ['backgroundColor'])
              ])}
            >
              {this.state.checked ? (
                <View style={styles.checkedView}>
                  <Icon icon={icon} style={styles.checkBoxImage} color={iconColor}></Icon>
                </View>
              ) : (
                <View style={[styles.uncheckedView, { borderRadius: rounded ? 100 : 0 }]} />
              )}
            </View>

            <Text style={StyleSheet.flatten([styles.checkBoxLabelText, scs(labelColor, basicColors, true, ['color'])])}>
              {label}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  selectedItemsButton: {
    marginTop: 25,
    padding: 8,
    backgroundColor: '#2962FF',
    alignSelf: 'stretch'
  },

  selectedItemsButton_Text: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'stretch',
    fontSize: 18
  },

  checkedView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  checkBoxImage: {
    height: '80%',
    width: '80%',
    tintColor: 'white',
    resizeMode: 'contain'
  },

  uncheckedView: {
    flex: 1,
    backgroundColor: 'white'
  },

  checkBoxLabelText: {
    fontSize: 16,
    paddingLeft: 10
  }
});

MDBCheckbox.propTypes = {
  size: PropTypes.number,
  keyValue: PropTypes.number.isRequired,
  selectedArrayObject: PropTypes.object.isRequired,
  color: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  iconColor: PropTypes.string
};

MDBCheckbox.defaultProps = {
  size: 25,
  color: basicColors[0].color,
  labelColor: 'transparent',
  label: ' ',
  checked: false,
  value: 'default',
  icon: 'check',
  iconColor: '#fff'
};
