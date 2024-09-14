import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  let ColorArr=["Red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "teal"]
  const [color,setColor]=useState('white')

  function handleButtonClick(buttonColor){
    setColor(buttonColor)
  }

  return (
    <>
      <div className='w-full h-screen transition-colors' style={{backgroundColor: color}}>
        <div className='bg-white h-14 mx-16 rounded-xl flex justify-between items-center gap-4 overflow-scroll border fixed bottom-20'>
          {
            ColorArr.map((buttonColor)=>(
              <Button buttonColor={buttonColor} handleButtonClick={handleButtonClick}></Button>
            ))
          }
        </div>
        
        
      </div>
    </>
  )
}

export default App
