import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Supplier Sourcing", href: "/services/sourcing" },
      { label: "Warehousing", href: "/services/warehousing" },
      { label: "Inspection Services", href: "/services/inspection" },
      { label: "Shipment Consolidation", href: "/services/consolidation" },
      { label: "International Logistics", href: "/services/logistics" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-navy">
              <span className="font-heading text-lg font-bold text-gold">
                A
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-heading text-xl font-bold tracking-tight transition-colors ${
                  scrolled || !isHome ? "text-navy" : "text-white"
                }`}
              >
                AVA Logistics
              </span>
              <span
                className={`text-[10px] font-medium uppercase tracking-[0.2em] transition-colors ${
                  scrolled || !isHome ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                Global Trade Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      scrolled || !isHome
                        ? "text-foreground hover:text-navy hover:bg-muted"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-card border border-border shadow-xl overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-5 py-3 text-sm font-medium text-foreground hover:bg-muted hover:text-navy transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    scrolled || !isHome
                      ? "text-foreground hover:text-navy hover:bg-muted"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-light"
            >
              <Phone className="h-4 w-4" />
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                scrolled || !isHome
                  ? "text-foreground hover:bg-muted"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <div className="px-3 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm font-medium text-foreground hover:text-navy hover:bg-muted rounded-md"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-foreground hover:text-navy hover:bg-muted rounded-md"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
