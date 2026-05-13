"use client";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-soft)",
        padding: "28px 40px",
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          color: "var(--text-muted)",
          letterSpacing: "0.5px",
        }}
      >
        © {year} Agustín Scorticati
      </span>
      <div style={{ display: "flex", gap: 24 }}>
        {[
          { label: "GitHub", href: "https://github.com/agustinscorticati" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/agustinscorticati/" },
          { label: "Fiverr", href: "https://www.fiverr.com/agusscorti?public_mode=true" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "var(--text-muted)",
              textDecoration: "none",
              letterSpacing: "0.5px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
