// Let's make sure users can't visit our "/#/login" or "/#/signup" routes if they are already logged in on the front-end.
//
// Let's create a frontend/util/route_util.jsx file. In it we will define some custom routes. Our goal is to conditionally render either the component or a <Redirect> based on whether a user is logged in. To do this we'll need to:
// Check to see if the application state has a currentUser property.
// If true, redirect to "/".
// Otherwise, render the specified component.
// Your <AuthRoute> should look something like this:


// If you're NOT logged in, activate the Component
// ELSE, redirect to "/"
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {Route, Redirect} from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/profile" />
    )
  )}/>
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);



const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};


export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
