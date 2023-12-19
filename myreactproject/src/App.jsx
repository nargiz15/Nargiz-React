import { useState } from 'react'
import './App.css'

function App() {
  
 const [heading,setHeading] = useState("Hello")
 const [ismouseover, setMouseOver] = useState(false)

 
 const handleClick=()=>{
  setHeading("Submitted");
 }
 
  const handleMouseOver=()=>{
    setMouseOver(true);
  }

  const handleMouseOut=()=>{
   setMouseOver(false)
  }
  return (
    <>
     
      <div className='form-div'>
      <h1>{heading}</h1>
      <input type="text"  placeholder='What is your name?'/>
      <button style={{backgroundColor: ismouseover ? "black" : "white"}}
      
       onClick={handleClick}
       onMouseOver={handleMouseOver}
       onMouseOut={handleMouseOut}
       >Submit</button>


      </div>
    
    </>
  )
}


export default App

