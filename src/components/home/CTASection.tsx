import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
            Get Started
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Global Supply Chain Starts Here
          </h2>
          <p className="text-lg text-white/70 mb-10">
            Whether you are importing, exporting, or building a global brand, we have the infrastructure and expertise to make it seamless. Reach out today for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-bold text-navy transition-all hover:bg-gold-light hover:shadow-lg"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              Schedule a Call
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60">
            <a href="mailto:info@avalogistics.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="h-4 w-4" />
              info@avalogistics.com
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
