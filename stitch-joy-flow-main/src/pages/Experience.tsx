import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, Heart } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const workExperience = [
  {
    year: "2025",
    role: "Full Stack Developer",
    company: "Osen Concepts",
    location: "Nairobi, Kenya (Hybrid)",
    type: "FULL-TIME",
    description: [
      "Developed and maintained web applications using the Laravel framework.",
      "Implemented user interfaces and features with Filament for streamlined admin dashboards.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Optimized application performance and ensured high responsiveness to front-end requests.",
    ],
    skills: ["REACT JS", "LARAVEL", "FILAMENT PHP", "UI/UX"],
  },
  {
    year: "2024",
    role: "Front End Web Developer",
    company: "Sand Technologies",
    location: "New York, USA (Remote)",
    type: "REMOTE",
    description: [
      "Gained practical experience delivering multiple responsive front-end features using HTML, CSS, React.js, and JavaScript.",
      "Collaborated with back-end engineers in an agile environment, ensuring seamless API integration.",
      "Participated in code reviews and sprint planning sessions with exposure to professional development practices.",
      "Reduced page load times through code optimization and implemented best practices in modern web development.",
    ],
    skills: ["REACT JS", "JAVASCRIPT", "WEB DESIGN", "FRONT END"],
  },
  {
    year: "2023",
    role: "Front End Development",
    company: "Triangle Health Care Consulting Inc",
    location: "North Carolina, USA (Remote)",
    type: "REMOTE",
    description: [
      "Interpreted, synthesized, designed, and modified reports.",
      "Collected, trended, and provided analysis for nursing and infection control measures.",
      "Maintained, evaluated, and improved Nursing Scorecards and dissemination of quality information.",
      "Managed and customized their WordPress website.",
    ],
    skills: ["WORDPRESS", "EXCEL", "UI/UX", "DATA ANALYSIS"],
  },
];

const education = [
  {
    title: "Full Stack Web Development",
    institution: "Emobilis",
    period: "Currently",
    focus: "HTML, CSS, Bootstrap, JavaScript, Django, REST APIs, Mpesa Integration",
  },
  {
    title: "Data Protection Course",
    institution: "CIPIT - Strathmore University",
    period: "Aug - Oct 2025",
    focus: "Data protection laws, Article 34 of Kenyan Constitution",
  },
  {
    title: "Front End Web Development",
    institution: "ALX Africa",
    period: "Mar - Nov 2024",
    focus: "Soft skills, UI/UX Design, Responsive design, API Integration",
  },
  {
    title: "Software Engineering",
    institution: "PLP Africa",
    period: "May 2024 - Jan 2025",
    focus: "Python, Web Technologies, Database Management",
  },
];

const volunteering = [
  {
    role: "Community Mobilizer and Trainer",
    organization: "Footprints of Hope",
    location: "Siaya and Busia County",
    period: "Jan 2024 - Aug 2025",
    description: "Empowering women entrepreneurs through financial literacy training and technology education.",
  },
  {
    role: "Tutor and Trainer",
    organization: "Code Yetu",
    location: "Nairobi, Kenya",
    period: "Jan 2025 - Current",
    description: "Teaching and mentoring young tech enthusiasts, sharing passion for coding and learning.",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-28">
        {/* Page Header */}
        <motion.div
          className="mb-12 text-center lg:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
            Experience<span className="text-primary">.</span>
          </h2>
          <p className="text-lg font-mono opacity-80 max-w-2xl">
            Building scalable architectures and robust digital experiences across multiple industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Timeline */}
          <div className="lg:col-span-8 space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                className="relative pl-0 lg:pl-20 group"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {/* Year Badge */}
                <div className="lg:absolute lg:-left-4 lg:top-0 z-10 mb-4 lg:mb-0">
                  <div className="inline-block bg-primary text-primary-foreground font-black text-2xl sm:text-3xl p-3 sm:p-4 brutalist-card">
                    {job.year}
                  </div>
                </div>

                {/* Job Card */}
                <div className="brutalist-card bg-card p-6 sm:p-8 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_hsl(var(--foreground))] transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 sm:mb-6 gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase">{job.role}</h3>
                      <p className="text-base sm:text-xl font-bold text-muted-foreground">{job.company}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground font-mono">{job.location}</p>
                    </div>
                    <div className="bg-foreground text-card px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-mono self-start">
                      {job.type}
                    </div>
                  </div>

                  <ul className="space-y-3 font-medium text-sm sm:text-base mb-6">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary text-lg sm:text-xl shrink-0">◆</span>
                        <span className="opacity-90">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border-2 border-foreground px-2 sm:px-3 py-1 font-mono text-[10px] sm:text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8 h-fit">
            {/* Education Card */}
            <motion.div
              className="brutalist-card bg-primary text-primary-foreground p-5 sm:p-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <h4 className="text-lg sm:text-xl font-black uppercase mb-4 flex items-center gap-2">
                <GraduationCap size={20} strokeWidth={2.5} />
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className={i !== education.length - 1 ? "pb-4 border-b border-foreground/20" : ""}>
                    <p className="font-black text-xs sm:text-sm uppercase">{edu.title}</p>
                    <p className="font-mono text-[10px] sm:text-xs opacity-80">{edu.institution}</p>
                    <p className="font-mono text-[10px] sm:text-xs opacity-60">{edu.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Volunteering Card */}
            <motion.div
              className="brutalist-card bg-card p-5 sm:p-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <h4 className="text-lg sm:text-xl font-black uppercase mb-4 flex items-center gap-2">
                <Heart size={20} strokeWidth={2.5} />
                Volunteering
              </h4>
              <div className="space-y-4">
                {volunteering.map((vol, i) => (
                  <div key={i} className={i !== volunteering.length - 1 ? "pb-4 border-b border-foreground/20" : ""}>
                    <p className="font-black text-xs sm:text-sm uppercase">{vol.role}</p>
                    <p className="font-bold text-xs text-muted-foreground">{vol.organization}</p>
                    <p className="font-mono text-[10px] opacity-70 mt-1">{vol.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="brutalist-card bg-card p-4 text-center"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                <span className="block text-2xl sm:text-3xl font-black">3+</span>
                <span className="text-[10px] font-mono uppercase opacity-70">Years Exp.</span>
              </motion.div>
              <motion.div
                className="brutalist-card bg-foreground text-card p-4 text-center"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                <span className="block text-2xl sm:text-3xl font-black text-primary">10+</span>
                <span className="text-[10px] font-mono uppercase opacity-70">Projects</span>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.a
              href="/contact"
              className="block brutalist-card bg-primary p-5 sm:p-6 hover:translate-x-1 hover:-translate-y-1 transition-all group"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <div className="flex justify-between items-center">
                <span className="text-lg sm:text-xl font-black italic uppercase">Let's build it.</span>
                <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Experience;
