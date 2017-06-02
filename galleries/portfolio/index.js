// cached portfolios, updated on page load
var initialPortfolios = {
  "primary": {
    "tags": {
      "investor: Jim Robinson": [
        "/page-21",
        "/abra-1",
        "/bitpay",
        "/boom",
        "/chain",
        "/itbit",
        "/mirror",
        "/noom",
        "/olo",
        "/ripple",
        "/openpeak"
      ],
      "industry: cryptocurrency": [
        "/page-21",
        "/abra-1",
        "/bitpay",
        "/chain",
        "/itbit",
        "/mirror",
        "/ripple"
      ],
      "location: New York": [
        "/page-21",
        "/bark-co",
        "/betaworks",
        "/breather",
        "/business-insider",
        "/buzzfeed-1",
        "/datadog",
        "/yipit",
        "/floored",
        "/hightower-1",
        "/itbit",
        "/k2-intelligence",
        "/kroll-bond-ratings",
        "/managed-by-q",
        "/noom",
        "/olo",
        "/ondeck-1",
        "/one-drop",
        "/paperless-post",
        "/payfone",
        "/recyclebank",
        "/the-skimm",
        "/socialflow",
        "/tinybop",
        "/yieldbot",
        "/sailthru"
      ],
      "industry: hardware": [
        "/page-21",
        "/clearpath",
        "/drobo",
        "/jibo",
        "/spire"
      ],
      "location: San Francisco": [
        "/abra-1"
      ],
      "investor: Alice Lloyd George": [
        "/abra-1"
      ],
      "industry: fintech": [
        "/abra-1",
        "/avant",
        "/boom",
        "/coverhound",
        "/itbit",
        "/kroll-bond-ratings",
        "/mirror",
        "/ondeck-1",
        "/payfone",
        "/ripple",
        "/driverup"
      ],
      "location: other": [
        "/avant",
        "/bitpay",
        "/clearpath",
        "/hyla",
        "/jibo",
        "/kik",
        "/roundbox",
        "/driverup",
        "/spaceflight",
        "/openpeak"
      ],
      "investor: James D. Robinson III": [
        "/avant",
        "/coverhound",
        "/k2-intelligence",
        "/ondeck-1"
      ],
      "industry: consumer": [
        "/bark-co",
        "/betaworks",
        "/breather",
        "/yipit",
        "/jibo",
        "/kik",
        "/noom",
        "/one-drop",
        "/paperless-post",
        "/tinybop",
        "/trumaker"
      ],
      "investor: Stuart Ellman": [
        "/bark-co",
        "/betaworks",
        "/business-insider",
        "/clearpath",
        "/floored",
        "/jibo",
        "/kik",
        "/kroll-bond-ratings",
        "/one-drop",
        "/payfone",
        "/recyclebank",
        "/driverup"
      ],
      "location: bay area": [
        "/base",
        "/bitly",
        "/boom",
        "/chain",
        "/collective-health",
        "/coverhound",
        "/drobo",
        "/imgix",
        "/mirror",
        "/palantir",
        "/ripple",
        "/electric-cloud",
        "/shuddle",
        "/spire",
        "/trumaker",
        "/viglink"
      ],
      "investor: Raju Rishi": [
        "/base",
        "/bitly",
        "/collective-health",
        "/datadog",
        "/yipit",
        "/imgix",
        "/viglink",
        "/yieldbot",
        "/sailthru"
      ],
      "industry: enterprise software": [
        "/base",
        "/hightower-1",
        "/olo",
        "/palantir",
        "/electric-cloud",
        "/socialflow",
        "/openpeak"
      ],
      "industry: media": [
        "/betaworks",
        "/business-insider",
        "/buzzfeed-1",
        "/the-skimm"
      ],
      "industry: marketing": [
        "/bitly",
        "/socialflow",
        "/sailthru"
      ],
      "industry: mobile": [
        "/boom",
        "/breather",
        "/kik",
        "/noom",
        "/olo",
        "/one-drop",
        "/payfone",
        "/roundbox",
        "/shuddle",
        "/tinybop",
        "/openpeak"
      ],
      "investor: Steve Schlafman": [
        "/breather",
        "/hightower-1",
        "/managed-by-q",
        "/shuddle",
        "/the-skimm",
        "/tinybop",
        "/trumaker"
      ],
      "industry: on-demand service": [
        "/breather",
        "/managed-by-q",
        "/shuddle"
      ],
      "investor: Will Porteous": [
        "/buzzfeed-1",
        "/drobo",
        "/paperless-post",
        "/spaceflight",
        "/spire"
      ],
      "industry: robotics": [
        "/clearpath",
        "/jibo"
      ],
      "industry: healthcare": [
        "/collective-health",
        "/one-drop"
      ],
      "industry: dev tools": [
        "/datadog",
        "/imgix",
        "/electric-cloud"
      ],
      "industry: real estate": [
        "/floored",
        "/hightower-1",
        "/managed-by-q"
      ],
      "industry: logistics": [
        "/hyla",
        "/managed-by-q",
        "/olo",
        "/recyclebank"
      ],
      "industry: machine learning": [
        "/palantir"
      ],
      "industry: security": [
        "/payfone"
      ],
      "industry: space": [
        "/spaceflight",
        "/spire"
      ],
      "industry: e-commerce": [
        "/trumaker",
        "/viglink"
      ],
      "industry: ad tech": [
        "/viglink",
        "/yieldbot"
      ]
    },
    "categories": {
      "Financial Services": [
        "/page-21",
        "/abra-1",
        "/avant",
        "/bitpay",
        "/boom",
        "/chain",
        "/coverhound",
        "/yipit",
        "/itbit",
        "/k2-intelligence",
        "/kroll-bond-ratings",
        "/mirror",
        "/ondeck-1",
        "/ripple",
        "/driverup"
      ],
      "E-Commerce": [
        "/bark-co",
        "/trumaker"
      ],
      "Enterprise": [
        "/base",
        "/managed-by-q",
        "/recyclebank"
      ],
      "Media": [
        "/betaworks",
        "/business-insider",
        "/buzzfeed-1",
        "/noom",
        "/paperless-post",
        "/the-skimm",
        "/socialflow",
        "/tinybop"
      ],
      "SaaS": [
        "/bitly",
        "/palantir",
        "/payfone",
        "/roundbox",
        "/openpeak",
        "/sailthru"
      ],
      "On-Demand Service": [
        "/breather",
        "/shuddle"
      ],
      "Hardware/Products": [
        "/clearpath",
        "/drobo",
        "/jibo",
        "/spaceflight",
        "/spire"
      ],
      "Healthcare": [
        "/collective-health",
        "/one-drop"
      ],
      "Developer Tools": [
        "/datadog",
        "/electric-cloud"
      ],
      "Real Estate": [
        "/floored",
        "/hightower-1"
      ],
      "Marketplaces": [
        "/hyla",
        "/olo"
      ],
      "Infrastructure": [
        "/imgix"
      ],
      "Social Messaging": [
        "/kik"
      ],
      "Advertising Technologies": [
        "/viglink",
        "/yieldbot"
      ]
    },
    "locations": {
      "New York": [
        "/page-21",
        "/bark-co",
        "/betaworks",
        "/breather",
        "/business-insider",
        "/buzzfeed-1",
        "/datadog",
        "/yipit",
        "/floored",
        "/hightower-1",
        "/itbit",
        "/k2-intelligence",
        "/kroll-bond-ratings",
        "/managed-by-q",
        "/noom",
        "/olo",
        "/ondeck-1",
        "/one-drop",
        "/paperless-post",
        "/payfone",
        "/recyclebank",
        "/the-skimm",
        "/socialflow",
        "/tinybop",
        "/yieldbot",
        "/sailthru"
      ],
      "San Francisco": [
        "/abra-1"
      ],
      "other": [
        "/avant",
        "/bitpay",
        "/clearpath",
        "/hyla",
        "/jibo",
        "/kik",
        "/roundbox",
        "/driverup",
        "/spaceflight",
        "/openpeak"
      ],
      "bay area": [
        "/base",
        "/bitly",
        "/boom",
        "/chain",
        "/collective-health",
        "/coverhound",
        "/drobo",
        "/imgix",
        "/mirror",
        "/palantir",
        "/ripple",
        "/electric-cloud",
        "/shuddle",
        "/spire",
        "/trumaker",
        "/viglink"
      ]
    },
    "industries": {
      "cryptocurrency": [
        "/page-21",
        "/abra-1",
        "/bitpay",
        "/chain",
        "/itbit",
        "/mirror",
        "/ripple"
      ],
      "hardware": [
        "/page-21",
        "/clearpath",
        "/drobo",
        "/jibo",
        "/spire"
      ],
      "fintech": [
        "/abra-1",
        "/avant",
        "/boom",
        "/coverhound",
        "/itbit",
        "/kroll-bond-ratings",
        "/mirror",
        "/ondeck-1",
        "/payfone",
        "/ripple",
        "/driverup"
      ],
      "consumer": [
        "/bark-co",
        "/betaworks",
        "/breather",
        "/yipit",
        "/jibo",
        "/kik",
        "/noom",
        "/one-drop",
        "/paperless-post",
        "/tinybop",
        "/trumaker"
      ],
      "enterprise software": [
        "/base",
        "/hightower-1",
        "/olo",
        "/palantir",
        "/electric-cloud",
        "/socialflow",
        "/openpeak"
      ],
      "media": [
        "/betaworks",
        "/business-insider",
        "/buzzfeed-1",
        "/the-skimm"
      ],
      "marketing": [
        "/bitly",
        "/socialflow",
        "/sailthru"
      ],
      "mobile": [
        "/boom",
        "/breather",
        "/kik",
        "/noom",
        "/olo",
        "/one-drop",
        "/payfone",
        "/roundbox",
        "/shuddle",
        "/tinybop",
        "/openpeak"
      ],
      "on-demand service": [
        "/breather",
        "/managed-by-q",
        "/shuddle"
      ],
      "robotics": [
        "/clearpath",
        "/jibo"
      ],
      "healthcare": [
        "/collective-health",
        "/one-drop"
      ],
      "dev tools": [
        "/datadog",
        "/imgix",
        "/electric-cloud"
      ],
      "real estate": [
        "/floored",
        "/hightower-1",
        "/managed-by-q"
      ],
      "logistics": [
        "/hyla",
        "/managed-by-q",
        "/olo",
        "/recyclebank"
      ],
      "machine learning": [
        "/palantir"
      ],
      "security": [
        "/payfone"
      ],
      "space": [
        "/spaceflight",
        "/spire"
      ],
      "e-commerce": [
        "/trumaker",
        "/viglink"
      ],
      "ad tech": [
        "/viglink",
        "/yieldbot"
      ]
    },
    "investors": {
      "Jim Robinson": [
        "/page-21",
        "/abra-1",
        "/bitpay",
        "/boom",
        "/chain",
        "/itbit",
        "/mirror",
        "/noom",
        "/olo",
        "/ripple",
        "/openpeak"
      ],
      "Alice Lloyd George": [
        "/abra-1"
      ],
      "James D. Robinson III": [
        "/avant",
        "/coverhound",
        "/k2-intelligence",
        "/ondeck-1"
      ],
      "Stuart Ellman": [
        "/bark-co",
        "/betaworks",
        "/business-insider",
        "/clearpath",
        "/floored",
        "/jibo",
        "/kik",
        "/kroll-bond-ratings",
        "/one-drop",
        "/payfone",
        "/recyclebank",
        "/driverup"
      ],
      "Raju Rishi": [
        "/base",
        "/bitly",
        "/collective-health",
        "/datadog",
        "/yipit",
        "/imgix",
        "/viglink",
        "/yieldbot",
        "/sailthru"
      ],
      "Steve Schlafman": [
        "/breather",
        "/hightower-1",
        "/managed-by-q",
        "/shuddle",
        "/the-skimm",
        "/tinybop",
        "/trumaker"
      ],
      "Will Porteous": [
        "/buzzfeed-1",
        "/drobo",
        "/paperless-post",
        "/spaceflight",
        "/spire"
      ]
    },
    "companies": {
      "21 inc.": [
        "/page-21"
      ],
      "Abra": [
        "/abra-1"
      ],
      "Avant": [
        "/avant"
      ],
      "Bark & Co.": [
        "/bark-co"
      ],
      "Base": [
        "/base"
      ],
      "Betaworks": [
        "/betaworks"
      ],
      "Bitly": [
        "/bitly"
      ],
      "BitPay": [
        "/bitpay"
      ],
      "Boom": [
        "/boom"
      ],
      "Breather": [
        "/breather"
      ],
      "Business Insider": [
        "/business-insider"
      ],
      "BuzzFeed": [
        "/buzzfeed-1"
      ],
      "Clearpath": [
        "/clearpath"
      ],
      "Collective Health": [
        "/collective-health"
      ],
      "CoverHound": [
        "/coverhound"
      ],
      "Datadog": [
        "/datadog"
      ],
      "Drobo": [
        "/drobo"
      ],
      "Yipit": [
        "/yipit"
      ],
      "Floored": [
        "/floored"
      ],
      "Hightower": [
        "/hightower-1"
      ],
      "Hyla": [
        "/hyla"
      ],
      "Imgix": [
        "/imgix"
      ],
      "itBit": [
        "/itbit"
      ],
      "Jibo": [
        "/jibo"
      ],
      "K2 Intelligence": [
        "/k2-intelligence"
      ],
      "Kik": [
        "/kik"
      ],
      "Kroll Bond Rating Agency": [
        "/kroll-bond-ratings"
      ],
      "Managed by Q": [
        "/managed-by-q"
      ],
      "Mirror": [
        "/mirror"
      ],
      "Noom": [
        "/noom"
      ],
      "olo": [
        "/olo"
      ],
      "OnDeck": [
        "/ondeck-1"
      ],
      "One Drop": [
        "/one-drop"
      ],
      "Palantir": [
        "/palantir"
      ],
      "Paperless": [
        "/paperless-post"
      ],
      "Payfone": [
        "/payfone"
      ],
      "Recyclebank": [
        "/recyclebank"
      ],
      "Ripple": [
        "/ripple"
      ],
      "Roundbox": [
        "/roundbox"
      ],
      "Electric Cloud": [
        "/electric-cloud"
      ],
      "Shuddle": [
        "/shuddle"
      ],
      "Sierra Auto Finance ": [
        "/driverup"
      ],
      "theSkimm": [
        "/the-skimm"
      ],
      "SocialFlow": [
        "/socialflow"
      ],
      "Spaceflight": [
        "/spaceflight"
      ],
      "Spire": [
        "/spire"
      ],
      "Tinybop": [
        "/tinybop"
      ],
      "Trumaker": [
        "/trumaker"
      ],
      "VigLink": [
        "/viglink"
      ],
      "OpenPeak": [
        "/openpeak"
      ],
      "Yieldbot": [
        "/yieldbot"
      ],
      "Sailthru": [
        "/sailthru"
      ]
    }
  },
  "seed": {
    "tags": {
      "investor: Will Porteous": [
        "/accion-systems",
        "/biolite",
        "/flynn",
        "/nanit",
        "/screenmeet"
      ],
      "location: Boston": [
        "/accion-systems",
        "/greathorn",
        "/understory"
      ],
      "industry: Space": [
        "/accion-systems"
      ],
      "industry: Satellites": [
        "/accion-systems"
      ],
      "investor: Jim Robinson": [
        "/admittedly",
        "/amicus",
        "/bolt",
        "/culinary-agents",
        "/mingyian",
        "/case"
      ],
      "industry: Education": [
        "/admittedly"
      ],
      "location: New York": [
        "/admittedly",
        "/amicus",
        "/basno",
        "/biolite",
        "/bolt",
        "/bowery",
        "/brightwheel",
        "/clarity-money",
        "/clubhouse",
        "/culinary-agents",
        "/dextro",
        "/digital-genius",
        "/peach",
        "/nanit",
        "/sols",
        "/the-square-foot",
        "/thinkful",
        "/trusted-insight",
        "/wayup",
        "/yhat"
      ],
      "industry: Drone OS": [
        "/airware"
      ],
      "investor: Stuart Ellman": [
        "/airware",
        "/bloglovin",
        "/clarity-money",
        "/the-square-foot",
        "/thinkful"
      ],
      "location: San Francisco": [
        "/airware",
        "/flynn",
        "/screenmeet"
      ],
      "industry: Campaigns": [
        "/amicus"
      ],
      "investor: Steve Schlafman": [
        "/basno",
        "/beacon-reader",
        "/the-black-tux",
        "/boom-aero",
        "/booster-fuels",
        "/bowery",
        "/brightwheel",
        "/peach",
        "/understory",
        "/wag",
        "/wayup"
      ],
      "industry: Digital Badges": [
        "/basno"
      ],
      "location: Oakland": [
        "/beacon-reader"
      ],
      "industry: Off-grid Energy": [
        "/biolite"
      ],
      "location: Los Angeles": [
        "/the-black-tux",
        "/gem",
        "/mingyian",
        "/wag"
      ],
      "industry: Retail": [
        "/the-black-tux",
        "/sols"
      ],
      "industry: Formal Wear": [
        "/the-black-tux"
      ],
      "location: Stockholm": [
        "/bloglovin"
      ],
      "industry: Blockchain": [
        "/bolt",
        "/gem",
        "/case"
      ],
      "industry: Cryptocurrency": [
        "/bolt",
        "/gem",
        "/case"
      ],
      "industry: Airplanes": [
        "/boom-aero"
      ],
      "location: Denver": [
        "/boom-aero"
      ],
      "industry: Transportation": [
        "/booster-fuels"
      ],
      "location: Seattle": [
        "/booster-fuels"
      ],
      "industry: Agriculture": [
        "/bowery"
      ],
      "investor: Raju Rishi": [
        "/argo",
        "/clubhouse",
        "/greathorn",
        "/krypnostic"
      ],
      "industry: Sales Force Automation": [
        "/argo"
      ],
      "industry: Workflow": [
        "/clubhouse"
      ],
      "industry: Food & Hospitality": [
        "/culinary-agents"
      ],
      "industry: Computer Vision": [
        "/dextro"
      ],
      "investor: Alice Lloyd George": [
        "/dextro",
        "/gem",
        "/sols",
        "/wave-vr",
        "/yhat"
      ],
      "investor: James D. Robinson III": [
        "/digital-genius",
        "/trusted-insight"
      ],
      "industry: Cloud Security": [
        "/greathorn",
        "/krypnostic"
      ],
      "industry: Social Media": [
        "/peach"
      ],
      "location: Palo Alto": [
        "/krypnostic"
      ],
      "industry: Brand Management": [
        "/mingyian"
      ],
      "industry: Healthcare": [
        "/nanit"
      ],
      "industry: Screen Share": [
        "/screenmeet"
      ],
      "location: Rochester": [
        "/case"
      ],
      "industry: Music": [
        "/wave-vr"
      ],
      "location: Austin": [
        "/wave-vr"
      ],
      "industry: Brokerage": [
        "/the-square-foot"
      ],
      "Industry: Education Technology": [
        "/thinkful"
      ],
      "industry: Human Resources": [
        "/wayup"
      ],
      "industry: Data Science": [
        "/yhat"
      ]
    },
    "categories": {
      "Hardware/Products": [
        "/accion-systems",
        "/biolite",
        "/nanit",
        "/sols"
      ],
      "Media": [
        "/admittedly",
        "/basno",
        "/beacon-reader",
        "/bloglovin",
        "/peach"
      ],
      "Enterprise": [
        "/airware",
        "/digital-genius",
        "/screenmeet",
        "/understory",
        "/wayup"
      ],
      "SaaS": [
        "/amicus",
        "/argo"
      ],
      "E-Commerce": [
        "/the-black-tux"
      ],
      "Financial Services": [
        "/bolt",
        "/clarity-money",
        "/gem",
        "/greathorn",
        "/case",
        "/trusted-insight"
      ],
      "Transportation": [
        "/boom-aero"
      ],
      "On-demand Service": [
        "/booster-fuels",
        "/wag"
      ],
      "Consumer": [
        "/bowery",
        "/mingyian"
      ],
      "Education": [
        "/brightwheel",
        "/thinkful"
      ],
      "Developer Tools": [
        "/clubhouse",
        "/flynn",
        "/yhat"
      ],
      "Market Places": [
        "/culinary-agents"
      ],
      "Machine Learning": [
        "/dextro"
      ],
      "Security": [
        "/krypnostic"
      ],
      "VR/AR": [
        "/wave-vr"
      ],
      "Real Estate": [
        "/the-square-foot"
      ]
    },
    "locations": {
      "Boston": [
        "/accion-systems",
        "/greathorn",
        "/understory"
      ],
      "New York": [
        "/admittedly",
        "/amicus",
        "/basno",
        "/biolite",
        "/bolt",
        "/bowery",
        "/brightwheel",
        "/clarity-money",
        "/clubhouse",
        "/culinary-agents",
        "/dextro",
        "/digital-genius",
        "/peach",
        "/nanit",
        "/sols",
        "/the-square-foot",
        "/thinkful",
        "/trusted-insight",
        "/wayup",
        "/yhat"
      ],
      "San Francisco": [
        "/airware",
        "/flynn",
        "/screenmeet"
      ],
      "Oakland": [
        "/beacon-reader"
      ],
      "Los Angeles": [
        "/the-black-tux",
        "/gem",
        "/mingyian",
        "/wag"
      ],
      "Stockholm": [
        "/bloglovin"
      ],
      "Denver": [
        "/boom-aero"
      ],
      "Seattle": [
        "/booster-fuels"
      ],
      "Palo Alto": [
        "/krypnostic"
      ],
      "Rochester": [
        "/case"
      ],
      "Austin": [
        "/wave-vr"
      ]
    },
    "industries": {
      "Space": [
        "/accion-systems"
      ],
      "Satellites": [
        "/accion-systems"
      ],
      "Education": [
        "/admittedly"
      ],
      "Drone OS": [
        "/airware"
      ],
      "Campaigns": [
        "/amicus"
      ],
      "Digital Badges": [
        "/basno"
      ],
      "Off-grid Energy": [
        "/biolite"
      ],
      "Retail": [
        "/the-black-tux",
        "/sols"
      ],
      "Formal Wear": [
        "/the-black-tux"
      ],
      "Blockchain": [
        "/bolt",
        "/gem",
        "/case"
      ],
      "Cryptocurrency": [
        "/bolt",
        "/gem",
        "/case"
      ],
      "Airplanes": [
        "/boom-aero"
      ],
      "Transportation": [
        "/booster-fuels"
      ],
      "Agriculture": [
        "/bowery"
      ],
      "Sales Force Automation": [
        "/argo"
      ],
      "Workflow": [
        "/clubhouse"
      ],
      "Food & Hospitality": [
        "/culinary-agents"
      ],
      "Computer Vision": [
        "/dextro"
      ],
      "Cloud Security": [
        "/greathorn",
        "/krypnostic"
      ],
      "Social Media": [
        "/peach"
      ],
      "Brand Management": [
        "/mingyian"
      ],
      "Healthcare": [
        "/nanit"
      ],
      "Screen Share": [
        "/screenmeet"
      ],
      "Music": [
        "/wave-vr"
      ],
      "Brokerage": [
        "/the-square-foot"
      ],
      "Human Resources": [
        "/wayup"
      ],
      "Data Science": [
        "/yhat"
      ]
    },
    "investors": {
      "Will Porteous": [
        "/accion-systems",
        "/biolite",
        "/flynn",
        "/nanit",
        "/screenmeet"
      ],
      "Jim Robinson": [
        "/admittedly",
        "/amicus",
        "/bolt",
        "/culinary-agents",
        "/mingyian",
        "/case"
      ],
      "Stuart Ellman": [
        "/airware",
        "/bloglovin",
        "/clarity-money",
        "/the-square-foot",
        "/thinkful"
      ],
      "Steve Schlafman": [
        "/basno",
        "/beacon-reader",
        "/the-black-tux",
        "/boom-aero",
        "/booster-fuels",
        "/bowery",
        "/brightwheel",
        "/peach",
        "/understory",
        "/wag",
        "/wayup"
      ],
      "Raju Rishi": [
        "/argo",
        "/clubhouse",
        "/greathorn",
        "/krypnostic"
      ],
      "Alice Lloyd George": [
        "/dextro",
        "/gem",
        "/sols",
        "/wave-vr",
        "/yhat"
      ],
      "James D. Robinson III": [
        "/digital-genius",
        "/trusted-insight"
      ]
    },
    "companies": {
      "Accion Systems Inc.": [
        "/accion-systems"
      ],
      "Admitted.ly": [
        "/admittedly"
      ],
      "Airware": [
        "/airware"
      ],
      "Amicus": [
        "/amicus"
      ],
      "Basno": [
        "/basno"
      ],
      "Charge Hound (fka Beacon Reader)": [
        "/beacon-reader"
      ],
      "Biolite": [
        "/biolite"
      ],
      "TheBlackTux": [
        "/the-black-tux"
      ],
      "Bloglovin": [
        "/bloglovin"
      ],
      "Bolt": [
        "/bolt"
      ],
      "Boom Technology, Inc.": [
        "/boom-aero"
      ],
      "Booster Fuels, Inc.": [
        "/booster-fuels"
      ],
      "Bowery": [
        "/bowery"
      ],
      "Brightwheel": [
        "/brightwheel"
      ],
      "Clarity Money": [
        "/clarity-money"
      ],
      "Cleargraph (fka Argo)": [
        "/argo"
      ],
      "Clubhouse": [
        "/clubhouse"
      ],
      "Culinary Agents": [
        "/culinary-agents"
      ],
      "Dextro": [
        "/dextro"
      ],
      "Digital Genius": [
        "/digital-genius"
      ],
      "Flynn": [
        "/flynn"
      ],
      "Gem (fka BitVault)": [
        "/gem"
      ],
      "Greathorn": [
        "/greathorn"
      ],
      "Interspace (fka Peach/Byte)": [
        "/peach"
      ],
      "Kryptnostic": [
        "/krypnostic"
      ],
      "Mingyian": [
        "/mingyian"
      ],
      "Nanit": [
        "/nanit"
      ],
      "ScreenMeet (fka Projector)": [
        "/screenmeet"
      ],
      "Signet (fka Case/Case Wallet)": [
        "/case"
      ],
      "Sols": [
        "/sols"
      ],
      "The Wave VR": [
        "/wave-vr"
      ],
      "TheSquareFoot": [
        "/the-square-foot"
      ],
      "Thinkful": [
        "/thinkful"
      ],
      "Trusted Insight": [
        "/trusted-insight"
      ],
      "Understory Weather": [
        "/understory"
      ],
      "Wag Labs": [
        "/wag"
      ],
      "Way Up (fka The Campus Job)": [
        "/wayup"
      ],
      "Yhat": [
        "/yhat"
      ]
    }
  }
};
// initialPortfolios.primary = {};
// initialPortfolios.seed = {};

