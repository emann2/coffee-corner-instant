import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { products } from '../data/products'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'hot-drinks', label: 'Hot Drinks' },
  { id: 'cold-drinks', label: 'Cold Drinks' },
  { id: 'bakeries', label: 'Bakeries' },
]

function Menu() {
  const { addToCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('all')
  const [added, setAdded] = useState(null)

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory)

  function handleAddToCart(product) {
    if (!user) {
      navigate('/login')
      return
    }
    addToCart(product)
    setAdded(product.id)
    setTimeout(() => setAdded(null), 1500)
  }

  return (
    <div className="min-h-screen bg-[#FAF6F1]">
      <Navbar />

      {/* Header */}
      <div className="bg-[#2C1A0E] pt-32 pb-16 px-6 text-center">
        <p className="text-[#D4A96A] text-sm tracking-[6px] uppercase mb-3">
          Explore
        </p>
        <h1 className="text-[#FAF6F1] text-4xl md:text-5xl font-bold">
          Our Menu
        </h1>
        <div className="w-16 h-[2px] bg-[#D4A96A] mx-auto mt-6" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#D4A96A] text-[#3E1F0D]'
                  : 'border border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-[#FAF6F1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 transition-transform duration-300 group"
            >
              {/* Image */}
              <div className="overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#3E1F0D] text-lg font-bold">{product.name}</h3>
                  <span className="text-[#D4A96A] font-bold">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-[#2C1A0E]/60 text-sm leading-relaxed">
                  {product.description}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`mt-2 w-full text-sm font-bold py-3 rounded-full tracking-widest uppercase transition-all duration-300 ${
                    added === product.id
                      ? 'bg-green-600 text-white'
                      : 'bg-[#3E1F0D] text-[#F5ECD7] hover:bg-[#D4A96A] hover:text-[#3E1F0D]'
                  }`}
                >
                  {added === product.id ? '✓ Added!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Menu