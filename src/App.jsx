import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LeftNav from './components/LeftNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LeftNav/>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente perspiciatis aut, dolorem at harum dolores, adipisci, porro amet minima quis laboriosam sed molestias iure ratione. Eveniet earum fuga voluptatum?
      </p>
    </div>
  )
}

export default App
