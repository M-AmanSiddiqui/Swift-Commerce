import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Header bgColor="bg-gray-200"/>
      <HeroSection />
      <FeaturesSection />
      <Testimonials />
      <Footer />
    </div>
  )
}
