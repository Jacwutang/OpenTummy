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

  }

  componentWillMount(){

    this.props.clearErrors();
  }

  handleSubmit(e){


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


    if(this.props.errors === undefined){
      return;
    }
    return(
      <div>
       {this.props.errors.map((error, i) => (
         <li className = "reservation-form-li" key={`error-${i}`}>
           {error}
         </li>
       ))}
     </div>
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
      placeholder = "Party Size"
      type="text"/>


        <input className = "reservation-input"
        onChange={this.handleInput('date')}
        value={this.state.date}
        type="date"/>


        <input className = "reservation-input"
        onChange={this.handleInput('timeslot')}
        value={this.state.timeslot}
        placeholder = "Enter timeslot in hh::mm format"
        type="text"/>




        <button type="button" onClick={this.handleSubmit} className = "reservation-form-button"> {this.props.formType} </button>

        </div>


        {this.renderErrors()}


      </div>
    )
  }


}

export default ReservationForm;
