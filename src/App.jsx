import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import PaperCutImplementationGuide from './pages/resources/PaperCutImplementationGuide'
import PaperCutCostReduction from './pages/resources/PaperCutCostReduction'
import PaperCutMobilePrinting from './pages/resources/PaperCutMobilePrinting'
import PaperCutSecurityPractices from './pages/resources/PaperCutSecurityPractices'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/papercut-implementation-guide" element={<PaperCutImplementationGuide />} />
            <Route path="/resources/papercut-cost-reduction" element={<PaperCutCostReduction />} />
            <Route path="/resources/papercut-mobile-printing" element={<PaperCutMobilePrinting />} />
            <Route path="/resources/papercut-security-practices" element={<PaperCutSecurityPractices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App