import './App.css';
import Home from './components/Home';
import About from './components/About';
import LeftNav from './components/homepage/LeftNav';
import { Link } from 'react-scroll';

function App() {

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
