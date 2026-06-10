import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote, TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react";

const cases = [
  {
    client: "Global Electronics Retailer",
    industry: "E-commerce",
    challenge: "Managing sourcing from 40+ suppliers across Asia with inconsistent quality and frequent delivery delays.",
    solution: "Implemented integrated supplier vetting, inspection program, and consolidated shipping across 3 regional hubs.",
    results: [
      { label: "Cost Reduction", value: "28%", icon: DollarSign },
      { label: "Delivery Time", value: "-40%", icon: Clock },
      { label: "Quality Score", value: "99.1%", icon: TrendingUp },
    ],
    quote: "AVA transformed our supply chain from a constant headache into a competitive advantage. We finally have the visibility and reliability we needed.",
    author: "Sarah Chen, Operations Director",
  },
  {
    client: "European Fashion Brand",
    industry: "Retail",
    challenge: "Seasonal inventory surges causing warehousing bottlenecks and fulfillment delays across three continents.",
    solution: "Deployed flexible warehousing network with demand-driven inventory positioning and automated reorder triggers.",
    results: [
      { label: "Storage Costs", value: "-35%", icon: DollarSign },
      { label: "Stock Turnover", value: "+45%", icon: TrendingUp },
      { label: "Fill Rate", value: "97.8%", icon: Clock },
    ],
    quote: "The flexibility and visibility AVA provides has completely changed how we manage inventory. No more stockouts, no more overstock.",
    author: "Marco Rossi, VP Supply Chain",
  },
  {
    client: "Industrial Equipment Manufacturer",
    industry: "Manufacturing",
    challenge: "Sourcing specialized components from Asian suppliers with high defect rates and unpredictable lead times.",
    solution: "Dedicated sourcing team with on-ground inspection, supplier development program, and backup supplier network.",
    results: [
      { label: "Defect Rate", value: "-92%", icon: TrendingUp },
      { label: "Lead Time", value: "-30%", icon: Clock },
      { label: "Savings", value: "$2.1M", icon: DollarSign },
    ],
    quote: "Having AVA on the ground in our supplier regions gives us confidence we never had before. The inspection reports alone have been game-changing.",
    author: "James Wright, Procurement Manager",
  },
  {
    client: "Midwest Wholesale Distributor",
    industry: "Wholesale",
    challenge: "Complex multi-supplier consolidation with high shipping costs and fragmented tracking.",
    solution: "Smart cargo consolidation program with optimized container loading and unified tracking dashboard.",
    results: [
      { label: "Shipping Cost", value: "-32%", icon: DollarSign },
      { label: "Container Util", value: "94%", icon: TrendingUp },
      { label: "Tracking Time", value: "-60%", icon: Clock },
    ],
    quote: "We used to manage 15 different shipments a month. Now it's 3 consolidated loads with better visibility and lower costs.",
    author: "Lisa Thompson, Logistics Manager",
  },
];

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | AVA Logistics" },
      { name: "description", content: "See how AVA Logistics has helped businesses transform their global supply chain operations with measurable results." },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">Case Studies</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-5">Real Results, Real Clients</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              See how we have helped businesses across industries achieve measurable supply chain improvements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold mb-4">
                  {study.industry}
                </span>
                <h2 className="font-heading text-3xl font-bold text-navy mb-6">{study.client}</h2>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Challenge</span>
                    <p className="text-sm text-foreground mt-1">{study.challenge}</p>
                  </div>
                  <div className="p-4 bg-navy/5 rounded-xl">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">AVA Solution</span>
                    <p className="text-sm text-foreground mt-1">{study.solution}</p>
                  </div>
                </div>

                <div className="flex gap-3 mb-6">
                  {study.results.map((result) => (
                    <div key={result.label} className="flex-1 bg-card border border-border rounded-xl p-4 text-center">
                      <result.icon className="h-5 w-5 text-gold mx-auto mb-2" />
                      <div className="font-heading text-xl font-bold text-navy">{result.value}</div>
                      <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mt-1">{result.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 p-4 bg-muted/30 rounded-xl">
                  <Quote className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">{study.quote}</p>
                    <p className="text-xs font-semibold text-navy mt-2">— {study.author}</p>
                  </div>
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-navy rounded-2xl p-10 text-white">
                  <h3 className="font-heading text-2xl font-bold mb-6">Project Results</h3>
                  <div className="space-y-6">
                    {study.results.map((result) => (
                      <div key={result.label} className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-gold">
                          <result.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="font-heading text-3xl font-bold text-gold">{result.value}</div>
                          <div className="text-sm text-white/70">{result.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
