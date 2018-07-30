import Expo from 'expo';
import Root from './Root';

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate();
}

Expo.registerRootComponent(Root);
