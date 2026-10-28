import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "List of Winners", href: "/winners" },
  { name: "Curation", href: "/curation" },
  { name: "Certificates", href: "/certificates" },
  // { name: "Schedule", href: "#schedule" },
  // { name: "Contact", href: "#contact" },
];

const mediaLinks = [
  { name: "News", href: "/news" },
  {
    name: "Press Release 2026",
    href: "https://drive.google.com/file/d/187S-iey2KpMkP06vlo8jaY68RtSKazbz/view?usp=sharing",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isMobileMediaOpen, setIsMobileMediaOpen] = useState(false);
  const mediaDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mediaDropdownRef.current &&
        !mediaDropdownRef.current.contains(event.target as Node)
      ) {
        setIsMediaOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMediaOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-32 items-center justify-center">
              <img src="/img/LOGO_WASICS_rjizeo.png" alt="logo wasisc 2026" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            {/* Media Dropdown */}
            <div
              ref={mediaDropdownRef}
              className="relative"
              onMouseEnter={() => setIsMediaOpen(true)}
              onMouseLeave={() => setIsMediaOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsMediaOpen((prev) => !prev)}
                className={`flex items-center gap-1 font-medium transition-colors duration-200 cursor-pointer ${
                  isMediaOpen
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                aria-haspopup="true"
                aria-expanded={isMediaOpen}
              >
                <span>Media</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMediaOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isMediaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 pt-2 z-50 min-w-[180px]"
                  >
                    <div className="glass rounded-xl p-1.5 shadow-soft border border-border/80 bg-background/95 backdrop-blur-md flex flex-col gap-1">
                      {mediaLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsMediaOpen(false)}
                          className="px-3.5 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/80 transition-all duration-150 flex items-center"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            {/* UNCOMMENT THIS WHEN REGISTRATION IS OPEN (WASICS 2027) */}
            {/* <Link to="/homeregist">
              <Button variant="nav" size="lg">
                Register Now
              </Button>
            </Link> */}
            <Button
              variant="nav"
              size="lg"
              disabled
              className="opacity-70 cursor-not-allowed"
            >
              Coming Soon 2027
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isMobileMenuOpen) setIsMobileMediaOpen(false);
            }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass rounded-2xl mb-4 p-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-4 py-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted font-medium transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Media Mobile Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileMediaOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted font-medium transition-all"
                >
                  <span>Media</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileMediaOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isMobileMediaOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 flex flex-col gap-1 mt-1"
                    >
                      {mediaLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-muted font-medium transition-all"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileMediaOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* UNCOMMENT THIS WHEN REGISTRATION IS OPEN (WASICS 2027) */}
              {/* <Link to="/homeregist">
                <Button variant="nav" size="lg" className="mt-2 w-full">
                  Register Now
                </Button>
              </Link> */}
              <Button
                variant="nav"
                size="lg"
                disabled
                className="mt-2 w-full opacity-70 cursor-not-allowed"
              >
                Coming Soon 2027
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
