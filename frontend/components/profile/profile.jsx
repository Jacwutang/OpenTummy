import React from 'react';
import {Link} from 'react-router-dom';
import ProfileRestaurants from './profile_restaurants';
import ProfileReservations from './profile_reservations';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.handeClick = this.handleClick.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleButtonAddRestaurant = this.handleButtonAddRestaurant.bind(this);

  }

  componentWillMount(){
    this.props.requestAllRestaurants();
    // .then(() => this.props.history.push('/profile'));
  }

  // componentDidUpdate() {
  //   let hash = this.props.location.hash.replace('#', '');
  //   if (hash) {
  //       let node = ReactDOM.findDOMNode(this.refs[hash]);
  //       if (node) {
  //           node.scrollIntoView();
  //       }
  //   }
  // }

  handleClick(field){

    if(field === 'profile-reservations'){

      document.getElementById('profile-reservations').scrollIntoView(true);
      // window.scrollTo(0,0);
    } else{
      document.getElementById('profile-restaurants').scrollIntoView(true);
    }

  }

  handleButton(){

    this.props.history.push('/restaurants/');
  }

  handleButtonAddRestaurant(){

    this.props.history.push('/restaurants/new');
  }

  render(){

    let my_restaurants = Object.keys(this.props.currentUser.restaurants).map(el => (
      this.props.currentUser.restaurants[el]));

    let reservations = Object.keys(this.props.currentUser.reservations).map(res => (
        this.props.currentUser.reservations[res]));


    const{deleteRestaurant,deleteReservation,restaurantsIndex} = this.props;


    if(Object.keys(restaurantsIndex).length === 0){
      return null;
    }

    else{

      return(

        <div className = "profile-main">
          <h1 className = "h1-profile-main"> Splash Page </h1>

          <div className = "profile-tabs">

            <div className = "profile-tabs-left">
              <button type="button" onClick={() => {this.handleClick('profile-reservations')}} className="header-links">
                My Reservations
                </button>

              <button type="button" onClick={() => {this.handleClick('profile-restaurants')}} className="header-links" className="header-links">
                My Restaurants
              </button>

            </div>

            <div className = "profile-tabs-right">


              <button className = "header-links" type="button" onClick={() => {this.handleButton()}}> Restaurants </button>


                <button className = "header-links" type="button" onClick={() => {this.handleButtonAddRestaurant()}} > Add Restaurant </button>



            </div>

          </div>


          <div id="profile-reservations">
            <h1 className = "profile-reservations-h1"> My Reservations </h1>
            <ProfileReservations
            reservations={reservations}
            restaurantsIndex={restaurantsIndex}
            deleteReservation={deleteReservation} />
          </div>

          <div className ="placeholder-div">

          </div>

          <div id="profile-restaurants">
            <h1 className = "profile-restaurants-h1"> My Restaurants </h1>
            <ProfileRestaurants
            my_restaurants={my_restaurants}
            deleteRestaurant={deleteRestaurant}/>
          </div>



        </div>
      );

    }

  }

};

export default Profile;


// <div>
  // <ProfileRestaurants
  // my_restaurants={my_restaurants}
  // deleteRestaurant={deleteRestaurant}/>
// </div>
