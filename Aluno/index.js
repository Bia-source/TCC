/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
import Login from './src/pages/login/login-page';

AppRegistry.registerComponent(appName, () => Login);
