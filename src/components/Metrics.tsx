const metrics = [
  "3.8x Average Conversion Lift",
  "47-Day Avg. Launch Time",
  "<2s Page Load Guaranteed",
  "D2C Brands Scaled",
  "Automation Systems Deployed",
  "Revenue-Optimized UX",
];

export default function Metrics() {
  return (
    <div style={{ padding: "48px 0", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
      <div className="marquee-container">
        <div className="marquee-content" style={{ gap: 48 }}>
          {[...metrics, ...metrics, ...metrics].map((m, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
              <span style={{ color: "#3B82F6" }}>✦</span>
              <span style={{ fontSize: 18, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, color: "#D1D5DB", whiteSpace: "nowrap" }}>{m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}