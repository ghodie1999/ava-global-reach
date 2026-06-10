import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote, TrendingUp, Clock } from "lucide-react";

const caseStudies = [
  {
    client: "Global Electronics Retailer",
    industry: "E-commerce",
    challenge: "Complex multi-supplier sourcing with inconsistent quality and delivery delays.",
    solution: "Integrated supplier vetting, inspection, and consolidated shipping program.",
    results: [
      { label: "Cost Reduction", value: "28%" },
      { label: "Delivery Time", value: "-40%" },
      { label: "Quality Score", value: "99.1%" },
    ],
    quote: "AVA transformed our supply chain from a constant headache into a competitive advantage.",
    author: "Operations Director",
  },
  {
    client: "European Fashion Brand",
    industry: "Retail",
    challenge: "Seasonal inventory management and warehousing costs across three continents.",
    solution: "Flexible warehousing network with demand-driven inventory positioning.",
    results: [
      { label: "Storage Costs", value: "-35%" },
      { label: "Stock Turnover", value: "+45%" },
      { label: "Fill Rate", value: "97.8%" },
    ],
    quote: "The flexibility and visibility AVA provides has completely changed how we manage inventory.",
    author: "Supply Chain VP",
  },
  {
    client: "Industrial Equipment Manufacturer",
    industry: "Manufacturing",
    challenge: "Reliable sourcing of specialized components from Asian suppliers.",
    solution: "Dedicated sourcing team with on-ground inspection and quality assurance.",
    results: [
      { label: "Supplier Defects", value: "-92%" },
      { label: "Lead Time", value: "-30%" },
      { label: "Cost Savings", value: "$2.1M" },
    ],
    quote: "Having AVA on the ground in our supplier regions gives us confidence we never had before.",
    author: "Procurement Manager",
  },
];

export function CaseStudiesSection() {
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
            Case Studies
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy mb-5">
            Proven Results for Real Clients
          </h2>
          <p className="text-muted-foreground text-lg">
            See how we have helped businesses transform their global supply chain operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col"
            >
              <div className="mb-6">
                <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold mb-3">
                  {study.industry}
                </span>
                <h3 className="font-heading text-xl font-semibold text-navy mb-4">
                  {study.client}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Challenge</span>
                    <p className="text-sm text-muted-foreground mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">Solution</span>
                    <p className="text-sm text-foreground mt-1 font-medium">{study.solution}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 py-4 border-y border-border mb-6">
                {study.results.map((result) => (
                  <div key={result.label} className="text-center">
                    <div className="font-heading text-xl font-bold text-navy">{result.value}</div>
                    <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mt-1">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="flex gap-3 mb-3">
                  <Quote className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    {study.quote}
                  </p>
                </div>
                <p className="text-xs font-semibold text-navy ml-8">— {study.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-4 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
