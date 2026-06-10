import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Globe, Users, Truck } from "lucide-react";

const values = [
  { icon: Target, title: "Reliability", desc: "We deliver on our promises, every single time. Consistency is the foundation of trust." },
  { icon: Eye, title: "Transparency", desc: "Full visibility into your supply chain with honest communication and clear reporting." },
  { icon: Heart, title: "Partnership", desc: "We view every client relationship as a true partnership, invested in mutual success." },
  { icon: Award, title: "Excellence", desc: "Continuous improvement in everything we do, from processes to customer experience." },
];

const timeline = [
  { year: "2009", event: "AVA Logistics founded in Shanghai" },
  { year: "2012", event: "Expanded to warehousing services" },
  { year: "2014", event: "Opened European hub in Rotterdam" },
  { year: "2016", event: "Launched inspection services division" },
  { year: "2018", event: "Reached 10,000 verified suppliers" },
  { year: "2020", event: "Opened Middle East operations in Dubai" },
  { year: "2022", event: "Surpassed 50,000 annual shipments" },
  { year: "2024", event: "Launched AI-powered logistics platform" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | AVA Logistics" },
      { name: "description", content: "Learn about AVA Logistics - 15+ years of global trade expertise, 80+ countries served, and a commitment to supply chain excellence." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">About AVA Logistics</span>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6">Your Global Trade Partner Since 2009</h1>
            <p className="text-lg text-white/70">
              For over 15 years, we have been the backbone of global supply chains, helping businesses of all sizes navigate the complexities of international trade with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-card border border-border rounded-2xl p-10">
              <Target className="h-8 w-8 text-gold mb-4" />
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To make global trade predictable, transparent, and accessible for businesses of all sizes. We remove the friction from international supply chains so our clients can focus on growth.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-navy rounded-2xl p-10 text-white">
              <Eye className="h-8 w-8 text-gold mb-4" />
              <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-white/70 leading-relaxed">
                To become the world&apos;s most trusted logistics platform, connecting businesses with seamless global trade infrastructure powered by technology and human expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">Our Values</span>
            <h2 className="font-heading text-4xl font-bold text-navy mb-5">What Drives Us</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy/10 text-navy">
                    <value.icon className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Globe, value: "80+", label: "Countries Served" },
              { icon: Users, value: "200+", label: "Team Members" },
              { icon: Truck, value: "50K+", label: "Annual Shipments" },
              { icon: Award, value: "15+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="h-8 w-8 text-gold mx-auto mb-4" />
                <div className="font-heading text-4xl font-bold text-gold">{stat.value}</div>
                <div className="text-sm text-white/60 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">Our Journey</span>
            <h2 className="font-heading text-4xl font-bold text-navy mb-5">Company Timeline</h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative flex items-center gap-6 sm:pl-20"
                >
                  <div className="hidden sm:flex absolute left-6 h-5 w-5 items-center justify-center rounded-full bg-gold border-4 border-background" />
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold font-heading font-bold text-sm sm:hidden">
                    {event.year}
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5 flex-1">
                    <span className="hidden sm:inline font-heading text-lg font-bold text-gold mr-3">{event.year}</span>
                    <span className="text-foreground">{event.event}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
