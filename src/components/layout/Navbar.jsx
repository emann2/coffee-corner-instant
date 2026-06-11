import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const { totalItems } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  function handleLogout() {
    logout()
    navigate('/')
    setMenuOpen(false)
  }
  function handleScrollLink(sectionId) {
    setMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#3E1F0D]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-[#D4A96A] text-2xl font-bold tracking-widest uppercase">
          Coffee <span className="text-[#FAF6F1]">Corner</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {['Home', 'Menu', 'About', 'Contact'].map((item) => {
            if (item === 'About' || item === 'Contact') {
              return (
                <li key={item}>
                  <button
                    onClick={() => handleScrollLink(item.toLowerCase())}
                    className="text-[#F5ECD7] text-sm tracking-wider uppercase hover:text-[#D4A96A] transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              )
            }
            return (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-[#F5ECD7] text-sm tracking-wider uppercase hover:text-[#D4A96A] transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="text-[#D4A96A] text-xs tracking-wider">
                Hello, <span className="font-bold">{user.name}</span>
              </span>
              {user.role === 'admin' && (
                <Link
                  to="/dashboard"
                  className="text-[#F5ECD7] text-sm tracking-wider uppercase hover:text-[#D4A96A] transition-colors duration-300"
                >
                  Dashboard
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="text-[#F5ECD7] text-sm tracking-wider uppercase hover:text-[#D4A96A] transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-[#F5ECD7] text-sm tracking-wider uppercase hover:text-[#D4A96A] transition-colors duration-300"
            >
              Login
            </Link>
          )}
          <Link
            to="/cart"
            className="relative bg-[#D4A96A] text-[#3E1F0D] text-sm font-bold px-5 py-2 rounded-full tracking-wider uppercase hover:bg-[#8B5E3C] hover:text-[#FAF6F1] transition-all duration-300"
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#FAF6F1] text-[#3E1F0D] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
        <button
          className="md:hidden text-[#F5ECD7] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#3E1F0D] px-6 pb-6 flex flex-col gap-4">
          {['Home', 'Menu', 'About', 'Contact'].map((item) => {
            if (item === 'About' || item === 'Contact') {
              return (
                <button
                  key={item}
                  onClick={() => handleScrollLink(item.toLowerCase())}
                  className="text-left text-[#F5ECD7] text-sm tracking-wider uppercase hover:text-[#D4A96A] transition-colors duration-300"
                >
                  {item}
                </button>
              )
            }
            return (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-[#F5ECD7] text-sm tracking-wider uppercase hover:text-[#D4A96A] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            )
          })}

          {user ? (
            <>
              <span className="text-[#D4A96A] text-xs tracking-wider">
                Hello, <span className="font-bold">{user.name}</span>
              </span>
              {user.role === 'admin' && (
                <Link
                  to="/dashboard"
                  className="text-[#F5ECD7] text-sm tracking-wider uppercase hover:text-[#D4A96A] transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="text-left text-[#F5ECD7] text-sm tracking-wider uppercase hover:text-[#D4A96A] transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-[#F5ECD7] text-sm tracking-wider uppercase hover:text-[#D4A96A] transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}

          <Link
            to="/cart"
            className="relative bg-[#D4A96A] text-[#3E1F0D] text-sm font-bold px-5 py-2 rounded-full tracking-wider uppercase text-center hover:bg-[#8B5E3C] hover:text-[#FAF6F1] transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Cart {totalItems > 0 && `(${totalItems})`}
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar