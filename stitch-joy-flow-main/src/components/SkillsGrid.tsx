import { Sparkles, Layers, Terminal, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const bioText =
  "Fullstack Developer specializing in the TALL Stack, building eCommerce platforms, ERP systems, CMS solutions, and modern frontend applications with Laravel, Tailwind CSS, Alpine.js, and Livewire.";

const terminalCommands = [
  { type: 'command', text: 'whoami', delay: 0 },
  { type: 'output', text: 'flavian_jumba', delay: 400 },
  { type: 'command', text: 'cat ./bio.txt', delay: 800 },
  { type: 'loading', text: 'Loading profile', delay: 1200 },
  { type: 'bio', text: bioText, delay: 2000 },
];

const TypewriterBio = () => {
  const [lines, setLines] = useState<{ type: string; text: string; visible: string }[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [loadingDots, setLoadingDots] = useState('');
  const [showFinalCursor, setShowFinalCursor] = useState(true);

  // Handle loading dots animation
  useEffect(() => {
    if (lines.some(l => l.type === 'loading' && l.visible === l.text)) {
      const loadingLine = lines.find(l => l.type === 'loading');
      if (loadingLine && !lines.some(l => l.type === 'bio')) {
        const dotInterval = setInterval(() => {
          setLoadingDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 300);
        return () => clearInterval(dotInterval);
      }
    }
  }, [lines]);

  // Process terminal commands sequentially
  useEffect(() => {
    if (currentLineIndex >= terminalCommands.length) {
      setTimeout(() => setShowFinalCursor(false), 2000);
      return;
    }

    const currentCmd = terminalCommands[currentLineIndex];
    const timeout = setTimeout(() => {
      setLines(prev => [...prev, { ...currentCmd, visible: '' }]);
      setIsTyping(true);
    }, currentCmd.delay - (currentLineIndex > 0 ? terminalCommands[currentLineIndex - 1].delay : 0));

    return () => clearTimeout(timeout);
  }, [currentLineIndex]);

  // Typewriter effect for current line
  useEffect(() => {
    if (!isTyping || lines.length === 0) return;

    const currentLine = lines[lines.length - 1];
    if (currentLine.visible.length >= currentLine.text.length) {
      setIsTyping(false);
      setTimeout(() => setCurrentLineIndex(prev => prev + 1), currentLine.type === 'command' ? 200 : 400);
      return;
    }

    const speed = currentLine.type === 'command' ? 60 : currentLine.type === 'bio' ? 18 : 30;
    const timer = setTimeout(() => {
      setLines(prev => {
        const updated = [...prev];
        const lastLine = updated[updated.length - 1];
        lastLine.visible = lastLine.text.slice(0, lastLine.visible.length + 1);
        return updated;
      });
    }, speed);

    return () => clearTimeout(timer);
  }, [isTyping, lines]);

  return (
    <div className="brutalist-card-sm bg-foreground overflow-hidden relative">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-3 py-2 bg-black/30 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-[10px] sm:text-xs text-white/40 font-mono ml-2">flavian@portfolio ~ bash</span>
      </div>
      
      {/* Terminal Body */}
      <div className="p-3 sm:p-4 font-mono text-[11px] sm:text-xs space-y-1.5 min-h-[80px] terminal-scanline relative">
        {lines.map((line, index) => (
          <div key={index} className="flex items-start gap-2">
            {line.type === 'command' && (
              <>
                <span className="text-green-400 shrink-0">❯</span>
                <span className="text-white">
                  {line.visible}
                  {isTyping && index === lines.length - 1 && (
                    <span className="animate-blink-cursor text-primary">▊</span>
                  )}
                </span>
              </>
            )}
            {line.type === 'output' && (
              <span className="text-cyan-400 pl-4">{line.visible}</span>
            )}
            {line.type === 'loading' && (
              <span className="text-yellow-400 pl-4">
                {line.visible}
                {line.visible === line.text && !lines.some(l => l.type === 'bio') && (
                  <span className="text-yellow-400">{loadingDots}</span>
                )}
              </span>
            )}
            {line.type === 'bio' && (
              <p className="text-white/80 leading-relaxed pl-4">
                {line.visible}
                {(isTyping && index === lines.length - 1) && (
                  <span className="animate-blink-cursor text-primary">▊</span>
                )}
              </p>
            )}
          </div>
        ))}
        {/* Final cursor after completion */}
        {!isTyping && currentLineIndex >= terminalCommands.length && showFinalCursor && (
          <div className="flex items-center gap-2 mt-2">
            <span className="text-green-400">❯</span>
            <span className="animate-blink-cursor text-primary">▊</span>
          </div>
        )}
      </div>
    </div>
  );
};

const SkillsGrid = () => {
  return (
    <div className="px-3 sm:px-6 max-w-6xl mx-auto pb-24 sm:pb-28">
      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* Hero card - spans 2 cols */}
        <motion.div
          className="md:col-span-2 brutalist-card bg-card p-4 sm:p-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 brutalist-card-sm overflow-hidden shrink-0">
              <img
                src="/profile.png"
                alt="Flavian Jumba"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Dev / Architect</h2>
              <p className="text-muted-foreground font-mono text-xs sm:text-sm mt-1">Nairobi, Kenya</p>
              <span className="inline-block mt-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 brutalist-card-sm tracking-wider">
                PRO
              </span>
            </div>
          </div>
          <TypewriterBio />
        </motion.div>

        {/* Frontend card */}
        <motion.div
          className="brutalist-card bg-primary p-4 sm:p-6 flex flex-col"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <Sparkles size={24} strokeWidth={2.5} className="sm:w-7 sm:h-7" />
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[3px] border-foreground bg-card" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Frontend | Mobile</h3>
          <div className="space-y-2 flex-1">
            {["React.js", "Tailwind CSS", "Alpine.js","React Native"].map((skill, i) => (
              <div
                key={skill}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 font-mono text-xs sm:text-sm brutalist-card-sm ${
                  i === 0 ? "bg-foreground text-card" : "bg-card"
                }`}
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Middle row - 3 cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* Backend */}
        <motion.div
          className="brutalist-card bg-card p-4 sm:p-6 relative overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <Layers size={24} strokeWidth={2} className="mb-2 sm:mb-3" />
          <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Backend</h3>
          <p className="text-muted-foreground text-[10px] sm:text-sm font-mono">LARAVEL / FILAMENT / PHP</p>
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-foreground text-card p-1.5 sm:p-2 text-[8px] sm:text-[10px] font-mono brutalist-card-sm rotate-[-3deg]">
            <div className="text-primary font-bold"># API Route</div>
            <div>GET /users</div>
            <div className="text-terminal-fg">200 OK</div>
          </div>
        </motion.div>

        {/* DevOps */}
        <motion.div
          className="brutalist-card bg-secondary text-secondary-foreground p-4 sm:p-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-navy brutalist-card-sm flex items-center justify-center mb-2 sm:mb-3">
            <Terminal size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">DevOps</h3>
          <div className="flex flex-wrap gap-2">
            {["DOCKER", "GIT", "CI/CD"].map((tool) => (
              <span
                key={tool}
                className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-mono font-bold brutalist-card-sm bg-card text-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Workflow Tools */}
        <motion.div
          className="col-span-2 md:col-span-1 brutalist-card bg-card p-4 sm:p-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <p className="text-[10px] font-bold tracking-[0.2em] mb-1 sm:mb-2 text-muted-foreground">DATABASE & TOOLS</p>
          <p className="text-xs sm:text-sm font-mono text-muted-foreground mb-3 sm:mb-4">
            MySQL / Redis / Livewire / Sanctum
          </p>
          <div className="flex gap-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 brutalist-card-sm bg-card flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 brutalist-card-sm bg-card flex items-center justify-center font-mono font-bold text-sm">
              λ
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        <motion.div
          className="brutalist-card bg-olive p-5 sm:p-8 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">10+</div>
          <p className="text-[10px] sm:text-sm font-bold tracking-[0.3em] mt-1 sm:mt-2">PROJECTS</p>
        </motion.div>

        <motion.div
          className="brutalist-card bg-olive p-5 sm:p-8 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary tracking-tight">3+</div>
          <p className="text-[10px] sm:text-sm font-bold tracking-[0.3em] mt-1 sm:mt-2 text-primary">YEARS</p>
        </motion.div>

        <Link to="/contact">
          <motion.div
            className="col-span-2 sm:col-span-1 brutalist-card bg-primary p-5 sm:p-8 flex items-center justify-center cursor-pointer hover:translate-x-1 hover:-translate-y-1 transition-transform h-full"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={7}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl md:text-2xl font-bold italic tracking-tight">LET'S BUILD IT.</span>
              <ArrowRight size={24} strokeWidth={3} className="sm:w-7 sm:h-7" />
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default SkillsGrid;
