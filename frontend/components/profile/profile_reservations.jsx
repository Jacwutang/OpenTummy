import React from 'react';
import {Link} from 'react-router-dom';

class ProfileReservations extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id){

    return(e => {
      e.preventDefault();
      this.props.deleteReservation(id)
    })

  }

  render(){
    const {reservations,restaurantsIndex} = this.props;

    return(
      <div>
        <h1> My Reservations </h1>
        <ul>
          {reservations.map( (res) => (

            <li
            key = {res.id}>

                    <div>

                    <Link to={`/restaurants/${res.restaurant_id}`}>
                       <img className = "thumbnail" src={restaurantsIndex[res.restaurant_id].thumbnail}/>
                    </Link>



                      <br/>


                    </div>

                    <div>
                      <button type="button" onClick={this.handleSubmit(res.id)}> Delete </button>
                    </div>


            </li>

          ))}

        </ul>


      </div>

    );

  }


}

export default ProfileReservations;
// <img className = "thumbnail" src={res.restaurant.thumbnail}/>
// <h2> {res.restaurant.name} </h2>
