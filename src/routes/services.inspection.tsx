import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/services/inspection")({
  head: () => ({
    meta: [
      { title: "Inspection Services | AVA Logistics" },
      { name: "description", content: "Comprehensive product inspection services including pre-shipment, during production, and container loading supervision with detailed QC reports." },
    ],
  }),
  component: InspectionPage,
});

function InspectionPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/service-inspection.jpg" alt="Inspection services" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to Services
            </Link>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Inspection Services</h1>
            <p className="text-lg text-white/70 max-w-2xl">Comprehensive quality control with detailed reporting at every stage of production and shipping.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">Quality You Can Verify</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Product quality issues discovered after shipment are costly and disruptive. Our inspection services catch problems before goods leave the factory, saving you time, money, and reputation risk.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our certified inspectors conduct thorough examinations at every critical stage, from raw materials to finished products, with photographic evidence and detailed reports.
              </p>

              <h3 className="font-heading text-2xl font-semibold text-navy mb-4">Inspection Types</h3>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Pre-Production Inspection (PPI)", desc: "Verifying raw materials and components before manufacturing begins." },
                  { title: "During Production Inspection (DUPRO)", desc: "Monitoring quality at key production milestones to catch issues early." },
                  { title: "Pre-Shipment Inspection (PSI)", desc: "Final quality check before goods are released for shipment." },
                  { title: "Container Loading Supervision", desc: "Ensuring proper packing, sealing, and documentation for transit." },
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
                    "99.2% inspection accuracy rate",
                    "AQL-based sampling standards",
                    "Same-day inspection reports",
                    "Photo and video documentation",
                    "On-ground inspector teams",
                    "Remedial action recommendations",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-heading text-lg font-semibold mb-3">Book an Inspection</h3>
                <p className="text-sm text-white/70 mb-4">Schedule a quality inspection for your next shipment today.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-navy hover:bg-gold-light transition-colors">
                  Request Inspection <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
