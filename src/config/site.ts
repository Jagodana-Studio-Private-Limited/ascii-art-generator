export const siteConfig = {
  // ====== CUSTOMIZE THESE FOR EACH TOOL ======
  name: "ASCII Art Generator",
  title: "ASCII Art Generator — Free Online Text to ASCII Art Converter",
  description:
    "Convert any text to ASCII art instantly. Choose from 10+ banner fonts, copy the output in one click, and use it in README files, terminal banners, or CLI tools. 100% free, no login.",
  url: "https://ascii-art-generator.tools.jagodana.com",
  ogImage: "/opengraph-image",

  // Header
  headerIcon: "Terminal", // lucide-react icon name
  // Brand gradient colors for Tailwind are in globals.css (--brand / --brand-accent)
  brandAccentColor: "#ec4899", // hex accent for OG image gradient (must match --brand-accent in globals.css)

  // SEO
  keywords: [
    "ascii art generator",
    "text to ascii art",
    "ascii banner generator",
    "ascii font generator",
    "figlet online",
    "ascii art text",
    "cli banner generator",
    "readme ascii art",
    "terminal art generator",
    "free ascii art maker",
  ],
  applicationCategory: "DeveloperApplication",

  // Theme
  themeColor: "#a855f7", // used in manifest and meta tags

  // Branding
  creator: "Jagodana",
  creatorUrl: "https://jagodana.com",
  twitterHandle: "@jagodana",

  // Social Profiles (for Organization schema sameAs)
  socialProfiles: [
    "https://twitter.com/jagodana",
  ],

  // Links
  links: {
    github: "https://github.com/Jagodana-Studio-Private-Limited/ascii-art-generator",
    website: "https://jagodana.com",
  },

  // Footer
  footer: {
    about:
      "ASCII Art Generator converts any text into beautiful ASCII banner art. Perfect for README headers, CLI banners, terminal prompts, and more — all inside your browser.",
    featuresTitle: "Features",
    features: [
      "10+ built-in ASCII fonts",
      "One-click copy to clipboard",
      "Works in README & terminals",
      "100% free, no account needed",
    ],
  },

  // Hero Section
  hero: {
    badge: "Free Online Tool",
    titleLine1: "Turn Text Into",
    titleGradient: "ASCII Art Instantly",
    subtitle:
      "Generate stunning ASCII banner art from any text. Pick a font, type your message, and copy the output straight into your README, terminal, or CLI tool.",
  },

  // Feature Cards (shown on homepage)
  featureCards: [
    {
      icon: "🎨",
      title: "10+ Unique Fonts",
      description:
        "Choose from Big, Banner, Block, Slant, Shadow, Bubble, and more classic FIGlet-style fonts.",
    },
    {
      icon: "⚡",
      title: "Instant Preview",
      description:
        "See your ASCII art render in real-time as you type — no lag, no server round-trips.",
    },
    {
      icon: "📋",
      title: "Copy in One Click",
      description:
        "Copy the finished ASCII art to your clipboard in a single click, ready to paste anywhere.",
    },
  ],

  // Related Tools (cross-linking to sibling Jagodana tools for internal SEO)
  relatedTools: [
    {
      name: "Text Case Converter",
      url: "https://text-case-converter.tools.jagodana.com",
      icon: "🔡",
      description: "Convert text between camelCase, snake_case, and more.",
    },
    {
      name: "Lorem Ipsum Generator",
      url: "https://lorem-ipsum-generator.tools.jagodana.com",
      icon: "📝",
      description: "Generate placeholder text for your designs and layouts.",
    },
    {
      name: "Word Counter",
      url: "https://word-counter.tools.jagodana.com",
      icon: "🔢",
      description: "Count words, characters, sentences, and reading time.",
    },
    {
      name: "Markdown Table Generator",
      url: "https://markdown-table-generator.tools.jagodana.com",
      icon: "📊",
      description: "Build Markdown tables visually and copy the source.",
    },
    {
      name: "Git Branch Name Generator",
      url: "https://git-branch-name-generator.tools.jagodana.com",
      icon: "🌿",
      description: "Generate consistent, team-friendly git branch names.",
    },
    {
      name: "Slug Generator",
      url: "https://slug-generator.tools.jagodana.com",
      icon: "🔗",
      description: "Convert any title or phrase into a clean URL slug.",
    },
  ],

  // HowTo Steps (drives HowTo JSON-LD schema for rich results)
  howToSteps: [
    {
      name: "Type your text",
      text: "Enter any word, name, or short phrase in the input field at the top of the tool.",
      url: "",
    },
    {
      name: "Choose a font",
      text: "Select one of the 10+ ASCII art fonts from the dropdown menu to change the style of your banner.",
      url: "",
    },
    {
      name: "Copy and use",
      text: "Click the Copy button to copy the ASCII art to your clipboard, then paste it into your README, terminal, or code comment.",
      url: "",
    },
  ],
  howToTotalTime: "PT1M",

  // FAQ (drives both the FAQ UI section and FAQPage JSON-LD schema)
  faq: [
    {
      question: "What is ASCII art?",
      answer:
        "ASCII art is text-based visual art created using printable characters from the ASCII character set. It's widely used in CLI tools, README files, terminal banners, code comments, and retro-style interfaces.",
    },
    {
      question: "What fonts are available?",
      answer:
        "The generator includes 10+ classic FIGlet-inspired fonts: Big, Banner, Block, Slant, Shadow, Bubble, Mini, Straight, Lean, and Digital. Each font has a distinct style suited to different contexts.",
    },
    {
      question: "Can I use this for README files?",
      answer:
        "Yes — this is one of the most popular use cases. Copy the ASCII output and paste it into a code block in your README.md. Wrap it in a ``` block to preserve spacing.",
    },
    {
      question: "Is there a character limit?",
      answer:
        "For best results, keep your text under 20 characters. Longer text may overflow line width or look cramped depending on the font. The tool supports up to 50 characters.",
    },
    {
      question: "Does this work offline?",
      answer:
        "All ASCII rendering happens entirely in your browser using JavaScript — no server calls. Once the page is loaded, it works without an internet connection.",
    },
    {
      question: "Is this based on FIGlet?",
      answer:
        "The fonts are inspired by classic FIGlet fonts and built as pure JavaScript character maps for fast, dependency-free rendering. No FIGlet binary or server is required.",
    },
  ],

  // ====== PAGES (for sitemap + per-page SEO) ======
  pages: {
    "/": {
      title: "ASCII Art Generator — Free Online Text to ASCII Art Converter",
      description:
        "Convert any text to ASCII art instantly. Choose from 10+ banner fonts, copy the output in one click. 100% free, no login.",
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
