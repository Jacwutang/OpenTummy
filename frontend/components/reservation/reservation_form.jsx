import React from 'react';


class ReservationForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {timeslot: "12:00:00", head_count: 1};
  }

  componentWillMount(){

    this.props.clearErrors();
  }

  handleSubmit(e){
    // debugger;
    // e.preventDefault();
    // this.state.owner_id = this.props.currentUser.id;

    e.preventDefault();

    this.props.currentUser === null ? this.state.user_id = 0 : this.state.user_id = this.props.currentUser.id
    this.state.restaurant_id = this.props.match.params.restId;
    this.state.thumbnail = this.props.restaurant.thumbnail;

    const reservation = this.state;

    this.props.createReservation(reservation).then(() => this.props.history.push('/profile'));

    
  }


  handleInput(field){

    return ( e =>
      this.setState({[field]: e.target.value })
    )
  }

  renderErrors(){
    //if there are any errors render them

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

    return(
    <div>
      <div className = "reservation-div">

      <select onChange={this.handleInput('head_count')} value={this.state.head_count} className = "reservation-select">

          <option value={1}> 1 people</option>
          <option value={2}> 2 people</option>
          <option value={3}> 3 people</option>
          <option value={4}> 4 people</option>
          <option value={5}> 5 people</option>

        </select>

        <input className = "reservation-input"
        onChange={this.handleInput('date')}
        value={this.state.date}
        type="date"/>


        <select onChange={this.handleInput('timeslot')} value={this.state.timeslot} className = "reservation-select">


            <option value="12:00:00" type ="text">12:00 PM</option>
            <option value="01:00:00" type ="text">1:00 PM</option>
            <option value="02:00:00" type ="text">2:00 PM</option>
            <option value="03:00:00" type ="text">3:00 PM</option>
            <option value="04:00:00" type ="text">4:00 PM</option>
            <option value="05:00:00" type ="text">5:00 PM</option>
            <option value="06:00:00" type ="text">6:00 PM</option>

        </select>





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
