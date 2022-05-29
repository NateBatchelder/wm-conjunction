import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Image from '../../../components/Image';
import Icon from '../../../components/Icon';
import { basicColors } from '../../../utils/test';
import { FlatList } from 'react-navigation';
import FooterCopyright from '../../../components/FooterCopyright';
import Dropdown from '../../../components/Dropdown';
import Mask from '../../../components/Mask';
import Button from '../../../components/Button/Button';

export default class HomePage extends Component {
  state = {
    open: false
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'MDB React Native App',
    headerStyle: {
      backgroundColor: basicColors[0].color
    },
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    },
    headerRight: (
      <Dropdown
        arr={['Home', 'Advanced', 'Components', 'CSS', 'Forms', 'Modals', 'Navigation']}
        navigator={navigation}
        icon
        iconColor="#fff"
        iconDropdown="ellipsis-v"
      ></Dropdown>
    ),
    headerLeft: <Icon icon={['fab', 'mdb']} size={32} color="#fff" style={{ marginLeft: 15 }} />
  });
  openMenu = () => {
    this.setState(prev => ({
      open: !prev.open
    }));
  };

  renderElement = () => {
    const { navigate } = this.props.navigation;

    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30
        }}
      >
        <Image
          style={{
            width: 240,
            height: 100
          }}
          source={{
            uri: 'https://mdbootstrap.com/img/Marketing/general/logo/big/mdb-react.png'
          }}
        ></Image>
        <View
          style={{
            padding: 10
          }}
        >
          <Text
            style={{
              textAlign: 'center'
            }}
          >
            MDB React Mobile with React Native.
          </Text>
          <Text
            style={{
              color: 'grey',
              textAlign: 'center'
            }}
          >
            This demo shows MDB React components in the mobile version.
          </Text>
        </View>

        <Mask style={{ marginBottom: 10 }} source={require('../../../../docs/img/mdb-free.jpg')} overlay="dark">
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon
              icon="code"
              size={32}
              color={basicColors[5].color}
              style={{
                alignItems: 'center',
                marginTop: 5
              }}
            ></Icon>
            <Text
              style={{
                color: basicColors[5].color,
                fontSize: 32,
                marginLeft: 8,
                marginBottom: 10,
                fontWeight: 'bold'
              }}
            >
              Advanced
            </Text>
          </View>

          <Text style={{ color: '#fff', textAlign: 'center' }}>
            Advanced components such as carousels, tooltips and collapse. All in Material Design version.{' '}
          </Text>
          <Button color="success" title="More" onPressed={() => navigate('Advanced')}></Button>
        </Mask>

        <Mask style={{ marginBottom: 10 }} source={require('../../../../docs/img/mdb-main.jpg')} overlay="dark">
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon
              icon="code"
              size={32}
              color={basicColors[0].color}
              style={{
                alignItems: 'center',
                marginTop: 5
              }}
            ></Icon>
            <Text
              style={{
                color: basicColors[0].color,
                fontSize: 32,
                marginLeft: 8,
                marginBottom: 10,
                fontWeight: 'bold'
              }}
            >
              Components
            </Text>
          </View>

          <Text style={{ color: '#fff', textAlign: 'center' }}>
            Ready-to-use components thats you can use in your applications.{' '}
          </Text>
          <Button color="primary" title="More" onPressed={() => navigate('Components')}></Button>
        </Mask>

        <Mask style={{ marginBottom: 10 }} source={require('../../../../docs/img/mdb.jpg')} overlay="dark">
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon
              icon={['fab', 'css3']}
              size={32}
              color={basicColors[3].color}
              style={{
                alignItems: 'center',
                marginTop: 5
              }}
            ></Icon>
            <Text
              style={{
                color: basicColors[3].color,
                fontSize: 32,
                marginLeft: 8,
                marginBottom: 10,
                fontWeight: 'bold'
              }}
            >
              CSS3
            </Text>
          </View>

          <Text style={{ color: '#fff', textAlign: 'center' }}>Get to know all our css styles in one place. </Text>
          <Button color="danger" title="More" onPressed={() => navigate('CSS')}></Button>
        </Mask>

        <Mask style={{ marginBottom: 10 }} source={require('../../../../docs/img/forms.jpg')} overlay="dark">
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon
              icon="edit"
              size={32}
              color={basicColors[0].color}
              style={{
                alignItems: 'center',
                marginTop: 5
              }}
            ></Icon>
            <Text
              style={{
                color: basicColors[0].color,
                fontSize: 32,
                marginLeft: 8,
                marginBottom: 10,
                fontWeight: 'bold'
              }}
            >
              Forms
            </Text>
          </View>

          <Text style={{ color: '#fff', textAlign: 'center' }}>
            Checkboxes, inputs, radios,switches. Everything in one place and ready to use.
          </Text>
          <Button color="primary" title="More" onPressed={() => navigate('Forms')}></Button>
        </Mask>

        <Mask style={{ marginBottom: 10 }} source={require('../../../../docs/img/modal-new.jpg')} overlay="dark">
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon
              icon="window-restore"
              size={32}
              color={basicColors[5].color}
              style={{
                alignItems: 'center',
                marginTop: 5
              }}
            ></Icon>
            <Text
              style={{
                color: basicColors[5].color,
                fontSize: 32,
                marginLeft: 8,
                marginBottom: 10,
                fontWeight: 'bold'
              }}
            >
              Modals
            </Text>
          </View>

          <Text style={{ color: '#fff', textAlign: 'center' }}>
            Modals are great for displaying advanced messages to the user. Cookies, logging in, registration and much
            more.
          </Text>
          <Button color="success" title="More" onPressed={() => navigate('Modals')}></Button>
        </Mask>
        <Mask style={{ marginBottom: 10 }} source={require('../../../../docs/img/navigation-1.jpg')} overlay="dark">
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon
              icon="bars"
              size={32}
              color={basicColors[3].color}
              style={{
                alignItems: 'center',
                marginTop: 5
              }}
            ></Icon>
            <Text
              style={{
                color: basicColors[3].color,
                fontSize: 32,
                marginLeft: 8,
                marginBottom: 10,
                fontWeight: 'bold'
              }}
            >
              Navigation
            </Text>
          </View>

          <Text style={{ color: '#fff', textAlign: 'center' }}>Ready-to-use components navbars and footers!</Text>
          <Button color="danger" title="More" onPressed={() => navigate('Navigation')}></Button>
        </Mask>

        <FooterCopyright color="primary" textColor="light">
          &copy; MDBootstrap 2019
        </FooterCopyright>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList data={[{ key: 'a' }]} renderItem={this.renderElement} contentContainerStyle={{ padding: 0 }} />
      </View>
    );
  }
}
