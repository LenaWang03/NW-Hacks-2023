import { useState } from 'react';
import '../../styles/LeftNav.css'
import { Link } from 'react-scroll';
// import {FontAwesomeIcon}
import HomeLogo from '../../assets/house-solid.svg'
import MiuLogo from '../../assets/miu-icon.svg'
import LocationLogo from '../../assets/map-location-dot-solid.svg'
import ResourceLogo from '../../assets/resource-icon.svg'

function LeftNav() {
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
      <Link activeClass="active" className="link" smooth spy to="map" style={{cursor: 'pointer'}}>
      <img src={LocationLogo} className="icon"/>
      </Link>
    </nav>
  );
}

export default LeftNav;
