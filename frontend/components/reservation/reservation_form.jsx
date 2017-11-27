import React from 'react';


class ReservationForm extends React.Component{
  constructor(props){
    super(props);
  }


  render(){

    return(
    <div>
      <div className = "reservation-div">
      <select className = "reservation-select">
          <option value="" disabled >
          1 People</option>


          <option value={1}> 1 people</option>
          <option value={2}> 2 people</option>
          <option value={3}> 3 people</option>
          <option value={4}> 4 people</option>
          <option value={5}> 5 people</option>

        </select>

        <select className = "reservation-select">
            <option value="" disabled>
              7:00 PM </option>

            <option value="7:00 PM" type ="text">7:00 PM</option>

        </select>


        <button type="button" className = "reservation-form-button"> Book this Restaurant </button>

        </div>





      </div>
    )
  }


}

export default ReservationForm;
