import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Input, Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const INPUTS_CONFIG = [
  {
    name: 'price',
    label: 'Price',
  },
  {
    name: 'distance',
    label: 'Distance (km)',
  },
  {
    name: 'avg',
    label: 'Average fuel consumption',
  },
];

const inputState = INPUTS_CONFIG.reduce((previous, current) => {
  previous[current.name] = '';

  return previous;
}, {});

const getHowManyLiters = ({ avg, distance }) => {
  return distance * (avg / 100);
};

const getPrice = ({ avg, distance, price }) => {
  const howManyLiters = getHowManyLiters({ avg, distance });
  return howManyLiters * price;
};

export default class Calculator extends Component {
  state = inputState;

  render() {
    return (
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <SafeAreaView>
          <KeyboardAvoidingView
            behavior="position"
            contentContainerStyle={styles.formContainer}>
            <Icon name="directions-car" size={30} />
            <View>
              {INPUTS_CONFIG.map((input, index) => (
                <Input
                  key={index}
                  style={styles.input}
                  onChangeText={text => this.setState({ [input.name]: text })}
                  value={this.state[input.name]}
                  placeholder={input.label}
                  inputContainerStyle={styles.inputContainer}
                />
              ))}
              <Text>{getPrice(this.state)}</Text>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputContainer: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(110, 120, 170, 1)',
    height: 45,
    marginVertical: 10,
    width: SCREEN_WIDTH - 30,
  },
});
