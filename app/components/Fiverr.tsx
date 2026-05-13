"use client";
export default function Fiverr() {
  return (
    <section
      id="fiverr"
      style={{
        padding: "80px 40px",
        maxWidth: 1100,
        margin: "0 auto",
        borderTop: "1px solid var(--border-soft)",
      }}
    >
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "2px", color: "var(--accent)", marginBottom: 8, textTransform: "uppercase" }}>
        Freelance
      </p>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-1px", marginBottom: 40 }}>
        Hire me on Fiverr.
      </h2>

      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-soft)",
          borderRadius: 16,
          padding: "40px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 40,
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 42,
              fontWeight: 800,
              color: "#1DBF73",
              letterSpacing: "-1px",
              marginBottom: 16,
              lineHeight: 1,
            }}
          >
            fiverr<span style={{ color: "#14A864" }}>.</span>
          </div>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75, fontWeight: 300, maxWidth: 460, marginBottom: 24 }}>
            Looking for a reliable developer for your next web project? I offer{" "}
            <strong style={{ fontWeight: 500, color: "var(--text-primary)" }}>Next.js applications</strong>,{" "}
            <strong style={{ fontWeight: 500, color: "var(--text-primary)" }}>REST API development</strong>,{" "}
            <strong style={{ fontWeight: 500, color: "var(--text-primary)" }}>database design</strong> and{" "}
            <strong style={{ fontWeight: 500, color: "var(--text-primary)" }}>Supabase integrations</strong> — clean code,
            clear communication, fast delivery.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a
              href="https://www.fiverr.com/agusscorti?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#1DBF73",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "12px 24px",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              View my profile →
            </a>
            <a
              href="#contact"
              style={{
                background: "transparent",
                color: "var(--text-secondary)",
                border: "1.5px solid var(--border)",
                borderRadius: 8,
                padding: "11px 24px",
                fontSize: 14,
                fontWeight: 400,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            >
              Contact directly
            </a>
          </div>
        </div>

        {/* Services list */}
        <div
          style={{
            flexShrink: 0,
            background: "var(--bg-card2)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "24px 28px",
            minWidth: 220,
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--accent2)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>
            Services
          </div>
          {[
            "Full-stack web apps",
            "Next.js development",
            "REST API development",
            "Database design",
            "Supabase integration",
            "Admin panel / CMS",
          ].map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 13,
                color: "var(--text-secondary)",
                marginBottom: 10,
                fontWeight: 300,
              }}
            >
              <span style={{ color: "#1DBF73", fontSize: 16, lineHeight: 1 }}>✓</span>
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
