import Heading from './components/Heading'
import Description from './components/description'
import CurrentTime from './components/CurrentTime.'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


function App() {
  
  return (
    <div className='app-container'>
      <Heading></Heading>
      <Description></Description>
      <CurrentTime></CurrentTime>
    </div>
  )
}

export default App
