import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import { AnalyticsProvider } from './components/AnalyticsProvider'
import Navbar from './components/Navbar'
import Breadcrumbs from './components/Breadcrumbs'
import Footer from './components/Footer'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import Tools from './pages/Tools'
import Locations from './pages/Locations'
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
import PaperCutVsUniflowComparison from './pages/resources/PaperCutVsUniflowComparison'
import PrintManagementSoftwareComparison from './pages/resources/PrintManagementSoftwareComparison'
import Blog from './pages/Blog'
import PaperCutHealthcareIowa from './pages/blog/PaperCutHealthcareIowa'
import HIPAAPrintingIowa from './pages/blog/HIPAAPrintingIowa'
import UniflowMedicalIowa from './pages/blog/UniflowMedicalIowa'
import PaperCutEducationIowa from './pages/blog/PaperCutEducationIowa'
import UniflowUniversityIowa from './pages/blog/UniflowUniversityIowa'
import SchoolDistrictIowa from './pages/blog/SchoolDistrictIowa'
import ReducePrintingCostsIowa from './pages/blog/ReducePrintingCostsIowa'
import EliminatePrintServersIowa from './pages/blog/EliminatePrintServersIowa'
import SecurePrintReleaseIowa from './pages/blog/SecurePrintReleaseIowa'
import PaperCutCostReductionIowa from './pages/blog/PaperCutCostReductionIowa'
import PrintSecuritySoftwareDesMoines from './pages/blog/PrintSecuritySoftwareDesMoines'
import DocumentSecurityPrintingCedarRapids from './pages/blog/DocumentSecurityPrintingCedarRapids'
import ManagedPrintServicesIowa from './pages/blog/ManagedPrintServicesIowa'
import DocumentManagementIowa from './pages/blog/DocumentManagementIowa'
import PrintManagementDesMoines from './pages/blog/PrintManagementDesMoines'
import PaperCutVsAlternativesIowa from './pages/blog/PaperCutVsAlternativesIowa'
import PrintManagementSoftwareComparisonIowa from './pages/blog/PrintManagementSoftwareComparisonIowa'
import PaperCutMF241Updates from './pages/blog/PaperCutMF241Updates'
import Uniflow2025Updates from './pages/blog/Uniflow2025Updates'
import PaperCutMF250Iowa from './pages/blog/PaperCutMF250Iowa'
import DesMoinesPrintSolutions from './pages/locations/DesMoinesPrintSolutions'
import CedarRapidsPrintSolutions from './pages/locations/CedarRapidsPrintSolutions'
import IowaCityPrintSolutions from './pages/locations/IowaCityPrintSolutions'
import DavenportPrintSolutions from './pages/locations/DavenportPrintSolutions'
import DesMoinesPrintManagement from './pages/locations/DesMoinesPrintManagement'
import CedarRapidsPrintManagement from './pages/locations/CedarRapidsPrintManagement'
import IowaCityPrintManagement from './pages/locations/IowaCityPrintManagement'
import DavenportPrintManagement from './pages/locations/DavenportPrintManagement'
import SmallBusinessPrintManagementIowa from './pages/blog/SmallBusinessPrintManagementIowa'
import PaperCutVsUniflowIowa from './pages/blog/PaperCutVsUniflowIowa'
import ReducingPrintingCostsIowaSchools from './pages/blog/ReducingPrintingCostsIowaSchools'
import PaperCutHiveQ42025Iowa from './pages/blog/PaperCutHiveQ42025Iowa'
import PaperCutVsUniflowVsPrinterLogicIowaK12 from './pages/blog/PaperCutVsUniflowVsPrinterLogicIowaK12'
import AIPrintManagementIowa2025 from './pages/blog/AIPrintManagementIowa2025'
import MobilePrintingSolutionsIowa2025 from './pages/blog/MobilePrintingSolutionsIowa2025'
import PrintManagementSoftwareROIIowa from './pages/blog/PrintManagementSoftwareROIIowa'
import CloudPrintingSolutionsIowa2025 from './pages/blog/CloudPrintingSolutionsIowa2025'
import PaperCutIowa from './pages/services/PaperCutIowa'
import UniflowIowa from './pages/services/UniflowIowa'
import PrinterLogicIowa from './pages/services/PrinterLogicIowa'
import WaterlooCedarFallsPrintManagement from './pages/locations/WaterlooCedarFallsPrintManagement'
import SiouxCityPrintManagement from './pages/locations/SiouxCityPrintManagement'
import DubuquePrintManagement from './pages/locations/DubuquePrintManagement'
import CouncilBluffsPrintManagement from './pages/locations/CouncilBluffsPrintManagement'
import IowaHealthcarePrintSolutions from './pages/industries/IowaHealthcarePrintSolutions'
import IowaEducationPrintSolutions from './pages/industries/IowaEducationPrintSolutions'
import PrintManagementComparison from './pages/PrintManagementComparison'
import PrintCostCalculator from './pages/PrintCostCalculator'
import ResourceLibrary from './pages/ResourceLibrary'
import AnalyticsTest from './pages/AnalyticsTest'

const AppContent = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumbs />
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/locations" element={<Locations />} />
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
            <Route path="/resources/papercut-vs-uniflow-comparison" element={<PaperCutVsUniflowComparison />} />
            <Route path="/resources/print-management-software-comparison" element={<PrintManagementSoftwareComparison />} />
            <Route path="/services/papercut" element={<PaperCutService />} />
            <Route path="/services/uniflow" element={<UniflowService />} />
            <Route path="/services/papercut-iowa" element={<PaperCutIowa />} />
            <Route path="/services/uniflow-iowa" element={<UniflowIowa />} />
            <Route path="/services/printerlogic-iowa" element={<PrinterLogicIowa />} />
            <Route path="/blog/papercut-healthcare-iowa" element={<PaperCutHealthcareIowa />} />
            <Route path="/blog/hipaa-printing-iowa" element={<HIPAAPrintingIowa />} />
            <Route path="/blog/uniflow-medical-iowa" element={<UniflowMedicalIowa />} />
            <Route path="/blog/papercut-education-iowa" element={<PaperCutEducationIowa />} />
            <Route path="/blog/uniflow-university-iowa" element={<UniflowUniversityIowa />} />
            <Route path="/blog/school-district-iowa" element={<SchoolDistrictIowa />} />
            <Route path="/blog/reduce-printing-costs-iowa" element={<ReducePrintingCostsIowa />} />
            <Route path="/blog/eliminate-print-servers-iowa" element={<EliminatePrintServersIowa />} />
            <Route path="/blog/secure-print-release-iowa" element={<SecurePrintReleaseIowa />} />
            <Route path="/blog/papercut-cost-reduction-iowa" element={<PaperCutCostReductionIowa />} />
            <Route path="/blog/print-security-software-des-moines" element={<PrintSecuritySoftwareDesMoines />} />
            <Route path="/blog/document-security-printing-cedar-rapids" element={<DocumentSecurityPrintingCedarRapids />} />
            <Route path="/blog/managed-print-services-iowa" element={<ManagedPrintServicesIowa />} />
            <Route path="/blog/document-management-iowa" element={<DocumentManagementIowa />} />
            <Route path="/blog/print-management-des-moines" element={<PrintManagementDesMoines />} />
            <Route path="/blog/papercut-vs-alternatives-iowa" element={<PaperCutVsAlternativesIowa />} />
            <Route path="/blog/print-management-software-comparison-iowa" element={<PrintManagementSoftwareComparisonIowa />} />
            <Route path="/blog/papercut-mf-24-1-updates" element={<PaperCutMF241Updates />} />
            <Route path="/blog/uniflow-2025-updates" element={<Uniflow2025Updates />} />
            <Route path="/blog/papercut-mf-25-iowa-benefits" element={<PaperCutMF250Iowa />} />
            <Route path="/blog/small-business-print-management-iowa" element={<SmallBusinessPrintManagementIowa />} />
            <Route path="/blog/papercut-vs-uniflow-iowa" element={<PaperCutVsUniflowIowa />} />
            <Route path="/blog/reducing-printing-costs-iowa-schools" element={<ReducingPrintingCostsIowaSchools />} />
            <Route path="/blog/papercut-hive-q4-2025-iowa" element={<PaperCutHiveQ42025Iowa />} />
            <Route path="/blog/papercut-vs-uniflow-vs-printerlogic-iowa-k12" element={<PaperCutVsUniflowVsPrinterLogicIowaK12 />} />
            <Route path="/blog/ai-print-management-iowa-2025" element={<AIPrintManagementIowa2025 />} />
            <Route path="/blog/mobile-printing-solutions-iowa-2025" element={<MobilePrintingSolutionsIowa2025 />} />
            <Route path="/blog/print-management-software-roi-iowa" element={<PrintManagementSoftwareROIIowa />} />
            <Route path="/blog/cloud-printing-solutions-iowa-2025" element={<CloudPrintingSolutionsIowa2025 />} />
            <Route path="/locations/des-moines" element={<DesMoinesPrintSolutions />} />
            <Route path="/locations/des-moines-print-management" element={<DesMoinesPrintManagement />} />
            <Route path="/locations/cedar-rapids" element={<CedarRapidsPrintSolutions />} />
            <Route path="/locations/cedar-rapids-print-management" element={<CedarRapidsPrintManagement />} />
            <Route path="/locations/iowa-city" element={<IowaCityPrintSolutions />} />
            <Route path="/locations/iowa-city-print-management" element={<IowaCityPrintManagement />} />
            <Route path="/locations/davenport" element={<DavenportPrintSolutions />} />
            <Route path="/locations/davenport-print-management" element={<DavenportPrintManagement />} />
            <Route path="/locations/waterloo-cedar-falls-print-management" element={<WaterlooCedarFallsPrintManagement />} />
            <Route path="/locations/sioux-city-print-management" element={<SiouxCityPrintManagement />} />
            <Route path="/locations/dubuque-print-management" element={<DubuquePrintManagement />} />
            <Route path="/locations/council-bluffs-print-management" element={<CouncilBluffsPrintManagement />} />
            <Route path="/industries/iowa-healthcare-print-solutions" element={<IowaHealthcarePrintSolutions />} />
            <Route path="/industries/iowa-education-print-solutions" element={<IowaEducationPrintSolutions />} />
            <Route path="/print-management-comparison" element={<PrintManagementComparison />} />
            <Route path="/print-cost-calculator" element={<PrintCostCalculator />} />
            <Route path="/resource-library" element={<ResourceLibrary />} />
            <Route path="/analytics-test" element={<AnalyticsTest />} />
          </Routes>
        </main>
        <Footer />
      </div>
  )
}

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <AnalyticsProvider>
          <AppContent />
        </AnalyticsProvider>
      </Router>
    </ErrorBoundary>
  )
}

export default App