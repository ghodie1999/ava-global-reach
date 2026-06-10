import { motion } from "framer-motion";
import { Building2, Award, ShieldCheck, Globe2 } from "lucide-react";

const partners = [
  "Maersk", "DHL", "FedEx", "UPS", "MSC", "COSCO", "Evergreen", "Hapag-Lloyd"
];

const stats = [
  { icon: Building2, value: "15+", label: "Years Experience" },
  { icon: Globe2, value: "80+", label: "Countries Served" },
  { icon: Award, value: "50K+", label: "Shipments Managed" },
  { icon: ShieldCheck, value: "12", label: "Warehouses" },
];

export function TrustBarSection() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="h-6 w-6 text-gold" />
              </div>
              <div className="font-heading text-3xl font-bold text-navy">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-lg font-heading font-bold text-muted-foreground/50 hover:text-navy transition-colors cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
