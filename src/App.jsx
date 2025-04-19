import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import StorePage from './pages/StorePage'
import CartPage from './pages/CartPage'
import OrderConfirmationPage from './pages/OrderConfirmationPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store/:storeId" element={<StorePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/orderconfirmation" element={<OrderConfirmationPage />} />
    </Routes>
  )
}

export default App
