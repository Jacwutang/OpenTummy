import React from 'react';
import {Link} from 'react-router-dom';

const sessionLinks = () => {
  return(
    <nav>
      <Link to= "/login">Login</Link>
      <Link to= "/signup">Sign Up</Link>
    </nav>
  )


};


const loggedInShow = () => {
  return {};


}




const NavBar = ({currentUser,logout}) => (
  currentUser? loggedInShow(currentUser, logout) : sessionLinks()

);

export default NavBar;
