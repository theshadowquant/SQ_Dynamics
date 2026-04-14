import { motion } from "framer-motion";

const services = [
  { title: "Revenue-First Web Design", desc: "We don't build websites. We build revenue machines. Your homepage is your top salesperson — we make sure it closes." },
  { title: "Custom Application Development", desc: "Off-the-shelf is for businesses that want off-the-shelf results. We build what you actually need." },
  { title: "Automation Systems", desc: "Every manual task is money leaking out of your business. We plug the leaks with intelligent automation." },
  { title: "High-Conversion Landing Pages", desc: "Traffic without conversion is just noise. We turn your ad spend into a reliable revenue stream." },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "clamp(64px, 10vw, 96px) 0", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 48px)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", marginBottom: 16 }}>Precision Engineering.</h2>
          <div style={{ width: 80, height: 4, background: "linear-gradient(to right, #3B82F6, #8B5CF6)", borderRadius: 2 }} />
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel glass-panel-hover" style={{ padding: 40, borderRadius: 16, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 128, height: 128, borderRadius: "50%", background: "rgba(59,130,246,0.1)", filter: "blur(40px)" }} />
              <h3 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", marginBottom: 16, color: "#fff" }}>{s.title}</h3>
              <p style={{ fontSize: 17, color: "#9CA3AF", lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}