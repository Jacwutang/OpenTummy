import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import {Route,
  Redirect,
  Switch,
  Link,
  HashRouter} from 'react-router-dom';

import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import NavBarContainer from './navbar/nav_bar_container';
import FooterContainer from './footer/footer_container';
import ReservationContainer from './reservation/reservation_container';
import ProfileContainer from './profile/profile_container';

import RestaurantFormContainer from './restaurant/restaurant_form_container';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import MainPage from './main_page';
import RestaurantDetailContainer from './restaurant/restaurant_detail_container';

const App = () => (

  <div>
    <Route path = "/" component={NavBarContainer}/>
    <Route path = "/" component={FooterContainer} />

    <Switch>
      <AuthRoute path = "/login" component={SessionFormContainer} />
      <AuthRoute path = "/signup" component={SessionFormContainer} />



      <Route exact path = "/restaurants" component={RestaurantIndexContainer} />

      <ProtectedRoute path = "/profile" component={ProfileContainer} />

      <ProtectedRoute exact path = "/restaurants/new" component={RestaurantFormContainer} />

      <Route exact path="/restaurants/:restId" component={RestaurantDetailContainer} />


      <Route exact path = "/" component={MainPage} />

      <Route component={MainPage} />
    </Switch>


  </div>


);

export default App;
// <Route exact path = "/" component={ReservationContainer} />
// <Route path = "/login" component={SessionFormContainer} />
// <Route path = "/signup" component={SessionFormContainer} />
// <Route exact path = "/profile" component={ProfileContainer} />
