import React from 'react';
import { Link} from 'react-router-dom';
// import {withRouter} from 'react-router';


//SessionForm is class bc needs to hold state
class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    //after render, activate this method
  if (nextProps.loggedIn) {
    this.props.history.push('/');
  }
  }

  handleSubmit(e){
    e.preventDefault();
    //2 options: (1) signup user (2) login user
    const user = this.state;
    this.props.processForm({user});

  }

  handleInput(field){
    return ( e =>
      this.setState({[field]: e.target.value })
    )
  }



  navLink(){
    return (this.props.formType === 'login' ? <Link to= "/signup"> Sign Up </Link>
    : <Link to= "/login"> Log In </Link>
    )

  }

  renderErrors(){
    //if there are any errors render them

    return(
     <ul>
       {this.props.errors.map((error, i) => (
         <li key={`error-${i}`}>
           {error}
         </li>
       ))}
     </ul>
   );
  }

    render(){
      return(
      <form onSubmit={this.handleSubmit}>
        Welcome to OpenTable

        <br/>

        Please {this.props.formType} or {this.navLink()}
        {this.renderErrors()}

        <br/>


        <label> Username:
        <input
          value={this.state.username}
          type="text"
          onChange={this.handleInput('username')} />
        </label>

        <br/>

        <label> Password:
          <input
            value={this.state.password}
            type="password"
            onChange={this.handleInput('password')} />
        </label>

        <br/>

        <button> {this.props.formType} </button>
      </form>

    )

  }


}


export default SessionForm;
