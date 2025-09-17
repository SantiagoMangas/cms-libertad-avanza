"use client"
import { Navbar } from "../components/navbar"
import { HeroSection } from "../components/hero-section"
import { ProposalsSection } from "../components/proposals-section"
import { AboutSection } from "../components/about-section"
import { NewsSection } from "../components/news-section"
import { GallerySection } from "../components/gallery-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"
import { CustomStyles } from "../components/custom-styles"

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <CustomStyles />
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ProposalsSection />
      <AboutSection />
      <NewsSection />
      <GallerySection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default Home