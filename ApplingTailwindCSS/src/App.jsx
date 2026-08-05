import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body class="bg-slate-100 min-h-screen flex items-center justify-center p-6">

  <div class="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 m-4">
    <div class="p-8 text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
</svg>
      </div>
      
      <h2 class="text-2xl font-bold text-slate-800 mb-2">Kashfeet Raza</h2>
      <p class="text-slate-600 mb-6">
        This page includes Tailwind CSS directly via CDN. You can start building modern, responsive interfaces right away.
      </p>

      <button class="w-full bg-green-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
        Get Started
      </button>
    </div>
  </div>
  
  <div class="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 m-4">
    <div class="p-8 text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      
      <h2 class="text-2xl font-bold text-slate-800 mb-2">Ahmed Hussain</h2>
      <p class="text-slate-600 mb-6">
        This page includes Tailwind CSS directly via CDN. You can start building modern, responsive interfaces right away.
      </p>

      <button class="w-full bg-red-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
        Get Started
      </button>
    </div>
  </div>

</body>
    </>
  )
}

export default App
