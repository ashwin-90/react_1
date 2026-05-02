import { useState } from "react"

function App() {
  const [color,setColor]=useState("olive")

  return (
  <><div className="w-full  h-screen duration-200 " style={{backgroundColor: color}} >
    <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3  ">
      <button onClick={()=>{setColor("red")}}  className="border border-black px-4 py-2 bg-red-500 rounded-full">red</button>
      <button onClick={()=>{setColor("black")}} className="border border-black px-4 py-2 bg-black text-white rounded-full">black</button>
 
      <button  onClick={()=>{setColor("white")}} className="border border-black px-4 py-2 bg-white rounded-full">white</button>
      <button onClick={()=>{setColor("blue")}} className="border border-black px-4 py-2 bg-blue-500 rounded-full">blue</button>
      
    </div>
    </div>
    </div></>
  );
}

export default App
