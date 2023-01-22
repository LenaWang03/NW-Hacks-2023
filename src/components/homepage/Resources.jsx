import Resource from './about/Resource';
import '../../styles/Home.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react-dom';
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

function Resources({title}) {
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
    <div className="overall">
      <div className="resources">
          <h2 className="green resources-header">{title}</h2>
        <Carousel
          responsive={responsive}
        >
          <Resource resource="Here2Talk" link="https://here2talk.ca/" text="Free, 24/7 single-session counselling by phone or online chat, no matter where you are in the world."/>
          <Resource resource="Foundry" link="https://foundrybc.ca/" text="Free and confidential support for youth aged 12-24 with services like community centers, online/phone chat and peer support groups."/>
          <Resource resource="Hope for Wellness" link="https://www.hopeforwellness.ca/" text="Hope for Wellness: Helpline available for all Indigenous people across Canada"/>
          <Resource resource="BC Crisis Centre" link="https://crisiscentre.bc.ca/" text="Immediate access to 24/7 distress distress phone lines and online services"/>
          <Resource resource="Bounce Back" link="https://bouncebackbc.ca/" text="Program designed to help adults experiencing symptoms of depression, low mood, and stress."/>
          <Resource resource="Heads Up Guys" link="https://headsupguys.org/" text="Resources, services and programs to improve the mental health and well-being of men"/>
        </Carousel>
      </div>
    </div>
  );
}

export default Resources;
