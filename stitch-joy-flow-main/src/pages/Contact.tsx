import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { useState, useEffect } from "react";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const nairobiTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Nairobi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);
      setLocalTime(nairobiTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - could integrate with email service
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-28">
        {/* Page Header */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter mb-4">
            Get in<span className="text-primary"> Touch</span>
          </h2>
          <p className="text-base sm:text-lg font-mono opacity-80 max-w-2xl">
            Let's discuss your next project or just say hello.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-7 brutalist-card bg-primary p-6 sm:p-8 lg:p-12"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="uppercase font-bold text-xs sm:text-sm tracking-widest">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="FLAVIAN JUMBA"
                  className="w-full bg-card border-[3px] border-foreground p-3 sm:p-4 text-base sm:text-xl font-bold uppercase placeholder:text-muted-foreground/40 focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_hsl(var(--foreground))] transition-shadow"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="uppercase font-bold text-xs sm:text-sm tracking-widest">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="HELLO@DOMAIN.COM"
                  className="w-full bg-card border-[3px] border-foreground p-3 sm:p-4 text-base sm:text-xl font-bold uppercase placeholder:text-muted-foreground/40 focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_hsl(var(--foreground))] transition-shadow"
                />
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label className="uppercase font-bold text-xs sm:text-sm tracking-widest">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="PROJECT INQUIRY"
                  className="w-full bg-card border-[3px] border-foreground p-3 sm:p-4 text-base sm:text-xl font-bold uppercase placeholder:text-muted-foreground/40 focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_hsl(var(--foreground))] transition-shadow"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="uppercase font-bold text-xs sm:text-sm tracking-widest">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="TELL ME ABOUT YOUR PROJECT..."
                  className="w-full bg-card border-[3px] border-foreground p-3 sm:p-4 text-base sm:text-lg font-bold uppercase placeholder:text-muted-foreground/40 focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_hsl(var(--foreground))] transition-shadow resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 bg-foreground text-card p-4 sm:p-6 text-lg sm:text-2xl font-black uppercase tracking-widest hover:bg-card hover:text-foreground border-[3px] border-foreground transition-all brutalist-card-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none flex items-center justify-center gap-3"
              >
                <Send size={20} strokeWidth={3} className="sm:w-6 sm:h-6" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Sidebar */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Social Links */}
            <motion.div
              className="brutalist-card bg-card p-5 sm:p-6 lg:p-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 sm:mb-6 opacity-60">Socials</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <a
                  href="https://github.com/flavian-jumba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-card-sm p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-4 hover:bg-primary transition-colors group"
                >
                  <Github size={36} strokeWidth={1.5} className="sm:w-12 sm:h-12 group-hover:scale-110 transition-transform" />
                  <span className="font-black uppercase italic text-sm sm:text-base">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/flavian-jumba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-card-sm p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-4 hover:bg-primary transition-colors group"
                >
                  <Linkedin size={36} strokeWidth={1.5} className="sm:w-12 sm:h-12 group-hover:scale-110 transition-transform" />
                  <span className="font-black uppercase italic text-sm sm:text-base">LinkedIn</span>
                </a>
              </div>
            </motion.div>

            {/* Direct Contact */}
            <motion.div
              className="brutalist-card bg-card p-5 sm:p-6 lg:p-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60 mb-4 sm:mb-6">Direct</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 brutalist-card-sm bg-primary flex items-center justify-center shrink-0">
                    <Mail size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs font-bold uppercase text-muted-foreground">Email</p>
                    <p className="text-sm sm:text-lg font-bold font-mono truncate">flaviajumba@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 brutalist-card-sm bg-primary flex items-center justify-center shrink-0">
                    <Phone size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs font-bold uppercase text-muted-foreground">Phone</p>
                    <p className="text-sm sm:text-lg font-bold font-mono">+254 728 676 940</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Status Widget */}
            <motion.div
              className="brutalist-card bg-card p-5 sm:p-6 lg:p-8 flex items-center justify-between overflow-hidden relative"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <div className="z-10">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Status</h3>
                <p className="text-xl sm:text-2xl font-black uppercase italic leading-tight">
                  Available<br />for work
                </p>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 brutalist-card-sm flex items-center justify-center">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white animate-pulse"></div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-primary brutalist-card-sm rounded-full opacity-10"></div>
            </motion.div>

            {/* Location & Time */}
            <motion.div
              className="brutalist-card bg-foreground text-card p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary sm:w-5 sm:h-5" />
                <span className="font-bold uppercase tracking-tighter text-sm sm:text-base">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-primary sm:w-5 sm:h-5" />
                <span className="font-mono text-sm sm:text-base">{localTime} GMT+3</span>
              </div>
            </motion.div>

            {/* Location Map Placeholder */}
            <motion.div
              className="brutalist-card bg-card p-4 sm:p-6 overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs sm:text-sm font-bold uppercase text-muted-foreground">Based In</p>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-foreground"></div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase mb-4">Nairobi, Kenya</h3>
              <div className="w-full h-32 sm:h-40 lg:h-48 bg-muted brutalist-card-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-background opacity-50"></div>
                {/* Map Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <MapPin size={32} className="text-primary sm:w-10 sm:h-10" strokeWidth={2.5} />
                </div>
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `
                    linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                    linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Contact;
