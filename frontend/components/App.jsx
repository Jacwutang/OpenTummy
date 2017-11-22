import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import {Route,
  Redirect,
  Switch,
  Link,
  HashRouter} from 'react-router-dom';

import {AuthRoute} from '../utils/route_util';

const App = () => (
  <div>
      <AuthRoute path = "/login" component={SessionFormContainer} />
      <AuthRoute path = "/signup" component={SessionFormContainer} />

  </div>


);

export default App;

// <Route path = "/login" component={SessionFormContainer} />
// <Route path = "/signup" component={SessionFormContainer} />
