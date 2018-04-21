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

      let reservation = Object.assign(
        {},
        reservationPrototype,
        {id: this.props.reservationId},
        {user_id: this.props.currentUser.id},
        {restaurant_id: this.props.match.params.restId}
      );

      this.props.editReservation(reservation).then(() => this.props.history.push('/profile'));

    } else {


        let reservation = Object.assign(
          {},
          reservationPrototype,
          {user_id:this.props.currentUser.id},
          {restaurant_id:this.props.match.params.restId}
        );

      

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
