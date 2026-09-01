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
 * feature claims for PaperCut MF 26 and "uniFLOW 2026" that did not match
 * what the vendors shipped. This file exists to prevent that recurring.
 * ============================================================================
 */

/** Last time the facts in this file were checked against vendor sources. */
export const FACTS_VERIFIED = '2026-09-01'

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
  // Do not use any other capitalisation in customer-facing copy - entity
  // matching in search and AI answers keys off the exact brand string.
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

/**
 * Security advisories affecting products this site covers.
 *
 * Same rule as everything else in this file: nothing goes in without a
 * citable vendor or government source. Severity and CVSS values are the
 * vendor/NVD published figures, not our assessment.
 *
 * `status` is one of:
 *   'active-exploitation' - confirmed in-the-wild exploitation
 *   'patched'             - fix shipped, no known exploitation
 */
export const securityAdvisories = [
  {
    id: 'papercut-aug-2026',
    productId: 'papercut',
    severity: 'critical',
    status: 'active-exploitation',
    title: 'PaperCut NG/MF pre-authentication remote code execution',
    disclosedDate: '2026-08-27',
    disclosedDateDisplay: 'August 27, 2026',
    firstExploitedDate: '2026-08-26',
    firstExploitedDateDisplay: 'August 26, 2026',
    summary:
      'Two vulnerabilities in PaperCut NG and PaperCut MF can be chained by an unauthenticated attacker to run arbitrary code on the Application Server. Exploitation was observed in the wild before a patch existed.',
    cves: [
      {
        id: 'CVE-2026-81578',
        cvss: '8.8',
        rating: 'High',
        cwe: 'CWE-306: Missing authentication for critical function',
        description:
          'Improper access control in the PaperCut NG/MF web management interface lets an unauthenticated remote attacker reach configuration endpoints and change server settings.',
      },
      {
        id: 'CVE-2026-82078',
        cvss: '9.4',
        rating: 'Critical',
        cwe: 'CWE-470: Use of externally-controlled input to select classes or code',
        description:
          'The database connection utilities instantiate driver classes by name without validating them against an allowlist. An attacker who can change configuration can execute arbitrary Java bytecode as the PaperCut server process.',
      },
    ],
    chainNote:
      'CVE-2026-81578 supplies the unauthenticated configuration change that CVE-2026-82078 needs, so the pair together is pre-authentication remote code execution.',
    affected:
      'All versions of PaperCut NG and PaperCut MF released before the August 2026 emergency patches. Emergency patches exist for the v24, v25, and v26 branches. Installations on v23 or earlier must upgrade to a patched branch - no patch is being issued for them.',
    notAffected: [
      'PaperCut Hive',
      'PaperCut Pocket',
      'PaperCut Multiverse',
      'Print Deploy',
      'Mobility Print',
      'Print Logger',
    ],
    /** Newest first. The current required patch is entry [0]. */
    patches: [
      {
        label: 'Emergency Patch (Release 3)',
        date: '2026-09-01',
        dateDisplay: 'September 1, 2026',
        branches: ['v24', 'v25', 'v26'],
        note:
          'Cumulative - it includes Releases 1 and 2, so it can be applied directly. Adds further hardening and fixes two regressions introduced by the earlier emergency builds: broken SAML login flows and lost support for legacy Microsoft SQL Server drivers used for external card lookup.',
        current: true,
      },
      {
        label: 'Emergency Patch (Release 2)',
        date: '2026-08-28',
        dateDisplay: 'August 28, 2026',
        branches: ['v24', 'v25', 'v26'],
        note:
          'Issued after Huntress and watchTowr researchers found multiple bypasses of the first patch, plus a further authentication bypass. Superseded by Release 3.',
        current: false,
      },
      {
        label: 'Emergency Patch (Release 1)',
        date: '2026-08-28',
        dateDisplay: 'August 28, 2026',
        branches: ['v24', 'v25', 'v26'],
        note:
          'The original out-of-cycle build for Windows, Linux, and macOS. Bypassable - superseded.',
        current: false,
      },
    ],
    mitigations: [
      'Apply Emergency Patch Release 3. It supersedes both earlier emergency patches, and an install that stopped at Release 1 or 2 is not fully protected.',
      'Restrict the Application Server web interface (default ports 9191 and 9192) to trusted internal ranges at the firewall. An internet-facing PaperCut admin interface has no legitimate reason to exist.',
      'Treat any internet-exposed server that was unpatched between August 26 and the date you patched as potentially compromised, and run an incident response check rather than assuming the patch closed it.',
    ],
    /** Published indicators of compromise, from Huntress and Rapid7. */
    indicators: [
      {
        where: 'Application Server logs',
        what: 'The string "DB URL: jdbc:derby:memory:pwn", or errors reading "No suitable driver found for jdbc:no:x" and "DatabaseUtils - Database error looking up cardID: VALUES CAST".',
      },
      {
        where: 'server/lib/ directory',
        what: 'Unexpected .class files with short random names (Huntress reported examples such as Udydn.class and Moo97.class).',
      },
      {
        where: 'server/data/content/',
        what: 'Matching .out and .cmd files holding command output from discovery commands.',
      },
      {
        where: 'server/logs/',
        what: 'A server.log file that is missing, truncated, or has been deleted. Attackers cleaned up after themselves.',
      },
      {
        where: 'Process tree',
        what: 'Shells or discovery utilities (whoami, ver, tasklist) spawned as children of pc-app.exe.',
      },
    ],
    kev: {
      listed: true,
      addedDate: '2026-08-31',
      addedDateDisplay: 'August 31, 2026',
      federalDeadline: '2026-09-14',
      federalDeadlineDisplay: 'September 14, 2026',
      note:
        'CISA added both CVEs to the Known Exploited Vulnerabilities catalog. Federal civilian agencies must remediate by the BOD 22-01 deadline. State and local bodies are not bound by that date, but it is the reference many Iowa cyber-insurance carriers and auditors now cite.',
    },
    exposureNote:
      'ShadowServer counted more than 1,000 internet-exposed PaperCut NG/MF instances, concentrated in North America and Europe.',
    /**
     * Where a reader goes to get the patch. Rendered as the primary action in
     * SecurityAdvisoryDetail and SecurityAdvisoryBanner, not just as a citation,
     * because the vendor bulletin is the authoritative and always-current source
     * for the build numbers and download links.
     */
    bulletinUrl:
      'https://www.papercut.com/kb/Main/security-bulletin-27-aug-2026-urgent-security-advisory/',
    bulletinLabel: 'Open the PaperCut security bulletin and download the patch',
    sources: [
      {
        label: 'PaperCut urgent security advisory (27 Aug 2026)',
        url: 'https://www.papercut.com/kb/Main/security-bulletin-27-aug-2026-urgent-security-advisory/',
      },
      {
        label: 'Huntress: PaperCut zero-day active exploitation and pre-auth RCE',
        url: 'https://www.huntress.com/blog/papercut-actively-exploited',
      },
      {
        label: 'Rapid7: PaperCut NG/MF critical zero-day exploited in the wild',
        url: 'https://www.rapid7.com/blog/post/etr-papercut-ng-mf-critical-zero-day-exploited-in-the-wild/',
      },
      {
        label: 'CISA Known Exploited Vulnerabilities catalog',
        url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog',
      },
      {
        label: 'BleepingComputer: PaperCut releases second emergency patch',
        url: 'https://www.bleepingcomputer.com/news/security/papercut-releases-second-emergency-patch-for-exploited-flaws/',
      },
    ],
  },
  {
    id: 'uniflow-ulm-2026',
    productId: 'uniflow',
    severity: 'medium',
    status: 'patched',
    title: 'uniFLOW Universal Login Manager information disclosure',
    disclosedDate: '2026-07-06',
    disclosedDateDisplay: 'July 6, 2026',
    summary:
      'An authenticated administrator could read sensitive configuration data through the Universal Login Manager remote user interface. NT-ware rates the severity medium and the likelihood low. No exploitation has been reported.',
    cves: [
      {
        id: 'CVE-2026-1433',
        cvss: null,
        rating: 'Medium (NT-ware assessment)',
        cwe: null,
        description:
          'The ULM remote user interface can disclose configuration data tied to SMTP and LDAP integrations to an already-authenticated administrator.',
      },
    ],
    affected:
      'uniFLOW Universal Login Manager Standalone 5.10 and earlier. Fixed in 5.11 and later.',
    notAffected: [
      'Deployments connected to uniFLOW Server',
      'Deployments connected to uniFLOW Online',
    ],
    patches: [
      {
        label: 'uniFLOW Universal Login Manager 5.11',
        date: '2026-07-06',
        dateDisplay: 'July 6, 2026',
        branches: ['ULM Standalone'],
        note: 'Upgrade path for any standalone ULM install on 5.10 or earlier.',
        current: true,
      },
    ],
    mitigations: [
      'Confirm whether your ULM is standalone or connected to uniFLOW Server or uniFLOW Online. Connected deployments are not affected.',
      'Upgrade standalone ULM installations to 5.11 or later.',
    ],
    indicators: [],
    kev: { listed: false },
    bulletinUrl:
      'https://www.usa.canon.com/about-us/to-our-customers/cpa2026-054-vulnerability-remediation-for-uniflow-universal-login-manager-standalone',
    bulletinLabel: 'Open the Canon advisory CPA2026-054',
    sources: [
      {
        label: 'Canon USA advisory CPA2026-054',
        url: 'https://www.usa.canon.com/about-us/to-our-customers/cpa2026-054-vulnerability-remediation-for-uniflow-universal-login-manager-standalone',
      },
      {
        label: 'NT-ware security advisory: ULM potential information disclosure',
        url: 'https://ntware.atlassian.net/wiki/spaces/SA/pages/13659504652/2026+Security+Advisory+ULM+Potential+Information+Disclosure',
      },
    ],
  },
]

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

/** Advisories for one product, newest disclosure first. */
export const getAdvisories = (productId) =>
  securityAdvisories
    .filter((a) => a.productId === productId)
    .sort((a, b) => b.disclosedDate.localeCompare(a.disclosedDate))

/** Look up a single advisory by id. */
export const getAdvisory = (id) => securityAdvisories.find((a) => a.id === id)

/** Advisories with confirmed in-the-wild exploitation. Drives the site banner. */
export const getActiveExploitAdvisories = () =>
  securityAdvisories.filter((a) => a.status === 'active-exploitation')

/** The patch customers must currently be on for a given advisory. */
export const getCurrentPatch = (advisoryId) =>
  getAdvisory(advisoryId)?.patches.find((p) => p.current) || null

export default products
