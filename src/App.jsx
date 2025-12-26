import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import { AnalyticsProvider } from './components/AnalyticsProvider'
import Navbar from './components/Navbar'
import Breadcrumbs from './components/Breadcrumbs'
import Footer from './components/Footer'
import { PageLoadingFallback } from './components/PageLoadingFallback'

// ============================================================================
// LAZY LOADED PAGE COMPONENTS
// Using React.lazy() for route-level code splitting to improve initial load
// Each page is loaded only when the user navigates to that route
// ============================================================================

// Main Pages
const Home = lazy(() => import('./pages/Home'))
const SearchResults = lazy(() => import('./pages/SearchResults'))
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Resources = lazy(() => import('./pages/Resources'))
const Tools = lazy(() => import('./pages/Tools'))
const Locations = lazy(() => import('./pages/Locations'))
const Blog = lazy(() => import('./pages/Blog'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const PrintManagementComparison = lazy(() => import('./pages/PrintManagementComparison'))
const PrintCostCalculator = lazy(() => import('./pages/PrintCostCalculator'))
const ResourceLibrary = lazy(() => import('./pages/ResourceLibrary'))
const AnalyticsTest = lazy(() => import('./pages/AnalyticsTest'))

// Resource Pages - PaperCut
const PaperCutImplementationGuide = lazy(() => import('./pages/resources/PaperCutImplementationGuide'))
const PaperCutCostReduction = lazy(() => import('./pages/resources/PaperCutCostReduction'))
const PaperCutMobilePrinting = lazy(() => import('./pages/resources/PaperCutMobilePrinting'))
const PaperCutSecurityPractices = lazy(() => import('./pages/resources/PaperCutSecurityPractices'))
const PaperCutSecurePrintRelease = lazy(() => import('./pages/resources/PaperCutSecurePrintRelease'))
const PaperCutFollowMePrint = lazy(() => import('./pages/resources/PaperCutFollowMePrint'))
const PaperCutMobilityPrint = lazy(() => import('./pages/resources/PaperCutMobilityPrint'))

// Resource Pages - Uniflow
const UniflowPlatformOverview = lazy(() => import('./pages/resources/UniflowPlatformOverview'))
const UniflowSecurePrintRelease = lazy(() => import('./pages/resources/UniflowSecurePrintRelease'))
const UniflowCostTracking = lazy(() => import('./pages/resources/UniflowCostTracking'))
const UniflowPrintFromAnywhere = lazy(() => import('./pages/resources/UniflowPrintFromAnywhere'))
const UniflowMobileCloudPrinting = lazy(() => import('./pages/resources/UniflowMobileCloudPrinting'))
const UniflowFlexibleAccessControl = lazy(() => import('./pages/resources/UniflowFlexibleAccessControl'))

// Resource Pages - PrinterLogic
const PrinterLogicServerlessPrinting = lazy(() => import('./pages/resources/PrinterLogicServerlessPrinting'))
const PrinterLogicSelfServiceInstallation = lazy(() => import('./pages/resources/PrinterLogicSelfServiceInstallation'))
const PrinterLogicSecureReleasePrinting = lazy(() => import('./pages/resources/PrinterLogicSecureReleasePrinting'))

// Resource Pages - Comparisons
const PaperCutVsUniflowComparison = lazy(() => import('./pages/resources/PaperCutVsUniflowComparison'))
const PrintManagementSoftwareComparison = lazy(() => import('./pages/resources/PrintManagementSoftwareComparison'))

// Service Pages
const PaperCutService = lazy(() => import('./pages/services/PaperCutService'))
const UniflowService = lazy(() => import('./pages/services/UniflowService'))
const PaperCutIowa = lazy(() => import('./pages/services/PaperCutIowa'))
const UniflowIowa = lazy(() => import('./pages/services/UniflowIowa'))
const PrinterLogicIowa = lazy(() => import('./pages/services/PrinterLogicIowa'))

// Blog Pages - Healthcare
const PaperCutHealthcareIowa = lazy(() => import('./pages/blog/PaperCutHealthcareIowa'))
const HIPAAPrintingIowa = lazy(() => import('./pages/blog/HIPAAPrintingIowa'))
const UniflowMedicalIowa = lazy(() => import('./pages/blog/UniflowMedicalIowa'))

// Blog Pages - Education
const PaperCutEducationIowa = lazy(() => import('./pages/blog/PaperCutEducationIowa'))
const UniflowUniversityIowa = lazy(() => import('./pages/blog/UniflowUniversityIowa'))
const SchoolDistrictIowa = lazy(() => import('./pages/blog/SchoolDistrictIowa'))
const ReducingPrintingCostsIowaSchools = lazy(() => import('./pages/blog/ReducingPrintingCostsIowaSchools'))
const PaperCutVsUniflowVsPrinterLogicIowaK12 = lazy(() => import('./pages/blog/PaperCutVsUniflowVsPrinterLogicIowaK12'))

// Blog Pages - Cost & Business
const ReducePrintingCostsIowa = lazy(() => import('./pages/blog/ReducePrintingCostsIowa'))
const EliminatePrintServersIowa = lazy(() => import('./pages/blog/EliminatePrintServersIowa'))
const SecurePrintReleaseIowa = lazy(() => import('./pages/blog/SecurePrintReleaseIowa'))
const PaperCutCostReductionIowa = lazy(() => import('./pages/blog/PaperCutCostReductionIowa'))
const SmallBusinessPrintManagementIowa = lazy(() => import('./pages/blog/SmallBusinessPrintManagementIowa'))
const PrintManagementSoftwareROIIowa = lazy(() => import('./pages/blog/PrintManagementSoftwareROIIowa'))

// Blog Pages - Security
const PrintSecuritySoftwareDesMoines = lazy(() => import('./pages/blog/PrintSecuritySoftwareDesMoines'))
const DocumentSecurityPrintingCedarRapids = lazy(() => import('./pages/blog/DocumentSecurityPrintingCedarRapids'))

// Blog Pages - Managed Services
const ManagedPrintServicesIowa = lazy(() => import('./pages/blog/ManagedPrintServicesIowa'))
const DocumentManagementIowa = lazy(() => import('./pages/blog/DocumentManagementIowa'))
const PrintManagementDesMoines = lazy(() => import('./pages/blog/PrintManagementDesMoines'))

// Blog Pages - Comparisons
const PaperCutVsAlternativesIowa = lazy(() => import('./pages/blog/PaperCutVsAlternativesIowa'))
const PrintManagementSoftwareComparisonIowa = lazy(() => import('./pages/blog/PrintManagementSoftwareComparisonIowa'))
const PaperCutVsUniflowIowa = lazy(() => import('./pages/blog/PaperCutVsUniflowIowa'))

// Blog Pages - Product Updates
const PaperCutMF241Updates = lazy(() => import('./pages/blog/PaperCutMF241Updates'))
const Uniflow2025Updates = lazy(() => import('./pages/blog/Uniflow2025Updates'))
const PaperCutMF250Iowa = lazy(() => import('./pages/blog/PaperCutMF250Iowa'))
const PaperCutHiveQ42025Iowa = lazy(() => import('./pages/blog/PaperCutHiveQ42025Iowa'))

// Blog Pages - Technology Trends
const AIPrintManagementIowa2025 = lazy(() => import('./pages/blog/AIPrintManagementIowa2025'))
const MobilePrintingSolutionsIowa2025 = lazy(() => import('./pages/blog/MobilePrintingSolutionsIowa2025'))
const CloudPrintingSolutionsIowa2025 = lazy(() => import('./pages/blog/CloudPrintingSolutionsIowa2025'))

// Location Pages
const DesMoinesPrintSolutions = lazy(() => import('./pages/locations/DesMoinesPrintSolutions'))
const CedarRapidsPrintSolutions = lazy(() => import('./pages/locations/CedarRapidsPrintSolutions'))
const IowaCityPrintSolutions = lazy(() => import('./pages/locations/IowaCityPrintSolutions'))
const DavenportPrintSolutions = lazy(() => import('./pages/locations/DavenportPrintSolutions'))
const DesMoinesPrintManagement = lazy(() => import('./pages/locations/DesMoinesPrintManagement'))
const CedarRapidsPrintManagement = lazy(() => import('./pages/locations/CedarRapidsPrintManagement'))
const IowaCityPrintManagement = lazy(() => import('./pages/locations/IowaCityPrintManagement'))
const DavenportPrintManagement = lazy(() => import('./pages/locations/DavenportPrintManagement'))
const WaterlooCedarFallsPrintManagement = lazy(() => import('./pages/locations/WaterlooCedarFallsPrintManagement'))
const SiouxCityPrintManagement = lazy(() => import('./pages/locations/SiouxCityPrintManagement'))
const DubuquePrintManagement = lazy(() => import('./pages/locations/DubuquePrintManagement'))
const CouncilBluffsPrintManagement = lazy(() => import('./pages/locations/CouncilBluffsPrintManagement'))

// Industry Pages
const IowaHealthcarePrintSolutions = lazy(() => import('./pages/industries/IowaHealthcarePrintSolutions'))
const IowaEducationPrintSolutions = lazy(() => import('./pages/industries/IowaEducationPrintSolutions'))

// ============================================================================
// APP CONTENT COMPONENT
// ============================================================================
const AppContent = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumbs />
      <main>
        {/* Suspense boundary wraps all lazy-loaded routes for code splitting */}
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            {/* Main Pages */}
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
            <Route path="/print-management-comparison" element={<PrintManagementComparison />} />
            <Route path="/print-cost-calculator" element={<PrintCostCalculator />} />
            <Route path="/resource-library" element={<ResourceLibrary />} />
            <Route path="/analytics-test" element={<AnalyticsTest />} />

            {/* Resource Pages - PaperCut */}
            <Route path="/resources/papercut-implementation-guide" element={<PaperCutImplementationGuide />} />
            <Route path="/resources/papercut-cost-reduction" element={<PaperCutCostReduction />} />
            <Route path="/resources/papercut-mobile-printing" element={<PaperCutMobilePrinting />} />
            <Route path="/resources/papercut-security-practices" element={<PaperCutSecurityPractices />} />
            <Route path="/resources/papercut-secure-print-release" element={<PaperCutSecurePrintRelease />} />
            <Route path="/resources/papercut-follow-me-print" element={<PaperCutFollowMePrint />} />
            <Route path="/resources/papercut-mobility-print" element={<PaperCutMobilityPrint />} />

            {/* Resource Pages - Uniflow */}
            <Route path="/resources/uniflow-platform-overview" element={<UniflowPlatformOverview />} />
            <Route path="/resources/uniflow-secure-print-release" element={<UniflowSecurePrintRelease />} />
            <Route path="/resources/uniflow-cost-tracking" element={<UniflowCostTracking />} />
            <Route path="/resources/uniflow-print-from-anywhere" element={<UniflowPrintFromAnywhere />} />
            <Route path="/resources/uniflow-mobile-cloud-printing" element={<UniflowMobileCloudPrinting />} />
            <Route path="/resources/uniflow-flexible-access-control" element={<UniflowFlexibleAccessControl />} />

            {/* Resource Pages - PrinterLogic */}
            <Route path="/resources/printerlogic-serverless-printing" element={<PrinterLogicServerlessPrinting />} />
            <Route path="/resources/printerlogic-self-service-installation" element={<PrinterLogicSelfServiceInstallation />} />
            <Route path="/resources/printerlogic-secure-release-printing" element={<PrinterLogicSecureReleasePrinting />} />

            {/* Resource Pages - Comparisons */}
            <Route path="/resources/papercut-vs-uniflow-comparison" element={<PaperCutVsUniflowComparison />} />
            <Route path="/resources/print-management-software-comparison" element={<PrintManagementSoftwareComparison />} />

            {/* Service Pages */}
            <Route path="/services/papercut" element={<PaperCutService />} />
            <Route path="/services/uniflow" element={<UniflowService />} />
            <Route path="/services/papercut-iowa" element={<PaperCutIowa />} />
            <Route path="/services/uniflow-iowa" element={<UniflowIowa />} />
            <Route path="/services/printerlogic-iowa" element={<PrinterLogicIowa />} />

            {/* Blog Pages - Healthcare */}
            <Route path="/blog/papercut-healthcare-iowa" element={<PaperCutHealthcareIowa />} />
            <Route path="/blog/hipaa-printing-iowa" element={<HIPAAPrintingIowa />} />
            <Route path="/blog/uniflow-medical-iowa" element={<UniflowMedicalIowa />} />

            {/* Blog Pages - Education */}
            <Route path="/blog/papercut-education-iowa" element={<PaperCutEducationIowa />} />
            <Route path="/blog/uniflow-university-iowa" element={<UniflowUniversityIowa />} />
            <Route path="/blog/school-district-iowa" element={<SchoolDistrictIowa />} />
            <Route path="/blog/reducing-printing-costs-iowa-schools" element={<ReducingPrintingCostsIowaSchools />} />
            <Route path="/blog/papercut-vs-uniflow-vs-printerlogic-iowa-k12" element={<PaperCutVsUniflowVsPrinterLogicIowaK12 />} />

            {/* Blog Pages - Cost & Business */}
            <Route path="/blog/reduce-printing-costs-iowa" element={<ReducePrintingCostsIowa />} />
            <Route path="/blog/eliminate-print-servers-iowa" element={<EliminatePrintServersIowa />} />
            <Route path="/blog/secure-print-release-iowa" element={<SecurePrintReleaseIowa />} />
            <Route path="/blog/papercut-cost-reduction-iowa" element={<PaperCutCostReductionIowa />} />
            <Route path="/blog/small-business-print-management-iowa" element={<SmallBusinessPrintManagementIowa />} />
            <Route path="/blog/print-management-software-roi-iowa" element={<PrintManagementSoftwareROIIowa />} />

            {/* Blog Pages - Security */}
            <Route path="/blog/print-security-software-des-moines" element={<PrintSecuritySoftwareDesMoines />} />
            <Route path="/blog/document-security-printing-cedar-rapids" element={<DocumentSecurityPrintingCedarRapids />} />

            {/* Blog Pages - Managed Services */}
            <Route path="/blog/managed-print-services-iowa" element={<ManagedPrintServicesIowa />} />
            <Route path="/blog/document-management-iowa" element={<DocumentManagementIowa />} />
            <Route path="/blog/print-management-des-moines" element={<PrintManagementDesMoines />} />

            {/* Blog Pages - Comparisons */}
            <Route path="/blog/papercut-vs-alternatives-iowa" element={<PaperCutVsAlternativesIowa />} />
            <Route path="/blog/print-management-software-comparison-iowa" element={<PrintManagementSoftwareComparisonIowa />} />
            <Route path="/blog/papercut-vs-uniflow-iowa" element={<PaperCutVsUniflowIowa />} />

            {/* Blog Pages - Product Updates */}
            <Route path="/blog/papercut-mf-24-1-updates" element={<PaperCutMF241Updates />} />
            <Route path="/blog/uniflow-2025-updates" element={<Uniflow2025Updates />} />
            <Route path="/blog/papercut-mf-25-iowa-benefits" element={<PaperCutMF250Iowa />} />
            <Route path="/blog/papercut-hive-q4-2025-iowa" element={<PaperCutHiveQ42025Iowa />} />

            {/* Blog Pages - Technology Trends */}
            <Route path="/blog/ai-print-management-iowa-2025" element={<AIPrintManagementIowa2025 />} />
            <Route path="/blog/mobile-printing-solutions-iowa-2025" element={<MobilePrintingSolutionsIowa2025 />} />
            <Route path="/blog/cloud-printing-solutions-iowa-2025" element={<CloudPrintingSolutionsIowa2025 />} />

            {/* Location Pages */}
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

            {/* Industry Pages */}
            <Route path="/industries/iowa-healthcare-print-solutions" element={<IowaHealthcarePrintSolutions />} />
            <Route path="/industries/iowa-education-print-solutions" element={<IowaEducationPrintSolutions />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
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
