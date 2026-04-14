import { motion } from "framer-motion";

const team = [
  { name: "LEKHAN V T", role: "Founder", desc: "Highly trained engineering student. The architect behind our digital systems, turning complex problems into scalable code." },
  { name: "S M VARUN", role: "Co-Founder", desc: "Skilled engineering student and performance obsessive. He ensures every product we ship is incredibly fast and optimized." },
  { name: "DARSHAN MAHAVEER MANG", role: "Co-Founder", desc: "Highly skilled engineering student. An automation-first thinker who eliminates operational bottlenecks with pure logic." },
];

export default function Team() {
  return (
    <section id="team" style={{ padding: "96px 0", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 64, textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", marginBottom: 16 }}>The Operatives.</h2>
          <div style={{ width: 80, height: 4, background: "linear-gradient(to right, #3B82F6, #8B5CF6)", borderRadius: 2, margin: "0 auto" }} />
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
          {team.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel glass-panel-hover" style={{ padding: 32, borderRadius: 16, textAlign: "center" }}>
              <div style={{ width: 96, height: 96, borderRadius: "50%", background: "linear-gradient(135deg, #1F2937, #111827)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 28, fontWeight: 700, color: "#4B5563", fontFamily: "'Space Grotesk', sans-serif" }}>
                {m.name.charAt(0)}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: 1, marginBottom: 4 }}>{m.name}</h3>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#60A5FA", textTransform: "uppercase", marginBottom: 16 }}>{m.role}</div>
              <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.7 }}>{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}