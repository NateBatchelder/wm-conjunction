import React from 'react';
import { View } from 'react-native';
import { basicColors } from '../../../utils/test';
import MDBButton from '../../../components/Button/Button';

export default class ModalsPage extends React.Component {
  static navigationOptions = {
    title: 'Navigation',
    headerStyle: {
      backgroundColor: basicColors[3].color
    },
    headerTintColor: '#fff'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ marginTop: 30 }}>
        <MDBButton title="Footers" color="light" textColor="#000" onPressed={() => navigate('Footers')}></MDBButton>
        <MDBButton title="Navbars" color="light" textColor="#000" onPressed={() => navigate('Navbars')}></MDBButton>
      </View>
    );
  }
}
