import React from 'react';
import { Link, Redirect} from 'react-router-dom';
// import {withRouter} from 'react-router';


//SessionForm is class bc needs to hold state
class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.userDemoLogin = this.userDemoLogin.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  userDemoLogin(){
    return( () => {
      const demoUser = {username: 'demo_user', password: 'password'}
      this.props.demoLogin({user:demoUser})
    })


  }

  componentWillReceiveProps(nextProps) {
    //after render, activate this method
    console.log(this.props, nextProps);
    if (nextProps.match.path !== this.props.match.path) {
     this.props.clearErrors();
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
         <li className = "session-form-li" key={`error-${i}`}>
           {error}
         </li>
       ))}
     </ul>
   );
  }



    render(){
      return(
     <div>
      <form className="session-form" onSubmit={this.handleSubmit}>
        Welcome to OpenTummy

        <br/>

        Please {this.props.formType} or {this.navLink()}
        {this.renderErrors()}

        <br/>


        <label>
        <input
          className = "input-session-form"
          placeholder = "Enter Username"
          value={this.state.username}
          type="text"
          onChange={this.handleInput('username')} />
        </label>

        <br/>

        <label>
          <input
            className = "input-session-form"
            placeholder = "Enter Password"
            value={this.state.password}
            type="password"
            onChange={this.handleInput('password')} />
        </label>

        <br/>

        <button type="submit" className = "input-button"> {this.props.formType} </button>

        <button type="button" className = "input-button"  onClick={this.userDemoLogin()} > Demo Login </button>

        </form>



      </div>
    )

  }


}


export default SessionForm;

// <button className = "input-button" onClick={this.userDemoLogin()} > Demo Login </button>
