import React from 'react';
import Profile from './profile';
import {connect} from 'react-redux';


//profile container needs to know currentUser
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser


});



const mapDispatchToProps = (dispatch) => ({
  


});






export default connect(mapStateToProps,mapDispatchToProps)(Profile);
