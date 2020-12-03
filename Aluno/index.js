/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
import Login from './src/pages/login/login-page';
import UserPage from './src/pages/user-student-page/user-page';
import Register from './src/pages/register/register-page';

AppRegistry.registerComponent(appName, () => UserPage);
