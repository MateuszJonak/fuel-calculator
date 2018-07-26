import React from 'react';
import { Icon as IconElement } from 'react-native-elements';

const Icon = ({ tintColor }) => {
  return <IconElement name="md-compass" type="ionicon" color={tintColor} />;
};

export default Icon;
