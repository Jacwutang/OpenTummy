import React from 'react';
import {Route,
  Redirect,
  Switch,
  Link,
  HashRouter} from 'react-router-dom';

class RestaurantForm extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //     name: '', address: '', city: '', state: '', postal_code: '', country: '', price: '',
    //     category: '', thumbnail: '', description: '', lat: '', lng: '', image_urls: [], max_reservations: '', owner_id: 0
    //   }
    // console.log(this.props.editRestaurantState);

    if(this.props.editRestaurantState !== undefined ){

      this.state = this.props.editRestaurantState;
    } else{
      
      this.state = {
          name: '', address: '', city: '', state: '', postal_code: '', country: '', price: '',
          category: '', thumbnail: '', description: '', lat: '', lng: '', image_urls: [], max_reservations: '', owner_id: 0
        }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let restaurantId = parseInt(this.props.match.params.restaurantId);

    if(restaurantId !== null){
      this.state.id = restaurantId;
    }

    this.state.owner_id = this.props.currentUser.id;

    const restaurant = this.state;


    // this.props.createRestaurant(restaurant).then(() => this.props.history.push('/profile'));
    this.props.processRestaurant(restaurant).then(() => this.props.history.push('/profile'));


  }

  handleInput(field){
    return ( e =>
      this.setState({[field]: e.target.value })
    )
  }

  componentWillMount(){
    this.props.clearErrors();
    // if(this.props.match.params.restaurantId !== null){
    //   this.props.requestRestaurant(parseInt(this.props.match.params.restaurantId)).then(rest => this.setState({state}: rest));
    //
    // }
    // debugger;
  }

  renderErrors(){


      return (
        <ul>
          {this.props.errors.map( (e,idx) =>(
            <li className = "restaurant-form-li"
            key={`error-${idx}`}>
            {e}
            </li>
          ))}
          </ul>
        );
    }

  render(){



    return(
      <div>
       <form className="restaurant-form" onSubmit={this.handleSubmit}>

         {this.props.formType}

         <br/>


         <input
           className = "input-restaurant-form"
           placeholder = "Enter Name"
           value= {this.state.name}
           type="text"
           onChange={this.handleInput('name')} />

           <br/>


           <input
             className = "input-restaurant-form"
             placeholder = "Enter Address"
             value={this.state.address}
             type="text"
             onChange={this.handleInput('address')} />

            <br/>

            <input
              className = "input-restaurant-form"
              placeholder = "Enter city"
              value={this.state.city}
              type="text"
              onChange={this.handleInput('city')} />

            <br/>




                <input
                  className = "input-restaurant-form"
                  placeholder = "Enter Postal Code"
                  value={this.state.postal_code}
                  type="text"
                  onChange={this.handleInput('postal_code')} />

                <br/>

                <input
                  className = "input-restaurant-form"
                  placeholder = "Enter Country"
                  value={this.state.country}
                  type="text"
                  onChange={this.handleInput('country')} />

                <br/>

                <select onChange={this.handleInput('state')} value={this.state.state}>
                    <option value="" disabled>
                      Select State</option>

                    <option value="California" type ="text">California</option>
                      <option value="Illnois" type ="text">Illnois</option>
                    <option value="New York" type ="text">New York</option>
                    <option value="Texas" type = "text">Texas</option>
                    <option value="Florida" type = "text">Florida</option>

                </select>

                  <br/>

                <select onChange={this.handleInput('price')} value={this.state.price}>
                    <option value="" disabled >
                    Select Price</option>


                    <option value={1}> 1 - Budget </option>
                    <option value={2}> 2 </option>
                    <option value={3}> 3 - Neutral</option>
                    <option value={4}> 4 </option>
                    <option value={5}> 5 - Expensive</option>

                  </select>

                  <br/>

                  <select  onChange={this.handleInput('category')} value={this.state.category} >
                      <option value=""disabled>
                      Optional: Select Category</option>

                      <option value="Brunch" type="text"> Brunch </option>
                      <option value="Casual" type="text"> Casual </option>
                      <option value="Fast Food" type="text">Fast Food </option>
                      <option value="Fine Dining" type="text"> Fine Dining</option>
                </select>

                  <br/>


                  <input
                    className = "input-restaurant-form"
                    placeholder = "Optional:   Upload thumbnail link"
                    value={this.state.thumbnail}
                    type="text"
                    onChange={this.handleInput('thumbnail')} />

                  <br/>


                  <input
                    className = "input-restaurant-form"
                    placeholder = "Optional:   Enter Location (latitude)"
                    value={this.state.lat}
                    type="text"
                    onChange={this.handleInput('lat')} />

                  <br/>

                  <input
                    className = "input-restaurant-form"
                    placeholder = "Optional:   Enter Location (longititude)"
                    value={this.state.lng}
                    type="text"

                    onChange={this.handleInput('lng')} />

                  <br/>

                  <input
                    className = "input-restaurant-form"
                    placeholder = "Optional:  Enter Max Number of Reservations"
                    value={this.state.max_reservations}
                    type="text"

                    onChange={this.handleInput('max_reservations')} />

                  <br/>

                  <textarea name = "description" rows = "5"

                    placeholder = "Optional: Leave a Description"
                    value={this.state.description}
                    type="text"

                    onChange={this.handleInput('description')} />

                  <br/>

                <button type="submit" className = "input-button"> {this.props.formType} </button>

                {this.renderErrors()}
                </form>



       </div>



    );
  }





};

export default RestaurantForm;

// <option disabled selected = "selected">
// Select State</option>
