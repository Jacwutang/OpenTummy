import React from 'react';


class RestaurantForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        name: 'Joe', address: '123 Street', city: 'Davis', state: 'CA', postal_code: '94122', country: 'USA', price: 2,
        category: 'Fast Food', thumbnail: '', description: '', lat: '', lng: '', image_urls: [], max_reservations: ''
      }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){

    e.preventDefault();

    const restaurant = this.state;


    this.props.createRestaurant(restaurant);
  }

  handleInput(field){
    return ( e =>
      this.setState({[field]: e.target.value })
    )
  }

  render(){
    return(
      <div>
       <form className="restaurant-form" onSubmit={this.handleSubmit}>
         Add a Restaurant

         <br/>

         <input
           className = "input-restaurant-form"
           placeholder = "Enter Restaurant Name"
           value={this.state.name}
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

                <select className = "input-select" name="state">
                    <option disabled selected = "California">
                    Select State</option>


                    <option value={this.state.state}>California</option>
                    <option value={this.state.state}>New York</option>
                    <option value={this.state.state}>Illnois</option>

                  </select>

                  <br/>

                <select name="price">
                    <option disabled selected = "selected">
                    Select Price</option>


                    <option value={this.state.price}>1 - Budget </option>
                    <option value={this.state.price}>2 -  </option>
                    <option value={this.state.price}>3 - Neutral</option>
                    <option value={this.state.price}>4 - </option>
                    <option value={this.state.price}>5 - Expensive</option>

                  </select>

                  <br/>

                  <select  name="category">
                      <option disabled selected = "selected">
                      Optional: Select Category</option>

                      <option value={this.state.category}> Brunch </option>
                      <option value={this.state.category}> Casual </option>
                      <option value={this.state.category}>Fast Food </option>
                      <option value={this.state.category}> Fine Dining</option>
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
                    placeholder = "Optional: Enter Max Number of Reservations"
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

                <button type="submit" className = "input-button"> Create Restaurant </button>

                </form>



       </div>



    );
  }





};

export default RestaurantForm;
