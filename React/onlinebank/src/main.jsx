// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AxiosExample1 from './learn/networkcalls/AxiosExample1.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    <AxiosExample1/>
  // </StrictMode>
)
