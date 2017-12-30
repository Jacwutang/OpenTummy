import React from 'react';
import {Link} from 'react-router-dom';

class ProfileReservations extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleTime(timeslot){

    var time = timeslot.slice(11,-5)

    var minutes = timeslot.slice(14,-8);


    var hours = time.slice(0,1) + time.slice(1,2);
    // console.log(time, "TIME");
    // console.log(time.slice(0,1));
    // console.log(time.slice(1,2));
    // console.log( parseInt(time.slice(0,1) + time.slice(1,2)) > 12 );

    if(parseInt(time.slice(0,1) + time.slice(1,2)) >= 12){
      if(parseInt(time.slice(0,1) + time.slice(1,2)) - 12 === 0){
        hours = 12;
      } else{
        hours = parseInt(time.slice(0,1) + time.slice(1,2)) - 12;
      }

      return (

        hours + ':' + minutes + ' ' + 'PM'
      );
    }




    return(
      hours + ':' + minutes + ' ' + 'AM'
    );

  }

  handleDate(date){
    var date = date.slice(0,10);

    // 2017-11-05

    let year = date.slice(0,4);
    let month = date.slice(5,7);
    let day = date.slice(8);

    return(
      month + '-' + day + '-' + year
    );
  }


  handleSubmit(id){

    return(e => {
      e.preventDefault();
      this.props.deleteReservation(id)
    })

  }

  handleEdit(id){

    return(e => {
      e.preventDefault();
      // this.props.deleteReservation(id)
    })

  }

  render(){

    const {reservations,restaurantsIndex} = this.props;

    // {reservations.map( (res) => (
    //   console.log(res)
    // ))
    // }

    if(Object.keys(reservations).length === 0){
      return null;
    }
    else{
      return(
        <div>

          <ul className = "profile-restaurants-index-ul">
            {reservations.map( (res) => (

              <li className = "profile-restaurants-index-li"
              key = {res.id}>

                      <div  className = "profile-restaurants-index-div-left">

                      <Link to={`/restaurants/${res.restaurant_id}/edit/${res.id}`}>
                         <img className = "thumbnail" src={restaurantsIndex[res.restaurant_id].thumbnail}/>
                      </Link>

                        <h2> {restaurantsIndex[res.restaurant_id].name} </h2>

                        <h3>
                          Party-Size: {res.head_count}

                        </h3>

                        <h3>
                          Time: {this.handleTime(res.timeslot)}

                        </h3>

                        <h3>
                          Date: {this.handleDate(res.date)}

                        </h3>



                        <br/>


                      </div>

                      <div className = "profile-restaurants-index-div-right">
                        <button
                        type="button" onClick={this.handleSubmit(res.id)}> Delete </button>


                          <Link to={`/restaurants/${res.restaurant_id}/edit/${res.id}`}>

                          <button type="button" className = "button-bandaid"> Edit </button>

                          </Link>

                      </div>


              </li>

            ))}

          </ul>


        </div>

      );

    }



  }


}

export default ProfileReservations;
// <img className = "thumbnail" src={res.restaurant.thumbnail}/>
// <h2> {res.restaurant.name} </h2>



// <div className = "profile-tabs">
//
//   <div className = "profile-tabs-left">
//     <Link className="header-links" to="/restaurants/new">
//       My Reservations
//       </Link>
//     <Link className="header-links" to="/profile/restaurants/my">
//     My Restaurants
//     </Link>
//
//   </div>
//
//   <div className = "profile-tabs-right">
//
//   <Link className="header-links" to="/restaurants">
//     Browse all Restaurants
//     </Link>
//     <Link className="header-links" to= "/restaurants/new">
//       Add a Restaurant
//     </Link>
//   </div>
//
// </div>
