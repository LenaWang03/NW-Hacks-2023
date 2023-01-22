import Resource from './about/Resource';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent", color: "green"}}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent", color: "green" }}
        onClick={onClick}
      />
    );
  }

function Resources() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="resources">
      <h2>General Resources</h2>
      <Slider {...settings}>
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
      </Slider>
    </div>
  );
}

export default Resources;
