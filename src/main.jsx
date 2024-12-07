import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/1App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
