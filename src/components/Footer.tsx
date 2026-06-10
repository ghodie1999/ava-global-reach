import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Supplier Sourcing", href: "/services/sourcing" },
    { label: "Warehousing", href: "/services/warehousing" },
    { label: "Inspection", href: "/services/inspection" },
    { label: "Consolidation", href: "/services/consolidation" },
    { label: "International Logistics", href: "/services/logistics" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Request a Quote", href: "/contact" },
    { label: "Track Shipment", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Knowledge Base", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="py-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-3">
                Ready to Streamline Your Supply Chain?
              </h2>
              <p className="text-white/70 max-w-xl">
                Partner with AVA Logistics for end-to-end global trade solutions. Get your free consultation today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-sm font-bold text-navy transition-all hover:bg-gold-light"
              >
                Request a Quote
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Schedule Call
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-gold/20">
                <span className="font-heading text-lg font-bold text-gold">A</span>
              </div>
              <span className="font-heading text-xl font-bold">AVA Logistics</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Global sourcing, warehousing, inspection, and logistics services for businesses worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} AVA Logistics. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
