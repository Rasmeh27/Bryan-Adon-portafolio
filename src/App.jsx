import './App.css'
import Header from './components/header.jsx'
import HeroSection from './components/HeroSection.jsx'
import Footer from './components/footer.jsx'
import GallerySection from './components/GallerySection.jsx'
import GallerySectionPortrait from './components/GallerySectionPortrait.jsx'
import ContactSection from './components/ContactSection.jsx'

function App() {
  return (
     <div className="scroll-smooth">
     <Header />
      <HeroSection />
      <GallerySection />
      <GallerySectionPortrait />
      <ContactSection />
      <Footer />
     </div>
    
  )
}

export default App
