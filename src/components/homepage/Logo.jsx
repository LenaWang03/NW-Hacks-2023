import '../../styles/Home.css';
import LeafLogo from "../../assets/leaf.svg";

function Logo() {
  return (
    <div className="homepage-logo">
      <img className="logo-leaf" src={LeafLogo} alt=""/>
      <h1 className="logo-text">
        mindful<b>U</b>
      </h1>
    </div>
  );
}

export default Logo;
