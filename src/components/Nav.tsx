import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s",
        ...(scrolled ? { background: "rgba(11,11,15,0.8)", backdropFilter: "blur(12px)", padding: "12px 0" } : { background: "transparent", padding: "20px 0" })
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 48px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", textDecoration: "none", color: "#fff" }}>
          ShadowQuant <span style={{ color: "#3B82F6" }}>Dynamics</span>
        </a>
        <div className="nav-links" style={{ display: "flex", gap: 32, fontSize: 14, fontWeight: 500, color: "#9CA3AF" }}>
          {["Services", "Work", "Team", "Contact"].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{ textDecoration: "none", color: "inherit", transition: "color 0.2s" }}
               onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
               onMouseLeave={e => (e.currentTarget.style.color = "#9CA3AF")}>{link}</a>
          ))}
        </div>
        <a href="#contact" className="btn-glow"
           style={{ padding: "10px 24px", borderRadius: 6, background: "#0B0B0F", color: "#fff", fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)", whiteSpace: "nowrap" }}>
          Start a Project
        </a>
      </div>
    </motion.nav>
  );
}