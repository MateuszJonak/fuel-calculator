import { createStackNavigator } from 'react-navigation';
import ScreensAbout from '../../screens/About';
import { headerStyle } from '../../config';
import FramesAboutIcon from './Icon';

const Navigator = createStackNavigator({
  About: {
    screen: ScreensAbout,
    navigationOptions: () => ({
      title: 'About',
      headerTransparent: true,
      headerStyle,
    }),
  },
});

Navigator.navigationOptions = {
  tabBarIcon: FramesAboutIcon,
};

export default Navigator;
