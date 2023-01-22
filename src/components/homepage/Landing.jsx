import Logo from './Logo';
import Headline from './Headline';
import Button from './Button';
import Landing from '../../assets/Landing@4x.png';
import divider from '../../assets/Div.png';
import Cloud1 from '../../assets/cloud1.svg';
import Cloud2 from '../../assets/cloud2.svg';
import Cloud3 from '../../assets/cloud3.svg';

function Home() {
  return (
    <div className="home">
      <div className="clouds">
        <img src={Cloud1} alt="Cloud 1" />
        <img src={Cloud2} alt="Cloud 2" />
        <img src={Cloud3} alt="Cloud 3" />
      </div>
      <div className="landing">
        <div className="landing-info">
          <Logo />
          <Headline />
        </div>
        <div className="landing-img">
          <img className="img-l" src={Landing} alt="" />
        </div>
      </div>
      <img className="divider" src={divider} alt="" />
    </div>
  );
}

export default Home;
