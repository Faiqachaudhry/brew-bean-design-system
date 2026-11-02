import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/ThemeProvider'
import './Styles/style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<StrictMode>
<ThemeProvider>
   <App />
</ThemeProvider>
</StrictMode>,
)
