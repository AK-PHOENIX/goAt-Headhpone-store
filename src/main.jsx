import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Layout } from './components'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
    <App />
    </Layout>
  </StrictMode>,
)
