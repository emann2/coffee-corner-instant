import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Payment from './pages/Payment'
import OrderStatus from './pages/OrderStatus'
import Dashboard from './pages/dashboard/Dashboard'
import DashboardUsers from './pages/dashboard/DashboardUsers'
import DashboardProducts from './pages/dashboard/DashboardProducts'
import DashboardOrders from './pages/dashboard/DashboardOrders'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } />
        <Route path="/payment" element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        } />
        <Route path="/order-status" element={
          <ProtectedRoute>
            <OrderStatus />
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute type="admin">
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/users" element={
          <ProtectedRoute type="admin">
            <DashboardUsers />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/products" element={
          <ProtectedRoute type="admin">
            <DashboardProducts />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/orders" element={
          <ProtectedRoute type="admin">
            <DashboardOrders />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App