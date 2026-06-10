import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/services/logistics")({
  head: () => ({
    meta: [
      { title: "International Logistics | AVA Logistics" },
      { name: "description", content: "Air, ocean, and ground freight management with end-to-end tracking and customs clearance. Global logistics solutions for businesses of all sizes." },
    ],
  }),
  component: LogisticsPage,
});

function LogisticsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/service-logistics.jpg" alt="International logistics" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to Services
            </Link>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">International Logistics</h1>
            <p className="text-lg text-white/70 max-w-2xl">Air, ocean, and ground freight with full tracking visibility and customs clearance support.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">Freight Solutions That Move Business Forward</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Moving goods across borders requires more than shipping — it demands expertise in customs regulations, documentation, carrier relationships, and route optimization. We manage every detail so your cargo arrives on time and on budget.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our partnerships with leading carriers across air, ocean, and ground transport give you access to competitive rates and reliable capacity, even during peak seasons.
              </p>

              <h3 className="font-heading text-2xl font-semibold text-navy mb-4">Shipping Methods</h3>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Air Freight", desc: "Fastest option for time-sensitive shipments with global coverage and express options." },
                  { title: "Ocean Freight", desc: "Cost-effective solution for large volumes with FCL and LCL options available." },
                  { title: "Ground Transportation", desc: "Reliable trucking and rail services for regional and cross-border deliveries." },
                  { title: "Multimodal Solutions", desc: "Optimized combinations of air, sea, and ground for the best balance of speed and cost." },
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
                    "98% on-time delivery rate",
                    "Global carrier partnerships",
                    "Customs clearance included",
                    "End-to-end cargo tracking",
                    "Insurance options available",
                    "Dedicated freight managers",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-heading text-lg font-semibold mb-3">Ship With Us</h3>
                <p className="text-sm text-white/70 mb-4">Get competitive freight rates for your next international shipment.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-navy hover:bg-gold-light transition-colors">
                  Get Freight Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
