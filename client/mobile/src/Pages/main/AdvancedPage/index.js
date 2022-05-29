import React from 'react';
import { View } from 'react-native';
import { basicColors } from '../../../utils/test';
import MDBButton from '../../../components/Button/Button';

export default class AdvancedPage extends React.Component {
  static navigationOptions = {
    title: 'Advanced',
    headerStyle: {
      backgroundColor: basicColors[5].color
    },
    headerTintColor: '#fff'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ marginTop: 30 }}>
        <MDBButton title="Carousel" color="light" textColor="#000" onPressed={() => navigate('Carousel')}></MDBButton>
        <MDBButton title="Collapse" color="light" textColor="#000" onPressed={() => navigate('Collapse')}></MDBButton>
        <MDBButton title="Tooltip" color="light" textColor="#000" onPressed={() => navigate('Tooltip')}></MDBButton>
      </View>
    );
  }
}
