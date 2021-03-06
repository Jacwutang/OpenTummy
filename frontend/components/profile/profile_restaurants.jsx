import React from 'react';
import {Link} from 'react-router-dom';

class ProfileRestaurants extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id){

    return(e => {
      e.preventDefault();
      this.props.deleteRestaurant(id);
    })

  }




  render(){
    const {my_restaurants} = this.props;
    if(Object.keys(my_restaurants).length === 0){
      return null;
    }

    return(
      <div>

        <ul className = "profile-restaurants-index-ul">
          {my_restaurants.map( (rest) => (

            <li className = "profile-restaurants-index-li"
            key = {rest.id}>

                    <div className = "profile-restaurants-index-div-left">

                      <Link to={`/restaurants/${rest.id}`}>
                        <img className = "thumbnail" src={rest.thumbnail}/>
                      </Link>

                        <h2> {rest.name} </h2>
                        <h3 className = "h3-restaurant-index-item-price"> $$$$$ </h3>
                        <h3> {rest.address} </h3>
                        <h3> {rest.city} , {rest.state}</h3>

                    </div>

                    <div className = "profile-restaurants-index-div-right">
                      <button type="button" onClick={this.handleSubmit(rest.id)}> Delete </button>


                      <Link to={`/restaurants/new/${rest.id}`} >
                      <button type="button" className = "button-bandaid"> Edit </button>

                      </Link>

                    </div>


            </li>

          ))}

        </ul>


      </div>
    );
  }

};


export default ProfileRestaurants;

// <div className = "profile-restaurants-index-div-right">
//   <button onClick={this.handleSubmit(rest.id)}> Delete </button>
// </div>
