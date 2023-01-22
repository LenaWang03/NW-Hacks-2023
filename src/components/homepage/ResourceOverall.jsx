import Resources from './Resources';
import Resource from './about/Resource';
import rone from "../../assets/resource-one.png";
import rtwo from "../../assets/rtwo.png";
import rthree from "../../assets/rthree.png";
import rfour from "../../assets/rfour.png";
import lone from "../../assets/lone.png";
import ltwo from "../../assets/ltwo.png";
import lthree from "../../assets/lthree.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react-dom';

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

function ResourceOverall() {
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
      <div className = "resource-section">
        <img className = "resource-left" src={rone} alt=""/>
        <div className="resources">
            <h2 className="green resources-header">General Resources</h2>
          <Carousel
            responsive={responsive}
          >
            <Resource resource="Here2Talk" link="https://here2talk.ca/" text="Free, 24/7 single-session counselling by phone or online chat, no matter where you are in the world."/>
            <Resource resource="Foundry" link="https://foundrybc.ca/" text="Free and confidential support for youth aged 12-24 with services like community centers, online/phone chat and peer support groups."/>
            <Resource resource="Hope for Wellness" link="https://www.hopeforwellness.ca/" text="Helpline available for all Indigenous people across Canada"/>
            <Resource resource="BC Crisis Centre" link="https://crisiscentre.bc.ca/" text="Immediate access to 24/7 distress distress phone lines and online services"/>
            <Resource resource="Bounce Back" link="https://bouncebackbc.ca/" text="Program designed to help adults experiencing symptoms of depression, low mood, and stress."/>
            <Resource resource="Heads Up Guys" link="https://headsupguys.org/" text="Resources, services and programs to improve the mental health and well-being of men"/>
          </Carousel>
        </div>
          <img className = "lineOne" src={lone} alt=""/>
      </div>
      <div className = "resource-section">
      <img className = "resource-right" src={rtwo} alt=""/>
        <div className="resources">
            <h2 className="green resources-header">Self-Help Resources</h2>
          <Carousel
            responsive={responsive}
          >
            <Resource resource="Therapy Assistance Online (TAO)" link="https://www.taoconnect.org/" text="Tools on stress, relationship problems, substance use, and more."/>
            <Resource resource="Wellness Together Canada" link="https://www.wellnesstogether.ca/en-CA" text="Free mental health online assessment, wellness resources and counselling."/>
            <Resource resource="MindHealth BC" link="http://www.mindhealthbc.ca/about-us" text="Connects you to local support groups and community health services suited to your needs"/>
            <Resource resource="Here to Help" link="https://www.heretohelp.bc.ca/" text="Provides information related to mental health through personal stories, and self-help resources."/>
          </Carousel>
        </div>
          <img className = "lineOne" src={ltwo} alt=""/>
      </div>
      <div className = "resource-section">
      <img className = "resource-left" src={rthree} alt=""/>
        <div className="resources">
            <h2 className="green resources-header">The University of British Columbia Resources</h2>
          <Carousel
            responsive={responsive}
          >
            <Resource resource="UBC SAP" link="https://students.ubc.ca/health/ubc-student-assistance-program-sap" text="Free, 24/7 wellness resource for students which includes personal counselling, life coaching, group programs and more based on your needs."/>
            <Resource resource="UBC Counselling" link="https://students.ubc.ca/health/counselling-services" text="Receive help in decision-making, navigating social relationships, or adjusting to major life transitions."/>
            <Resource resource="UBC Group counselling" link="https://students.ubc.ca/health/counselling-services/group-counselling-programs" text="Support groups in an encouraging, supportive, and safe environment."/>
            <Resource resource="AMS Peer Support" link="https://www.ams.ubc.ca/support-services/student-services/peer-support/" text="Free, one-on-one, and confidential conversations with trained volunteers. Run by students, for students.  "/>
          </Carousel>
        </div>
          <img className = "lineOne" src={lthree} alt=""/>
      </div>
      <div className = "resource-section">
      <img className = "resource-right" src={rfour} alt=""/>
        <div className="resources">
            <h2 className="green resources-header">Simon Fraser University Resources</h2>
          <Carousel
            responsive={responsive}
          >
            <Resource resource="SFU Livechat" link="https://www.sfu.ca/students/health/resources/LiveChatSupport.html" text="Receive tips for finding resources or support for specific issues."/>
            <Resource resource="MySSP" link="https://www.sfu.ca/students/health/get-support/my-ssp.html" text="Immediate counselling options by chat, call, or in-person/virtual appointment."/>
            <Resource resource="International Student Support" link="https://www.sfu.ca/students/health/resources/identity/SupportForInternationalStudents.html" text="Assistance with understanding Canadian services."/>
            <Resource resource="SFU Group Counselling:" link="https://www.sfu.ca/students/health/get-support/support-groups/virtual-programs-tags/all-groups.html" text="Support groups in a supportive and safe environment to help you connect with other students."/>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ResourceOverall;