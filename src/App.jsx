import { useState } from 'react'
import reactLogo from './assets/react.svg'
import headerImage from './assets/header.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='header'>
      <img src={headerImage} className='header__image' alt="Header background image" />
    </header>
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Hello World with React!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
