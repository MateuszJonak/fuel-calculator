import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../config';
import ScreensCalculator from '../../screens/Calculator';
import ScreensInfo from '../../screens/Info';
import { HeaderIcon } from '../../components/Header';
import FramesCalculatorIcon from './Icon';

const Navigator = createStackNavigator({
  Form: {
    screen: ScreensCalculator,
    navigationOptions: ({ navigation }) => ({
      title: 'Calculator',
      headerTransparent: true,
      headerStyle,
      headerRight: (
        <HeaderIcon
          name="ios-information-circle-outline"
          containerStyle={{ paddingRight: 10 }}
          type="ionicon"
          onPress={() => navigation.navigate('Info')}
        />
      ),
    }),
  },
  Info: {
    screen: ScreensInfo,
    navigationOptions: ({ navigation }) => ({
      title: 'Info',
      headerTransparent: true,
      headerStyle,
      headerLeft: (
        <HeaderIcon
          name="md-arrow-back"
          containerStyle={{ paddingLeft: 10 }}
          type="ionicon"
          onPress={() => navigation.goBack()}
        />
      ),
    }),
  },
});

Navigator.navigationOptions = {
  tabBarIcon: FramesCalculatorIcon,
};

export default Navigator;
