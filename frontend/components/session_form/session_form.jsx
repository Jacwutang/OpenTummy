import React from 'react';



//SessionForm is class bc needs to hold state
class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

  }






  render(){

    return(
      <form onSubmit={this.handleSubmit}>
        Welcome to OpenTable

        <br/>

        <label> Username:
        <input
          value={this.state.username}
          type="text" />
        </label>

        <br/>

        <label> Password:
        <input
          value={this.state.password}
          type="password" />
          
        </label>



      </form>

    )

  }


}


export default SessionForm;
