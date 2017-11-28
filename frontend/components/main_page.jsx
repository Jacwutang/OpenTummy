import React from 'react';
import {Link} from 'react-router-dom';
const MainPage = () => (


  <div className = "main-page">
    MainPage

    <div className= "main-page-reservation">

    <Link to="/restaurants">
      <button type="button">Browse all Restaurants</button>
    </Link>

    <select className = "main-page-reservation-select">
        <option value="" disabled >
        1 People</option>


        <option value={1}> 1 people</option>
        <option value={2}> 2 people</option>
        <option value={3}> 3 people</option>
        <option value={4}> 4 people</option>
        <option value={5}> 5 people</option>

      </select>


      <select className = "main-page-reservation-select">
          <option value="" disabled>
            7:00 PM </option>

          <option value="7:00 PM" type ="text">7:00 PM</option>

      </select>


    <input type="text" className = "search-input"
      name="search"
      placeholder="Location, Restaurant..">
    </input>

      <button type="button" className = "search-button"> Find a Table </button>


    </div>


  </div>

)

export default MainPage;

// <i className="fa fa-search fa-3x" aria-hidden="true"></i>


// <form>
//
// <span>
//
//   <input type="text" className = "search-input"
//   name="search"
//   placeholder="Location, Restaurant.."></input>
//
//   <button type="button" className = "search-button"> Find a Table </button>
// </span>
//
// </form>
