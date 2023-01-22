import { useState } from 'react';
import '../../styles/LeftNav.css'
import { Link } from 'react-scroll';
// import {FontAwesomeIcon}
import HomeLogo from '../../assets/house-solid.svg'
import MiuLogo from '../../assets/miu-icon.svg'
import ResourceLogo from '../../assets/resource-icon.svg'

function LeftNav() {
  const [count, setCount] = useState(0);

  return (
    <nav className="sidenav">
      <Link activeClass="active" className="link" smooth spy to="home" style={{cursor: 'pointer'}}>
      <img src={HomeLogo} className="icon"/>
      </Link>
      <Link activeClass="active" className="link" smooth spy to="about" style={{cursor: 'pointer'}}>
      <img src={MiuLogo} className="icon" />
      </Link>
      <Link activeClass="active" className="link" smooth spy to="resources" style={{cursor: 'pointer'}}>
      <img src={ResourceLogo} className="icon"/>
      </Link>
    </nav>
  );
}

export default LeftNav;
