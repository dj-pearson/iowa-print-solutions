/**
 * Verified product facts - SINGLE SOURCE OF TRUTH
 *
 * ============================================================================
 * MAINTENANCE RULE - READ BEFORE EDITING
 * ============================================================================
 * Every version number, feature claim, and release date in this file must be
 * traceable to a vendor source listed in its `sources` array. If you cannot
 * point to a vendor page or a trade-press report of a vendor announcement,
 * it does not belong here.
 *
 * Do NOT hardcode version numbers or feature lists into page components.
 * Import from here instead, so a new release is a one-file update rather
 * than a 90-file hunt.
 *
 * Historical note: earlier versions of this site published forward-looking
 * feature claims for PaperCut MF 26 and "Uniflow 2026" that did not match
 * what the vendors shipped. This file exists to prevent that recurring.
 * ============================================================================
 */

/** Last time the facts in this file were checked against vendor sources. */
export const FACTS_VERIFIED = '2026-07-30'

export const papercut = {
  id: 'papercut',
  // Canon-style brand casing matters for entity matching in search and AI answers.
  brand: 'PaperCut',
  name: 'PaperCut MF',
  vendor: 'PaperCut Software',
  currentVersion: '26.0',
  currentVersionLabel: 'PaperCut MF 26.0',
  releaseDate: '2026-07-08',
  releaseDateDisplay: 'July 8, 2026',
  previousVersions: ['25.0', '24.1'],

  /**
   * Verified MF 26.0 feature set. Each entry is defensible against the
   * vendor release announcement.
   */
  features: [
    {
      id: 'saml-sso',
      title: 'Native SAML 2.0 single sign-on',
      short: 'SAML 2.0 SSO',
      description:
        'PaperCut MF now acts as a SAML 2.0 Service Provider, authenticating users directly against an existing corporate identity provider. Validated IdPs include Okta, Microsoft Entra ID, PingFederate, and JumpCloud.',
      category: 'identity',
    },
    {
      id: 'unified-sessions',
      title: 'Unified user sessions (centralized authentication)',
      short: 'Unified sessions',
      description:
        'Users authenticate once and carry that session across the User Client, Print Deploy, and the web interfaces, instead of signing in to each separately.',
      category: 'identity',
    },
    {
      id: 'arm64-print-deploy',
      title: 'ARM64-aware Print Deploy',
      short: 'ARM64 driver support',
      description:
        'Print Deploy is now architecture-aware: it detects the endpoint CPU and delivers the matching driver, so x64 and ARM64 Windows laptops are provisioned from the same queue definitions.',
      category: 'deployment',
    },
    {
      id: 'ricoh-smartsdk-v2',
      title: 'Rebuilt Ricoh embedded application',
      short: 'Ricoh SmartSDK-V2',
      description:
        'The Ricoh embedded application has been rebuilt on Ricoh SmartSDK-V2, replacing the previous generation of the embedded client on supported Ricoh devices.',
      category: 'devices',
    },
    {
      id: 'eol-device-guard',
      title: 'Automatic end-of-life device protection',
      short: 'EOL device guard',
      description:
        'On upgrade, MF 26.0 automatically disables device types that have reached end of life, so unmaintainable legacy hardware cannot remain an unpatched entry point into the print environment.',
      category: 'security',
    },
    {
      id: 'embedded-ui-refresh',
      title: 'Embedded UI refresh with dark mode',
      short: 'Dark mode',
      description:
        'A visual refresh of the Embedded UI adds a dark mode option on select platforms. It is a design-only change: existing workflows and button placement are unchanged, so no end-user retraining is required.',
      category: 'experience',
    },
  ],

  sources: [
    {
      label: 'PaperCut MF 26.0 release announcement',
      url: 'https://www.papercut.com/blog/releases/new-in-papercut-mf-26-0/',
    },
    {
      label: 'PaperCut MF 26.0 feature overview',
      url: 'https://www.papercut.com/products/mf/latest-features/26-0/',
    },
    {
      label: 'PaperCut MF release history',
      url: 'https://www.papercut.com/products/mf/release-history/',
    },
  ],
}

