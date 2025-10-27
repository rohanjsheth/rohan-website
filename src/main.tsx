import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './About.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <About />
  </StrictMode>,
)
