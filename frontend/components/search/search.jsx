import React from 'react';


class Search extends React.Component{
    constructor(props){
      super(props);
      this.state = {query: ''};
    }

    handleInput(query){
      // console.log(this.state.query);
      return ( e =>
        this.setState({query: e.target.value })
      );

    }


    render(){

      return(
        <span className = "location-search-container">
          <span>
            <i className="fa fa-map-marker location-search-container" aria-hidden="true"></i>
          </span>

          <input className = "location-search-input"
          type="text"
          onChange={this.handleInput('query')}
          value={this.state.query}
          placeholder="Locations"></input>
        </span>
      );
    }


}



export default Search;
