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
import PaperCutSecurePrintRelease from './pages/resources/PaperCutSecurePrintRelease'
import PaperCutFollowMePrint from './pages/resources/PaperCutFollowMePrint'
import PaperCutMobilityPrint from './pages/resources/PaperCutMobilityPrint'
import UniflowPlatformOverview from './pages/resources/UniflowPlatformOverview'
import UniflowSecurePrintRelease from './pages/resources/UniflowSecurePrintRelease'
import UniflowCostTracking from './pages/resources/UniflowCostTracking'
import UniflowPrintFromAnywhere from './pages/resources/UniflowPrintFromAnywhere'
import UniflowMobileCloudPrinting from './pages/resources/UniflowMobileCloudPrinting'
import UniflowFlexibleAccessControl from './pages/resources/UniflowFlexibleAccessControl'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PaperCutService from './pages/services/PaperCutService'
import UniflowService from './pages/services/UniflowService'

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
            <Route path="/resources/papercut-secure-print-release" element={<PaperCutSecurePrintRelease />} />
            <Route path="/resources/papercut-follow-me-print" element={<PaperCutFollowMePrint />} />
            <Route path="/resources/papercut-mobility-print" element={<PaperCutMobilityPrint />} />
            <Route path="/resources/uniflow-platform-overview" element={<UniflowPlatformOverview />} />
            <Route path="/resources/uniflow-secure-print-release" element={<UniflowSecurePrintRelease />} />
            <Route path="/resources/uniflow-cost-tracking" element={<UniflowCostTracking />} />
            <Route path="/resources/uniflow-print-from-anywhere" element={<UniflowPrintFromAnywhere />} />
            <Route path="/resources/uniflow-mobile-cloud-printing" element={<UniflowMobileCloudPrinting />} />
            <Route path="/resources/uniflow-flexible-access-control" element={<UniflowFlexibleAccessControl />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services/papercut" element={<PaperCutService />} />
            <Route path="/services/uniflow" element={<UniflowService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App