import aboutImg from '../../assets/about.jpg'

function About() {
  return (
    <section id="about" className="w-full bg-[#FAF6F1] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Coffee Corner"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#D4A96A] rounded-2xl -z-10" />
        </div>
        <div className="flex flex-col gap-6">

          <p className="text-[#D4A96A] text-sm tracking-[6px] uppercase">
            Our Story
          </p>

          <h2 className="text-[#3E1F0D] text-4xl md:text-5xl font-bold leading-tight">
            More Than Just <br />
            <span className="text-[#8B5E3C]">a Coffee Shop</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#D4A96A]" />

          <p className="text-[#2C1A0E]/70 text-base leading-relaxed">
            Coffee Corner was born from a simple belief — that a great cup of coffee can turn an ordinary moment into something memorable. Nestled in the heart of the city, we craft every drink with care, using only the finest beans sourced from around the world.
          </p>

          <p className="text-[#2C1A0E]/70 text-base leading-relaxed">
            Our bakery is baked fresh every morning, filling the air with warmth and comfort. Whether you're here to work, meet a friend, or simply enjoy a quiet moment — Coffee Corner is your place.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-4">
            {[
              { number: '10+', label: 'Years of Experience' },
              { number: '50+', label: 'Menu Items' },
              { number: '10k+', label: 'Happy Customers' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-[#D4A96A] text-3xl font-bold">{stat.number}</span>
                <span className="text-[#2C1A0E]/60 text-xs tracking-wider uppercase">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About