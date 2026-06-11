import { useNavigate } from 'react-router-dom'
import hotDrinks from '../../assets/hot-drinks.jpeg'
import coldDrinks from '../../assets/cold-drinks.jpg'
import bakeries from '../../assets/bakeries.jpg'


const categories = [
  {
    id: 1,
    image: hotDrinks,
    name: 'Hot Drinks',
    description: 'Warm your soul with our handcrafted espressos, lattes, and cappuccinos.',
    path: '/menu?category=hot-drinks',
  },
  {
    id: 2,
    image: coldDrinks,
    name: 'Cold Drinks',
    description: 'Cool down with our refreshing iced coffees, frappes, and cold brews.',
    path: '/menu?category=cold-drinks',
  },
  {
    id: 3,
    image: bakeries,
    name: 'Bakeries',
    description: 'Freshly baked every morning — croissants, muffins, cakes, and more.',
    path: '/menu?category=bakeries',
  },
]


function WhatWeServe() {
  const navigate = useNavigate()
  return (
    <section id="what-we-serve" className="w-full bg-[#FAF6F1] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[#D4A96A] text-sm tracking-[6px] uppercase mb-3">
            Explore
          </p>
          <h2 className="text-[#3E1F0D] text-4xl md:text-5xl font-bold">
            What We Serve
          </h2>
          <div className="w-16 h-[2px] bg-[#D4A96A] mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(cat.path)}
              className="cursor-pointer group rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="overflow-hidden h-64">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#3E1F0D] p-6 flex flex-col gap-3">
                <h3 className="text-[#D4A96A] text-xl font-bold">{cat.name}</h3>
                <p className="text-[#F5ECD7]/70 text-sm leading-relaxed">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2 text-[#D4A96A] text-sm font-bold uppercase tracking-wider mt-2 group-hover:gap-4 transition-all duration-300">
                  <span>Explore</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhatWeServe