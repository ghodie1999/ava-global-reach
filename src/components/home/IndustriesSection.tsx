import { motion } from "framer-motion";
import { ShoppingCart, Factory, Building2, Package, Tag, ArrowRightLeft } from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    challenge: "Managing inventory across multiple channels and fulfillment complexity.",
    solution: "Integrated warehousing and fulfillment with real-time stock sync.",
  },
  {
    icon: Building2,
    title: "Retail",
    challenge: "Seasonal demand fluctuations and supply chain unpredictability.",
    solution: "Flexible warehousing and demand forecasting support.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    challenge: "Raw material sourcing and just-in-time delivery requirements.",
    solution: "Supplier networks and precision logistics scheduling.",
  },
  {
    icon: Package,
    title: "Wholesale",
    challenge: "Bulk order management and multi-destination distribution.",
    solution: "Consolidation services and bulk freight optimization.",
  },
  {
    icon: Tag,
    title: "Consumer Goods",
    challenge: "Quality control and compliance across international markets.",
    solution: "Rigorous inspection and certification management.",
  },
  {
    icon: ArrowRightLeft,
    title: "Import/Export",
    challenge: "Customs clearance and documentation complexity.",
    solution: "End-to-end customs support and documentation handling.",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
            Industries
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy mb-5">
            Specialized by Sector
          </h2>
          <p className="text-muted-foreground text-lg">
            Tailored logistics solutions designed for the unique demands of each industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-8 hover-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy mb-5 group-hover:bg-navy group-hover:text-gold transition-colors duration-300">
                <industry.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                {industry.title}
              </h3>
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Challenge
                </span>
                <p className="text-sm text-muted-foreground mt-1">{industry.challenge}</p>
              </div>
              <div className="pt-4 border-t border-border">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                  AVA Solution
                </span>
                <p className="text-sm text-foreground mt-1 font-medium">{industry.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
