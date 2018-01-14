//Make the SessionForm


import {connect} from 'react-redux';
import SessionForm from './session_form';
import {withRouter} from 'react-router';
import {login, signup,logout, receiveErrors} from '../../actions/session_actions';


const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session


});

const mapDispatchToProps = (dispatch, ownProps) => {
  //check the current url for formType

  // (ownProps.location.pathname);

  const formType = ownProps.location.pathname.slice(1);
  const processForm = (ownProps.location.pathname.slice(1) === "login") ? login : signup;

  return{
    processForm: (user) => dispatch(processForm(user)),
    demoLogin: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(receiveErrors([])),
    formType
  }


};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
