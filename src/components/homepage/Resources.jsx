import Resource from './about/Resource';
import '../../styles/Home.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react-dom';
import LeftArrow from '../../assets/arrow-left.svg';
import RightArrow from '../../assets/arrow-right.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Home.css'; 
import rone from "../../assets/resource-one.png";


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "lightgreen", color: "green"}}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "lightgreen", color: "green" }}
        onClick={onClick}
      />
    );
  }

function Resources() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
   
  return (
    <div className="resources">
      <h2 className="green resources-header">General Resources</h2>
      <Carousel
        responsive={responsive}
      >
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
      </Carousel>
    <div className="overall">
      <div className="resources">
        <h2 className="green resources-header">General Resources</h2>
        <Slider {...settings}>
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
        </Slider>
      </div>
    </div>
  );
}

export default Resources;
