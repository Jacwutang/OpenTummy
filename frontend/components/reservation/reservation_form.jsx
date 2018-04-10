import React from 'react';


class ReservationForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = ({
      loaded: false,
      head_count: "",
      timeslot: "",
      date: "",
      edit: false
    })

    // if(this.props.formType === 'Edit this Reservation') {
    //   this.state = this.props.reservation[this.props.reservationId];
    //   this.state.date = this.props.reservation[this.props.reservationId].date.slice(0,10);
    //
    //   this.state.timeslot = this.props.reservation[this.props.reservationId].timeslot.slice(11,19);
    //
    // }

  }

  componentDidMount(){
    if(this.props.formType === 'Book this Restaurant'){
      this.loadDefaultValues();
    } else{
      this.loadEditValues();
    }
  }

  loadEditValues(){
    const {date,timeslot,head_count} =  this.props.reservations[this.props.reservationId];
    // console.log(date,timeslot)

    // "2017-02-10"
    // "12:34"
    console.log(date,timeslot,head_count);

    this.setState({
      loaded: true,
      head_count: head_count,
      timeslot: timeslot,
      date: date,
      edit: true
    });
  }

  loadDefaultValues(){

    let time = new Date();

    let today = time.getDate().toString();

    let year = time.getFullYear().toString();

    let month = (time.getMonth() + 1);
    let format_month = month < 10? `0${month}`: month;
    let format_today = today >= 10? today: `0${today}`;

    let hour = time.getHours() < 10? `0${time.getHours()}`: time.getHours();
    let mins = time.getMinutes() < 10? `0${time.getMinutes()}`: time.getMinutes();

    // console.log(hour,mins, "HERE");
    this.setState({
        timeslot: `${hour}:${mins}`,
        head_count: "",
        date: `${year}-${format_month}-${format_today}`,
        loaded: true,
        edit: false
      });
  }

  componentWillMount(){

    this.props.clearErrors();
  }

  handleSubmit(e){
    e.preventDefault();

    //edit --> reservation_id
    //create --> restaurant_id



    const reservationPrototype = {
      head_count:this.state.head_count,
      timeslot: this.state.timeslot,
      date: this.state.date
    };

    if(this.state.edit === true){
      // const reservation_id = this.props.reservationId;
      // const reservation = {head_count:head_count, timeslot: timeslot, date: date, reservation_id: reservation_id};
      let reservation = Object.assign({},reservationPrototype, this.props.reservationId )

      this.props.editReservation(reservation),then( () => this.props.history.push('/profile'));
    } else {


        let reservation = Object.assign(
          {},
          reservationPrototype,
          {user_id:this.props.currentUser.id},
          {restaurant_id:this.props.match.params.restId}
        );

        console.log(reservation, "reservation object");

        this.props.createReservation(reservation).then(() => this.props.history.push('/profile'));
    }

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
    // let restaurantId = parseInt(this.props.match.params.restaurantId);
    // console.log(this.state.timeslot);
    // if(this.state.loaded === false){
    //   return null;
    // }
    // console.log(this.state.date, "HERE");
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
        type="time"/>




        <button type="button" onClick={this.handleSubmit} className = "reservation-form-button"> {this.props.formType} </button>

        </div>


        {this.renderErrors()}


      </div>
    )
  }


}

export default ReservationForm;
