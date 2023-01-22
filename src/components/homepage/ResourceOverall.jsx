import Resources from './Resources';
import rone from "../../assets/resource-one.png";
import rtwo from "../../assets/rtwo.png";
import rthree from "../../assets/rthree.png";
import rfour from "../../assets/rfour.png";
import lone from "../../assets/line-one.png";
import ltwo from "../../assets/ltwo.png";
import lthree from "../../assets/lthree.png";



function ResourceOverall() {
  return (
    <div className="overall">
      <div className = "resource-section">
          <img className = "resource-left" src={rone} alt=""/>
          <div className = "slider">
            < Resources />
          </div>
          <img className = "lineOne" src={lone} alt=""/>
      </div>
      <div className = "resource-section">
          <img className = "resource-right" src={rtwo} alt=""/>
          <div className = "slider">
            < Resources />
          </div>
          <img className = "lineOne" src={ltwo} alt=""/>
      </div>
      <div className = "resource-section">
          <img className = "resource-left" src={rthree} alt=""/>
          <div className = "slider">
            < Resources />
          </div>
          <img className = "lineOne" src={lthree} alt=""/>
      </div>
      <div className = "resource-section">
          <img className = "resource-right" src={rfour} alt=""/>
          <div className = "slider">
            < Resources />
          </div>
      </div>
    </div>
  );
}

export default ResourceOverall;