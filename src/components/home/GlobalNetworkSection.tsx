import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";

const regions = [
  {
    name: "Asia",
    locations: ["Shanghai", "Shenzhen", "Guangzhou", "Hong Kong", "Singapore", "Bangkok", "Ho Chi Minh City"],
    color: "bg-gold",
  },
  {
    name: "Europe",
    locations: ["Rotterdam", "Hamburg", "Barcelona", "Milan", "Warsaw"],
    color: "bg-navy",
  },
  {
    name: "Middle East",
    locations: ["Dubai", "Jeddah", "Istanbul"],
    color: "bg-navy-light",
  },
  {
    name: "Africa",
    locations: ["Lagos", "Cairo", "Nairobi", "Casablanca"],
    color: "bg-gold-dark",
  },
  {
    name: "North America",
    locations: ["Los Angeles", "New York", "Miami", "Vancouver"],
    color: "bg-navy",
  },
  {
    name: "South America",
    locations: ["Sao Paulo", "Buenos Aires", "Lima"],
    color: "bg-gold",
  },
];

export function GlobalNetworkSection() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
            Global Network
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-5">
            Worldwide Presence, Local Expertise
          </h2>
          <p className="text-white/70 text-lg">
            Strategically positioned across 6 continents to serve your global supply chain needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`h-3 w-3 rounded-full ${region.color}`} />
                <h3 className="font-heading text-xl font-semibold">{region.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {region.locations.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/80"
                  >
                    <MapPin className="h-3 w-3 text-gold" />
                    {loc}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-gold/20 border border-gold/30 px-6 py-3">
            <Globe className="h-5 w-5 text-gold" />
            <span className="text-sm font-medium text-gold">
              Serving 80+ countries across 6 continents
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
