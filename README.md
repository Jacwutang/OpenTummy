# README

# OpenTummy

<br/>

**OpenTummy is inspired by OpenTable, a popular Restaurant and Dining application connecting people and good food.**
<br/>
![] (http://g.recordit.co/nUdbWtILrj.gif)
Check it out https://opentummy.herokuapp.com/#/

## Technologies Used
- OpenTummy uses Ruby on Rails as the backend, Postgresql as the database, and React-Redux as the frontend. 


# Core Features

## 1) Make Reservations
User's can make Reservations while they're browsing a particular restaurant. The reservation is automatically added to the User's profile upon completion.
![](http://g.recordit.co/nUdbWtILrj.gif)

### Implementation of Make Reservations feature
There are several challenging aspects of this feature. The first one is requiring a logged in user in order to make reservations. If a user has already made an reservation, then the reservation form will present the option of editing the reservation, otherwise it will prompt the user to book a reservation.

case 1: ![](https://puu.sh/yxvfH/382dc46b52.png)
---------------------------------------------------------------------------------------------------------------------------
case 2: ![](https://puu.sh/yxvgl/2d588a67ac.png)

The url location is used to determine whether to show the 'Edit Reservation' or 'Book a Reservation' option. Any particular Restaurant's page will contain a wildcard parameter in the url `localhost:3000/restaurants/:restaurant_id`. The `restaurant_id` can be used to associate a `reservation's` and a `user's` details.
   
  `let resValues = Object.values(state.session.currentUser.reservations);`


   `var permittedValues = _.map(resValues, 'restaurant_id');`

   `var permittedValuesToString = permittedValues.map(value => value.toString());`

   `const formType = permittedValuesToString.includes(ownProps.match.params.restId)? 'Edit this Reservation': 'Book this Restaurant' `



## 2)  Explore Restaurants
Feel free to browse through OpenTummy's culinary partners. Search by Location (only San Francisco, Chicago, and New York markets are currently featured).


![](http://g.recordit.co/7luygq64AU.gif)
<hr/>
As a User types, the query is sent to the database. One keystroke at a time.
<br/>
 `handleInput(e, query){

        this.setState({query: e.target.value });
      
        this.findMatches();

        
        $('.search-bar').css('display','block');

    `}`



### Want to add your own Restaurant to OpenTummy? Become a partner with us by registering your restaurant.
![](http://g.recordit.co/dtKlOkpW3x.gif)




Additional Features (To be implemented):
1) Expand search parameters to search restaurants by address, price, reviews.
2) Rating and Reviews for restaurants.
