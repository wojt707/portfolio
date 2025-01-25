import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { About, ThemeProvider } from './components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <About />
    </ThemeProvider>
  </StrictMode>
)
