export type Showcase = {
  video?: { src: string };
  image?: { src: string; caption?: string };
};

export type Project = {
  index: string;
  slug: string;
  title: string;
  client: string;
  projectContext?: string;
  year: string;
  category: string;
  role: string;
  technologies: string[];
  coverVideo: string;
  coverImage?: string;
  mediaType: "image" | "video";
  excerpt: string;
  challenge: string;
  approach: string;
  result: string;
  stats: { label: string; value: string }[];
  showcases: Showcase[];
};

export const flagshipProject = {
  name: "Disney Kidz Storefront",
  client: "Disney Kidz",
  platform: "Shopify (Dawn Theme)",
  role: "Shopify Storefront Developer",
  period: "2025 – 2026",
  description:
    "A comprehensive storefront UI overhaul for a licensed children's apparel store. Work centered on fixing broken theme CSS, engineering responsive custom sections, and eliminating mobile layout friction across the store.",
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "disney-kidz-navigation-drawer",
    title: "Mobile Navigation Drawer & Category Architecture",
    client: "Disney Kidz",
    projectContext: "Disney Kidz Storefront Customization",
    year: "2026",
    category: "Shopify / Navigation & Mobile UX",
    role: "Shopify Theme Developer",
    technologies: ["Custom CSS", "Shopify Theme Styling", "Mobile Touch UX", "Dawn Theme"],
    coverVideo: "/projects/disney-kidz-menu-drawer.png",
    coverImage: "/projects/disney-kidz-menu-drawer.png",
    mediaType: "image",
    excerpt:
      "A custom mobile slide-out navigation styling overhaul replacing unstyled, text-heavy menus with visual product category cards, promotional tags, and direct loyalty club integration.",
    challenge:
      "The store's navigation styling was visually broken on mobile viewports, displaying cluttered, plain text links that crowded small screens, lacked category hierarchy, and made finding specific apparel difficult for parents.",
    approach:
      "Working with the theme's structural foundation, I re-engineered the mobile menu CSS to create clean, card-style touch targets with category thumbnails, clear typography, and status badges ('FAST SHIP', 'POPULAR'). I also styled an integrated loyalty card ('Disney Kidz Club') and direct customer care shortcuts.",
    result:
      "Delivered an intuitive, thumb-friendly navigation experience where key clothing departments and customer support are instantly recognizable without navigating through layers of text menus.",
    stats: [
      { label: "Platform", value: "Shopify Dawn" },
      { label: "Core Fix", value: "Custom CSS & Layout" },
      { label: "Touch UX", value: "Mobile-First Drawer" },
    ],
    showcases: [
      {
        image: {
          src: "/projects/disney-kidz-menu-drawer.png",
          caption: "Primary navigation drawer with visual category cards, product thumbnails, and FAST SHIP / POPULAR badges",
        },
      },
      {
        image: {
          src: "/projects/disney-kidz-menu-club.jpg",
          caption: "Integrated loyalty club card, direct customer care shortcut, and social channels inside the drawer",
        },
      },
    ],
  },
  {
    index: "02",
    slug: "disney-kidz-cart-drawer",
    title: "Slide-Out Ajax Cart Drawer & Quick Checkout",
    client: "Disney Kidz",
    projectContext: "Disney Kidz Storefront Customization",
    year: "2026",
    category: "Shopify / Ajax Cart & Checkout UX",
    role: "Shopify Theme Developer",
    technologies: ["Custom CSS", "Ajax Cart Styling", "Mobile UX", "Shopify Dawn"],
    coverVideo: "/projects/disney-kidz-cart-drawer.png",
    coverImage: "/projects/disney-kidz-cart-drawer.png",
    mediaType: "image",
    excerpt:
      "A slide-out Ajax cart styling overhaul featuring clean quantity controls, real-time total recalculation, variant breakdown, and direct checkout acceleration.",
    challenge:
      "The default cart drawer suffered from awkward layout spacing, misaligned quantity controls, and clipped currency text on mobile screens, creating purchase friction.",
    approach:
      "I resolved the layout and CSS bugs in the Ajax cart drawer, styling responsive item line layouts, aligned quantity pills (+ / -), dynamic currency totals, and an uncluttered direct checkout button.",
    result:
      "Delivered a friction-free mobile cart experience that keeps users engaged on the collection/product page while giving immediate feedback on their cart contents and estimated total.",
    stats: [
      { label: "Component", value: "Ajax Cart Drawer" },
      { label: "Core Fix", value: "Responsive Cart CSS" },
      { label: "Checkout Path", value: "One-Tap Direct" },
    ],
    showcases: [
      {
        image: {
          src: "/projects/disney-kidz-cart-drawer.png",
          caption: "Ajax slide-out cart drawer with live subtotal calculation, quantity pills, and direct checkout CTA",
        },
      },
    ],
  },
  {
    index: "03",
    slug: "disney-kidz-curated-categories",
    title: "Curated Collections: 'Shop by Category' Section",
    client: "Disney Kidz",
    projectContext: "Disney Kidz Storefront Customization",
    year: "2026",
    category: "Shopify / Custom Section & CSS",
    role: "Shopify Theme Developer",
    technologies: ["Custom CSS", "CSS Grid & Flexbox", "Responsive Styling", "Dawn Theme"],
    coverVideo: "/projects/disney-kidz-categories-desktop.png",
    coverImage: "/projects/disney-kidz-categories-desktop.png",
    mediaType: "image",
    excerpt:
      "A custom-styled 'Shop by Category' section with demographic cards (Boys, Girls, Baby), age indicators, and quick-filter subcategory pills designed for rapid collection discovery.",
    challenge:
      "The store lacked an engaging visual category directory, resulting in high bounce rates as shoppers had to guess where to find Boys, Girls, and Baby apparel lines.",
    approach:
      "I engineered the custom CSS grid and flexbox layout for the curated collections section, styling demographic cards with demographic badges ('Ages 2-14') and quick-tap pill buttons that scale fluidly from a 3-column desktop grid to single-column mobile cards.",
    result:
      "Streamlined product discovery with a visual entry point that highlights seasonal imagery and provides direct shortcuts into high-demand subcategories.",
    stats: [
      { label: "Layout", value: "3-Col Grid / Mobile Stack" },
      { label: "Core Fix", value: "CSS Grid & Touch Pills" },
      { label: "Platform", value: "Shopify Dawn" },
    ],
    showcases: [
      {
        image: {
          src: "/projects/disney-kidz-categories-desktop.png",
          caption: "Desktop 3-column layout showcasing Boys, Girls, and Baby cards with demographic labels and interactive category pills",
        },
      },
      {
        image: {
          src: "/projects/disney-kidz-categories-mobile.png",
          caption: "Mobile-responsive presentation with full-width visual cards and touch-optimized subcategory buttons",
        },
      },
      {
        image: {
          src: "/projects/disney-kidz-categories-girls.png",
          caption: "Girls category card detail showing frosted glass pills for Dresses, Shoes, and T-Shirts",
        },
      },
      {
        image: {
          src: "/projects/disney-kidz-categories-baby.png",
          caption: "Baby category card detail showing infant sizing tag (0-24M) and direct product links",
        },
      },
    ],
  },
  {
    index: "04",
    slug: "disney-kidz-campaign-hero",
    title: "Campaign Hero & Seasonal Banner Section",
    client: "Disney Kidz",
    projectContext: "Disney Kidz Storefront Customization",
    year: "2026",
    category: "Shopify / Custom Section",
    role: "Shopify Theme Developer",
    technologies: ["Shopify Liquid", "Custom CSS", "Theme Editor Schema", "Responsive UI"],
    coverVideo: "/projects/Screen Recording 2026-08-03 163454.mp4",
    mediaType: "video",
    excerpt:
      "A mobile-first campaign hero section built for a Shopify children's clothing store, pairing bold typography with responsive layout controls and theme customizer settings.",
    challenge:
      "The store needed a high-impact seasonal campaign banner that displayed legibly and scaled naturally across both mobile and desktop screens without text clipping or awkward breaks.",
    approach:
      "I built a custom Liquid section with customizable headline, subtext, and CTA settings in the Shopify theme editor, adapting gracefully down to narrow mobile viewports.",
    result:
      "Delivered a flexible campaign hero section directly configurable from the Shopify theme editor, providing a clean entry point for seasonal collections.",
    stats: [
      { label: "Platform", value: "Shopify" },
      { label: "Focus", value: "Mobile-First" },
      { label: "Component", value: "Custom Hero" },
    ],
    showcases: [
      { video: { src: "/projects/Screen Recording 2026-08-03 163454.mp4" } },
    ],
  },
  {
    index: "05",
    slug: "disney-kidz-brand-carousel",
    title: "Character & Brand Discovery Carousel",
    client: "Disney Kidz",
    projectContext: "Disney Kidz Storefront Customization",
    year: "2026",
    category: "Shopify / Interactive Component",
    role: "Shopify Theme Developer",
    technologies: ["Shopify Liquid", "Vanilla JavaScript", "CSS Carousel", "Responsive Design"],
    coverVideo: "/projects/Screen Recording 2026-08-03 163620.mp4",
    mediaType: "video",
    excerpt:
      "A custom brand discovery carousel letting shoppers filter collections by character — built in Shopify Liquid and vanilla JavaScript with smooth touch navigation.",
    challenge:
      "The store features licensed apparel across dozens of character franchises and needed an intuitive, touch-friendly way for parents to browse on mobile.",
    approach:
      "I developed a custom Liquid carousel with circular brand badges, smooth touch navigation, and direct collection links, fully configurable via theme settings.",
    result:
      "Gave customers an interactive shortcut to their preferred collections directly from the homepage, reducing navigation steps on mobile devices.",
    stats: [
      { label: "Platform", value: "Shopify" },
      { label: "Interaction", value: "Touch-Ready" },
      { label: "Component", value: "Brand Slider" },
    ],
    showcases: [
      { video: { src: "/projects/Screen Recording 2026-08-03 163620.mp4" } },
    ],
  },
  {
    index: "06",
    slug: "disney-kidz-product-cards",
    title: "Product Cards & Dynamic Discount Badges",
    client: "Disney Kidz",
    projectContext: "Disney Kidz Storefront Customization",
    year: "2025",
    category: "Shopify / Collection Optimization",
    role: "Shopify Theme Developer",
    technologies: ["Shopify Liquid", "Custom CSS", "Shopify Cart API", "Dawn Theme"],
    coverVideo: "/projects/Screen Recording 2026-08-03 163724.mp4",
    mediaType: "video",
    excerpt:
      "A responsive product card component featuring dynamic discount badges and an inline quick add-to-cart flow for collection grids.",
    challenge:
      "Standard product cards lacked dynamic discount indicators and required shoppers to open individual product pages to add items to their cart.",
    approach:
      "I customized the product card template to compute discount percentages dynamically, display promotional badges, and trigger inline cart additions via the Shopify Cart API.",
    result:
      "Streamlined the shopping flow on collection pages by surfacing savings clearly and allowing shoppers to add items with a single tap.",
    stats: [
      { label: "Platform", value: "Shopify" },
      { label: "Cart Action", value: "Quick Add-to-Cart" },
      { label: "Component", value: "Product Card" },
    ],
    showcases: [
      { video: { src: "/projects/Screen Recording 2026-08-03 163724.mp4" } },
    ],
  },
  {
    index: "07",
    slug: "disney-kidz-branded-footer",
    title: "Modular Storefront Theme Footer",
    client: "Disney Kidz",
    projectContext: "Disney Kidz Storefront Customization",
    year: "2026",
    category: "Shopify / Custom Section",
    role: "Shopify Theme Developer",
    technologies: ["Shopify Liquid", "CSS Grid", "Custom Sections", "Responsive Design"],
    coverVideo: "/projects/Screen Recording 2026-08-03 152032.mp4",
    mediaType: "video",
    excerpt:
      "A custom multi-column footer section designed to reinforce brand identity while surfacing policy links, social media, and newsletter signups.",
    challenge:
      "The store required a cohesive footer that organized policy links, support info, and customer navigation cleanly without relying on third-party app scripts.",
    approach:
      "I created a responsive multi-column Liquid footer with modular menu blocks, brand visuals, social links, and an integrated newsletter form.",
    result:
      "Unified the bottom-of-page experience across mobile and desktop, making policy navigation clear and keeping the theme lightweight.",
    stats: [
      { label: "Platform", value: "Shopify" },
      { label: "Layout", value: "Responsive Grid" },
      { label: "Component", value: "Theme Footer" },
    ],
    showcases: [
      { video: { src: "/projects/Screen Recording 2026-08-03 152032.mp4" } },
    ],
  },
];

