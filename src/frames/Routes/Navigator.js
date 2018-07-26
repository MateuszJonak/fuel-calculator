import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../config';
import ScreensRoutes from '../../screens/Routes';
import ScreensRoutesDetail from '../../screens/Routes/Detail';
import RoutesIcon from './Icon';

const Navigator = createStackNavigator({
  RoutesList: {
    screen: ScreensRoutes,
    path: 'routes',
    navigationOptions: () => ({
      title: 'Routes',
      headerStyle,
    }),
  },
  RouteDetail: {
    screen: ScreensRoutesDetail,
    path: 'routes/:id',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.id} Route`,
      headerStyle,
    }),
  },
});

Navigator.navigationOptions = {
  tabBarIcon: RoutesIcon,
};

export default Navigator;
