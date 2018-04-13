import React from 'react';
import {Link} from 'react-router-dom';
import SearchContainer from '../search/search_container';

const sessionLinks = (searchResults,searchAllRestaurants) => {
  return(
    <header className = "header-nav">

    <div className = "left-nav-div">
      <span className = "header-nav-icon">
      <a href="/">
       <i className="fa fa-cutlery fa-3x" aria-hidden="false"></i>
      </a>
      </span>

      <SearchContainer
      />


    </div>

    <div className="header-title">
    OpenTummy

    </div>




      <span className = "header-nav-session">
        <Link to= "/login">
          <button type="button">Login</button>
        </Link>

        <Link to= "/signup">
          <button type="button">Register</button>
        </Link>

      </span>

    </header>
  )


};

const loggedInShow = (currentUser,logout) => (
  <header className = "header-nav">
  <div className = "left-header-div">
    <span className = "header-nav-icon">
      <a href="/">
      <i className="fa fa-cutlery fa-3x" aria-hidden="false"></i>
      </a>
     </span>

     <SearchContainer

     />

  </div>

  <div className="header-title">
    OpenTummy

  </div>

    <span className = "header-nav-session">
      Welcome, {currentUser.username}
      <Link to= "/profile">
        <button type="button">Profile</button>
      </Link>

      <button type="button" onClick={logout}>Logout</button>

    </span>



  </header>
);


const NavBar = ({currentUser,logout}) => (

  currentUser ? loggedInShow(currentUser,logout)
  : sessionLinks()

);

export default NavBar;




      // <span className = "header-title">
      //
      //
      //    OpenTummy
      //
      //
      // </span>
