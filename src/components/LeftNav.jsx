import { useState } from 'react'
import '../styles/LeftNav.css'

function LeftNav() {
  const [count, setCount] = useState(0)

  return (
    <nav className="sidenav">
        <a>Home</a>
        <a>About</a>
        <a>FAQ</a>
    </nav>
  )
}

export default LeftNav;
