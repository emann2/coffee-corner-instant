import heroBg from '../../assets/hero-bg.png'

function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-[#2C1A0E]/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        
        <p className="text-[#D4A96A] text-sm tracking-[6px] uppercase mb-4">
          Welcome to
        </p>

        <h1 className="text-[#FAF6F1] text-6xl md:text-8xl font-bold tracking-widest uppercase mb-6">
          Coffee <br />
          <span className="text-[#D4A96A]">Corner</span>
        </h1>

        <p className="text-[#F5ECD7] text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          Where every cup tells a story. Freshly brewed coffee, homemade pastries, and a warm corner just for you.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#best-selling"
            className="bg-[#D4A96A] text-[#3E1F0D] text-sm font-bold px-8 py-3 rounded-full tracking-widest uppercase hover:bg-[#8B5E3C] hover:text-[#FAF6F1] transition-all duration-300"
          >
            Explore Menu
          </a>
          <a
            href="#about"
            className="border border-[#F5ECD7] text-[#F5ECD7] text-sm font-bold px-8 py-3 rounded-full tracking-widest uppercase hover:border-[#D4A96A] hover:text-[#D4A96A] transition-all duration-300"
          >
            Our Story
          </a>
        </div>
        <div className="absolute bottom-10 flex flex-col items-center gap-2">
          <p className="text-[#F5ECD7] text-xs tracking-widest uppercase">Scroll Down</p>
          <div className="w-[1px] h-10 bg-[#D4A96A] animate-bounce" />
        </div>

      </div>
    </section>
  )
}

export default Hero