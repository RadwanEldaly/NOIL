export type Showcase = {
  video: { src: string };
};

export type Project = {
  index: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  role: string;
  technologies: string[];
  coverVideo: string;
  excerpt: string;
  challenge: string;
  approach: string;
  result: string;
  stats: { label: string; value: string }[];
  showcases: Showcase[];
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "disney-kidz-footer",
    title: "Disney Kidz — Footer",
    client: "Disney Kidz",
    year: "2026",
    category: "Shopify / E-Commerce",
    role: "Shopify Theme Developer",
    technologies: ["Shopify Liquid", "Custom CSS", "JavaScript", "Responsive Design"],
    coverVideo: "/projects/Screen Recording 2026-08-03 163454.mp4",
    excerpt:
      "A mobile-first hero section for a children's fashion store built on Shopify, featuring bold campaign typography and full-bleed lifestyle imagery.",
    challenge:
      "The store needed a high-impact hero that communicated a seasonal campaign clearly on mobile while staying on-brand with the Disney licensing guidelines.",
    approach:
      "I built a fully responsive Liquid section with customizable headline, subtext, and CTA. The section adapts elegantly from a full-bleed desktop layout to a clean mobile card with optimized touch targets.",
    result:
      "The hero became the primary traffic driver for the Back to School campaign, contributing to a measurable uplift in session-to-product-page conversion rates.",
    stats: [
      { label: "Platform", value: "Shopify" },
      { label: "Device Focus", value: "Mobile-First" },
      { label: "Launch", value: "Q3 2026" },
    ],
    showcases: [
      { video: { src: "/projects/Screen Recording 2026-08-03 163454.mp4" } },
    ],
  },
  {
    index: "02",
    slug: "disney-kidz-add-to-cart",
    title: "Disney Kidz — Add to cart",
    client: "Disney Kidz",
    year: "2026",
    category: "Shopify / E-Commerce",
    role: "Shopify Theme Developer",
    technologies: ["Shopify Liquid", "Custom JavaScript", "CSS Carousel", "Responsive Design"],
    coverVideo: "/projects/Screen Recording 2026-08-03 163620.mp4",
    excerpt:
      "A custom brand discovery carousel letting shoppers filter the entire catalogue by their child's favourite licensed character — built entirely in Shopify Liquid.",
    challenge:
      "The store stocks licensed clothing for dozens of IP brands (Disney, Minecraft, Marvel, etc.) and needed a frictionless way for parents to browse by character.",
    approach:
      "I developed a fully custom carousel section in Liquid with circular brand-logo tiles, smooth left/right navigation, and a direct link to each brand's filtered collection page. Fully configurable from the Shopify admin with no code required.",
    result:
      "The brands section became one of the most-clicked elements on the homepage, significantly reducing the number of steps shoppers needed to reach their target collection.",
    stats: [
      { label: "Brands Displayed", value: "12+" },
      { label: "Platform", value: "Shopify" },
      { label: "Launch", value: "Q2 2026" },
    ],
    showcases: [
      { video: { src: "/projects/Screen Recording 2026-08-03 163620.mp4" } },
    ],
  },
  {
    index: "03",
    slug: "disney-kidz-back-to-school",
    title: "Disney Kidz — Back to School",
    client: "Disney Kidz",
    year: "2026",
    category: "Shopify / E-Commerce",
    role: "Shopify Theme Developer",
    technologies: ["Shopify Liquid", "CSS Grid", "Custom Sections", "Brand Design"],
    coverVideo: "/projects/Screen Recording 2026-08-03 152032.mp4",
    excerpt:
      "A fully branded section for a licensed children's store, designed to reinforce brand identity while surfacing key navigation and a newsletter opt-in.",
    challenge:
      "The store's footer needed to feel premium and on-brand with Disney's purple identity, while providing clear navigation for policies, social links, and a newsletter — all manageable from the Shopify admin.",
    approach:
      "I built a custom multi-column footer section in Liquid with a full-bleed brand background image, configurable link menus, social media icons, and an embedded newsletter form — all without third-party apps.",
    result:
      "The branded footer elevated the store's overall visual consistency and reduced customer service inquiries by surfacing policy pages directly in a clearly structured layout.",
    stats: [
      { label: "Platform", value: "Shopify" },
      { label: "Admin Configurable", value: "100%" },
      { label: "Launch", value: "Q2 2026" },
    ],
    showcases: [
      { video: { src: "/projects/Screen Recording 2026-08-03 152032.mp4" } },
    ],
  },
  {
    index: "04",
    slug: "disney-kidz-brand-section",
    title: "Disney Kidz — Brand Section",
    client: "Disney Kidz",
    year: "2025",
    category: "Shopify / E-Commerce",
    role: "Shopify Theme Developer",
    technologies: ["Shopify Liquid", "Custom CSS", "Metafields", "Sale Badges"],
    coverVideo: "/projects/Screen Recording 2026-08-03 163724.mp4",
    excerpt:
      "A clean, conversion-optimised product card component for a children's fashion store, featuring dynamic sale badges and a quick add-to-cart interaction.",
    challenge:
      "The default Shopify product card was generic and lacked the sale percentage badges and quick-add UX that modern shoppers expect, especially in a licensed character clothing context.",
    approach:
      "I engineered a custom product card component with automatic sale-percentage calculation, a dynamic discount badge, and an inline add-to-cart button — all driven by Shopify's native metafields and cart API.",
    result:
      "The updated product cards measurably improved the store's product-list to add-to-cart rate, with customers taking action faster without needing to visit individual product pages.",
    stats: [
      { label: "Platform", value: "Shopify" },
      { label: "Sale Badge", value: "Dynamic" },
      { label: "Launch", value: "Q4 2025" },
    ],
    showcases: [
      { video: { src: "/projects/Screen Recording 2026-08-03 163724.mp4" } },
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
    title: "Front-End Engineering",
    description:
      "Production-grade builds using Next.js and React that treat performance and craft as the same discipline.",
    capabilities: ["Next.js", "React", "TypeScript", "Performance Optimization"],
  },
  {
    index: "02",
    title: "Shopify Development",
    description:
      "Custom Shopify themes and headless commerce solutions that don't look or feel like typical templates.",
    capabilities: ["Liquid Customization", "Headless Shopify", "Checkout Optimization", "App Integrations"],
  },
  {
    index: "03",
    title: "UX / UI Design",
    description:
      "Interfaces engineered around behavior, not trends — every screen is a decision, not just a decoration.",
    capabilities: ["Figma Prototyping", "Interaction Design", "Design Systems", "Conversion Focused"],
  },
  {
    index: "04",
    title: "Motion Engineering",
    description:
      "Intentional micro-interactions and smooth page transitions that elevate the perceived quality of the brand.",
    capabilities: ["Framer Motion", "GSAP", "Scroll Animations", "Micro-interactions"],
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
      "I start by deeply understanding your brand, business goals, and the specific problems we need to solve.",
  },
  {
    index: "01",
    title: "Architecture",
    description:
      "Defining the right tech stack and data structures early ensures the final product is scalable and fast.",
  },
  {
    index: "02",
    title: "Development",
    description:
      "I write clean, modular code at production fidelity. No surprises at build time.",
  },
  {
    index: "03",
    title: "Refinement",
    description:
      "Polishing animations, checking accessibility, and rigorously testing across all devices.",
  },
  {
    index: "04",
    title: "Launch & Support",
    description:
      "I manage the deployment process and stand by to monitor performance during those critical first days.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "He didn't just build our Shopify store. He understood the brand, the customer, and delivered something that genuinely stands out from every other kids clothing site.",
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    company: "Disney Kidz",
  },
  {
    quote:
      "The most detail-obsessed developer I've worked with. Every pixel, every interaction — handled with care. The result speaks for itself.",
    name: "James Okafor",
    role: "Head of Digital",
    company: "Premium E-Commerce Client",
  },
  {
    quote:
      "Fast, communicative, and genuinely talented. He treated our project like it was his own. Rare to find that level of ownership in a freelancer.",
    name: "Nour El-Masry",
    role: "Product Manager",
    company: "Upwork Client",
  },
];
