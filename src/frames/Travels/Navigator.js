import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../config';
import ScreensTravels from '../../screens/Travels';
import ScreensTravelsDetail from '../../screens/Travels/Detail';
import FramesCalculatorIcon from './Icon';

const Navigator = createStackNavigator({
  TravelsList: {
    screen: ScreensTravels,
    path: 'travels',
    navigationOptions: () => ({
      title: 'Travels',
      headerStyle,
    }),
  },
  TravelsDetail: {
    screen: ScreensTravelsDetail,
    path: 'travels/:id',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.id} Travel`,
      headerStyle,
    }),
  },
});

Navigator.navigationOptions = {
  tabBarIcon: FramesCalculatorIcon,
};

export default Navigator;
