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
              The question isn't whether you can afford to work with us — it's whether you can afford not to. Reach out below.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center", marginBottom: 32 }}>
              <a href="mailto:shadowquantdynamics@gmail.com" className="btn-glow"
                 style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "20px 40px", borderRadius: 8, background: "#0B0B0F", color: "#fff", fontWeight: 700, fontSize: 18, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
                ✉️ shadowquantdynamics@gmail.com
              </a>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
                <a href="https://wa.me/917676309842?text=Hi%20ShadowQuant%20team!%20I'd%20like%20to%20discuss%20building%20a%20premium%20digital%20system%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="btn-glow"
                   style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 24px", borderRadius: 8, background: "rgba(37,99,235,0.1)", color: "#fff", fontWeight: 600, fontSize: 16, textDecoration: "none", border: "1px solid rgba(59,130,246,0.3)" }}>
                  📞 +91 76763 09842 (Lekhan)
                </a>
                <a href="https://wa.me/918904545195?text=Hi%20ShadowQuant%20team!%20I'd%20like%20to%20discuss%20building%20a%20premium%20digital%20system%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="btn-glow"
                   style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 24px", borderRadius: 8, background: "rgba(37,99,235,0.1)", color: "#fff", fontWeight: 600, fontSize: 16, textDecoration: "none", border: "1px solid rgba(59,130,246,0.3)" }}>
                  📞 +91 89045 45195 (Varun)
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}