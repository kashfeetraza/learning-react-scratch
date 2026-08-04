import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div class="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
      </div>
        
      <div class="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2   ">
      <div class="flex flex-wrap p-4 gap-3 rounded-2xl" style={{backgroundColor:"white"}}>
        <button
        onClick={() => setColor("green")}
        class="  rounded-full w-30 text-amber-200" style={{backgroundColor:"green"}}>Green</button>
        <button
        onClick={() => setColor("red")}
        class= " rounded-full w-30 text-amber-200" style={{backgroundColor:"red"}}>Red</button>
        <button
        onClick={() => setColor("green")}
        class="  rounded-full w-30 text-amber-200" style={{backgroundColor:"green"}}>Green</button>
        <button
        onClick={() => setColor("pink")}
        class="  rounded-full w-30 text-amber-200" style={{backgroundColor:"pink"}}>Pink</button>
        <button
        onClick={() => setColor("purple")}
        class="  rounded-full w-30 text-amber-200" style={{backgroundColor:"purple"}}>Purple</button>
        <button
        onClick={() => setColor("red")}
        class="  rounded-full w-30 text-amber-200" style={{backgroundColor:"red"}}>Red</button>
        <button
        onClick={() => setColor("blue")}
        class="  rounded-full w-30 text-amber-200" style={{backgroundColor:"blue"}}>Blue</button>
        <button
        onClick={() => setColor("pink")}
        class="  rounded-full w-30 text-amber-200" style={{backgroundColor:"pink"}}>Pink</button>
      </div>
      </div>
    </>
  )
}

export default App
