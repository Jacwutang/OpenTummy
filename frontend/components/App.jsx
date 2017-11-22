import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import {Route,
  Redirect,
  Switch,
  Link,
  HashRouter} from 'react-router-dom';

const App = () => (
  <div>
      <Route path = "/" component={SessionFormContainer} />
      <Route path = "/login" component={SessionFormContainer} />
      <Route path = "/signup" component={SessionFormContainer} />

  </div>


);

export default App;
