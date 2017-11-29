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
                      <h2> $$$$$ </h2>
                      <h2> {rest.address} </h2>
                      <h2> {rest.city} , {rest.state}</h2>






                    </div>

                    <div className = "profile-restaurants-index-div-right">
                      <button type="button" onClick={this.handleSubmit(rest.id)}> Delete </button>
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
