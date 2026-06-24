"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (status === "success" || status === "error") setStatus("idle");
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main>
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-fresh text-sm font-semibold uppercase tracking-widest">
              Get In Touch
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Us
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Have a question or ready to start sourcing fresh produce for
              your business? Reach out and our team will respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div>
                <span className="text-brand-fresh text-sm font-semibold uppercase tracking-widest">
                  Contact Information
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-brand-text mt-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  We're Here to Help
                </h2>
              </div>

              {/* Info Cards */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 bg-brand-light rounded-xl p-5 border border-brand-fresh/20">
                  <div className="bg-brand-fresh p-2.5 rounded-lg shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-text">Phone</p>
                    <a href="tel:+16479937556" className="text-muted-foreground text-sm hover:text-brand-fresh transition-colors">
                      +1 (647) 993-7556
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-brand-light rounded-xl p-5 border border-brand-fresh/20">
                  <div className="bg-brand-fresh p-2.5 rounded-lg shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-text">Email</p>
                    <a href="mailto:naturesgrown.ca@gmail.com" className="text-muted-foreground text-sm hover:text-brand-fresh transition-colors">
                      naturesgrown.ca@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-brand-light rounded-xl p-5 border border-brand-fresh/20">
                  <div className="bg-brand-fresh p-2.5 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-text">Address</p>
                    <p className="text-muted-foreground text-sm">
                      30 Topflight Dr, Mississauga, ON L5S 0A8
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-brand-light rounded-xl p-5 border border-brand-fresh/20">
                  <div className="bg-brand-fresh p-2.5 rounded-lg shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-text">Business Hours</p>
                    <p className="text-muted-foreground text-sm">Mon – Fri: 5:00 AM – 6:00 PM</p>
                    <p className="text-muted-foreground text-sm">Sat: 5:00 AM – 2:00 PM</p>
                    <p className="text-muted-foreground text-sm">Sun: Closed</p>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/16479937556"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors w-fit"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.855L.057 23.885a.5.5 0 00.606.61l6.187-1.438A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.878 9.878 0 01-5.031-1.378l-.361-.214-3.733.868.936-3.63-.235-.373A9.878 9.878 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1c5.466 0 9.9 4.433 9.9 9.9 0 5.466-4.434 9.9-9.9 9.9z" />
                </svg>
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-brand-grey rounded-xl p-8 border border-border flex flex-col gap-5"
              >
                <h3 className="text-xl font-semibold text-brand-text">
                  Send Us a Message
                </h3>

                <div>
                  <label className="text-sm font-medium text-brand-text">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full mt-1.5 px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-brand-fresh"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-brand-text">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full mt-1.5 px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-brand-fresh"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-brand-text">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full mt-1.5 px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-brand-fresh"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-brand-text">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full mt-1.5 px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-brand-fresh resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 bg-brand-fresh hover:bg-green-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md transition-colors duration-200"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  {status !== "loading" && <Send className="w-4 h-4" />}
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-sm text-center font-medium">
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-600 text-sm text-center font-medium">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden shadow-lg border-2 border-brand-fresh h-[400px] relative">
            <iframe
              src="https://www.google.com/maps?q=30+Topflight+Dr,+Mississauga,+ON+L5S+0A8&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
}