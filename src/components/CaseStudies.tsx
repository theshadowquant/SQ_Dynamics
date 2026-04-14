import { motion } from "framer-motion";

const cases = [
  { type: "D2C Apparel Brand", problem: "Low visitor-to-buyer conversion.", r1: "312% ROAS improvement", r2: "4.2x checkout conversion." },
  { type: "SaaS Startup", problem: "No product-market fit signaling.", r1: "89% increase in trial signups", r2: "2.1s load time achieved." },
  { type: "Local Service Business", problem: "Zero digital presence.", r1: "67 qualified leads/month", r2: "#1 local rankings." },
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