export const uniflow = {
  id: 'uniflow',
  // Canon/NT-ware brand casing is lowercase "uni" + uppercase "FLOW".
  // Never write "Uniflow" or "UniFlow" in customer-facing copy.
  brand: 'uniFLOW',
  name: 'uniFLOW Online',
  vendor: 'Canon / NT-ware',

  /**
   * uniFLOW ships as two distinct products. Conflating them is a common
   * and damaging error in print-management content.
   */
  editions: {
    online: {
      name: 'uniFLOW Online',
      deployment: 'Cloud (SaaS)',
      currentVersion: '2026.2',
      currentVersionLabel: 'uniFLOW Online 2026.2',
      releaseDate: '2026-05',
      releaseDateDisplay: 'May 2026',
      // uniFLOW Online ships roughly twice yearly as YYYY.1 / YYYY.2.
      releaseCadence: 'Two releases per year (YYYY.1 in spring, YYYY.2 mid-year)',
      previousVersions: ['2026.1', '2025.2'],
    },
    onPremise: {
      name: 'uniFLOW (on-premise)',
      deployment: 'On-premise server',
      note:
        'The on-premise uniFLOW server product versions independently of uniFLOW Online. Confirm the exact on-premise version with Canon or NT-ware before quoting it in customer-facing material.',
    },
  },

  /** Verified uniFLOW Online 2026.2 features. */
  features: [
    {
      id: 'automated-meap-updates',
      title: 'Automated MEAP applet updates',
      short: 'Automated MEAP updates',
      description:
        'MEAP applet updates deploy automatically across compatible devices, keeping a fleet current on software and security fixes without per-device administrative work.',
      category: 'fleet',
      version: '2026.2',
    },
    {
      id: 'flexible-update-strategies',
      title: 'Flexible update strategies',
      short: 'Update strategies',
      description:
        'Organizations control how quickly new applet versions roll out, so change-control and compliance requirements can gate deployment rather than being bypassed by it.',
      category: 'fleet',
      version: '2026.2',
    },
    {
      id: 'update-notifications',
      title: 'Automatic completion notifications',
      short: 'Update notifications',
      description:
        'uniFLOW Online notifies administrators when updates finish, giving fleet-wide visibility without manual verification passes.',
      category: 'fleet',
      version: '2026.2',
    },
    {
      id: 'device-application-policy',
      title: 'Device Application Policy extension',
      short: 'Device Application Policy',
      description:
        'Introduced as an experimental extension in 2026.1, Device Application Policy brings centralized bulk MEAP application updates to MEAP-compatible imageRUNNER ADVANCE DX and imageFORCE devices.',
      category: 'fleet',
      version: '2026.1',
    },
    {
      id: 'device-access-policies',
      title: 'Enhanced device access control',
      short: 'Device access policies',
      description:
        'Device access policies give administrators finer control over how users interact with connected devices, including assigning policy sets to device groups.',
      category: 'security',
      version: '2026.1',
    },
  ],

  sources: [
    {
      label: 'uniFLOW Online 2026.2 announcement (NT-ware)',
      url: 'https://nt-ware.online/uniflow-online-2026-2-strengthens-device-fleet-management-with-automated-meap-applet-updates/',
    },
    {
      label: 'uniFLOW Online 2026.1 announcement',
      url: 'https://industryanalysts.com/uniflow-online-2026-1-delivering-scalable-device-application-management-and-enhanced-access-control/',
    },
    {
      label: 'NT-ware uniFLOW Online news',
      url: 'https://www.uniflowonline.com/en/news/',
    },
  ],
}

export const vasion = {
  id: 'printerlogic',
  brand: 'Vasion Print',
  name: 'Vasion Print',
  formerName: 'PrinterLogic',
  /** Use this in body copy the first time the product is named on a page. */
  displayNameWithFormer: 'Vasion Print (formerly PrinterLogic)',
  vendor: 'Vasion',
  renamedDate: '2024-09',
  renamedDateDisplay: 'September 2024',
  renameNote:
    'Vasion renamed the PrinterLogic product to Vasion Print in September 2024. Many buyers still search the former name, so pages should mention both.',

  features: [
    {
      id: 'serverless-direct-ip',
      title: 'Serverless direct IP printing',
      short: 'Serverless printing',
      description:
        'Centrally managed direct IP printing removes print servers from the path, so a server outage no longer takes printing down for a site.',
      category: 'architecture',
    },
    {
      id: 'self-service-portal',
      title: 'Self-service installation portal',
      short: 'Self-service install',
      description:
        'Users install their own printers from a self-service portal, which measurably reduces print-related help desk tickets.',
      category: 'operations',
    },
    {
      id: 'zero-trust',
      title: 'Zero Trust security model support',
      short: 'Zero Trust',
      description:
        'Every user is authenticated and print data is protected in transit, supporting Zero Trust architectures and compliance requirements.',
      category: 'security',
    },
    {
      id: 'secure-release',
      title: 'Secure release printing',
      short: 'Secure release',
      description:
        'Jobs are held until the user releases them at the device via the control panel, an ID badge, or the mobile release app for iOS and Android.',
      category: 'security',
    },
  ],

  sources: [
    {
      label: 'Vasion product name change announcement',
      url: 'https://www.businesswire.com/news/home/20240926156658/en/Vasion-Announces-Product-Name-Change-from-PrinterLogic-to-Vasion-Print-Marking-a-New-Era-in-Digital-Transformation',
    },
    {
      label: 'PrinterLogic rebrands as Vasion',
      url: 'https://vasion.com/blog/printerlogic-rebrands-as-vasion-affirms-commitment-to-expanding-and-transforming-its-cloud-offerings/',
    },
  ],
}

export const products = { papercut, uniflow, vasion }

/** Every vendor source across all products, for citation blocks. */
export const allSources = [
  ...papercut.sources,
  ...uniflow.sources,
  ...vasion.sources,
]

export const getProduct = (id) =>
  Object.values(products).find((p) => p.id === id || p.brand === id)

/** Look up a single verified feature, e.g. getFeature('papercut', 'saml-sso'). */
export const getFeature = (productId, featureId) =>
  getProduct(productId)?.features.find((f) => f.id === featureId)

/** Features for one uniFLOW Online release, e.g. getUniflowFeatures('2026.2'). */
export const getUniflowFeatures = (version) =>
  uniflow.features.filter((f) => f.version === version)

export default products
