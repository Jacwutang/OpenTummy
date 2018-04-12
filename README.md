# OpenTummy

<br/>

**OpenTummy is inspired by OpenTable, a popular Restaurant and Dining application connecting people and good food.**
<br/>
![](https://puu.sh/z669Y/3e107fdf7f.png)
<br/>
Check it out: [Live Demo](https://opentummy.herokuapp.com/#/)

## Technologies Used
- OpenTummy uses Ruby on Rails on the backend, PostgreSQL on the database, and React-Redux on the frontend.


# Core Features

## 1) Make Reservations
Like what you see? Go ahead and make a reservation. The reservation system automatically detects the local time and date of where the user is located.

The reservation is automatically added to the User's profile upon completion.
![](http://g.recordit.co/uPG2UBDdOG.gif)

### Implementation of Make Reservations feature
There are several challenging aspects of this feature. The first one is requiring a logged in user in order to make reservations. If a user has already made an reservation, then the reservation form will present the option of editing the reservation, otherwise it will prompt the user to book a reservation.

case 1: ![](http://g.recordit.co/oxmQ991Lyc.gif)
---------------------------------------------------------------------------------------------------------------------------
case 2: ![]()

Using React's HashRouter allows the application to extract the Restaurant's meta-information and corroborate with the current_user's reservations. Based on the comparison, either 'Edit Reservation' or 'Book a Reservation' will be presented to the user. Any particular Restaurant's page will contain a wildcard parameter in the url `/restaurants/:restaurant_id`. The `restaurant_id` can be used to associate a `reservation's` and a `user's` details.


 The snippet below finds the reservation id that corresponds to the restaurant_id

```javascript
 let reservationId = null;

 let route_params_rest_id = ownProps.match.params.restId;

 resValues.forEach( (el) => {
  if (el.restaurant_id === parseInt(route_params_rest_id)){
      reservationId = el.id;

  }
 });

 const formType = reservationId === null? 'Book this Restaurant': 'Edit this Reservation'

```


## 2)  Explore Restaurants
Feel free to browse through OpenTummy's culinary partners. Search by Location.


![](http://g.recordit.co/7luygq64AU.gif)
<hr/>
As a User types, the query is sent to the database with each keystroke.

```javascript
 handleInput(e, query){

        this.setState({query: e.target.value });

        this.findMatches();
  }

```  

Here is whats happening on the Rails backend, in particular inside the Restaurant model.

```ruby
  def self.list_matches(query_param)
    param = '%' + query_param.downcase + '%'
    Restaurant.where('lower(city) LIKE ?', param)
  end

```  

The query is executed through activerecord, and a list of restaurants that match are returned.





### Want to add your own Restaurant to OpenTummy? Become a partner with us by registering your restaurant.
![](http://g.recordit.co/dtKlOkpW3x.gif)




Additional Features (To be implemented):
1) Expand search parameters to search restaurants by address, price, reviews.
2) Integrate DevOps( Continous Integration/ Continous Deployment)
3) Extensive unit testing with Jest and RSpec
