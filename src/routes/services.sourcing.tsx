import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Search, CheckCircle, Shield, Users, Globe } from "lucide-react";

export const Route = createFileRoute("/services/sourcing")({
  head: () => ({
    meta: [
      { title: "Supplier Sourcing | AVA Logistics" },
      { name: "description", content: "Connect with verified suppliers worldwide. AVA Logistics handles supplier vetting, negotiation, and relationship management." },
    ],
  }),
  component: SourcingPage,
});

function SourcingPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/service-sourcing.jpg"
            alt="Supplier sourcing"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">
              Supplier Sourcing
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Connect with pre-vetted manufacturers and suppliers across Asia, Europe, and the Americas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                Finding the Right Supplier Shouldn&apos;t Be Hard
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Navigating international supplier networks is complex. Language barriers, quality inconsistencies, and unreliable delivery schedules can derail your business. AVA Logistics eliminates these risks with our comprehensive supplier sourcing service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team maintains relationships with over 10,000 verified manufacturers across key production regions. We handle everything from initial identification to contract negotiation and ongoing quality oversight.
              </p>

              <h3 className="font-heading text-2xl font-semibold text-navy mb-4">
                Our Sourcing Process
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  "Requirements Analysis — Understanding your product specifications, volume needs, and quality standards",
                  "Supplier Identification — Matching you with verified manufacturers from our global network",
                  "Due Diligence — Comprehensive factory audits, certification verification, and reference checks",
                  "Negotiation — Securing optimal pricing, payment terms, and delivery schedules",
                  "Contract Management — Drafting and overseeing supplier agreements",
                  "Ongoing Oversight — Regular performance reviews and relationship management",
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-gold text-sm font-bold">
                      {i + 1}
                    </div>
                    <p className="text-sm text-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold text-navy mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Access to 10,000+ verified suppliers",
                    "Reduced sourcing time by 60%",
                    "Factory audit reports included",
                    "Price negotiation support",
                    "Quality guarantee programs",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-heading text-lg font-semibold mb-3">Ready to Source?</h3>
                <p className="text-sm text-white/70 mb-4">
                  Tell us what you need and we will match you with the right suppliers within 48 hours.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
