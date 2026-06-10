import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Globe } from "lucide-react";
import { AnimatedCounter } from "../AnimatedCounter";

const metrics = [
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Delivery Success Rate",
    description: "On-time delivery performance across all shipping methods.",
  },
  {
    icon: DollarSign,
    value: 35,
    suffix: "%",
    prefix: "Up to ",
    label: "Cost Savings",
    description: "Average logistics cost reduction for our clients.",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Suppliers Verified",
    description: "Pre-vetted manufacturers in our global network.",
  },
  {
    icon: Globe,
    value: 80,
    suffix: "+",
    label: "Countries Served",
    description: "Active logistics operations worldwide.",
  },
];

export function ResultsSection() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
            Our Impact
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-5">
            Results That Speak
          </h2>
          <p className="text-white/70 text-lg">
            Measurable outcomes that drive business growth and operational efficiency.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/20 text-gold">
                  <metric.icon className="h-7 w-7" />
                </div>
              </div>
              <div className="font-heading text-4xl lg:text-5xl font-bold text-gold mb-2">
                <AnimatedCounter
                  end={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  duration={2.5}
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{metric.label}</h3>
              <p className="text-sm text-white/60">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
