import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setcounter] = useState(15)
const addvalue =() =>{
setcounter(counter+1)
}
const decresevalue =() =>{
  setcounter(counter-1)
  }
  

  return (
    <>
      <h1>Counter With React</h1>
      <h2>the count is : {counter}</h2>
      <button onClick={addvalue}>Increse Count</button>
      <br />
      <button onClick={decresevalue}>decrese count</button>
    </>
  )
}

export default App
