import React from 'react';
import {Link} from 'react-router-dom';
const MainPage = () => (


  <div className = "main-page">
    <div className = "featured-areas">
      <h1 className = "main-page-h1"> Explore Restaurants </h1>
      <hr/>

      <div className = "featured-areas-row1">
        <div className = "col-1-3">

          <img className = "featured-areas-img" src="http://travelhdwallpapers.com/wp-content/uploads/2014/04/Statue-Of-Liberty-24.jpg"/>
          <div className = "center">
            New York City
          </div>

        </div>

        <div className="col-1-3">
          <img className = "featured-areas-img" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Chicago_Theatre_blend.jpg"/>

          <div className = "center">
            Chicago
          </div>

        </div>


        <div className="col-1-3">
          <img className = "featured-areas-img" src="http://dobsonchronicles.com/wp-content/uploads/2016/08/SF.jpg"/>

          <div className = "center">
            San Francisco
          </div>

        </div>

      </div>








      <div className = "-featured-areas-row2">


      </div>

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







// <div className= "main-page-reservation">
//
//
//
// <select className = "main-page-reservation-select">
//     <option value="" disabled >
//     1 People</option>
//
//
//     <option value={1}> 1 people</option>
//     <option value={2}> 2 people</option>
//     <option value={3}> 3 people</option>
//     <option value={4}> 4 people</option>
//     <option value={5}> 5 people</option>
//
//   </select>
//
//
//   <select className = "main-page-reservation-select">
//       <option value="" disabled>
//         7:00 PM </option>
//
//       <option value="7:00 PM" type ="text">7:00 PM</option>
//
//   </select>
//
//
// <input type="text" className = "search-input"
//   name="search"
//   placeholder="Location, Restaurant..">
// </input>
//
//   <button type="button" className = "search-button"> Find a Table </button>
//
//
// </div>
