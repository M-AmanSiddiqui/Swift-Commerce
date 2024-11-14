import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Header />
      <HeroSection />
      <FeaturesSection />
    </div>
  )
}
