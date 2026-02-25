import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Database, Lock, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const getAssetPath = (path: string) => encodeURI(path);

export const projects = [
  {
    id: "hotel-management-system",
    title: "Hotel Management System",
    shortTitle: "HOTEL MGMT",
    subtitle: "Enterprise Full-Stack Hospitality Engine",
    description: "A comprehensive hotel management system with modern admin dashboard, real-time booking engine, and automated inventory tracking.",
    year: "2025",
    type: "Client Project",
    location: "Nairobi, Kenya",
    color: "bg-primary",
    coverImage: "/projects/hotel-management/hotel_management1.jpeg",
    gallery: [
      "/projects/hotel-management/hotel_management1.jpeg",
      "/projects/hotel-management/hotel_management2.jpeg",
      "/projects/hotel-management/hotel_management3.jpeg",
      "/projects/hotel-management/hotel_management4.jpeg",
      "/projects/hotel-management/hotel_management5.jpeg",
      "/projects/hotel-management/hotel_management6.jpeg",
      "/projects/hotel-management/hotelAPI.jpeg",
    ],
    features: [
      "Secure Multi-role Authentication (RBAC)",
      "Dynamic Real-time Booking Engine",
      "Automated Inventory & POS Tracking",
      "Financial Reporting & PDF Invoicing",
    ],
    techStack: [
      { name: "Laravel 11", type: "Backend" },
      { name: "Filament V3", type: "Admin Panel" },
      { name: "Tailwind CSS", type: "Styling" },
      { name: "MySQL / Redis", type: "Database" },
    ],
    stats: {
      performance: "98",
      loadTime: "0.8s",
      seo: "100",
    },
    links: {
      demo: "#",
      github: "https://github.com/flavian-jumba/sosa-BE",
      backend: "https://github.com/flavian-jumba/sosa-BE",
      frontend: "https://sosa-frontend-black.vercel.app/",
    },
    challenge: "Building a comprehensive hospitality management system that handles multiple properties, room types, dynamic pricing, and integrates with various payment gateways while maintaining a clean and intuitive admin interface.",
    solution: "Implemented a modular architecture using Laravel and Filament, with real-time availability checking, automated email notifications, and comprehensive reporting dashboards.",
  },
  {
    id: "epr-system",
    title: "Enterprise Resource Planning System",
    shortTitle: "ERP SYSTEM",
    subtitle: "Centralised Business Intelligence Platform",
    description: "A bespoke ERP platform built for a UK-based client operating in Kenya giving leadership a single, real-time command centre to monitor company performance, track operational changes, and make confident data-driven decisions across departments.",
    year: "2025",
    type: "Client Project",
    location: "Kenya / United Kingdom",
    color: "bg-[hsl(var(--secondary))]",
    private: true,
    coverImage: "/projects/EPR-system/image.png",
    gallery: [
      "/projects/EPR-system/image.png",
      "/projects/EPR-system/image copy.png",
      "/projects/EPR-system/image copy 2.png",
      "/projects/EPR-system/image copy 3.png",
    ],
    features: [
      "Centralised Multi-department Dashboard",
      "Real-time KPI Monitoring & Alerts",
      "Role-based Access Control (RBAC)",
      "Operational Change Tracking & Audit Logs",
    ],
    techStack: [
      { name: "Laravel", type: "Backend" },
      { name: "Filament V5", type: "Admin Panel" },
      { name: "Alpine.js", type: "Frontend" },
      { name: "Tailwind CSS", type: "Styling" },
    ],
    stats: {
      performance: "97",
      departments: "6+",
      uptime: "99.9%",
    },
    links: {
      demo: "#",
      github: "#",
    },
    challenge: "The client needed full visibility into how their Kenyan operations were performing from the UK — without relying on manual reports, scattered spreadsheets, or delayed communication across teams. Every department was working in siloes with no unified source of truth.",
    solution: "Delivered a centralised ERP platform with department-level dashboards, live KPI tracking, and an automated alert system for operational changes. Role-based access ensures each team member sees exactly what they need, while leadership gets the complete picture — from anywhere in the world.",
  },
  {
    id: "ecommerce-api",
    title: "E-Commerce API",
    shortTitle: "ECOMMERCE API",
    subtitle: "High-Performance Backend Architecture",
    description: "A robust, high-performance backend API built to handle millions of requests with sub-second latency for e-commerce platforms.",
    year: "2025",
    type: "Personal Project",
    location: "Nairobi, Kenya",
    color: "bg-[hsl(var(--secondary))]",
    coverImage: "/projects/ecommerceApi/ecommerceAPIs.jpeg",
    gallery: [
      "/projects/ecommerceApi/ecommerceAPIs.jpeg",
      "/projects/ecommerceApi/apis.jpeg",
      "/projects/ecommerceApi/apis2.jpeg",
      "/projects/ecommerceApi/apis433.jpeg",
    ],
    features: [
      "User Authentication with Laravel Sanctum",
      "Product Listings with Advanced Filtering",
      "Shopping Cart Management",
      "Order Processing Workflow",
    ],
    techStack: [
      { name: "Laravel", type: "Backend" },
      { name: "MySQL", type: "Database" },
      { name: "Redis", type: "Caching" },
      { name: "Sanctum", type: "Auth" },
    ],
    stats: {
      uptime: "99.9%",
      response: "<20ms",
      requests: "10K+/day",
    },
    links: {
      demo: "#",
      github: "https://github.com/flavian-jumba",
    },
    challenge: "Ensuring sub-second latency for product searches while maintaining strict data consistency across distributed Redis caches and a MySQL primary instance.",
    solution: "Leveraged a repository pattern to decouple business logic from data access. Implemented asynchronous job processing for order fulfillment and notification dispatching.",
  },
  {
    id: "crm-recruitment-agency",
    title: "CRM Recruitment Agency",
    shortTitle: "CRM AGENCY",
    subtitle: "Recruitment Operations Platform",
    description: "A recruitment CRM built for agencies to manage candidates, employers, interviews, and placement workflows from one dashboard.",
    year: "2025",
    type: "Client Project",
    location: "Nairobi, Kenya",
    color: "bg-card",
    private: true,
    coverImage: "/projects/crm-recruitment-agency/Untitled.jpeg",
    gallery: [
      "/projects/crm-recruitment-agency/Untitled.jpeg",
      "/projects/crm-recruitment-agency/Untitled2.jpeg",
      "/projects/crm-recruitment-agency/Untitled3.jpeg.jpeg",
    ],
    features: [
      "Candidate Pipeline Tracking",
      "Employer Account Management",
      "Interview Scheduling Workflow",
      "Placement & Follow-up Reporting",
    ],
    techStack: [
      { name: "Laravel", type: "Backend" },
      { name: "Filament", type: "Admin Panel" },
      { name: "Livewire", type: "Frontend" },
      { name: "MySQL", type: "Database" },
    ],
    stats: {
      performance: "97",
      recruiters: "25+",
      pipelines: "300+",
    },
    links: {
      demo: "#",
      github: "#",
    },
    challenge: "Agency teams needed one operational view for both candidates and hiring companies, but existing tools were fragmented across spreadsheets and messaging apps.",
    solution: "Delivered a unified CRM workflow with role-based views, candidate stage automation, and reporting widgets that made recruiter handoffs faster and traceable.",
  },
  {
    id: "forex-trading-elearning",
    title: "Forex Trading E-Learning",
    shortTitle: "FOREX LMS",
    subtitle: "Trading Education Platform",
    description: "An online learning platform focused on forex education, combining guided modules, mentor sessions, and learner progress dashboards.",
    year: "2025",
    type: "Client Project",
    location: "Nairobi, Kenya",
    color: "bg-primary",
    coverImage: "/projects/forexTradingeLearning/Untitled.jpeg",
    gallery: [
      "/projects/forexTradingeLearning/Untitled.jpeg",
      "/projects/forexTradingeLearning/Untitled2.jpeg",
    ],
    features: [
      "Structured Course Module Delivery",
      "Progress Tracking per Learner",
      "Mentor-led Session Scheduling",
      "Assessment and Certificate Flows",
    ],
    techStack: [
      { name: "Laravel & Django", type: "Backend" },
      { name: "React Js", type: "Frontend" },
      { name: "Tailwind CSS", type: "Styling" },
      { name: "MySQL", type: "Database" },
    ],
    stats: {
      performance: "96",
      completion: "82%",
      students: "500+",
    },
    links: {
      demo: "https://forexpesacademy.com/",
      github: "#",
    },
    challenge: "Keeping learners engaged through long technical trading lessons while still giving instructors enough control over module structure and evaluations.",
    solution: "Introduced a milestone-driven curriculum design with bite-size lesson progression, instructor feedback loops, and visual learner analytics.",
  },
  {
    id: "mental-health-app",
    title: "Mental Health App",
    shortTitle: "MENTAL HEALTH",
    subtitle: "Wellness Support Experience",
    description: "A wellness-focused web app that helps users track mood trends, access coping resources, and build healthy routines over time.",
    year: "2026",
    type: "Personal Project",
    location: "Nairobi, Kenya",
    color: "bg-[hsl(var(--secondary))]",
    coverImage: "/projects/mental-health-app/Untitled.jpeg",
    gallery: [
      "/projects/mental-health-app/Untitled.jpeg",
      "/projects/mental-health-app/WhatsApp Image 2026-02-20 at 00.02.20.jpeg",
      "/projects/mental-health-app/WhatsApp Image 2026-02-20 at 00.02.21.jpeg",
      "/projects/mental-health-app/WhatsApp Image 2026-02-20 at 00.02.21 (1).jpeg",
      "/projects/mental-health-app/WhatsApp Image 2026-02-20 at 00.02.22.jpeg",
      "/projects/mental-health-app/WhatsApp Image 2026-02-20 at 00.02.23.jpeg",
    ],
    features: [
      "Daily Mood Check-in Workflow",
      "Wellness Journal and Reflection Prompts",
      "Resource Library for Coping Strategies",
      "Personal Habit Progress Snapshots",
    ],
    techStack: [
      { name: "React", type: "Frontend" },
      { name: "TypeScript", type: "Language" },
      { name: "Tailwind CSS", type: "Styling" },
      { name: "Laravel & Firebase", type: "Backend" },
    ],
    stats: {
      performance: "95",
      sessions: "1.2K",
      retention: "78%",
    },
    links: {
      demo: "#",
      github: "https://github.com/flavian-jumba/peerly-BE",
    },
    challenge: "Balancing a calm user experience with meaningful data capture for mood patterns without overwhelming users during vulnerable moments.",
    solution: "Focused on low-friction interactions and clear visual summaries so users could log emotions quickly and still gain insight from weekly trend views.",
  },
  {
    id: "jayba-juice",
    title: "Jayba Juice",
    shortTitle: "JAYBA JUICE",
    subtitle: "Brand & Product Website",
    description: "A product-focused marketing site for a juice brand, designed to showcase offerings, boost trust, and support direct customer inquiries.",
    year: "2025",
    type: "Client Project",
    location: "Nairobi, Kenya",
    color: "bg-card",
    coverImage: "/projects/jayba juice/jayba.jpeg",
    gallery: [
      "/projects/jayba juice/jayba.jpeg",
      "/projects/jayba juice/Untitled.jpeg",
    ],
    features: [
      "Product Catalog Showcase",
      "Story-driven Brand Sections",
      "Mobile-first Visual Layout",
      "Quick Inquiry Contact Flow",
    ],
    techStack: [
      { name: "React", type: "Frontend" },
      { name: "Tailwind CSS", type: "Styling" },
      { name: "TypeScript", type: "Language" },
      { name: "Vite", type: "Build Tool" },
    ],
    stats: {
      performance: "96",
      conversion: "5.2%",
      orders: "300+",
    },
    links: {
      demo: "https://jayba-juice.vercel.app/",
      github: "https://github.com/flavian-jumba/JAYBA-JUICE",
    },
    challenge: "Turning brand storytelling into a clear buying journey while maintaining fast mobile performance for social-media traffic.",
    solution: "Implemented image-forward sections with focused calls-to-action and optimized asset loading to keep key pages responsive under mobile networks.",
  },
  {
    id: "soccer-vista-scores",
    title: "Soccer Vista Scores",
    shortTitle: "SOCCER VISTA",
    subtitle: "Smart Football Analytics App",
    description: "A data-driven mobile app delivering real-time football scores, in-depth team & player analytics, and historical trends across the world's top leagues.",
    year: "2025",
    type: "Personal Project",
    location: "Nairobi, Kenya",
    color: "bg-[hsl(var(--secondary))]",
    private: true,
    coverImage: "/projects/SoccerVistaScores/image.png",
    gallery: [
      "/projects/SoccerVistaScores/image.png",
      "/projects/SoccerVistaScores/phonescreen1.png",
      "/projects/SoccerVistaScores/phonescreen2.png",
      "/projects/SoccerVistaScores/phonescreen3.png",
    ],
    features: [
      "Real-time Match Scores & Live Updates",
      "In-depth Team & Player Analytics",
      "Historical Trends & Performance Charts",
      "Multi-league Coverage (EPL, La Liga, UCL & more)",
    ],
    techStack: [
      { name: "React Native", type: "Mobile" },
      { name: "Tailwind CSS", type: "Styling" },
      { name: "Football API", type: "Data Source" },
      { name: "TypeScript", type: "Language" },
    ],
    stats: {
      leagues: "10+",
      updates: "Live",
      coverage: "Global",
    },
    links: {
      demo: "#",
      github: "#",
    },
    challenge: "Aggregating and normalising live data from multiple football competitions with varying data structures while keeping the UI responsive and enjoyable on mobile devices.",
    solution: "Built a unified data-fetching layer that maps league-specific API responses into a consistent schema, paired with optimistic UI updates and chart-driven dashboards for deeper insight.",
  },
  {
    id: "code-yetu-volunteering",
    title: "Code Yetu Volunteering",
    shortTitle: "CODE YETU",
    subtitle: "Mentoring the Next Generation of Coders",
    description: "I am eager to change the society and this only starts with the young generation. With my love and enthusiasm for learning and coding, I took a step to teach and mentor young tech enthusiasts at Code Yetu — a community organisation dedicated to equipping Kenyan kids with digital skills.",
    year: "2025",
    type: "Volunteer Project",
    location: "Nairobi, Kenya",
    color: "bg-primary",
    coverImage: "/projects/volunteering/codeyetu1.jpeg",
    gallery: [
      "/projects/volunteering/codeyetu1.jpeg",
      "/projects/volunteering/codeyetu.jpeg",
      "/projects/volunteering/image.png",
      "/projects/volunteering/image copy.png",
      "/projects/volunteering/image copy 2.png",
    ],
    features: [
      "Teaching HTML & CSS Web Development Basics",
      "Scratch Programming for Beginners",
      "MakeCode Interactive Coding Sessions",
      "One-on-one Mentorship & Guidance",
    ],
    techStack: [
      { name: "HTML/CSS", type: "Taught" },
      { name: "Scratch", type: "Taught" },
      { name: "MakeCode", type: "Taught" },
      { name: "Mentorship", type: "Approach" },
    ],
    stats: {
      learners: "200+",
      workshops: "20+",
      impact: "Growing",
    },
    links: {
      demo: "#",
      github: "#",
    },
    challenge: "I am glad I am learning a lot — not only at a career level but also in basic software skills and teaching capabilities. Seeing young minds light up when they write their first line of code or build their first Scratch project is genuinely rewarding. Every session pushes me to become a better communicator and a more thoughtful developer.",
    solution: "Really looking forward to making a change. The young generation is the future of tech in Kenya and beyond — and being even a small part of that journey, planting the seed of curiosity and confidence in these kids, is something I am deeply proud of. This experience continues to shape how I think about building software that is accessible and impactful.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-28">
        {/* Page Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
            Projects<span className="text-primary">.</span>
          </h2>
          <p className="text-lg font-mono opacity-80 max-w-2xl">
            A collection of scalable web applications, from ERP systems and APIs to community-focused products.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <Link
                to={`/projects/${project.id}`}
                className={`block brutalist-card ${project.color} p-6 h-full hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_hsl(var(--foreground))] transition-all group ${
                  project.color === "bg-[hsl(var(--secondary))]" ? "text-secondary-foreground" : ""
                }`}
              >
                {/* Cover Image */}
                <div className="brutalist-card-sm bg-card overflow-hidden mb-4">
                  <div className="aspect-video">
                    <img
                      src={getAssetPath(project.coverImage)}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-foreground text-card px-2 py-1 text-[10px] font-mono uppercase">
                    {project.type}
                  </span>
                  <span className="font-black text-2xl">{project.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
                  {project.shortTitle}
                </h3>
                <p className="text-sm font-bold opacity-70 mb-4">{project.subtitle}</p>

                {/* Description */}
                <p className="text-sm opacity-80 mb-6 line-clamp-3">{project.description}</p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech.name}
                      className="brutalist-card-sm bg-card/80 px-2 py-1 text-[10px] font-mono uppercase text-foreground"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 font-bold text-sm group-hover:translate-x-2 transition-transform">
                  <span>View Details</span>
                  <ArrowRight size={16} strokeWidth={3} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Project - Full Width */}
        <motion.div
          className="mt-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={projects.length}
        >
          <div className="brutalist-card bg-foreground text-card p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase mb-4 inline-block">
                  Featured Stack
                </span>
                <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-4 text-card">
                  TALL Stack Specialist
                </h3>
                <p className="text-sm sm:text-base opacity-80 mb-6">
                  Specializing in Tailwind CSS, Alpine.js, Laravel, and Livewire to build dynamic, real-time web applications without heavy JavaScript frameworks.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 brutalist-card-sm bg-primary flex items-center justify-center">
                      <Layers size={20} className="text-primary-foreground" />
                    </div>
                    <span className="font-bold text-xs uppercase">Tailwind</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 brutalist-card-sm bg-card flex items-center justify-center">
                      <span className="font-mono font-bold text-foreground">A</span>
                    </div>
                    <span className="font-bold text-xs uppercase">Alpine.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 brutalist-card-sm bg-red-500 flex items-center justify-center">
                      <Database size={20} className="text-white" />
                    </div>
                    <span className="font-bold text-xs uppercase">Laravel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 brutalist-card-sm bg-purple-500 flex items-center justify-center">
                      <Lock size={20} className="text-white" />
                    </div>
                    <span className="font-bold text-xs uppercase">Livewire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 brutalist-card-sm bg-sky-500 flex items-center justify-center">
                      <span className="font-mono font-bold text-white text-xs">R</span>
                    </div>
                    <span className="font-bold text-xs uppercase">React.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 brutalist-card-sm bg-sky-700 flex items-center justify-center">
                      <span className="font-mono font-bold text-white text-xs">RN</span>
                    </div>
                    <span className="font-bold text-xs uppercase">React Native</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 brutalist-card-sm bg-blue-600 flex items-center justify-center">
                      <span className="font-mono font-bold text-white text-xs">TS</span>
                    </div>
                    <span className="font-bold text-xs uppercase">TypeScript</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="brutalist-card-sm bg-card p-6 text-center text-foreground">
                  <div className="text-3xl sm:text-4xl font-black">{projects.length}+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Projects</div>
                </div>
                <div className="brutalist-card-sm bg-primary p-6 text-center text-primary-foreground">
                  <div className="text-3xl sm:text-4xl font-black">99.9%</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Uptime</div>
                </div>
                <div className="brutalist-card-sm bg-primary p-6 text-center text-primary-foreground">
                  <div className="text-3xl sm:text-4xl font-black">&lt;1s</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Load Time</div>
                </div>
                <div className="brutalist-card-sm bg-card p-6 text-center text-foreground">
                  <div className="text-3xl sm:text-4xl font-black">100%</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Responsive</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.a
          href="https://github.com/flavian-jumba"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 brutalist-card bg-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_hsl(var(--foreground))] transition-all group"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={projects.length + 1}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 brutalist-card-sm bg-foreground flex items-center justify-center">
              <Github size={28} className="text-card" />
            </div>
            <div>
              <h4 className="font-black text-xl uppercase">View All Projects on GitHub</h4>
              <p className="text-xs text-muted-foreground font-mono">github.com/flavian-jumba</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary group-hover:translate-x-2 transition-transform">
            <ExternalLink size={20} strokeWidth={3} />
          </div>
        </motion.a>
      </main>
      <BottomNav />
    </div>
  );
};

export default Projects;
