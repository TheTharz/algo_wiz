import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArrayBars from './components/ArrayBars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ArrayBars/>
    </>
  )
}

export default App
