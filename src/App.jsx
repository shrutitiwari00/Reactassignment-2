import { useState } from 'react'
import './App.css'
import Maincomponent from '../../../vite-project/src/Maincomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Maincomponent/>
    </>
  )
}

export default App
