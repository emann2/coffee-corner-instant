import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/layout/Navbar'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (formData.email === 'admin@coffee.com' && formData.password === 'admin123') {
      login({ name: 'Admin', email: formData.email, role: 'admin' })
      navigate('/dashboard')
      return
    }

    if (formData.email && formData.password) {
      login({ name: 'User', email: formData.email, role: 'user' })
      navigate('/')
      return
    }

    setError('Please fill in all fields.')
  }

  return (
    <div className="min-h-screen bg-[#FAF6F1]">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="text-center mb-10">
            <Link to="/" className="text-[#3E1F0D] text-3xl font-bold tracking-widest uppercase">
              Coffee <span className="text-[#D4A96A]">Corner</span>
            </Link>
            <p className="text-[#2C1A0E]/50 text-sm mt-2 tracking-wider">
              Welcome back! Please login to your account.
            </p>
          </div>

          {/* Card */}
          <div className="bg-[#3E1F0D] rounded-2xl p-8 flex flex-col gap-5">

            {error && (
              <div className="bg-red-900/40 border border-red-500/30 text-red-300 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-[#D4A96A] text-xs tracking-widest uppercase font-bold">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="bg-[#2C1A0E] text-[#F5ECD7] placeholder-[#F5ECD7]/30 text-sm px-4 py-3 rounded-xl outline-none border border-transparent focus:border-[#D4A96A] transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#D4A96A] text-xs tracking-widest uppercase font-bold">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="bg-[#2C1A0E] text-[#F5ECD7] placeholder-[#F5ECD7]/30 text-sm px-4 py-3 rounded-xl outline-none border border-transparent focus:border-[#D4A96A] transition-colors duration-300"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#D4A96A] text-[#3E1F0D] text-sm font-bold py-3 rounded-full tracking-widest uppercase hover:bg-[#8B5E3C] hover:text-[#FAF6F1] transition-all duration-300 mt-2"
            >
              Login
            </button>

            <p className="text-center text-[#F5ECD7]/50 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#D4A96A] hover:underline">
                Sign Up
              </Link>
            </p>

          </div>

          {/* Admin Hint */}
          <div className="mt-4 text-center">
            <p className="text-[#2C1A0E]/40 text-xs">
              Admin: admin@coffee.com / admin123
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login