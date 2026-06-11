import { createContext, useContext, useState } from 'react'
import { products as initialProducts } from '../data/products'

const AppDataContext = createContext()

export function AppDataProvider({ children }) {

  const [products, setProducts] = useState(initialProducts)
  const [users, setUsers] = useState([])
  const [orders, setOrders] = useState([])

  function addProduct(product) {
    const newProduct = {
      ...product,
      id: Date.now(),
    }
    setProducts((prev) => [...prev, newProduct])
  }

  function editProduct(id, updatedData) {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedData } : p))
    )
  }

  function deleteProduct(id) {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }
  function addUser(user) {
    const newUser = {
      ...user,
      id: Date.now(),
      joinedAt: new Date().toLocaleDateString('en-GB'),
    }
    setUsers((prev) => [...prev, newUser])
  }

  function deleteUser(id) {
    setUsers((prev) => prev.filter((u) => u.id !== id))
  }
  function addOrder(orderData) {
    const newOrder = {
      id: `CC-${Math.floor(Math.random() * 90000) + 10000}`,
      ...orderData,
      status: 'Pending',
      createdAt: new Date().toLocaleDateString('en-GB'),
    }
    setOrders((prev) => [...prev, newOrder])
    return newOrder.id
  }

  function updateOrderStatus(id, status) {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o))
    )
  }

  return (
    <AppDataContext.Provider
      value={{
        products, addProduct, editProduct, deleteProduct,
        users, addUser, deleteUser,
        orders, addOrder, updateOrderStatus,
      }}
    >
      {children}
    </AppDataContext.Provider>
  )
}

export function useAppData() {
  return useContext(AppDataContext)
}