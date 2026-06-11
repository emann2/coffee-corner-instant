import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import About from '../components/home/about'
import BestSelling from '../components/home/bestSelling'
import WhatWeServe from '../components/home/whatWeServe'
import Feedback from '../components/home/feedback'
import Contact from '../components/home/contact'
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
