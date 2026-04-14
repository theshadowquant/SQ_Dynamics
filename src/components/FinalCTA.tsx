import { motion } from "framer-motion";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
);

const CallIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
);
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
              <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
                {/* Lekhan Controls */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
                  <div style={{ fontSize: 13, color: "#9CA3AF", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Lekhan (+91 76763 09842)</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <a href="https://wa.me/917676309842?text=Hi%20ShadowQuant%20team!%20I'd%20like%20to%20discuss%20building%20a%20premium%20digital%20system%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="btn-glow"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 8, background: "rgba(37,99,235,0.1)", color: "#fff", fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1px solid rgba(59,130,246,0.3)" }}>
                      <WhatsAppIcon /> WhatsApp
                    </a>
                    <a href="tel:+917676309842" className="btn-glow"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 8, background: "rgba(16,185,129,0.1)", color: "#fff", fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1px solid rgba(16,185,129,0.3)" }}>
                      <CallIcon /> Call
                    </a>
                  </div>
                </div>

                {/* Varun Controls */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
                  <div style={{ fontSize: 13, color: "#9CA3AF", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Varun (+91 89045 45195)</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <a href="https://wa.me/918904545195?text=Hi%20ShadowQuant%20team!%20I'd%20like%20to%20discuss%20building%20a%20premium%20digital%20system%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="btn-glow"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 8, background: "rgba(37,99,235,0.1)", color: "#fff", fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1px solid rgba(59,130,246,0.3)" }}>
                      <WhatsAppIcon /> WhatsApp
                    </a>
                    <a href="tel:+918904545195" className="btn-glow"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 8, background: "rgba(16,185,129,0.1)", color: "#fff", fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1px solid rgba(16,185,129,0.3)" }}>
                      <CallIcon /> Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}