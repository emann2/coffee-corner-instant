function Contact() {
  return (
    <section id="contact" className="w-full bg-[#FAF6F1] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-6">
          <p className="text-[#D4A96A] text-sm tracking-[6px] uppercase">
            Get In Touch
          </p>
          <h2 className="text-[#3E1F0D] text-4xl md:text-5xl font-bold leading-tight">
            Visit Us or <br />
            <span className="text-[#8B5E3C]">Send a Message</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#D4A96A]" />
          <p className="text-[#2C1A0E]/70 text-base leading-relaxed">
            We'd love to hear from you. Whether you have a question about our menu, want to make a reservation, or just want to say hello — we're here for you.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            {[
              { label: 'Address', value: '12 Brew Street, Cairo, Egypt' },
              { label: 'Phone', value: '+20 100 123 4567' },
              { label: 'Email', value: 'hello@coffeecorner.com' },
              { label: 'Hours', value: 'Mon – Sun: 7:00 AM – 11:00 PM' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-[#D4A96A] text-xs tracking-widest uppercase font-bold">
                  {item.label}
                </span>
                <span className="text-[#2C1A0E]/80 text-sm">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#3E1F0D] rounded-2xl p-8 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[#D4A96A] text-xs tracking-widest uppercase font-bold">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="bg-[#2C1A0E] text-[#F5ECD7] placeholder-[#F5ECD7]/30 text-sm px-4 py-3 rounded-xl outline-none border border-transparent focus:border-[#D4A96A] transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#D4A96A] text-xs tracking-widest uppercase font-bold">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="bg-[#2C1A0E] text-[#F5ECD7] placeholder-[#F5ECD7]/30 text-sm px-4 py-3 rounded-xl outline-none border border-transparent focus:border-[#D4A96A] transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#D4A96A] text-xs tracking-widest uppercase font-bold">
              Subject
            </label>
            <input
              type="text"
              placeholder="How can we help?"
              className="bg-[#2C1A0E] text-[#F5ECD7] placeholder-[#F5ECD7]/30 text-sm px-4 py-3 rounded-xl outline-none border border-transparent focus:border-[#D4A96A] transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#D4A96A] text-xs tracking-widest uppercase font-bold">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="bg-[#2C1A0E] text-[#F5ECD7] placeholder-[#F5ECD7]/30 text-sm px-4 py-3 rounded-xl outline-none border border-transparent focus:border-[#D4A96A] transition-colors duration-300 resize-none"
            />
          </div>

          <button className="w-full bg-[#D4A96A] text-[#3E1F0D] text-sm font-bold py-3 rounded-full tracking-widest uppercase hover:bg-[#8B5E3C] hover:text-[#FAF6F1] transition-all duration-300 mt-2">
            Send Message
          </button>
        </div>

      </div>
    </section>
  )
}

export default Contact