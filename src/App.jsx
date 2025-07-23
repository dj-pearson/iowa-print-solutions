import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import Tools from './pages/Tools'
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
import PrinterLogicServerlessPrinting from './pages/resources/PrinterLogicServerlessPrinting'
import PrinterLogicSelfServiceInstallation from './pages/resources/PrinterLogicSelfServiceInstallation'
import PrinterLogicSecureReleasePrinting from './pages/resources/PrinterLogicSecureReleasePrinting'
import Blog from './pages/Blog'
import UniflowUniversityIowa from './pages/blog/UniflowUniversityIowa'
import SchoolDistrictIowa from './pages/blog/SchoolDistrictIowa'
import ReducePrintingCostsIowa from './pages/blog/ReducePrintingCostsIowa'
import EliminatePrintServersIowa from './pages/blog/EliminatePrintServersIowa'
import SecurePrintReleaseIowa from './pages/blog/SecurePrintReleaseIowa'
import PaperCutCostReductionIowa from './pages/blog/PaperCutCostReductionIowa'
import PrintSecuritySoftwareDesMoines from './pages/blog/PrintSecuritySoftwareDesMoines'
import DocumentSecurityPrintingCedarRapids from './pages/blog/DocumentSecurityPrintingCedarRapids'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
            <Route path="/resources/printerlogic-serverless-printing" element={<PrinterLogicServerlessPrinting />} />
            <Route path="/resources/printerlogic-self-service-installation" element={<PrinterLogicSelfServiceInstallation />} />
            <Route path="/resources/printerlogic-secure-release-printing" element={<PrinterLogicSecureReleasePrinting />} />
            <Route path="/services/papercut" element={<PaperCutService />} />
            <Route path="/services/uniflow" element={<UniflowService />} />
            <Route path="/blog/uniflow-university-iowa" element={<UniflowUniversityIowa />} />
            <Route path="/blog/school-district-iowa" element={<SchoolDistrictIowa />} />
            <Route path="/blog/reduce-printing-costs-iowa" element={<ReducePrintingCostsIowa />} />
            <Route path="/blog/eliminate-print-servers-iowa" element={<EliminatePrintServersIowa />} />
            <Route path="/blog/secure-print-release-iowa" element={<SecurePrintReleaseIowa />} />
          <Route path="/blog/papercut-cost-reduction-iowa" element={<PaperCutCostReductionIowa />} />
          <Route path="/blog/print-security-software-des-moines" element={<PrintSecuritySoftwareDesMoines />} />
          <Route path="/blog/document-security-printing-cedar-rapids" element={<DocumentSecurityPrintingCedarRapids />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App