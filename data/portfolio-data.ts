export const personalInfo = {
  name: "Pratik Chogale",
  role: "Full Stack Developer",
  location: "Khopoli, Maharashtra, India",
  tagline: "Full Stack Developer building scalable and AI-powered web applications",
  email: "pratikchogale10@gmail.com",
  phone: "+91 8010069734",
  linkedin: "https://linkedin.com/in/pratik-chogale",
};

export const aboutSummary =
  "BSc IT graduate and Full Stack Developer Intern building real-world products across AI platforms and CRM workflows. I focus on clean frontend experiences backed by scalable backend integration.";

export const skillGroups = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "Next.js"],
  },
  {
    category: "Backend",
    skills: ["Firebase", "Supabase"],
  },
  {
    category: "Database",
    skills: ["SQL"],
  },
  {
    category: "Tools",
    skills: ["GitHub", "Cursor AI", "VS Code", "Power BI", "Excel", "Antigravity"],
  },
];

export const projects = [
  {
    id: "applysathi",
    category: "AI Platform",
    name: "ApplySathi",
    image: "/projects/applysathi.svg",
    problem:
      "Job seekers needed practical interview prep and guidance in one platform, but existing tools were fragmented and static.",
    solution:
      "Built a unified AI-powered job assistance platform with dynamic interview generation, admin control, and content publishing.",
    stack: ["Next.js", "JavaScript", "Firebase Firestore", "LLM Integration"],
    features: [
      "AI-based interview Q&A engine with adaptive prompts",
      "Admin dashboard for user analytics and moderation",
      "Blog system for career-focused content delivery",
    ],
    demo: "https://www.applysathi.com/",
    github: "https://github.com/",
  },
  {
    id: "dermaplastcrm",
    category: "CRM System",
    name: "DermaplastCRM",
    image: "/projects/dermaplastcrm.svg",
    problem:
      "Healthcare teams needed a system to manage lead conversion, appointment scheduling, and billing in one reliable flow.",
    solution:
      "Developed an ongoing CRM platform that centralizes patient workflows with live updates and scalable backend architecture.",
    stack: ["Next.js", "Supabase", "JavaScript", "LLM Integration"],
    features: [
      "Lead-to-patient conversion pipeline with workflow tracking",
      "Appointments, treatment records, and billing modules",
      "Supabase-backed real-time data architecture",
    ],
    demo: "https://dermaplastcrm.vercel.app",
    github: "https://github.com/",
  },
  {
    id: "evfinder",
    category: "Web App",
    name: "EV Charging Station Finder",
    image: "/projects/evfinder.svg",
    problem:
      "EV users often struggle to quickly discover nearby charging points with clear, mobile-friendly interfaces.",
    solution:
      "Created a location-based station finder with clean navigation and responsive map-ready search experience.",
    stack: ["Django", "JavaScript", "HTML", "CSS", "Bootstrap"],
    features: [
      "Location-aware search for nearby charging stations",
      "Mobile-first UI for quick access while traveling",
      "Structured station listing for faster decision-making",
    ],
    demo: "#",
    github: "https://github.com/",
  },
];

export const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Tinkerism E-Commerce Store Pvt. Ltd.",
    period: "Dec 2025 - Present",
    points: [
      "Engineered major modules for ApplySathi, including AI interview system, admin controls, and blog workflows.",
      "Built core DermaplastCRM components for lead management, patient workflow automation, and scalable architecture.",
      "Integrated real-time databases (Firebase and Supabase) and delivered reusable UI components for consistency and speed.",
    ],
  },
  {
    role: "AI Content & Design Intern",
    company: "Tinkerism E-Commerce Store Pvt. Ltd.",
    period: "Dec 2025 - Present",
    points: [
      "Created AI-generated visual and multimedia assets aligned with product and brand goals.",
      "Produced engaging content workflows using Canva, ElevenLabs, HeyGen, and CapCut.",
      "Improved content quality by combining design thinking with AI-assisted production pipelines.",
    ],
  },
];

export const achievements = [
  {
    title: "Runner-up, Hackathon 2025",
    detail:
      "Secured 2nd place in a college-level hackathon by building a Student Attendance Monitoring System.",
  },
];
