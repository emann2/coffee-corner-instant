import { useCart } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF6F1]">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
          <p className="text-6xl">☕</p>
          <h2 className="text-[#3E1F0D] text-3xl font-bold">Your cart is empty</h2>
          <p className="text-[#2C1A0E]/50 text-sm">Looks like you haven't added anything yet.</p>
          <Link
            to="/menu"
            className="bg-[#D4A96A] text-[#3E1F0D] text-sm font-bold px-8 py-3 rounded-full tracking-widest uppercase hover:bg-[#8B5E3C] hover:text-[#FAF6F1] transition-all duration-300"
          >
            Browse Menu
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAF6F1]">
      <Navbar />
      <div className="bg-[#2C1A0E] pt-32 pb-16 px-6 text-center">
        <p className="text-[#D4A96A] text-sm tracking-[6px] uppercase mb-3">
          Your Order
        </p>
        <h1 className="text-[#FAF6F1] text-4xl md:text-5xl font-bold">
          Shopping Cart
        </h1>
        <div className="w-16 h-[2px] bg-[#D4A96A] mx-auto mt-6" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Cart Items */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="text-[#3E1F0D] font-bold">{item.name}</h3>
                <p className="text-[#D4A96A] font-bold text-sm">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <p className="text-[#2C1A0E]/40 text-xs capitalize">
                  {item.category.replace('-', ' ')}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-8 h-8 rounded-full bg-[#FAF6F1] text-[#3E1F0D] font-bold hover:bg-[#D4A96A] transition-colors duration-300"
                >
                  −
                </button>
                <span className="text-[#3E1F0D] font-bold w-4 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="w-8 h-8 rounded-full bg-[#FAF6F1] text-[#3E1F0D] font-bold hover:bg-[#D4A96A] transition-colors duration-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600 text-sm font-bold transition-colors duration-300 ml-2"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="self-start text-red-400 hover:text-red-600 text-sm font-bold tracking-wider uppercase transition-colors duration-300 mt-2"
          >
            Clear Cart
          </button>
        </div>
        <div className="bg-[#3E1F0D] rounded-2xl p-8 flex flex-col gap-5 h-fit">
          <h3 className="text-[#D4A96A] text-lg font-bold tracking-widest uppercase">
            Order Summary
          </h3>
          <div className="flex flex-col gap-3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <span className="text-[#F5ECD7]/70 text-sm">
                  {item.name} x{item.quantity}
                </span>
                <span className="text-[#F5ECD7] text-sm font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full h-[1px] bg-[#F5ECD7]/10" />
          <div className="flex items-center justify-between">
            <span className="text-[#F5ECD7] font-bold tracking-wider uppercase text-sm">
              Total
            </span>
            <span className="text-[#D4A96A] text-xl font-bold">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => navigate('/payment')}
            className="w-full bg-[#D4A96A] text-[#3E1F0D] text-sm font-bold py-3 rounded-full tracking-widest uppercase hover:bg-[#8B5E3C] hover:text-[#FAF6F1] transition-all duration-300 mt-2"
          >
            Proceed to Payment
          </button>
          <Link
            to="/menu"
            className="text-center text-[#F5ECD7]/50 text-sm hover:text-[#D4A96A] transition-colors duration-300"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart