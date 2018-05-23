import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

export default props => {
  const { input, ...inputProps } = props;

  return (
    <View>
      <Input
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
    </View>
  );
};
