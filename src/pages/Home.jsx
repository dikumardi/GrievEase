// src/pages/Home.jsx

import React from 'react'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FAQ />
      <Footer />
    </>
  )
}

export default Home