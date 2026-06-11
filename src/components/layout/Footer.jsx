import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="w-full bg-[#3E1F0D] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4 md:col-span-2">
          <Link to="/" className="text-[#D4A96A] text-2xl font-bold tracking-widest uppercase">
            Coffee <span className="text-[#FAF6F1]">Corner</span>
          </Link>
          <p className="text-[#F5ECD7]/60 text-sm leading-relaxed max-w-sm">
            Where every cup tells a story. Freshly brewed coffee, homemade pastries, and a warm corner just for you.
          </p>
          <div className="w-10 h-[2px] bg-[#D4A96A] mt-2" />
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-[#D4A96A] text-xs tracking-widest uppercase font-bold">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Home', path: '/' },
              { label: 'Menu', path: '/menu' },
              { label: 'Cart', path: '/cart' },
              { label: 'Login', path: '/login' },
              { label: 'Sign Up', path: '/signup' },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-[#F5ECD7]/60 text-sm hover:text-[#D4A96A] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-[#D4A96A] text-xs tracking-widest uppercase font-bold">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: '12 Brew Street, Cairo, Egypt' },
              { label: '+20 100 123 4567' },
              { label: 'hello@coffeecorner.com' },
              { label: 'Mon – Sun: 7:00 AM – 11:00 PM' },
            ].map((item) => (
              <li key={item.label} className="text-[#F5ECD7]/60 text-sm">
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#F5ECD7]/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#F5ECD7]/40 text-xs tracking-wider">
          © 2024 Coffee Corner. All rights reserved.
        </p>
        <p className="text-[#F5ECD7]/40 text-xs tracking-wider">
          Made with ♥ for coffee lovers
        </p>
      </div>
    </footer>
  )
}

export default Footer