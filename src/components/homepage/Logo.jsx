import "../../styles/Home.css";
import LeafLogo from "../../assets/leaf.svg";

function Logo() {
  return (
    <div className="" style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', width: '80vw', position: 'absolute', top: '5em'}}>
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <img className="logo-leaf" src={LeafLogo} alt="" />
        <h1 className="logo-text">
          mindful<b>U</b>
        </h1>
      </div>
      <a href="/meditation">
        <button style={{ textAlign: "right", right: "0"}} className="link-btn">
          Meditate
        </button>
      </a>
    </div>
  );
}

export default Logo;
