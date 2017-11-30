import React from 'react';


class Search extends React.Component{
    constructor(props){
      super(props);
      this.state = {query: '', restaurants: []};
    }

    handleInput(query){
      // console.log(this.state.query);
      return ( e =>
        this.setState({query: e.target.value })
      );

    }

    findMatches(){
      // this.props.searchAllRestaurants(this.state.query)
      this.props.searchAllRestaurants(this.state.query);
      // return(
      //   this.props.searchAllRestaurants(this.state.query).then( (resturants) => this.renderMatches(restaurants) )
      // );
      //  this.props.processRestaurant(restaurant).then(() => this.props.history.push('/profile'));
    }

    renderMatches(){

      if(this.props.results === undefined){
        return;
      }

      var results = Object.keys(this.props.results).map( (id) => this.props.results[id] )

      return(
        <ul>
          {results.map( (restaurant) =>
            <li
            key= {restaurant.id}>
            {restaurant.name}

            </li>

           )}

        </ul>
      );

    }



    render(){
      if(this.state.query !== ''){
          this.findMatches();
      }

      return(
        <span className = "location-search-container">
          <span>
            <i className="fa fa-map-marker location-search-container" aria-hidden="true"></i>
          </span>

          <input className = "location-search-input"
          type="text"
          onChange={this.handleInput('query')}
          value={this.state.query}
          placeholder="Locations">
          </input>
          {this.renderMatches()}




        </span>
      );
    }


}



export default Search;
