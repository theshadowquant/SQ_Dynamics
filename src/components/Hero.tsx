import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80, overflow: "hidden" }}>
      {/* Grid background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right,#80808012 1px,transparent 1px),linear-gradient(to bottom,#80808012 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
      {/* Glow blobs */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 400, height: 400, borderRadius: "50%", background: "#3B82F6", opacity: 0.15, filter: "blur(100px)" }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: 500, height: 500, borderRadius: "50%", background: "#8B5CF6", opacity: 0.15, filter: "blur(120px)" }} />

      {/* Floating orbs */}
      <motion.div animate={{ y: [0,-30,0], opacity: [0.3,0.6,0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "25%", left: "25%", width: 128, height: 128, borderRadius: "50%", background: "#3B82F6", filter: "blur(40px)", opacity: 0.3 }} />
      <motion.div animate={{ y: [0,40,0], opacity: [0.2,0.5,0.2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: "absolute", bottom: "33%", right: "25%", width: 192, height: 192, borderRadius: "50%", background: "#8B5CF6", filter: "blur(40px)", opacity: 0.2 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 48px)", position: "relative", zIndex: 10, textAlign: "center", width: "100%" }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
          Your Competitors Already Have This.<br />
          <span className="text-gradient">You Don't.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          style={{ fontSize: "clamp(18px, 2.5vw, 22px)", color: "#9CA3AF", marginBottom: 40, maxWidth: 700, margin: "0 auto 40px", lineHeight: 1.6 }}>
          We engineer digital systems that don't just look good — they print revenue. Websites, apps, and automations built to convert at every touchpoint.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" className="btn-glow"
             style={{ padding: "16px 32px", borderRadius: 6, background: "#0B0B0F", color: "#fff", fontWeight: 700, fontSize: 18, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
            Start Printing Revenue →
          </a>
          <a href="#work"
             style={{ padding: "16px 32px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontWeight: 600, fontSize: 18, textDecoration: "none" }}>
            See Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}