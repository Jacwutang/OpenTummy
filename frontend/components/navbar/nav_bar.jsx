import React from 'react';
import {Link} from 'react-router-dom';

const sessionLinks = () => {
  return(
    <header className = "header-nav">

    <div className = "main-div">
      <span className = "header-nav-icon">
      <a href="/">
      <i className="fa fa-cutlery fa-4x" aria-hidden="false"></i>
      </a>
      </span>

      <span className = "location-search-container">
        <span>
          <i className="fa fa-map-marker location-search-container" aria-hidden="true"></i>
        </span>

        <input className = "location-search-input"
        type="text"
        placeholder="Locations"></input>
      </span>

      <span className = "header-title">


         OpenTummy


      </span>

    </div>




      <nav className = "header-nav-session">
        <Link to= "/login">
          <button type="button">Login</button>
        </Link>

        <Link to= "/signup">
          <button type="button">Sign Up</button>
        </Link>

      </nav>

    </header>
  )


};


const loggedInShow = (currentUser,logout) => (
  <header className = "header-nav">
  <div className = "main-div">
    <span className = "header-nav-icon">
      <a href="/">
      <i className="fa fa-cutlery fa-4x" aria-hidden="false"></i>
      </a>
     </span>

    <span className = "location-search-container">
      <span>
        <i className="fa fa-map-marker location-search-container" aria-hidden="true"></i>
      </span>

      <input className = "location-search-input"
      type="text"
      placeholder="Locations"></input>
    </span>

    <span className = "header-title">
          OpenTummy
    </span>

    </div>

    <span className = "header-nav-session">
      Welcome, {currentUser.username}
      <Link to= "/profile">
        <button type="button">Profile</button>
      </Link>

      <button onClick={logout}>Logout</button>

    </span>



  </header>
);

const NavBar = ({currentUser,logout}) => (

  currentUser ? loggedInShow(currentUser,logout) : sessionLinks()

);

export default NavBar;
