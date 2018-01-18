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
                <img className = "featured-areas-img" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Chicago_Theatre_blend.jpg"/>
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


            <div className = "media">
              <Link to="/San-Francisco">
                 <img className = "featured-areas-img" src="  https://wallpapercave.com/wp/amoYyVx.jpg"/>
              </Link>
              <div className = "center">
                 Miami

               </div>
            </div>


            <div className = "media">
              <Link to="/San-Francisco">
                 <img className = "featured-areas-img" src="  http://www.trbimg.com/img-58fe77bd/turbine/la-me-ln-hollywood-sign-20170415"/>
              </Link>
              <div className = "center">
                 Los Angeles
              </div>
            </div>


            <div className = "media">
              <Link to="/San-Francisco">
                 <img className = "featured-areas-img" src="https://wallpapercave.com/wp/MvtBAPM.jpg"/>
              </Link>
              <div className = "center">
                  Las Veg
              </div>
            </div>







          </div>

        </div>


      </div>
    );
  }

};

export default MainPage;
