import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount]=useState(0)

  function increaseCount(){
    if (count==20){
      return
    }
    setCount(++count)
  }

  function decreaseCount(){
    if(count==0){
      return
    }
    setCount(--count)
  }

  return (
    <>
    <h1>Welcome to Counter</h1>
    <p>Count from 0 to 20</p>
    <h2>Count is: {count}</h2>

    <button onClick={decreaseCount}>Decrement</button>
    <button onClick={increaseCount}>Increment</button>
    </>
  )
}



export default App
