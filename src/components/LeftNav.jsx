import { useState } from 'react';
import '../styles/LeftNav.css';
import { Link } from 'react-scroll';

function LeftNav() {
  const [count, setCount] = useState(0);

  return (
    <nav className="sidenav">
      <Link activeClass="active" className="link" smooth spy to="home">
        Home
      </Link>
      <Link activeClass="active" className="link" smooth spy to="about">
        About
      </Link>
      <Link activeClass="active" className="link" smooth spy to="faq">
        FAQ
      </Link>
    </nav>
  );
}

export default LeftNav;
