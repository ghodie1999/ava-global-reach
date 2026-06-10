import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/services/consolidation")({
  head: () => ({
    meta: [
      { title: "Shipment Consolidation | AVA Logistics" },
      { name: "description", content: "Smart cargo consolidation services reducing shipping costs while maintaining delivery schedules. FCL and LCL options available." },
    ],
  }),
  component: ConsolidationPage,
});

function ConsolidationPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/service-consolidation.jpg" alt="Shipment consolidation" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to Services
            </Link>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Shipment Consolidation</h1>
            <p className="text-lg text-white/70 max-w-2xl">Combine multiple shipments to reduce costs while maintaining delivery timelines.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">Ship Smarter, Not Harder</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Multiple small shipments mean multiple fees, multiple handling charges, and multiple customs processes. Our consolidation service combines your cargo intelligently to maximize container utilization and minimize costs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you are sourcing from multiple suppliers or shipping to multiple destinations, we optimize every cubic meter to deliver savings without compromising speed.
              </p>

              <h3 className="font-heading text-2xl font-semibold text-navy mb-4">Consolidation Options</h3>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Supplier Consolidation", desc: "Combine orders from multiple suppliers into a single shipment." },
                  { title: "Buyer Consolidation (LCL)", desc: "Share container space with other clients for smaller shipments." },
                  { title: "Full Container Load (FCL)", desc: "Dedicated container for larger volumes with maximum efficiency." },
                  { title: "Multi-Destination Split", desc: "Consolidate then split cargo to multiple final destinations." },
                ].map((type, i) => (
                  <div key={i} className="p-5 bg-muted/50 rounded-xl">
                    <h4 className="font-semibold text-navy mb-1">{type.title}</h4>
                    <p className="text-sm text-muted-foreground">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold text-navy mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Up to 35% shipping cost reduction",
                    "Optimized container utilization",
                    "Reduced customs fees",
                    "Simplified documentation",
                    "Flexible consolidation schedules",
                    "Full cargo visibility",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-heading text-lg font-semibold mb-3">Save on Shipping</h3>
                <p className="text-sm text-white/70 mb-4">Get a consolidation quote and see how much you could save.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-navy hover:bg-gold-light transition-colors">
                  Get Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
