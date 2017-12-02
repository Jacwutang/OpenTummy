import React from 'react';
import {Link, Route} from 'react-router-dom';



class RestaurantIndexItem extends React.Component{

  constructor(props){
    super(props);

  }





  // const category = (rest.category === null) ? "No Category" : rest.category;

  samplePrice(){
    let sampleArr = ['$','$$','$$$','$$$$','$$$$$'];
    let sampleRes = sampleArr[Math.floor(Math.random() * sampleArr.length)];

    return sampleRes;
  }

  render(){
    const {rest} = this.props;
    // console.log(rest);

    const category = (rest.category === null) ? "No Category" : rest.category;

    return(

      <li className = "restaurant-index-li">
          <div className = "restaurant-index-left-div">
          <Link to={`/restaurants/${rest.id}`}>
            <img className = "thumbnail" src={rest.thumbnail}/>
          </Link>

              <h2> {rest.name} </h2>
              <h3 className = "h3-restaurant-index-item-price"> {this.samplePrice()} </h3>


            <br/>
            <h3 className = "h3-restaurant-index-item"> Average Rating *** </h3>
            <br/>
              <h3 className = "h3-restaurant-index-item"> {category} | {rest.city} </h3>
            <br/>

          <i className="fa fa-fire fa-2x" aria-hidden="true"></i>  Booked 25 times today!

          </div>

          <div className = "restaurant-index-right-div">
            <h3 className ="review-h3"> Dope. Would come again 10/10. </h3>
            <br/>
            <br/>
            <h4 className = "user-h4"> -Username </h4>



          </div>




      </li>

    );
  }

};

export default RestaurantIndexItem;
