import Logo from './Logo';
import Headline from './Headline';
import Button from './Button';
import Landing from "../../assets/Landing@4x.png";
import divider from "../../assets/Div.png";

function Home() {
  return (
    <div className = "home">
      <div className = "landing">
        <div className = "landing-info">
          <Logo />
          <Headline />
          
        </div>
        <div className = "landing-img">
        <img className = "img-l" src={Landing} alt=""/>
        </div>
      </div>
      <img className = "divider" src={divider} alt=""/>
    </div>
  );
}

export default Home;
