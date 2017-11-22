import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import {Route,
  Redirect,
  Switch,
  Link,
  HashRouter} from 'react-router-dom';

import {AuthRoute} from '../utils/route_util';
import NavBarContainer from './navbar/nav_bar_container';
import FooterContainer from './footer/footer_container';

const App = () => (
  <div>
      <Route path = "/" component={NavBarContainer} />


      <AuthRoute path = "/login" component={SessionFormContainer} />
      <AuthRoute path = "/signup" component={SessionFormContainer} />



      <Route path = "/" component={FooterContainer} />
  </div>


);

export default App;

// <Route path = "/login" component={SessionFormContainer} />
// <Route path = "/signup" component={SessionFormContainer} />
