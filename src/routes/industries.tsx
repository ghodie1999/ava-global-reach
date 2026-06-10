import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShoppingCart, Factory, Building2, Package, Tag, ArrowRightLeft, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const industries = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Integrated warehousing and fulfillment with real-time stock sync across multiple sales channels.",
    stats: { metric: "500+", label: "E-commerce clients" },
  },
  {
    icon: Building2,
    title: "Retail",
    description: "Flexible warehousing and demand forecasting to handle seasonal fluctuations with ease.",
    stats: { metric: "200+", label: "Retail partners" },
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Precision logistics scheduling for raw materials and just-in-time production support.",
    stats: { metric: "150+", label: "Manufacturers" },
  },
  {
    icon: Package,
    title: "Wholesale",
    description: "Bulk freight optimization and consolidation for multi-destination distribution.",
    stats: { metric: "300+", label: "Wholesale clients" },
  },
  {
    icon: Tag,
    title: "Consumer Goods",
    description: "Rigorous inspection and certification management for international market compliance.",
    stats: { metric: "99.2%", label: "Quality score" },
  },
  {
    icon: ArrowRightLeft,
    title: "Import/Export",
    description: "End-to-end customs support and documentation handling for smooth cross-border trade.",
    stats: { metric: "80+", label: "Countries" },
  },
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | AVA Logistics" },
      { name: "description", content: "AVA Logistics serves e-commerce, retail, manufacturing, wholesale, consumer goods, and import/export industries with tailored logistics solutions." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">Industries</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-5">Sectors We Empower</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Tailored logistics solutions designed for the unique demands of each industry we serve.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy mb-5">
                  <industry.icon className="h-6 w-6" />
                </div>
                <h2 className="font-heading text-xl font-semibold text-navy mb-3">{industry.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{industry.description}</p>
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="font-heading text-2xl font-bold text-gold">{industry.stats.metric}</span>
                    <span className="ml-2 text-xs text-muted-foreground uppercase tracking-wider">{industry.stats.label}</span>
                  </div>
                  <Link to="/contact" className="text-navy hover:text-gold transition-colors">
                    <ArrowRight className="h-5 w-5" />
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
