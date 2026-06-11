import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext'
import product1 from '../../assets/product-1.jpg'
import product2 from '../../assets/product-2.jpg'
import product3 from '../../assets/product-3.jpg'

const products = [
  {
    id: 1,
    image: product1,
    name: 'Caramel Latte',
    description: 'A rich espresso blended with silky steamed milk and a smooth caramel drizzle that melts in every sip.',
    price: 5.50,
    category: 'hot-drinks',
  },
  {
    id: 2,
    image: product2,
    name: 'Classic Croissant',
    description: 'Golden, flaky, and buttery — our croissant is baked fresh every morning for the perfect bite.',
    price: 3.00,
    category: 'bakeries',
  },
  {
    id: 3,
    image: product3,
    name: 'Iced Mocha',
    description: 'Bold espresso, cold milk, and rich chocolate syrup poured over ice for a refreshing treat.',
    price: 6.00,
    category: 'cold-drinks',
  },
]

function BestSelling() {
  const { user } = useAuth()
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const [added, setAdded] = useState(null)

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
    <section id="best-selling" className="w-full bg-[#2C1A0E] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[#D4A96A] text-sm tracking-[6px] uppercase mb-3">
            Our Favorites
          </p>
          <h2 className="text-[#FAF6F1] text-4xl md:text-5xl font-bold">
            Best Selling
          </h2>
          <div className="w-16 h-[2px] bg-[#D4A96A] mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#3E1F0D] rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#FAF6F1] text-xl font-bold">{product.name}</h3>
                  <span className="text-[#D4A96A] font-bold">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-[#F5ECD7]/60 text-sm leading-relaxed">
                  {product.description}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`mt-2 w-full text-sm font-bold py-3 rounded-full tracking-widest uppercase transition-all duration-300 ${
                    added === product.id
                      ? 'bg-green-600 text-white'
                      : 'bg-[#D4A96A] text-[#3E1F0D] hover:bg-[#8B5E3C] hover:text-[#FAF6F1]'
                  }`}
                >
                  {added === product.id ? '✓ Added!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BestSelling