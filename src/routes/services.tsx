import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Search, Globe, ClipboardCheck, Boxes, Plane, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description: "Connect with pre-vetted manufacturers and suppliers across Asia, Europe, and the Americas. We handle negotiations, contracts, and ongoing relationship management.",
    image: "/images/service-sourcing.jpg",
    href: "/services/sourcing",
    features: ["Supplier vetting & verification", "Price negotiation", "Contract management", "Ongoing relationship oversight"],
  },
  {
    icon: Globe,
    title: "Warehousing",
    description: "Strategically located warehouses across key trade hubs with real-time inventory visibility and flexible storage options.",
    image: "/images/service-warehousing.jpg",
    href: "/services/warehousing",
    features: ["12 global locations", "Real-time inventory tracking", "Climate-controlled options", "Pick & pack fulfillment"],
  },
  {
    icon: ClipboardCheck,
    title: "Inspection Services",
    description: "Comprehensive quality control from pre-shipment to arrival, with detailed reporting at every stage of production.",
    image: "/images/service-inspection.jpg",
    href: "/services/inspection",
    features: ["Pre-shipment inspection", "During production checks", "Container loading supervision", "Detailed QC reports"],
  },
  {
    icon: Boxes,
    title: "Shipment Consolidation",
    description: "Smart cargo consolidation reducing shipping costs while maintaining delivery schedules and quality standards.",
    image: "/images/service-consolidation.jpg",
    href: "/services/consolidation",
    features: ["Multi-supplier consolidation", "Cost optimization", "FCL & LCL options", "Customs documentation"],
  },
  {
    icon: ShoppingBag,
    title: "Personal Shopping",
    description: "Dedicated procurement support for individual buyers and small businesses worldwide with flexible order sizes.",
    image: "/images/service-sourcing.jpg",
    href: "/services/sourcing",
    features: ["Small order support", "Product sourcing", "Quality verification", "Direct shipping to you"],
  },
  {
    icon: Plane,
    title: "International Logistics",
    description: "Air, ocean, and ground freight management with end-to-end tracking and customs clearance support.",
    image: "/images/service-logistics.jpg",
    href: "/services/logistics",
    features: ["Air & ocean freight", "Ground transportation", "Customs clearance", "End-to-end tracking"],
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | AVA Logistics" },
      { name: "description", content: "Explore AVA Logistics comprehensive services: supplier sourcing, warehousing, inspection, consolidation, and international freight management." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
              What We Offer
            </span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-5">
              Comprehensive Trade Solutions
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              From sourcing to delivery, we provide end-to-end services that simplify global trade and maximize efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover-lift"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/50" />
                  <div className="absolute top-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="font-heading text-2xl font-semibold text-navy mb-3">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
