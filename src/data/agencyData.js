// Dev Solutions - Minimalist Agency Data

export const agencyInfo = {
  name: "Dev Solutions",
  tagline: "Websites • AI Videos • Video Editing • Meta Ads",
  description:
    "We build modern websites, AI-generated videos, high-retention video edits, and high-impact Meta ads for growing brands.",
  whatsappNumber: "917021552408",
  whatsappUrl: "https://wa.me/917021552408?text=Hello%20Dev%20Solutions!%20I'd%20like%20to%20discuss%20a%20project.",
  email: "rhdevsolutions@gmail.com",
};

export const servicesData = [
  {
    id: "websites",
    title: "Websites & Web Apps",
    desc: "Fast, responsive, modern websites and applications tailored to convert visitors into clients.",
    icon: "Globe",
    tag: "Next.js / React",
    points: [
      "Modern UI & responsive design",
      "Fast page load & SEO ready",
      "Landing pages & web apps",
    ],
  },
  {
    id: "ai-videos",
    title: "AI-Generated Videos",
    desc: "Photorealistic AI avatars and studio voiceovers for promos, explainers, and ads.",
    icon: "Bot",
    tag: "AI Avatars",
    points: [
      "AI human spokesperson",
      "Multi-language studio voice",
      "Script-to-video for social ads",
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    desc: "High-retention editing for Instagram Reels, YouTube Shorts, and brand promos.",
    icon: "Video",
    tag: "Shorts & Reels",
    points: [
      "Dynamic animated captions",
      "Sound design & pacing",
      "Color grading & motion graphics",
    ],
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    desc: "Targeted Facebook & Instagram ad campaigns focused on leads, sales, and ROI.",
    icon: "TrendingUp",
    tag: "Performance",
    points: [
      "Creative ad design & copy",
      "Laser audience targeting",
      "Pixel & conversion tracking",
    ],
  },
];

export const packagesData = [
  {
    id: "starter",
    name: "Starter Pack",
    badge: "Quick Launch",
    desc: "Ideal for new brands, local businesses, and solo creators looking for a fast, clean digital kickoff.",
    features: [
      "High-converting landing page",
      "Mobile & tablet responsive",
      "WhatsApp & contact integration",
      "Basic SEO & fast hosting setup",
    ],
  },
  {
    id: "growth",
    name: "Growth Pack",
    badge: "Most Popular",
    desc: "For businesses wanting a multi-page web presence and regular video content for social reach.",
    features: [
      "Full multi-page website",
      "High-retention video edits / reels",
      "AI spokesperson explainer video",
      "Speed optimization & analytics",
    ],
    popular: true,
  },
  {
    id: "scale",
    name: "Scale & Ads Pack",
    badge: "Full Service",
    desc: "Complete digital growth package combining web development, continuous video production, and Meta ads.",
    features: [
      "Custom web app or e-commerce store",
      "Monthly batch of video reels / AI ads",
      "End-to-end Meta ads management",
      "Weekly analytics & optimization",
    ],
  },
  {
    id: "custom",
    name: "Custom Bundle",
    badge: "Tailored",
    desc: "Pick only the services you need. We'll design a flexible package matching your exact scope.",
    features: [
      "Choose any mix of web, AI video, editing, or ads",
      "Flexible deliverables & timeline",
      "Direct WhatsApp communication",
      "Dedicated revisions & support",
    ],
  },
];

// Projects formatted strictly for ProjectCard ({ title, description, image, stack, links, reverse })
export const agencyProjects = [
  {
    category: "websites",
    categoryLabel: "Web Development",
    title: "VaayuGo - Full Stack Multi-Vendor Marketplace",
    description:
      "Production-grade multi-vendor marketplace with 3-role RBAC, scheduled financial settlement generation, penalty engine, and bulk CSV/ZIP upload processing with server-side image optimisation.",
    image: "/VaayuGo.png",
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "Sequelize", "node-cron"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Hemanshujc1/VaayuGo",
      },
    ],
    reverse: false,
  },
  {
    category: "websites",
    categoryLabel: "Web Development",
    title: "Your Global Tax Buddy - FinTech Platform",
    description:
      "Corporate fintech web platform with modern responsive UI, structured lead capture funnels, and optimized speed.",
    image: "/yourgtb.png",
    stack: ["Next.js", "Tailwind CSS", "Web3Forms", "SEO Engine"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Hemanshujc1",
      },
    ],
    reverse: true,
  },
  {
    category: "ai-videos",
    categoryLabel: "AI Video Generation",
    title: "StreetBite Task Portal",
    description:
      "End-to-end task management platform with 5-stage automated status transitions and real-time admin/employee dashboards. API secured with JWT-based RBAC, bcrypt, and parameterised SQL queries.",
    image: "/StreetBite.png",
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "Framer Motion", "JWT"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Hemanshujc1/Portal",
      },
    ],
    reverse: false,
  },
  {
    category: "video-editing",
    categoryLabel: "Professional Video Editing",
    title: "Online Bhaithak",
    description:
      "Full-stack Web3-inspired video-conferencing platform built with Next.js, TypeScript & Tailwind CSS. Integrates GetStream.io for real-time rooms and Clerk for secure user authentication.",
    image: "/onlinebaithak.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GetStream.io", "Clerk"],
    links: [
      {
        label: "Preview",
        url: "https://online-baithak.vercel.app",
      },
      {
        label: "GitHub",
        url: "https://github.com/Hemanshujc1/Online-Baithak",
      },
    ],
    reverse: true,
  },
  {
    category: "meta-ads",
    categoryLabel: "Meta Ads & Performance Marketing",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with Next.js SSR, 2-tier admin system, multi-variant product catalog, cart, wishlist, checkout, and return management. Hardened with 6-layer API security.",
    image: "/Ecommerce.png",
    stack: ["Next.js", "Node.js", "Express.js", "MySQL", "Axios"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Hemanshujc1/Ecommerce",
      },
    ],
    reverse: false,
  },
  {
    category: "websites",
    categoryLabel: "Web Development",
    title: "E-Cell IIIT Trichy Web Platform",
    description:
      "Official web platform for the Entrepreneurship Cell of IIIT Trichy. Premium, high-performance application managing events, showcasing team and alumni, and providing a seamless administrative experience.",
    image: "/Ecell.png",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Hemanshujc1/Ecell-IIITT",
      },
    ],
    reverse: true,
  },
];

