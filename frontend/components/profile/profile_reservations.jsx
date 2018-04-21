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
    // let x = 2;


    if(Object.keys(reservations).length === 0){
      return null;
    }
    else{
      return(
        <div>

          <ul className = "profile-restaurants-index-ul">
            {reservations.map( (res) => {


              return (
              <li className = "profile-restaurants-index-li"
              key = {res.id}>

                      <div  className = "profile-restaurants-index-div-left">

                      <Link to={`/restaurants/${res.restaurant_id}`}>
                         <img className = "thumbnail" src={restaurantsIndex[res.restaurant_id].thumbnail}/>
                      </Link>

                        <h2> {restaurantsIndex[res.restaurant_id].name} </h2>

                        <h3>
                          Party-Size: {res.head_count}

                        </h3>

                        <h3>
                          Time: {res.timeslot}

                        </h3>

                        <h3>
                          Date: {res.date}

                        </h3>



                        <br/>


                      </div>

                      <div className = "profile-restaurants-index-div-right">
                        <button
                        type="button" onClick={this.handleSubmit(res.id)}> Delete </button>


                          <Link to={`/restaurants/${res.restaurant_id}`}>

                          <button type="button" className = "button-bandaid"> Edit </button>

                          </Link>

                      </div>


              </li>

            )})

            }

          </ul>


        </div>

      );

    }



  }


}

export default ProfileReservations;
