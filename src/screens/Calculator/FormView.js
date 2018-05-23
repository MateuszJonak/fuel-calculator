import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { TextInput } from '../../components/ReduxForm';
import {
  CALCULATOR_FORM_NAME,
  INPUTS_CONFIG,
} from '../../store/calculator/constants';
import { colors } from '../../config';

const SCREEN_WIDTH = Dimensions.get('window').width;
const arrayOfInputs = Object.keys(INPUTS_CONFIG).map(key => INPUTS_CONFIG[key]);

const ScreensCalculatorFormView = () => (
  <View>
    {arrayOfInputs.map((input, index) => (
      <Field
        key={index}
        name={input.name}
        placeholder={'0'}
        inputContainerStyle={styles.inputContainer}
        labelStyle={styles.label}
        component={TextInput}
        label={input.label}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    width: SCREEN_WIDTH - 30,
    borderColor: colors.black,
  },
  label: {
    color: colors.black,
  },
});

export default reduxForm({
  form: CALCULATOR_FORM_NAME,
})(ScreensCalculatorFormView);
