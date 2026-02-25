import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 max-w-6xl mx-auto">
      <Link to="/" className="flex items-center gap-2 sm:gap-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 brutalist-card flex items-center justify-center bg-primary font-bold font-mono text-base sm:text-lg">
          FJ
        </div>
        <div>
          <h1 className="font-bold text-xs sm:text-sm tracking-tight leading-tight">FLAVIAN JUMBA</h1>
          <p className="text-[10px] sm:text-xs text-muted-foreground tracking-widest">FULL STACK ENGINEER</p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-8 font-bold uppercase tracking-tight text-sm">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path ||
            (link.path === "/projects" && location.pathname.startsWith("/projects"));
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:underline decoration-4 underline-offset-4 decoration-primary transition-all ${
                isActive ? "underline" : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <a
          href="/Flavian_Jumba_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary px-4 lg:px-6 py-2 brutalist-card-sm hover:bg-yellow-300 transition-colors"
        >
          Resume
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden w-10 h-10 sm:w-12 sm:h-12 brutalist-card flex items-center justify-center bg-card hover:bg-muted transition-colors"
      >
        {mobileMenuOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] sm:top-[72px] bg-background z-40 md:hidden">
          <nav className="flex flex-col p-4 sm:p-6 gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path ||
                (link.path === "/projects" && location.pathname.startsWith("/projects"));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`brutalist-card p-4 text-lg sm:text-xl font-bold uppercase ${
                    isActive ? "bg-primary" : "bg-card hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/Flavian_Jumba_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-card bg-primary p-4 text-lg sm:text-xl font-bold uppercase text-center mt-2"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
