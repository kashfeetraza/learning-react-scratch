import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Chai from './Chai.jsx'
import App from './App.jsx'

function MyApp() {
  return (    
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chai />
    <MyApp />
    <App />
  </StrictMode>
)