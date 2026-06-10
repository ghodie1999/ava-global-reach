import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Heart, Award } from "lucide-react";

const values = [
  { icon: Target, title: "Reliability", desc: "We deliver on our promises, every time." },
  { icon: Eye, title: "Transparency", desc: "Full visibility into your supply chain." },
  { icon: Heart, title: "Partnership", desc: "Your success is our success." },
  { icon: Award, title: "Excellence", desc: "Continuous improvement in everything." },
];

export function AboutPreviewSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
              About AVA Logistics
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy mb-6">
              Your Trusted Partner in Global Trade
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over 15 years, AVA Logistics has been the backbone of global supply chains for businesses of all sizes. From sourcing raw materials to delivering finished goods, we provide the infrastructure, expertise, and accountability that modern trade demands.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our network spans 80+ countries with 12 strategically located warehouses, a team of 200+ logistics professionals, and partnerships with the world&lsquo;s leading freight carriers. We combine deep local market knowledge with global operational standards.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover-lift"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/10 text-navy mb-4">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-1">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
