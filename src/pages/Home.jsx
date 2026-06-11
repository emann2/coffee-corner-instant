import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import About from '../components/home/about'
import BestSelling from '../components/home/BestSelling'
import WhatWeServe from '../components/home/WhatWeServe'
import Feedback from '../components/home/Feedback'
import Contact from '../components/home/Contact'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <BestSelling />
      <WhatWeServe />
      <Feedback />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home