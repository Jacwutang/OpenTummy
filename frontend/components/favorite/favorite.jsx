import React from 'react';

class Favorite extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.clearErrors();
  }

  render(){
    return(
      <h1> Favorite Container </h1>
    );
  }


}

export default Favorite;
