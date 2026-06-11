import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const steps = [
  { id: 1, label: 'Order Placed', description: 'Your order has been received successfully.' },
  { id: 2, label: 'Preparing', description: 'Our baristas are crafting your order with love.' },
  { id: 3, label: 'On the Way', description: 'Your order is on its way to you.' },
  { id: 4, label: 'Delivered', description: 'Your order has been delivered. Enjoy!' },
]

function OrderStatus() {
  const [currentStep, setCurrentStep] = useState(1)
  const location = useLocation()
  const [orderId] = useState(
  () => location.state?.orderId || `CC-${Math.floor(Math.random() * 90000) + 10000}`
)

  useEffect(() => {
    const timers = [
      setTimeout(() => setCurrentStep(2), 3000),
      setTimeout(() => setCurrentStep(3), 6000),
      setTimeout(() => setCurrentStep(4), 9000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF6F1]">
      <Navbar />

      <div className="bg-[#2C1A0E] pt-32 pb-16 px-6 text-center">
        <p className="text-[#D4A96A] text-sm tracking-[6px] uppercase mb-3">Thank You!</p>
        <h1 className="text-[#FAF6F1] text-4xl md:text-5xl font-bold">Order Status</h1>
        <div className="w-16 h-[2px] bg-[#D4A96A] mx-auto mt-6" />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">

        <div className="bg-white rounded-2xl p-6 text-center mb-10 shadow-sm">
          <p className="text-[#2C1A0E]/50 text-sm tracking-wider uppercase mb-2">Order ID</p>
          <p className="text-[#3E1F0D] text-2xl font-bold tracking-widest">#{orderId}</p>
          <p className="text-[#2C1A0E]/40 text-xs mt-2">Estimated delivery: 30 – 45 minutes</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-0">
          {steps.map((step, index) => {
            const isCompleted = currentStep > step.id
            const isActive = currentStep === step.id
            const isLast = index === steps.length - 1

            return (
              <div key={step.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-500 ${
                    isCompleted ? 'bg-[#D4A96A] text-[#3E1F0D]'
                    : isActive ? 'bg-[#3E1F0D] text-[#D4A96A] ring-4 ring-[#D4A96A]/30'
                    : 'bg-[#FAF6F1] text-[#2C1A0E]/30'
                  }`}>
                    {isCompleted ? '✓' : step.id}
                  </div>
                  {!isLast && (
                    <div className={`w-[2px] h-12 transition-all duration-500 ${isCompleted ? 'bg-[#D4A96A]' : 'bg-[#FAF6F1]'}`} />
                  )}
                </div>
                <div className="pb-8">
                  <p className={`font-bold text-sm tracking-wider uppercase transition-all duration-500 ${
                    isCompleted || isActive ? 'text-[#3E1F0D]' : 'text-[#2C1A0E]/30'
                  }`}>
                    {step.label}
                    {isActive && <span className="ml-2 text-[#D4A96A] text-xs animate-pulse">● In Progress</span>}
                  </p>
                  <p className={`text-xs mt-1 leading-relaxed transition-all duration-500 ${
                    isCompleted || isActive ? 'text-[#2C1A0E]/50' : 'text-[#2C1A0E]/20'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {currentStep === 4 && (
          <div className="mt-8 bg-[#3E1F0D] rounded-2xl p-8 text-center flex flex-col gap-4">
            <p className="text-4xl">☕</p>
            <h3 className="text-[#D4A96A] text-xl font-bold">Your order has arrived!</h3>
            <p className="text-[#F5ECD7]/60 text-sm">We hope you enjoy every sip. Thank you for choosing Coffee Corner.</p>
            <Link to="/menu"
              className="mx-auto bg-[#D4A96A] text-[#3E1F0D] text-sm font-bold px-8 py-3 rounded-full tracking-widest uppercase hover:bg-[#8B5E3C] hover:text-[#FAF6F1] transition-all duration-300">
              Order Again
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default OrderStatus