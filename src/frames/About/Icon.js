import React from 'react';
import { Icon as IconElement } from 'react-native-elements';

const Icon = ({ tintColor }) => (
  <IconElement name="md-information-circle" type="ionicon" color={tintColor} />
);

export default Icon;
