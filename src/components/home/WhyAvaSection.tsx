import { motion } from "framer-motion";
import { Shield, Warehouse, ClipboardCheck, Package, Truck, UserCheck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Suppliers",
    description: "Rigorous supplier vetting process ensuring quality, reliability, and compliance with international standards.",
    metric: "10,000+",
    metricLabel: "Suppliers Verified",
  },
  {
    icon: Warehouse,
    title: "Global Warehousing",
    description: "Strategically located warehouses across key trade hubs with real-time inventory visibility.",
    metric: "12",
    metricLabel: "Global Locations",
  },
  {
    icon: ClipboardCheck,
    title: "Product Inspection",
    description: "Comprehensive quality control from pre-shipment to arrival, with detailed reporting at every stage.",
    metric: "99.2%",
    metricLabel: "Accuracy Rate",
  },
  {
    icon: Package,
    title: "Shipment Consolidation",
    description: "Smart cargo consolidation reducing shipping costs while maintaining delivery schedules.",
    metric: "35%",
    metricLabel: "Average Savings",
  },
  {
    icon: Truck,
    title: "Logistics Management",
    description: "End-to-end freight coordination across air, ocean, and ground with full tracking visibility.",
    metric: "50K+",
    metricLabel: "Shipments Annually",
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Manager",
    description: "Personal account manager assigned to every client for proactive communication and issue resolution.",
    metric: "24/7",
    metricLabel: "Support Available",
  },
];

export function WhyAvaSection() {
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
            Why Choose AVA
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy mb-5">
            Built for Global Trade Excellence
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine deep industry expertise with cutting-edge logistics technology to deliver results that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy mb-6 group-hover:bg-navy group-hover:text-gold transition-colors duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="pt-4 border-t border-border">
                <span className="font-heading text-2xl font-bold text-gold">
                  {feature.metric}
                </span>
                <span className="ml-2 text-sm text-muted-foreground">
                  {feature.metricLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
