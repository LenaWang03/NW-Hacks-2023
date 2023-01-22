import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import LeftNav from './components/LeftNav';
import Home from './components/Home';
import About from './components/About';
import { Link } from 'react-scroll';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LeftNav />
      <section className="" id="home">
        <Home />
      </section>
      <section className="" id="about">
        <About/>
      </section>
      <section className="" id="faq"></section>
    </div>
  );
}

export default App;
