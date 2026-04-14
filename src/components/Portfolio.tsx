import { motion } from "framer-motion";

const projects = [
  { name: "RevThread", type: "D2C Fashion", problem: "1.2% store conversion.", solution: "Full funnel redesign + checkout optimization.", result: "4.7x conversion rate, $180K additional revenue in 90 days." },
  { name: "Launchly", type: "SaaS", problem: "Trial-to-paid was 6%.", solution: "Onboarding flow + feature spotlight redesign.", result: "23% trial-to-paid rate, 3x MRR growth." },
  { name: "Apex Fitness", type: "Local Brand", problem: "No digital footprint.", solution: "Brand identity + site + local SEO system.", result: "94 booked appointments in month 1." },
  { name: "Nexus Automate", type: "B2B SaaS", problem: "40% manual ops overhead.", solution: "Custom CRM + workflow automation.", result: "40% ops cost reduction, 6-month ROI." },
];

export default function Portfolio() {
  return (
    <section id="work" style={{ padding: "96px 0", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", marginBottom: 16 }}>The Proof.</h2>
          <div style={{ width: 80, height: 4, background: "linear-gradient(to right, #3B82F6, #8B5CF6)", borderRadius: 2 }} />
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel" style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ padding: "32px 32px 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</h3>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: "#A78BFA", background: "rgba(167,139,250,0.1)", padding: "4px 12px", borderRadius: 20, textTransform: "uppercase" }}>{p.type}</span>
                </div>
                <div style={{ marginBottom: 32, display: "flex", flexDirection: "column", gap: 12 }}>
                  <p style={{ fontSize: 13 }}><span style={{ fontSize: 10, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", marginRight: 8 }}>Problem:</span><span style={{ color: "#D1D5DB" }}>{p.problem}</span></p>
                  <p style={{ fontSize: 13 }}><span style={{ fontSize: 10, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", marginRight: 8 }}>Solution:</span><span style={{ color: "#D1D5DB" }}>{p.solution}</span></p>
                </div>
              </div>
              <div style={{ background: "linear-gradient(to right, rgba(30,64,175,0.2), rgba(88,28,135,0.2))", padding: 32, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <p style={{ fontSize: 13 }}><span style={{ fontSize: 10, fontWeight: 700, color: "#60A5FA", textTransform: "uppercase", marginRight: 8 }}>Result:</span><span style={{ color: "#fff", fontWeight: 500 }}>{p.result}</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}