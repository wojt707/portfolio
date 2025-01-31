import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@/components'
import { ResumePage } from '@/pages'
import { Toaster } from './components/ui'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <ResumePage />
      <Toaster />
    </ThemeProvider>
  </StrictMode>
)
