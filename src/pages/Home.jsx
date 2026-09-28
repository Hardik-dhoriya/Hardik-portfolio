import React from 'react'
import Hero from '../componets/Hero'
import About from '../componets/About'
import  Skills  from '../componets/Skills'
import Projects from '../componets/Projects'
import Contact from '../componets/Contact'
import Footer from '../componets/Footer'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>

  )
}

export default Home
