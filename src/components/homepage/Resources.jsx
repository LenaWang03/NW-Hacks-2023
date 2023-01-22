import Resource from './about/Resource';
import '../../styles/Home.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react-dom';
import LeftArrow from '../../assets/arrow-left.svg';
import RightArrow from '../../assets/arrow-right.svg';

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
    </div>
  );
}

export default Resources;
