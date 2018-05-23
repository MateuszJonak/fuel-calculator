import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import CalculatorScreen from '../views/Calculator';

const CalculatorStack = createStackNavigator({
  Playground: {
    screen: CalculatorScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Calculator',
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
        />
      ),
    }),
  },
});

CalculatorStack.navigationOptions = {
  drawerLabel: 'Calculator',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="list"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default CalculatorStack;
