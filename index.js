/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ContextProvider from './src/common/context';

AppRegistry.registerComponent(appName, () => ContextProvider);
