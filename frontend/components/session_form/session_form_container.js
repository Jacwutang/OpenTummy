//Make the SessionForm


import {connect} from 'react-redux';
import SessionForm from './session_form';
import {withRouter} from 'react-router';
import {login, signup,logout} from '../../actions/session_actions';


const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session


});

const mapDispatchToProps = (dispatch, ownProps) => {
  //check the current url for formType

  // console.log(ownProps.location.pathname);

  const formType = ownProps.location.pathname.slice(1);
  const processForm = (ownProps.location.pathname.slice(1) === "login") ? login : signup;

  return{
    processForm: (user) => dispatch(processForm(user)),
    login: (user) => dispatch(login(user)),
    formType
  }


};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
