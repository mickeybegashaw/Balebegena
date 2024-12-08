import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MusicianContextProvider from './context/musiciansContext.jsx'

createRoot(document.getElementById('root')).render(
  <MusicianContextProvider>
    <App />
  </MusicianContextProvider>,
)
