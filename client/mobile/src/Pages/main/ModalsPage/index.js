import React from 'react';
import { Text, View } from 'react-native';
import { basicColors } from '../../../utils/test';
import MDBButton from '../../../components/Button/Button';

export default class ModalsPage extends React.Component {
  static navigationOptions = {
    title: 'Modals',
    headerStyle: {
      backgroundColor: basicColors[5].color
    },
    headerTintColor: '#fff'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ marginTop: 30 }}>
        <MDBButton title="Modals" color="light" textColor="#000" onPressed={() => navigate('Modal')}></MDBButton>
      </View>
    );
  }
}
