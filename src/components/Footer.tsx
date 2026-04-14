export default function Footer() {
  return (
    <footer style={{ padding: "clamp(32px, 5vw, 48px) 0", borderTop: "1px solid rgba(255,255,255,0.08)", background: "#0B0B0F", position: "relative", zIndex: 20 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 5vw, 48px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div>
          <a href="#" style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", textDecoration: "none", color: "#fff" }}>
            ShadowQuant <span style={{ color: "#3B82F6" }}>Dynamics</span>
          </a>
          <div style={{ fontSize: 13, color: "#6B7280", marginTop: 4 }}>Digital systems that print revenue.</div>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 14, color: "#6B7280" }}>
          {["Services", "Work", "Team"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ textDecoration: "none", color: "inherit" }}>{l}</a>
          ))}
        </div>
        <div style={{ fontSize: 13, color: "#374151" }}>© {new Date().getFullYear()} ShadowQuant Dynamics.</div>
      </div>
    </footer>
  );
}