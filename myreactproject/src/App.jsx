import { useState } from 'react'
import './App.css'

function App() {
  
//  const [heading,setHeading] = useState("Hello");
 const [word,setWord]=useState("");
 const [test,setTest]=useState("");
 const [ismouseover, setMouseOver] = useState(false)

 
 const handleClick=(e)=>{
  e.preventDefault()
  setTest(word);
  setWord("")
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
      <h1>Hello {test}</h1>

      <form className='form-div'>
      <input type="text" value={word}  placeholder='What is your name?' onChange={(e)=>{setWord(e.target.value)}}/>
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

