import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import AboutNavigator from '../About/Navigator';
import CalculatorNavigator from '../Calculator/Navigator';
import RoutesNavigator from '../Routes/Navigator';
import TravelsNavigator from '../Travels/Navigator';
import { colors } from '../../config';

const Navigator = createMaterialBottomTabNavigator(
  {
    Travels: {
      path: '/',
      screen: TravelsNavigator,
    },
    Routes: {
      path: '/routes',
      screen: RoutesNavigator,
    },
    Calculator: {
      path: '/calculator',
      screen: CalculatorNavigator,
    },
    About: {
      path: '/about',
      screen: AboutNavigator,
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
