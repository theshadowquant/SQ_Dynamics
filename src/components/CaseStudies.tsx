import { motion } from "framer-motion";

const cases = [
  { type: "Premium GYM", problem: "Low visibility and suboptimal online conversion.", r1: "3x Increase", r2: "Trial pass claims." },
  { type: "Premium SCHOOL", problem: "Outdated digital map leading to disjointed communications.", r1: "85% Boost", r2: "In online inquiries." },
  { type: "ONLINE ART SCH.", problem: "Poor course discoverability and drop-offs.", r1: "150+ Students", r2: "Enrolled in 60 days." },
];

export default function CaseStudies() {
  return (
    <section style={{ padding: "96px 0", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
        {cases.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-panel glass-panel-hover" style={{ padding: 32, borderRadius: 16, display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#60A5FA", marginBottom: 16, textTransform: "uppercase" }}>{c.type}</div>
            <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 32 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", marginRight: 8 }}>Problem:</span>{c.problem}
            </p>
            <div style={{ marginTop: "auto" }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", fontFamily: "'Space Grotesk', sans-serif", marginBottom: 8 }}>{c.r1}</div>
              <div style={{ fontSize: 15, color: "#D1D5DB" }}>{c.r2}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}