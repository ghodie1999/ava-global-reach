import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Search, PackageCheck, Boxes, Plane, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description: "Connect with pre-vetted manufacturers and suppliers across Asia, Europe, and the Americas.",
    image: "/images/service-sourcing.jpg",
    href: "/services/sourcing",
  },
  {
    icon: Globe,
    title: "Warehousing",
    description: "Secure storage solutions with real-time inventory tracking across 12 global locations.",
    image: "/images/service-warehousing.jpg",
    href: "/services/warehousing",
  },
  {
    icon: PackageCheck,
    title: "Inspection Services",
    description: "Pre-shipment, during production, and container loading inspections with detailed reports.",
    image: "/images/service-inspection.jpg",
    href: "/services/inspection",
  },
  {
    icon: Boxes,
    title: "Shipment Consolidation",
    description: "Combine multiple shipments to reduce costs while maintaining delivery timelines.",
    image: "/images/service-consolidation.jpg",
    href: "/services/consolidation",
  },
  {
    icon: ShoppingBag,
    title: "Personal Shopping",
    description: "Dedicated procurement support for individual buyers and small businesses worldwide.",
    image: "/images/service-sourcing.jpg",
    href: "/services/sourcing",
  },
  {
    icon: Plane,
    title: "International Logistics",
    description: "Air, ocean, and ground freight management with end-to-end tracking and customs clearance.",
    image: "/images/service-logistics.jpg",
    href: "/services/logistics",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
            Our Services
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy mb-5">
            Comprehensive Trade Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From sourcing to delivery, we manage every step of your supply chain with precision and care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover-lift"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors" />
                <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-navy">
                  <service.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
