import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import LeftNav from './components/LeftNav';
import { Link } from "react-scroll";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LeftNav />
      <section className="" id="home">
        <h2>Home</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
          sapiente perspiciatis aut, dolorem at harum dolores, adipisci, porro
          amet minima quis laboriosam sed molestias iure ratione. Eveniet earum
          fuga voluptatum?
        </p>
      </section>
      <section className="" id="about">
        <h2>About</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
          sapiente perspiciatis aut, dolorem at harum dolores, adipisci, porro
          amet minima quis laboriosam sed molestias iure ratione. Eveniet earum
          fuga voluptatum?
        </p>
      </section>
      <section className="" id="faq">
        <h2>FAQ</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
          sapiente perspiciatis aut, dolorem at harum dolores, adipisci, porro
          amet minima quis laboriosam sed molestias iure ratione. Eveniet earum
          fuga voluptatum?
        </p>
      </section>
    </div>
  );
}

export default App;
