import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { useAppData } from '../context/AppDataContext'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function Payment() {
  const { cartItems, totalPrice, clearCart } = useCart()
  const { user } = useAuth()
  const { addOrder } = useAppData()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'cash',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })
  const [error, setError] = useState('')

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      setError('Please fill in all required fields.')
      return
    }
    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber || !formData.expiryDate || !formData.cvv) {
        setError('Please fill in all card details.')
        return
      }
    }

    const orderId = addOrder({
      userName: user?.name || formData.fullName,
      userEmail: user?.email || formData.email,
      items: cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total: (totalPrice + 2).toFixed(2),
      paymentMethod: formData.paymentMethod,
      address: formData.address,
    })

    clearCart()
    navigate('/order-status', { state: { orderId } })
  }

  return (
    <div className="min-h-screen bg-[#FAF6F1]">
      <Navbar />

      <div className="bg-[#2C1A0E] pt-32 pb-16 px-6 text-center">
        <p className="text-[#D4A96A] text-sm tracking-[6px] uppercase mb-3">Almost There</p>
        <h1 className="text-[#FAF6F1] text-4xl md:text-5xl font-bold">Checkout</h1>
        <div className="w-16 h-[2px] bg-[#D4A96A] mx-auto mt-6" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2 flex flex-col gap-6">

          {error && (
            <div className="bg-red-900/20 border border-red-500/30 text-red-500 text-sm px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          <div className="bg-white rounded-2xl p-8 flex flex-col gap-5">
            <h3 className="text-[#3E1F0D] text-lg font-bold tracking-wider uppercase">Delivery Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="flex flex-col gap-2">
                <label className="text-[#8B5E3C] text-xs tracking-widest uppercase font-bold">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe"
                  className="bg-[#FAF6F1] text-[#2C1A0E] placeholder-[#2C1A0E]/30 text-sm px-4 py-3 rounded-xl outline-none border border-transparent focus:border-[#D4A96A] transition-colors duration-300" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#8B5E3C] text-xs tracking-widest uppercase font-bold">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com"
                  className="bg-[#FAF6F1] text-[#2C1A0E] placeholder-[#2C1A0E]/30 text-sm px-4 py-3 rounded-xl outline-none border border-transparent focus:border-[#D4A96A] transition-colors duration-300" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#8B5E3C] text-xs tracking-widest uppercase font-bold">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+20 100 123 4567"
                  className="bg-[#FAF6F1] text-[#2C1A0E] placeholder-[#2C1A0E]/30 text-sm px-4 py-3 rounded-xl outline-none border border-transparent focus:border-[#D4A96A] transition-colors duration-300" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#8B5E3C] text-xs tracking-widest uppercase font-bold">Delivery Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="123 Main Street, Cairo"
                  className="bg-[#FAF6F1] text-[#2C1A0E] placeholder-[#2C1A0E]/30 text-sm px-4 py-3 rounded-xl outline-none border border-transparent focus:border-[#D4A96A] transition-colors duration-300" />
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 flex flex-col gap-5">
            <h3 className="text-[#3E1F0D] text-lg font-bold tracking-wider uppercase">Payment Method</h3>
            <div className="flex gap-4">
              {[{ id: 'cash', label: 'Cash on Delivery' }, { id: 'card', label: 'Credit Card' }].map((method) => (
                <button key={method.id}
                  onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                    formData.paymentMethod === method.id
                      ? 'bg-[#3E1F0D] text-[#D4A96A]'
                      : 'bg-[#FAF6F1] text-[#8B5E3C] hover:bg-[#3E1F0D]/10'
                  }`}>
                  {method.label}
                </button>
              ))}
            </div>

            {formData.paymentMethod === 'card' && (
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex flex-col gap-2">
                  <label className="text-[#8B5E3C] text-xs tracking-widest uppercase font-bold">Card Number</label>
                  <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange}
                    placeholder="1234 5678 9012 3456" maxLength={19}
                    className="bg-[#FAF6F1] text-[#2C1A0E] placeholder-[#2C1A0E]/30 text-sm px-4 py-3 rounded-xl outline-none border border-transparent focus:border-[#D4A96A] transition-colors duration-300" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#8B5E3C] text-xs tracking-widest uppercase font-bold">Expiry Date</label>
                    <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange}
                      placeholder="MM / YY" maxLength={5}
                      className="bg-[#FAF6F1] text-[#2C1A0E] placeholder-[#2C1A0E]/30 text-sm px-4 py-3 rounded-xl outline-none border border-transparent focus:border-[#D4A96A] transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#8B5E3C] text-xs tracking-widest uppercase font-bold">CVV</label>
                    <input type="password" name="cvv" value={formData.cvv} onChange={handleChange}
                      placeholder="•••" maxLength={3}
                      className="bg-[#FAF6F1] text-[#2C1A0E] placeholder-[#2C1A0E]/30 text-sm px-4 py-3 rounded-xl outline-none border border-transparent focus:border-[#D4A96A] transition-colors duration-300" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-[#3E1F0D] rounded-2xl p-8 flex flex-col gap-5 h-fit">
          <h3 className="text-[#D4A96A] text-lg font-bold tracking-widest uppercase">Order Summary</h3>
          <div className="flex flex-col gap-3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <span className="text-[#F5ECD7]/70 text-sm">{item.name} x{item.quantity}</span>
                <span className="text-[#F5ECD7] text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="w-full h-[1px] bg-[#F5ECD7]/10" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[#F5ECD7]/70 text-sm">Subtotal</span>
              <span className="text-[#F5ECD7] text-sm">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#F5ECD7]/70 text-sm">Delivery Fee</span>
              <span className="text-[#F5ECD7] text-sm">$2.00</span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#F5ECD7]/10" />
          <div className="flex items-center justify-between">
            <span className="text-[#F5ECD7] font-bold tracking-wider uppercase text-sm">Total</span>
            <span className="text-[#D4A96A] text-xl font-bold">${(totalPrice + 2).toFixed(2)}</span>
          </div>
          <button onClick={handleSubmit}
            className="w-full bg-[#D4A96A] text-[#3E1F0D] text-sm font-bold py-3 rounded-full tracking-widest uppercase hover:bg-[#8B5E3C] hover:text-[#FAF6F1] transition-all duration-300 mt-2">
            Place Order
          </button>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Payment