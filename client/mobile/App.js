import React, { Fragment, Component } from 'react';
import { SafeAreaView, StatusBar, View, ScrollView, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Pages/main/HomePage';
import { basicColors } from './src/utils/test';
import AdvancedPage from './src/Pages/main/AdvancedPage';
import ComponentsPage from './src/Pages/main/ComponentsPage';
import CSSPage from './src/Pages/main/CssPage';
import FormsPage from './src/Pages/main/FormsPage';
import ModalsPage from './src/Pages/main/ModalsPage';
import NavigationPage from './src/Pages/main/NavigationPage';

//elements
import BadgePage from './src/Pages/elements/BadgesPage';
import ButtonPage from './src/Pages/elements/ButtonPage';
import ButtonsGroup from './src/Pages/elements/ButtonGroupPage';
import CardsPage from './src/Pages/elements/CardsPage';
import CarouselPage from './src/Pages/elements/CarouselPage';
import CheckboxPage from './src/Pages/elements/CheckboxPage';
import CollapsePage from './src/Pages/elements/CollapsePage';
import FooterPage from './src/Pages/elements/FooterPage';
import MasksPage from './src/Pages/elements/MasksPage';
import ModalPage from './src/Pages/elements/ModalsPage';
import NavbarPage from './src/Pages/elements/NavbarPage';
import PanelPage from './src/Pages/elements/PanelPage';
import RadioPage from './src/Pages/elements/RadioPage';
import SwitchPage from './src/Pages/elements/SwitchPage';
import InputPage from './src/Pages/elements/InputPage';
import TooltipPage from './src/Pages/elements/TooltipPage';

const AppNavigator = createStackNavigator(
  {
    // main
    Home: { screen: Home },
    Advanced: { screen: AdvancedPage },
    Components: { screen: ComponentsPage },
    CSS: { screen: CSSPage },
    Forms: { screen: FormsPage },
    Modals: { screen: ModalsPage },
    Navigation: { screen: NavigationPage },

    // elements
    Badges: { screen: BadgePage },
    Buttons: { screen: ButtonPage },
    ButtonsGroup: { screen: ButtonsGroup },
    Cards: { screen: CardsPage },
    Carousel: { screen: CarouselPage },
    Checkbox: { screen: CheckboxPage },
    Collapse: { screen: CollapsePage },
    Footers: { screen: FooterPage },
    Input: { screen: InputPage },
    Masks: { screen: MasksPage },
    Modal: { screen: ModalPage },
    Navbars: { screen: NavbarPage },
    Panels: { screen: PanelPage },
    Radio: { screen: RadioPage },
    Switch: { screen: SwitchPage },
    Tooltip: { screen: TooltipPage }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: basicColors[0].color
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);
const App = createAppContainer(AppNavigator);

export default App;
