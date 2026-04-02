import { useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Home, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/contexts/FavoritesContext";

const navLinks = [
  { label: "Home", href: "/", hash: "" },
  { label: "Properties", href: "/properties", hash: "" },
  { label: "Saved", href: "/favorites", hash: "" },
  { label: "About", href: "/", hash: "#about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = useCallback((href: string, hash: string) => {
    if (hash) {
      if (location.pathname === href || location.pathname === href + "/") {
        // Already on the page, just scroll
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate first, then scroll after render
        navigate(href);
        setTimeout(() => {
          const el = document.querySelector(hash);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.pathname, navigate]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-soft">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
              <Home className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">NestFind</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.hash ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.hash)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary/50`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" className="rounded-full text-sm">Sign in</Button>
            </Link>
            <Link to="/register">
              <Button className="rounded-full text-sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 shadow-medium animate-scale-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                link.hash ? (
                  <button
                    key={link.label}
                    onClick={() => { handleNavClick(link.href, link.hash); setIsOpen(false); }}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <hr className="my-2 border-border" />
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full rounded-xl justify-start">Sign in</Button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <Button className="w-full rounded-xl">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
