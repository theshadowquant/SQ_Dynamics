import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="contact" style={{ padding: "128px 0", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 48px", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="glass-panel" style={{ padding: "64px 48px", borderRadius: 24, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", maxWidth: 400, height: 300, background: "linear-gradient(to right, rgba(37,99,235,0.2), rgba(124,58,237,0.2))", filter: "blur(80px)", borderRadius: "50%", zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.2, marginBottom: 24 }}>
              Every Day You Wait Is Revenue You're <span className="text-gradient">Handing to a Competitor.</span>
            </h2>
            <p style={{ fontSize: 20, color: "#D1D5DB", marginBottom: 40, maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.7, fontWeight: 300 }}>
              Businesses that invest in high-performance digital systems consistently outgrow those that don't. The question isn't whether you can afford to work with us — it's whether you can afford not to.
            </p>
            <a href="#" className="btn-glow"
               style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "20px 40px", borderRadius: 8, background: "#0B0B0F", color: "#fff", fontWeight: 700, fontSize: 20, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)", marginBottom: 24 }}>
              Claim Your Spot →
            </a>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#F87171", textTransform: "uppercase", letterSpacing: 3 }}>
              We take on 3 new projects per month. Spots fill fast.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}