export type Service = {
  index: string;
  title: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Storefront Customization",
    description:
      "Custom Liquid sections, template tailoring, and bespoke theme modifications that align precisely with your brand identity.",
    capabilities: ["Shopify Liquid", "Theme Customization", "Custom Sections", "Admin Schema"],
  },
  {
    index: "02",
    title: "UI Implementation",
    description:
      "Translating design mockups and Figma layouts into clean, accessible, and responsive Shopify storefront interfaces.",
    capabilities: ["Responsive UI", "Custom CSS", "Figma to Shopify", "Component Styling"],
  },
  {
    index: "03",
    title: "Store Improvements",
    description:
      "Practical enhancements that streamline the shopping experience, from quick add-to-cart and cart drawers to promotional banners.",
    capabilities: ["Cart Enhancements", "Dynamic Badges", "Metafield Integration", "App Setup"],
  },
  {
    index: "04",
    title: "Responsive & Mobile QA",
    description:
      "Rigorous testing and fixes across mobile phones, tablets, and desktops to ensure smooth touch interactions and zero layout glitches.",
    capabilities: ["Mobile-First UX", "Cross-Browser Testing", "Layout Debugging", "Performance Optimization"],
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    index: "00",
    title: "Discovery",
    description:
      "Understanding your store's requirements, target audience, and the specific storefront improvements or customization needed.",
  },
  {
    index: "01",
    title: "Theme Architecture",
    description:
      "Reviewing your current theme structure and planning clean, maintainable Liquid sections and settings schemas.",
  },
  {
    index: "02",
    title: "Development",
    description:
      "Writing modular Liquid, semantic HTML, and performant CSS/JS directly compatible with your Shopify theme.",
  },
  {
    index: "03",
    title: "Responsive Testing",
    description:
      "Testing across smartphone, tablet, laptop, and desktop screen sizes to guarantee flawless layouts and smooth interactions.",
  },
  {
    index: "04",
    title: "Theme Launch",
    description:
      "Deploying changes safely through Shopify theme previews, verifying live behavior, and ensuring everything operates as expected.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [];
