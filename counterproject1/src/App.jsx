import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 // let counter =5;
  let [counter,setcounter]=useState(15);
  const addvalue=()=>{
    if(counter<20){
    counter =counter+1;
    setcounter(counter)
    }
  }

  const removevalue=()=>{
    if(counter>0){
    counter =counter-1;
    setcounter(counter)
    }
  }
  return (
   <>
   <h1>chai our react </h1>
   <h2>counter value {counter}</h2>
   <button
   onClick={addvalue}>add value</button>
   <br />
   <button onClick={removevalue}>decreace value</button>
   </>
  )
}

export default App
