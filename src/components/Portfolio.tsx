import { motion } from "framer-motion";

const projects = [
  { name: "Strength Arena", type: "Premium GYM", problem: "Low visibility and suboptimal online conversion.", solution: "Immersive visual design + streamlined conversion funnel.", result: "High conversion of trial pass claims.", link: "https://sq-strength-arena.vercel.app" },
  { name: "Thaiba Greenways", type: "Premium SCHOOL", problem: "Outdated digital map leading to disjointed communications.", solution: "Modern infrastructure with clean, fast UI.", result: "Huge increase in online inquiries.", link: "https://thaibagreenwayshrr.org" },
  { name: "Anusha Art Classes", type: "ONLINE ART SCH.", problem: "Poor course discoverability and drop-offs.", solution: "Centralized course platform + high-converting landing pages.", result: "Consistent growth in student enrollments.", link: "https://aoac-website.vercel.app/" },
  { name: "MP68 Chipswala", type: "Premium BUSINESS", problem: "Lack of digital visibility and direct sales channel.", solution: "Robust online catalog + localized organic optimization.", result: "Expanded brand reach and sales pipeline.", link: "https://mp68chipswala.vercel.app/" },
];

export default function Portfolio() {
  return (
    <section id="work" style={{ padding: "clamp(64px, 10vw, 96px) 0", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 48px)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", marginBottom: 16 }}>The Proof.</h2>
          <div style={{ width: 80, height: 4, background: "linear-gradient(to right, #3B82F6, #8B5CF6)", borderRadius: 2 }} />
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
          {projects.map((p, i) => (
            <motion.a key={i} href={p.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel glass-panel-hover" style={{ display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", height: "100%" }}>
              <div style={{ padding: "32px 32px 0", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, gap: 16 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>{p.name}</h3>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: "#A78BFA", background: "rgba(167,139,250,0.1)", padding: "6px 12px", borderRadius: 20, textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0 }}>{p.type}</span>
                </div>
                <div style={{ marginBottom: 32, display: "flex", flexDirection: "column", gap: 12 }}>
                  <p style={{ fontSize: 13, margin: 0 }}><span style={{ fontSize: 10, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", marginRight: 8 }}>Problem:</span><span style={{ color: "#D1D5DB" }}>{p.problem}</span></p>
                  <p style={{ fontSize: 13, margin: 0 }}><span style={{ fontSize: 10, fontWeight: 700, color: "#4B5563", textTransform: "uppercase", marginRight: 8 }}>Solution:</span><span style={{ color: "#D1D5DB" }}>{p.solution}</span></p>
                </div>
              </div>
              <div style={{ background: "linear-gradient(to right, rgba(30,64,175,0.2), rgba(88,28,135,0.2))", padding: 32, borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "auto" }}>
                <p style={{ fontSize: 13, margin: 0 }}><span style={{ fontSize: 10, fontWeight: 700, color: "#60A5FA", textTransform: "uppercase", marginRight: 8 }}>Result:</span><span style={{ color: "#fff", fontWeight: 500 }}>{p.result}</span></p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}