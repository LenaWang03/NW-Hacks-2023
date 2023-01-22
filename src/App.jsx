import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import { Link } from 'react-scroll';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Home/>
  );
}

export default App;
