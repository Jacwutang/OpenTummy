import React from "react";
import Slider from "react-slick";
// @import 'slick-carousel/slick/slick.css';
// @import 'slick-carousel/slick/slick-theme.css';



class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      
    };
    return (
      <Slider {...settings}>
         <div>
           <img src="http://placekitten.com/g/400/200" />
         </div>
         <div>
           <img src="http://placekitten.com/g/400/200" />
         </div>
         <div>
           <img src="http://placekitten.com/g/400/200" />
         </div>
         <div>
           <img src="http://placekitten.com/g/400/200" />
         </div>
       </Slider>
    );
  }
}

export default SimpleSlider;
