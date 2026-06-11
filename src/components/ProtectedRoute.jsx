import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ProtectedRoute({ children, type = 'auth' }) {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }
  if (type === 'admin' && user.role !== 'admin') {
    return <Navigate to="/" replace />
  }
  return children
}

export default ProtectedRoute