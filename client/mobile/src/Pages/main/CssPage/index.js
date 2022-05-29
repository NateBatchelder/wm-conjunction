import React from 'react';
import { Text, View } from 'react-native';
import { basicColors } from '../../../utils/test';
import MDBButton from '../../../components/Button/Button';

export default class CSSPage extends React.Component {
  static navigationOptions = {
    title: 'CSS',
    headerStyle: {
      backgroundColor: basicColors[3].color
    },
    headerTintColor: '#fff'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ marginTop: 30 }}>
        <MDBButton title="Masks" color="light" textColor="#000" onPressed={() => navigate('Masks')}></MDBButton>
      </View>
    );
  }
}
