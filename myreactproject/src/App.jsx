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
     
      <div>
      <h1>{heading}</h1>
      
      <form className='form-div'>
      <input type="text"  placeholder='What is your name?'/>
      <button style={{backgroundColor: ismouseover ? "black" : "white"}}

       onClick={handleClick}
       onMouseOver={handleMouseOver}
       onMouseOut={handleMouseOut}
       >Submit</button>

      </form>
      

      </div>
    
    </>
  )
}


export default App