$(document).ready(function () {

  var investorData = [];
  var categoryData = [];
  var industryData = [];
  var locationData = [];
  var companyData = [];
  var searchable = {};
  var portfolios = {};

  // add select2 filter box
  $('h2:contains("PRIMARY PORTFOLIO")').before('<div id="portfolio-filter-wrapper"><label for="portfolio-filter"><select multiple="multiple" style="width:100%" class="portfolio-filter" id="portfolio-filter"/></label></div>');

  var select2Options = {
    placeholder: "Filter",
    createSearchChoicePosition: "bottom",
    tokenSeparators: [","],
    formatSelectionTooBig: function () {
      return '';
    },
    maximumSelectionSize: 1,
    allowClear: true,
    selectOnClose: false
  };

  $("#portfolio-filter").select2(select2Options);

  processPortfolio('primary', initialPortfolios.primary);
  processPortfolio('seed', initialPortfolios.seed);

  var portfolioFilterSelect = $('#portfolio-filter');
  portfolioFilterSelect.select2(select2Options);

  var portfolioResultsPrimary = $('h2:contains("PRIMARY PORTFOLIO")').parent().parent().parent().children().eq(2);
  var portfolioFilterInitalPrimary = $(portfolioResultsPrimary).clone();

  var portfolioResultsSeed = $('h2:contains("SEED PORTFOLIO")').parent().parent().parent().children().eq(5);
  var portfolioFilterInitalSeed = $(portfolioResultsSeed).clone();

    // refresh our cache the first time
    var ajaxOptions = {
      cache: false,
      dataType: 'json',
      ifModified: false,
      timeout: 15000,
      success: function (results, statusCode) {
        var out = dataByFacets(results);
        if (out) {
          processPortfolio(this._rtype, out);
        } else {
          console.log('error retrieving facets..skipping');
        }
      },
      error: function (xhr, statusCode) {
        console.log('er', statusCode);
      }
    };

    // reset
    investorData = [];
    categoryData = [];
    industryData = [];
    locationData = [];
    companyData = [];
    searchable = {};

    var primaryApi = '/portfolio/?format=json-pretty';
    var seedApi = '/seed-portolio?format=json-pretty';
    ajaxOptions.url = primaryApi;
    ajaxOptions._rtype = 'primary';
    $.ajax(ajaxOptions).then(function () {
      ajaxOptions.url = seedApi;
      ajaxOptions._rtype = 'seed';

      $.ajax(ajaxOptions).then(function () {
        select2Options.data = [{
          text: 'Category',
          children: categoryData
        }, {
          text: 'Investor',
          children: investorData
        }, {
          text: 'Locations',
          children: locationData
        }];

        var portfolioFilterSelect = $('#portfolio-filter');
        portfolioFilterSelect.select2(select2Options);
      });
    });

  portfolioFilterSelect.on('select2:selecting', function (e) {
    $(portfolioFilterSelect).select2('data').forEach(function (value, count) {
      if (count === 0) {
        $(portfolioFilterSelect).select2().val(null).trigger('change');
      }
    });
  });

  portfolioFilterSelect.on('change', function (e) {

    var selected = $('#portfolio-filter').val() || [];
    //  console.log('selected', selected);
    if (!selected.length) {
      $(portfolioResultsPrimary).html($(portfolioFilterInitalPrimary).html());
      $.each($(portfolioResultsPrimary).find('a'), function (index, obj) {
        var img = $(obj).find('img');
        var dataSrc = $(img).data('src');
        $(obj).find('img').attr('src', dataSrc).css('opacity', 1);
      });

      $(portfolioResultsSeed).html($(portfolioFilterInitalSeed).html());
      $.each($(portfolioResultsSeed).find('a'), function (index, obj) {
        var img = $(obj).find('img');
        var dataSrc = $(img).data('src');
        $(obj).find('img').attr('src', dataSrc).css('opacity', 1);
      });

      $('h2:contains("NOTABLE EXITS")').show();
      $('h2:contains("NOTABLE EXITS")').parent().parent().parent().children().eq(7).show();

      return;
    }
    var hrefs = {};
    var found = {};
    selected.forEach(function (id) {
      var reconstitutedId = id.split('_').join(' ');

      var parts = reconstitutedId.split(':');
      if (!parts || !parts.length) {
        return;
      }
      var theseHrefsPrimary = portfolios.primary[parts[0]][parts[1]] || [];
      theseHrefsPrimary.forEach(function (href) {
        hrefs[href] = true;
        found.primary = (found.primary || 0) + 1;
      });
      var theseHrefsSeed = portfolios.seed[parts[0]][parts[1]] || [];
      theseHrefsSeed.forEach(function (href) {
        found.seed = (found.seed || 0) + 1;
        hrefs[href] = true;
      });
    });

    if (!found.primary) {
      $('h2:contains("PRIMARY PORTFOLIO")').hide();
    } else {
      $('h2:contains("PRIMARY PORTFOLIO")').show();
    }

    if (!found.seed) {
      $('h2:contains("SEED PORTFOLIO")').hide();
    } else {
      $('h2:contains("SEED PORTFOLIO")').show();
    }

    if (!found.notable) {
      $('h2:contains("NOTABLE EXITS")').hide();
      $('h2:contains("NOTABLE EXITS")').parent().parent().parent().children().eq(7).hide();

    } else {
      $('h2:contains("NOTABLE EXITS")').show();
      $('h2:contains("NOTABLE EXITS")').parent().parent().parent().children().eq(7).show();
    }

    $(portfolioResultsPrimary).html($(portfolioFilterInitalPrimary).html());
    $.each($(portfolioResultsPrimary).find('a'), function (index, obj) {
      var thisHref = $(obj).attr('href');
      if (!(hrefs[thisHref])) {
        //      console.log('removing', thisHref);
        $(obj).parent().parent().detach();
      } else {
        //    console.log('ok', thisHref);
        var img = $(obj).find('img');
        var dataSrc = $(img).data('src');
        $(obj).find('img').attr('src', dataSrc).css('opacity', 1);
      }
    });

    $(portfolioResultsSeed).html($(portfolioFilterInitalSeed).html());
    $.each($(portfolioResultsSeed).find('a'), function (index, obj) {
      var thisHref = $(obj).attr('href');
      if (!(hrefs[thisHref])) {
        $(obj).parent().parent().detach();
      } else {
        var img = $(obj).find('img');
        var dataSrc = $(img).data('src');
        $(obj).find('img').attr('src', dataSrc).css('opacity', 1);
      }
    });
  });

  function processPortfolio(portfolioType, portfolioData) {

    portfolios[portfolioType] = portfolioData;


    Object.keys(portfolios).forEach(function (portfolioType) {
      var portfolio = portfolios[portfolioType] || {};
      if (portfolio && portfolio.investors) {

        Object.keys(portfolio.investors).forEach(function (investor) {
          var escaped = investor.split(' ').join('_');
          var id = 'investors:' + escaped;

          if (searchable[id]) {
            return;
          } else {
            searchable[id] = true;
          }

          investorData.push({
            id: id,
            text: investor
          });
        });

        investorData = investorData.sort(function(a, b) {
          return a.text.localeCompare(b.text);
        });
      }

      if (portfolio && portfolio.categories) {
        Object.keys(portfolio.categories).forEach(function (category) {
          var escaped = category.split(' ').join('_');
          var id = 'categories:' + escaped;
          if (searchable[id]) {
            return;
          } else {
            searchable[id] = true;
          }

          categoryData.push({
            id: id,
            text: category
          });
        });

        categoryData = categoryData.sort(function(a, b) {
          return a.text.localeCompare(b.text);
        });

      }
      if (portfolio && portfolio.industries) {

        Object.keys(portfolio.industries).forEach(function (industry) {
          var escaped = industry.split(' ').join('_');
          var id = 'industries:' + escaped;
          if (searchable[id]) {
            return;
          } else {
            searchable[id] = true;
          }

          industryData.push({
            id: id,
            text: industry
          });
        });

        industryData = industryData.sort(function(a, b) {
          return a.text.localeCompare(b.text);
        });

      }
      if (portfolio && portfolio.locations) {

        Object.keys(portfolio.locations).forEach(function (location) {
          var escaped = location.split(' ').join('_');
          var id = 'locations:' + escaped;

          if (searchable[id]) {
            return;
          } else {
            searchable[id] = true;
          }

          locationData.push({
            id: id,
            text: location
          });
        });

       locationData = locationData.sort(function(a, b) {
          return a.text.localeCompare(b.text);
        });

      }
    });

  }

  function dataByFacets(data) {

    var tags = {};
    var categories = {};
    var locations = {};
    var industries = {};
    var investors = {};
    var companies = {};
    if (!data || !data.items) {
      console.log('missing data?', data);
      return;
    }
    data.items.forEach(function (item) {
      if (!item.clickthroughUrl) {
        //      console.log('skipping ', item.title);
        return;
      }
      if (item.title) {
        companies[item.title] = companies[item.title] || [];
        companies[item.title].push(item.clickthroughUrl);
      }

    if (item && item.tags) {

        item.tags.forEach(function (tag) {
          tags[tag] = tags[tag] || [];
          tags[tag].push(item.clickthroughUrl);
          // tag : "industry: logistics" or "location: New York"
          var parts = tag.split(': ');
          if (parts[0] === 'location') {
            locations[parts[1]] = locations[parts[1]] || [];
            locations[parts[1]].push(item.clickthroughUrl);
          }
          if (parts[0] === 'industry') {
            industries[parts[1]] = industries[parts[1]] || [];
            industries[parts[1]].push(item.clickthroughUrl);
          }
          if (parts[0] === 'investor') {
            investors[parts[1]] = investors[parts[1]] || [];
            investors[parts[1]].push(item.clickthroughUrl);
          }
        });
    }

    if (item && item.categories) {
        item.categories.forEach(function (category) {
          if (!item.clickthroughUrl) {
            console.log('skipping ', item.title);
            return;
          }
          categories[category] = categories[category] || [];
          categories[category].push(item.clickthroughUrl);
        });
       }
    });

    return {
      tags: tags,
      categories: categories,
      locations: locations,
      industries: industries,
      investors: investors,
      companies: companies
    }; // assume no es6
  }

});
