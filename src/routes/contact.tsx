import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, MessageCircle, CheckCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | AVA Logistics" },
      { name: "description", content: "Get in touch with AVA Logistics for a free quote or consultation. Request a quote, schedule a call, or chat with us on WhatsApp." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappNumber = "+1234567890";
  const whatsappMessage = encodeURIComponent("Hello AVA Logistics! I'm interested in your services and would like to learn more.");

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">Contact</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-5">Let&apos;s Start a Conversation</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Whether you need a quote, want to schedule a consultation, or just have questions, we are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our team is ready to discuss your logistics needs and provide a tailored solution. Reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/10 text-navy shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Phone</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-xs text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/10 text-navy shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Email</h3>
                    <p className="text-sm text-muted-foreground">info@avalogistics.com</p>
                    <p className="text-sm text-muted-foreground">quotes@avalogistics.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/10 text-navy shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Headquarters</h3>
                    <p className="text-sm text-muted-foreground">100 Global Trade Center</p>
                    <p className="text-sm text-muted-foreground">Shanghai, China 200120</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-600 shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors mt-1"
                    >
                      Open WhatsApp
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-navy mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">We have received your message and will get back to you within 24 hours.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-semibold text-navy hover:text-gold transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-heading text-xl font-semibold text-navy mb-2">Request a Quote</h3>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Country</label>
                        <input
                          type="text"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                          placeholder="United States"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Service Needed</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                        >
                          <option value="">Select a service</option>
                          <option value="sourcing">Supplier Sourcing</option>
                          <option value="warehousing">Warehousing</option>
                          <option value="inspection">Inspection Services</option>
                          <option value="consolidation">Shipment Consolidation</option>
                          <option value="logistics">International Logistics</option>
                          <option value="multiple">Multiple Services</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                        placeholder="Tell us about your logistics needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-8 py-3 text-sm font-bold text-white transition-all hover:bg-navy-light w-full sm:w-auto"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
