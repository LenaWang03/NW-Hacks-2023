import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import LeftNav from './components/LeftNav';
import Home from './components/Home';
import Focus from './components/Focus'
import { Link } from 'react-scroll';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/focus" element={<Focus />}/>
        <Route path="/map" element={<Map />}></Route>
      z</Routes>
    </BrowserRouter>
  );
}

export default App;
