import React from 'react';
import {
  Switch,
  Link,
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginSignup from './session/LoginSignup';
import Welcome from './homepage/Welcome';
import Header from './header/HeaderContainer';

const App = () => (

  <app>
    <Header />
    <AuthRoute path="/loginSignup" component={LoginSignup} />
    <ProtectedRoute component={Welcome} />
  </app>

);

export default App;
