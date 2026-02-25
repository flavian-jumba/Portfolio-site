import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Database, Lock, Layers } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { projects } from "./Projects";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const getAssetPath = (path: string) => encodeURI(path);

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-28">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/projects"
            className="brutalist-card-sm bg-primary px-4 sm:px-6 py-2 sm:py-3 inline-flex items-center gap-2 sm:gap-3 font-bold uppercase tracking-tight hover:bg-yellow-300 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft size={18} strokeWidth={3} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.section
          className={`brutalist-card ${project.color} p-6 sm:p-8 md:p-12 mb-8 ${
            project.color === "bg-[hsl(var(--secondary))]" ? "text-secondary-foreground" : ""
          }`}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter uppercase">
                {project.shortTitle}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-bold border-t-4 border-foreground pt-4 uppercase">
                {project.subtitle}
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2 text-left md:text-right">
              <span className="bg-foreground text-card px-3 py-1 font-bold text-xs sm:text-sm uppercase">
                {project.type}
              </span>
              <span className="font-black text-3xl sm:text-4xl leading-none">{project.year}</span>
            </div>
          </div>
        </motion.section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="md:col-span-8 space-y-6 sm:space-y-8">
            {/* Browser Mockup / Screenshot */}
            <motion.div
              className="brutalist-card bg-card overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <div className="bg-foreground p-2 sm:p-3 flex items-center gap-2 border-b-2 border-foreground">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 border border-black"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 border border-black"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 border border-black"></div>
                </div>
                <div className="flex-1 bg-white/10 rounded px-2 sm:px-3 py-1 text-[8px] sm:text-[10px] text-white/50 font-mono truncate">
                  https://{project.id}.flavian.dev/dashboard
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-muted">
                <div className="aspect-video brutalist-card-sm overflow-hidden bg-background">
                  <img
                    src={getAssetPath(project.coverImage)}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {project.gallery.length > 1 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                    {project.gallery.slice(1).map((image, index) => (
                      <div key={image} className="brutalist-card-sm overflow-hidden bg-background">
                        <div className="aspect-video">
                          <img
                            src={getAssetPath(image)}
                            alt={`${project.title} gallery ${index + 2}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Challenge & Solution */}
            <motion.div
              className="brutalist-card bg-card p-6 sm:p-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="text-primary">01.</span>{" "}
                    {project.type === "Volunteer Project" ? "MY EXPERIENCE" : "THE CHALLENGE"}
                  </h2>
                  <div className="font-mono bg-muted p-4 sm:p-6 brutalist-card-sm text-sm sm:text-base leading-relaxed">
                    {project.challenge}
                  </div>
                </div>
                <div>
                  <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="text-primary">02.</span>{" "}
                    {project.type === "Volunteer Project" ? "THE MISSION" : "THE SOLUTION"}
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="brutalist-card bg-card p-6 sm:p-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter">
                    {project.type === "Volunteer Project" ? "What I Taught" : "Tech Stack"}
                  </h2>
                  <p className="font-medium text-muted-foreground text-sm">
                    {project.type === "Volunteer Project"
                      ? "Skills and tools shared with the kids"
                      : "The machinery behind the interface"}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {project.techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 brutalist-card-sm bg-muted px-4 sm:px-5 py-3 hover:bg-primary/20 transition-colors"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 brutalist-card-sm bg-card flex items-center justify-center shrink-0">
                      {index === 0 && <Database size={16} className="sm:w-5 sm:h-5" />}
                      {index === 1 && <Layers size={16} className="sm:w-5 sm:h-5" />}
                      {index === 2 && <span className="font-mono font-bold text-xs sm:text-sm">CSS</span>}
                      {index === 3 && <Lock size={16} className="sm:w-5 sm:h-5" />}
                    </div>
                    <div className="leading-none min-w-0">
                      <p className="text-[10px] sm:text-xs uppercase font-bold opacity-50">{tech.type}</p>
                      <p className="font-black text-sm sm:text-base truncate">{tech.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-6 sm:space-y-8">
            {/* Stats */}
            <motion.div
              className="brutalist-card bg-foreground text-card p-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <span className="text-xs font-black uppercase tracking-widest mb-2 opacity-70 text-card">
                Performance
              </span>
              <div className="text-6xl sm:text-7xl md:text-8xl font-black leading-none italic text-primary">
                {project.stats.performance || project.stats.uptime || "98"}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {Object.entries(project.stats).slice(1, 3).map(([key, value]) => (
                  <div key={key} className="text-center border-t border-white/20 pt-2">
                    <p className="text-[10px] uppercase text-card/50">{key}</p>
                    <p className="font-bold text-base sm:text-lg">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="brutalist-card bg-card p-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
            >
              <h3 className="font-black text-lg sm:text-xl uppercase mb-4 flex items-center gap-2">
                <span className="text-primary">✓</span>
                Key Features
              </h3>
              <ul className="space-y-3 font-bold text-xs sm:text-sm">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-0.5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Links */}
            {project.type !== "Volunteer Project" && (
              <motion.div
                className="space-y-4"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={6}
              >
                {(project as any).private ? (
                  <>
                    <div className="brutalist-card bg-muted p-4 sm:p-6 flex items-center justify-between opacity-50 cursor-not-allowed select-none">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <ExternalLink size={24} strokeWidth={2.5} />
                        <span className="font-black text-lg sm:text-xl uppercase">Live Demo</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Private</span>
                    </div>
                    <div className="brutalist-card bg-muted p-4 sm:p-6 flex items-center justify-between opacity-50 cursor-not-allowed select-none">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Github size={24} strokeWidth={2.5} />
                        <span className="font-black text-lg sm:text-xl uppercase">View Code</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Private</span>
                    </div>
                  </>
                ) : (
                  <>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutalist-card bg-primary p-4 sm:p-6 flex items-center justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_hsl(var(--foreground))] transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <ExternalLink size={24} strokeWidth={2.5} />
                        <span className="font-black text-lg sm:text-xl uppercase">Live Demo</span>
                      </div>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </a>

                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutalist-card bg-card p-4 sm:p-6 flex items-center justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_hsl(var(--foreground))] transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Github size={24} strokeWidth={2.5} />
                        <span className="font-black text-lg sm:text-xl uppercase">View Code</span>
                      </div>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                  </>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={7}
        >
          <Link
            to={`/projects/${prevProject.id}`}
            className="brutalist-card bg-card p-4 sm:p-6 flex items-center gap-4 hover:bg-muted transition-colors group"
          >
            <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform shrink-0" />
            <div className="min-w-0">
              <p className="text-xs font-mono uppercase opacity-50">Previous</p>
              <p className="font-black text-lg sm:text-xl uppercase truncate">{prevProject.shortTitle}</p>
            </div>
          </Link>
          <Link
            to={`/projects/${nextProject.id}`}
            className="brutalist-card bg-card p-4 sm:p-6 flex items-center justify-end gap-4 hover:bg-muted transition-colors group text-right"
          >
            <div className="min-w-0">
              <p className="text-xs font-mono uppercase opacity-50">Next</p>
              <p className="font-black text-lg sm:text-xl uppercase truncate">{nextProject.shortTitle}</p>
            </div>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform shrink-0" />
          </Link>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default ProjectDetail;
