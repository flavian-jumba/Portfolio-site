import { Home, LayoutGrid, Code2, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "HOME", path: "/" },
  { icon: LayoutGrid, label: "EXPERIENCE", path: "/experience" },
  { icon: Code2, label: "WORK", path: "/projects" },
  { icon: Mail, label: "CONTACT", path: "/contact" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t-[3px] border-foreground z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-around py-2 sm:py-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path === "/projects" && location.pathname.startsWith("/projects"));
          
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 sm:gap-1 px-2 sm:px-4 py-1.5 sm:py-2 transition-all ${
                isActive
                  ? "bg-primary brutalist-card-sm -translate-y-2 sm:-translate-y-4"
                  : "hover:bg-muted"
              }`}
            >
              <item.icon size={18} strokeWidth={2} className="sm:w-5 sm:h-5" />
              <span className="text-[8px] sm:text-[10px] font-bold tracking-wider">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
