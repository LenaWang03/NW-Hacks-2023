import './App.css';
import Home from './components/Home';
import Meditation from './components/Meditation'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meditation" element={<Meditation />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
