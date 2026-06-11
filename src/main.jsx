import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { AppDataProvider } from './context/AppDataContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppDataProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AppDataProvider>
    </AuthProvider>
  </StrictMode>,
)