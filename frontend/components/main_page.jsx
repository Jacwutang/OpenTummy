import React from 'react';
import {Link} from 'react-router-dom';

class MainPage extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllRestaurants();
  }

  render(){
    return(
      <div className = "main-page">
        <div className = "main-content">


          <div className = "featured-areas">
            <div className = "media">
            <Link to = "/New-York">
              <img className = "featured-areas-img" src="http://travelhdwallpapers.com/wp-content/uploads/2014/04/Statue-Of-Liberty-24.jpg"/>
            </Link>
              <div className = "center">
                New York City
              </div>

            </div>

            <div className = "media">
            <Link to="/Chicago">
              <img className = "featured-areas-img" src="https://tctechcrunch2011.files.wordpress.com/2015/02/chicago.jpg"/>
            </Link>
              <div className = "center">
                Chicago
              </div>
            </div>

            <div className = "media">
              <Link to="/San-Francisco">
                 <img className = "featured-areas-img" src="http://dobsonchronicles.com/wp-content/uploads/2016/08/SF.jpg"/>
              </Link>
              <div className = "center">
                 San Francisco
               </div>
            </div>
          </div>

        </div>


      </div>
    );
  }

};

export default MainPage;


// <div className = "content-block-header">
//   <h1>Featured Areas </h1>
// </div>





// <div className = "main-page">
//   <div className = "featured-areas">
//     <h1 className = "main-page-h1"> Explore Restaurants </h1>
//     <hr/>
//
//     <div className = "featured-areas-row1">
//       <div className = "col-1-3">
//
//         <img className = "featured-areas-img" src="http://travelhdwallpapers.com/wp-content/uploads/2014/04/Statue-Of-Liberty-24.jpg"/>
//         <div className = "center">
//           New York City
//         </div>
//
//       </div>
//
//       <div className="col-1-3">
//         <img className = "featured-areas-img" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Chicago_Theatre_blend.jpg"/>
//
//         <div className = "center">
//           Chicago
//         </div>
//
//       </div>
//
//
//       <div className="col-1-3">
//         <img className = "featured-areas-img" src="http://dobsonchronicles.com/wp-content/uploads/2016/08/SF.jpg"/>
//
//         <div className = "center">
//           San Francisco
//         </div>
//
//       </div>
//
//     </div>
//
//
//
//
//   </div>
//
//
//
// </div>
