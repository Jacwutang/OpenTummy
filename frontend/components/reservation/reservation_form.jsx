import React from 'react';


class ReservationForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    

    if(!Number.isNaN(this.props.reservationId)) {
      this.state = this.props.reservation[this.props.reservationId];
      this.state.date = this.props.reservation[this.props.reservationId].date.slice(0,10);

      this.state.timeslot = this.props.reservation[this.props.reservationId].timeslot.slice(11,19);

    } else{

      this.state = {id: 0, timeslot: "12:00:00", head_count: 1, date: "2017-11-30"};
    }
    //this.state = this.props.reservation[this.props.reservationId];
     //this.state = {id: 0, timeslot: "12:00:00", head_count: 1};
  }

  componentWillMount(){

    this.props.clearErrors();
  }

  handleSubmit(e){
    //this.props.reservationId

    e.preventDefault();

    if(this.props.reservationId === null){
          this.state.id = 0;

    }else{
      this.state.id = this.props.reservationId;
    }



    this.props.currentUser === null ? this.state.user_id = 0 : this.state.user_id = this.props.currentUser.id
    this.state.restaurant_id = this.props.match.params.restId;
    this.state.thumbnail = this.props.restaurant.thumbnail;

    const reservation = this.state;

    this.props.processReservation(reservation).then(() => this.props.history.push('/profile'));


  }


  handleInput(field){

    return ( e =>
      this.setState({[field]: e.target.value })
    )
  }

  renderErrors(){
    //if there are any errors render them
    console.log(this.state);
    return(
     <ul>
       {this.props.errors.map((error, i) => (
         <li className = "reservation-form-li" key={`error-${i}`}>
           {error}
         </li>
       ))}
     </ul>
   );
  }


  render(){
    let restaurantId = parseInt(this.props.match.params.restaurantId);


    return(
    <div>
      <div className = "reservation-div">

      <input className = "reservation-input"
      onChange={this.handleInput('head_count')}
      value={this.state.head_count}
      placeholder = "Enter Number of People"
      type="number"/>


        <input className = "reservation-input"
        onChange={this.handleInput('date')}
        value={this.state.date}
        type="date"/>


        <input className = "reservation-input"
        onChange={this.handleInput('timeslot')}
        value={this.state.timeslot}
        placeholder = "Enter timeslot in hh::mm::ss format"
        type="text"/>




        <button type="button" onClick={this.handleSubmit} className = "reservation-form-button"> {this.props.formType} </button>

        </div>


        {this.renderErrors()}


      </div>
    )
  }


}

export default ReservationForm;




// <option value="" disabled>
//   12:00 PM </option>



// <select onChange={this.handleInput('head_count')} value={this.state.head_count} className = "reservation-select">
//
//     <option value={this.state.head_count}> {this.state.head_count} people </option>
//     <option value={1}> 1 people</option>
//     <option value={2}> 2 people</option>
//     <option value={3}> 3 people</option>
//     <option value={4}> 4 people</option>
//     <option value={5}> 5 people</option>
//
//   </select>




// <select onChange={this.handleInput('timeslot')} value={this.state.timeslot} className = "reservation-select">
//
//
//     <option value="12:00:00" type ="text">12:00 PM</option>
//     <option value="01:00:00" type ="text">1:00 PM</option>
//     <option value="02:00:00" type ="text">2:00 PM</option>
//     <option value="03:00:00" type ="text">3:00 PM</option>
//     <option value="04:00:00" type ="text">4:00 PM</option>
//     <option value="05:00:00" type ="text">5:00 PM</option>
//     <option value="06:00:00" type ="text">6:00 PM</option>
//
// </select>
