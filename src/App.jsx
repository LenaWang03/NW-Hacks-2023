import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Meditation from './components/Meditation'
import { Link } from 'react-scroll';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meditation" element={<Meditation />}/>
        {/* <Route path="/map" element={<Map />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
