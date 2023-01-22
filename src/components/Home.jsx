import { useState } from 'react';
import '../styles/Home.css';
import LeftNav from './homepage/LeftNav';
import Landing from './homepage/Landing';
import { Link } from 'react-scroll';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LeftNav />
      <section className="" id="home">
        <Landing />
      </section>
      <section className="" id="about"></section>
      <section className="" id="faq"></section>
    </div>
  );
}

export default Home;
