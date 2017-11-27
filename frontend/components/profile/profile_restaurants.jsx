import React from 'react';
import {Link} from 'react-router-dom';
class ProfileRestaurants extends React.Component{

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

                    <div className = "profile-restaurants-index-div-right">
                      <button> Delete </button>
                    </div>


            </li>

          ))}

        </ul>
      </div>
    );
  }

};


export default ProfileRestaurants;
