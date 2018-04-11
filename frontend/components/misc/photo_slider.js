import React from "react";
import Slider from "react-slick";


class PhotoSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,

    };

    const [img1,img2,img3,img4] = this.props.images;

    

    return (
      <Slider {...settings}>
         <div>
           <img src={`${img1}`} />
         </div>
         <div>
           <img src={`${img2}`} />
         </div>
         <div>
           <img src={`${img3}`} />
         </div>
         <div>
           <img src={`${img4}`} />
         </div>

       </Slider>
    );
  }
}

export default PhotoSlider;
