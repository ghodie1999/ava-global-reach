import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "+1234567890"; // Replace with actual number
  const message = encodeURIComponent(
    "Hello AVA Logistics! I'm interested in your services and would like to learn more."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      {/* Chat bubble */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl bg-card border border-border shadow-2xl overflow-hidden"
          >
            <div className="bg-navy px-5 py-4 flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center">
                  <span className="font-heading text-sm font-bold text-navy">A</span>
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-navy" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">AVA Logistics</p>
                <p className="text-xs text-white/70">Typically replies in minutes</p>
              </div>
            </div>
            <div className="p-5 bg-muted/30">
              <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[85%]">
                <p className="text-sm text-foreground leading-relaxed">
                  Hello! Welcome to AVA Logistics. How can we help you with your global supply chain needs today?
                </p>
              </div>
            </div>
            <div className="p-4 border-t border-border">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Start Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <MessageCircle className="h-7 w-7" />
        )}
      </motion.button>
    </>
  );
}
