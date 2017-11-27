import React from 'react';
import {Link} from 'react-router-dom';
class ProfileRestaurants extends React.Component{

  constructor(props){
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(id){
  //
  //   this.props.deleteRestaurant(id);
  // }




  render(){
    const {restaurants} = this.props;

    return(
      <div>
        <h1> My Restaurantssss </h1>
        <ul className = "profile-restaurants-index-ul">
          {restaurants.map( (rest) => (

            <li className = "profile-restaurants-index-li"
            key = {rest.id}>

                    <div className = "profile-restaurants-index-div-left">

                    <Link to={`/restaurants/${rest.id}`}>
                      <img className = "thumbnail" src={rest.thumbnail}/>
                    </Link>

                      <span>
                        <h2> {rest.name} </h2>
                        <h2> $$$$$ </h2>
                      </span>


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
