import React from 'react';
import { Text, View } from 'react-native';
import { basicColors } from '../../../utils/test';
import MDBButton from '../../../components/Button/Button';

export default class ComponentsPage extends React.Component {
  static navigationOptions = {
    title: 'Components',
    headerStyle: {
      backgroundColor: basicColors[0].color
    },
    headerTintColor: '#fff'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ marginTop: 30 }}>
        <MDBButton title="Badges" color="light" textColor="#000" onPressed={() => navigate('Badges')}></MDBButton>
        <MDBButton title="Buttons" color="light" textColor="#000" onPressed={() => navigate('Buttons')}></MDBButton>
        <MDBButton
          title="Button Groups"
          color="light"
          textColor="#000"
          onPressed={() => navigate('ButtonsGroup')}
        ></MDBButton>
        <MDBButton title="Cards" color="light" textColor="#000" onPressed={() => navigate('Cards')}></MDBButton>
        <MDBButton title="Panels" color="light" textColor="#000" onPressed={() => navigate('Panels')}></MDBButton>
      </View>
    );
  }
}
