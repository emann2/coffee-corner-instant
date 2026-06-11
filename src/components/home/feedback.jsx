const feedbacks = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Regular Customer',
    comment: 'Coffee Corner has become my second home. The caramel latte is absolutely divine, and the atmosphere is so warm and inviting. I come here every single morning!',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Carter',
    role: 'Food Blogger',
    comment: 'As someone who reviews cafes for a living, I can confidently say Coffee Corner is one of the best. The croissants are flaky perfection and the coffee is always consistent.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Lena Hoffman',
    role: 'Remote Worker',
    comment: 'I spend most of my work days here. Great wifi, amazing iced mocha, and the staff always makes you feel welcome. Highly recommend to anyone looking for a cozy workspace.',
    rating: 5,
  },
]

function Feedback() {
  return (
    <section id="feedback" className="w-full bg-[#2C1A0E] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[#D4A96A] text-sm tracking-[6px] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-[#FAF6F1] text-4xl md:text-5xl font-bold">
            What Our Customers Say
          </h2>
          <div className="w-16 h-[2px] bg-[#D4A96A] mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-[#3E1F0D] rounded-2xl p-8 flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex gap-1">
                {Array.from({ length: feedback.rating }).map((_, i) => (
                  <span key={i} className="text-[#D4A96A] text-lg">★</span>
                ))}
              </div>
              <p className="text-[#F5ECD7]/70 text-sm leading-relaxed italic">
                "{feedback.comment}"
              </p>
              <div className="w-10 h-[1px] bg-[#D4A96A]" />
              <div className="flex flex-col gap-1">
                <span className="text-[#FAF6F1] font-bold">{feedback.name}</span>
                <span className="text-[#D4A96A] text-xs tracking-wider uppercase">{feedback.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Feedback