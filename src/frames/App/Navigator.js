import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FramesCalculatorNavigator from '../Calculator/Navigator';
import FramesAboutNavigator from '../About/Navigator';
import FramesTravelsNavigator from '../Travels/Navigator';
import { colors } from '../../config';

const Navigator = createMaterialBottomTabNavigator(
  {
    Travels: {
      path: '/',
      screen: FramesTravelsNavigator,
    },
    Calculator: {
      path: '/calculator',
      screen: FramesCalculatorNavigator,
    },
    About: {
      path: '/about',
      screen: FramesAboutNavigator,
    },
  },
  {
    initialRouteName: 'Travels',
    barStyle: {
      backgroundColor: colors.navbar,
    },
  },
);

export default Navigator;
