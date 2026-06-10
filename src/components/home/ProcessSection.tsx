import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Users, Box, SearchCheck, Warehouse, PackageOpen, Truck } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", description: "Understanding your sourcing and logistics requirements." },
  { icon: ClipboardList, title: "Planning", description: "Developing a tailored logistics strategy and timeline." },
  { icon: Users, title: "Supplier Assignment", description: "Matching you with verified suppliers from our global network." },
  { icon: Box, title: "Receiving", description: "Goods received at our facilities with full documentation." },
  { icon: SearchCheck, title: "Inspection", description: "Comprehensive quality control and verification process." },
  { icon: Warehouse, title: "Storage", description: "Secure warehousing with real-time inventory tracking." },
  { icon: PackageOpen, title: "Consolidation", description: "Smart cargo consolidation to optimize shipping costs." },
  { icon: Truck, title: "Delivery", description: "Final delivery to your destination with full tracking." },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
            Our Process
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy mb-5">
            How We Deliver Excellence
          </h2>
          <p className="text-muted-foreground text-lg">
            A streamlined 8-step process designed for efficiency, transparency, and results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-border hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-navy text-gold shadow-lg mb-5">
                    <step.icon className="h-7 w-7" />
                    <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy text-xs font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
