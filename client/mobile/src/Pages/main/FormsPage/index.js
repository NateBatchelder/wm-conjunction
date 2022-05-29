import React from 'react';
import { Text, View } from 'react-native';
import { basicColors } from '../../../utils/test';
import MDBButton from '../../../components/Button/Button';

export default class FormsPage extends React.Component {
  static navigationOptions = {
    title: 'Forms',
    headerStyle: {
      backgroundColor: basicColors[0].color
    },
    headerTintColor: '#fff'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          marginTop: 30
        }}
      >
        <MDBButton title="Checkbox" color="light" textColor="#000" onPressed={() => navigate('Checkbox')} />
        <MDBButton title="Input" color="light" textColor="#000" onPressed={() => navigate('Input')} />
        <MDBButton title="Radio" color="light" textColor="#000" onPressed={() => navigate('Radio')} />
        <MDBButton title="Switch" color="light" textColor="#000" onPressed={() => navigate('Switch')} />
      </View>
    );
  }
}
