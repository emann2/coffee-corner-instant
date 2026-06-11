import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const navItems = [
  { label: 'Overview', path: '/dashboard' },
  { label: 'Users', path: '/dashboard/users' },
  { label: 'Products', path: '/dashboard/products' },
  { label: 'Orders', path: '/dashboard/orders' },
]

function Sidebar() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <aside className="w-64 min-h-screen bg-[#2C1A0E] flex flex-col fixed top-0 left-0 z-50">

      {/* Logo */}
      <div className="px-8 py-8 border-b border-[#FAF6F1]/10">
        <Link to="/" className="text-[#D4A96A] text-xl font-bold tracking-widest uppercase">
          Coffee <span className="text-[#FAF6F1]">Corner</span>
        </Link>
        <p className="text-[#FAF6F1]/30 text-xs mt-1 tracking-wider">Admin Dashboard</p>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                isActive
                  ? 'bg-[#D4A96A] text-[#2C1A0E]'
                  : 'text-[#FAF6F1]/60 hover:bg-[#FAF6F1]/10 hover:text-[#FAF6F1]'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="px-4 py-6 border-t border-[#FAF6F1]/10">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-3 rounded-xl text-sm font-bold tracking-wider uppercase text-red-400 hover:bg-red-500/10 transition-all duration-300 text-left"
        >
          Logout
        </button>
      </div>

    </aside>
  )
}

export default Sidebar