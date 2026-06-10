import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/services/warehousing")({
  head: () => ({
    meta: [
      { title: "Warehousing | AVA Logistics" },
      { name: "description", content: "Secure global warehousing with real-time inventory tracking across 12 strategic locations worldwide." },
    ],
  }),
  component: WarehousingPage,
});

function WarehousingPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/service-warehousing.jpg" alt="Warehousing" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to Services
            </Link>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Warehousing</h1>
            <p className="text-lg text-white/70 max-w-2xl">Secure storage solutions with real-time inventory tracking across 12 global locations.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">Global Warehousing Network</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our strategically located warehouses provide secure storage with full inventory visibility. Whether you need short-term storage or long-term distribution centers, we have the infrastructure to support your business.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Each facility is equipped with modern security systems, climate control options, and integrated inventory management technology that syncs with your systems in real-time.
              </p>

              <h3 className="font-heading text-2xl font-semibold text-navy mb-4">Warehouse Locations</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { city: "Shanghai", region: "Asia Pacific" },
                  { city: "Shenzhen", region: "Asia Pacific" },
                  { city: "Singapore", region: "Asia Pacific" },
                  { city: "Rotterdam", region: "Europe" },
                  { city: "Dubai", region: "Middle East" },
                  { city: "Los Angeles", region: "North America" },
                  { city: "New York", region: "North America" },
                  { city: "Sao Paulo", region: "South America" },
                ].map((loc) => (
                  <div key={loc.city} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <div className="h-2 w-2 rounded-full bg-gold" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{loc.city}</div>
                      <div className="text-xs text-muted-foreground">{loc.region}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold text-navy mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "12 global warehouse locations",
                    "Real-time inventory tracking",
                    "Climate-controlled storage",
                    "Pick & pack fulfillment",
                    "Cross-docking capabilities",
                    "24/7 security monitoring",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-heading text-lg font-semibold mb-3">Need Storage?</h3>
                <p className="text-sm text-white/70 mb-4">Get a quote for warehousing solutions tailored to your inventory needs.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-navy hover:bg-gold-light transition-colors">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
