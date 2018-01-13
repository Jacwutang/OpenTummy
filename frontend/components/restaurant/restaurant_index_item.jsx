import React from 'react';
import ReactStars from 'react-stars';
import {Link, Route} from 'react-router-dom';



class RestaurantIndexItem extends React.Component{

  constructor(props){
    super(props);

  }


  samplePrice(){
    let sampleArr = ['$','$$','$$$','$$$$','$$$$$'];
    let sampleRes = sampleArr[Math.floor(Math.random() * sampleArr.length)];

    return sampleRes;
  }

  render(){
    const {rest} = this.props;


    const category = (rest.category === null) ? "No Category" : rest.category;

    return(

      <li className = "restaurant-index-li">
          <div className = "restaurant-index-left-div">
          <Link to={`/restaurants/${rest.id}`}>
            <img className = "thumbnail" src={rest.thumbnail}/>
          </Link>

            <div className = "restaurant-index-left-div-rest">

              <Link to={`/restaurants/${rest.id}`}>
                <h2 className = "restaurant-index-title">     {rest.name} </h2>
              </Link>



              <span>
                <h3>
                  <ReactStars
                    count={5}
                    size={24}
                    color2={'#ffd700'}
                    value={Math.floor(Math.random() * Math.floor(4)) + 1}
                    edit={false}/>

                  <span> 165 Reviews </span>
                </h3>
              </span>

              <h3> {category} </h3>


              <div>
                <i className="fa fa-fire fa-2x" aria-hidden="true"></i>
                <span className = "icon-span-restaurant-index"> Booked 25 times today! </span>
              </div>

            </div>

          </div>

          <div className = "restaurant-index-right-div">
          <h2>
            $$$$
          </h2>

          <h2>
            {rest.city}
          </h2>

          </div>









      </li>

    );
  }

};

export default RestaurantIndexItem;
