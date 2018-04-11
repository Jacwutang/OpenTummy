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
import MainPageContainer from './main_page_container';
import RestaurantDetailContainer from './restaurant/restaurant_detail_container';



const App = () => (

  <div>
    <Route path = "/" component={NavBarContainer}/>


    <Switch>
      <AuthRoute path = "/login" component={SessionFormContainer} />
      <AuthRoute path = "/signup" component={SessionFormContainer} />



      <Route exact path = "/restaurants" component={RestaurantIndexContainer} />
      <Route exact path = "/New-York" component={RestaurantIndexContainer} />
      <Route exact path = "/Chicago" component={RestaurantIndexContainer} />
      <Route exact path = "/San-Francisco" component={RestaurantIndexContainer} />
      <Route exact path = "/Miami" component={RestaurantIndexContainer} />
      <Route exact path = "/Los-Angeles" component={RestaurantIndexContainer} />
      <Route exact path = "/Las-Vegas" component={RestaurantIndexContainer} />

      <ProtectedRoute path = "/profile" component={ProfileContainer} />

      <ProtectedRoute exact path = "/restaurants/new" component={RestaurantFormContainer} />

      <ProtectedRoute exact path = "/restaurants/new/:restaurantId" component={RestaurantFormContainer} />

      <Route exact path="/restaurants/:restId" component={RestaurantDetailContainer} />

      <Route path="/restaurants/:restId/:edit/:reservationId" component={RestaurantDetailContainer} />

      <Route exact path = "/" component={MainPageContainer} />

      <Route component={MainPageContainer} />


    </Switch>

    <Route path = "/" component={FooterContainer} />
  </div>


);

export default App;
// <Route exact path = "/" component={ReservationContainer} />
// <Route path = "/login" component={SessionFormContainer} />
// <Route path = "/signup" component={SessionFormContainer} />
// <Route exact path = "/profile" component={ProfileContainer} />
