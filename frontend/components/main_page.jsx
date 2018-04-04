import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';

class MainPage extends React.Component{
  constructor(props){
    super(props);

    // this.state = {
    //   open: false
    //
    // }

  }

  componentDidMount(){
    this.props.requestAllRestaurants().then(() => this.openModal());
  }

  openModal(){

    debugger;
    <Modal open={true} little>
      <h2> Hi </h2>
    </Modal>
  }

  // onOpenModal(){
  //   this.setState({ open: true })
  // }
  //
  // onCloseModal(){
  //   this.setState({ open: false });
  //
  // }



  render(){

    return(
      <div className = "main-page">
        <div className = "main-content">


          <div className = "featured-areas">

            <div className = "media">
            <Link to = "/New-York">
                <img className = "featured-areas-img" src="http://travelhdwallpapers.com/wp-content/uploads/2014/04/Statue-Of-Liberty-24.jpg"/>

                <div className = "center">
                  New York City
                </div>
            </Link>
            </div>

              <div className = "media">
              <Link to="/Chicago">
                  <img className = "featured-areas-img" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Chicago_Theatre_blend.jpg"/>

                  <div className = "center">
                    Chicago
                  </div>
              </Link>
              </div>

              <div className = "media">
                <Link to="/San-Francisco">
                    <img className = "featured-areas-img" src="http://dobsonchronicles.com/wp-content/uploads/2016/08/SF.jpg"/>

                    <div className = "center">
                       San Francisco
                     </div>
                </Link>
              </div>


            <div className = "media">
              <Link to="/Miami">
                  <img className = "featured-areas-img" src="  https://wallpapercave.com/wp/amoYyVx.jpg"/>

                  <div className = "center">
                     Miami
                  </div>

              </Link>

            </div>


            <div className = "media">
              <Link to="/Los-Angeles">
                  <img className = "featured-areas-img" src="  http://www.trbimg.com/img-58fe77bd/turbine/la-me-ln-hollywood-sign-20170415"/>

                  <div className = "center">
                     Los Angeles
                  </div>
              </Link>
            </div>


            <div className = "media">
              <Link to="/Las-Vegas">
                 <img className = "featured-areas-img" src="https://wallpapercave.com/wp/MvtBAPM.jpg"/>

                  <div className = "center">
                      Las Vegas
                  </div>

              </Link>
            </div>


          </div>

        </div>


      </div>
    );
  }

};

export default MainPage;
