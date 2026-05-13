"use client";
const projects = [
  {
    name: "CaluContable",
    status: "live" as const,
    url: "https://www.calucontable.com.ar/",
    description:
      "Full-stack platform for independent professionals and accounting firms. Features a responsive landing page, admin panel with authentication, video section, downloadable resources, and Calendly scheduling — all manageable without code.",
    tags: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    highlight: "Modular architecture — rebrandable for any client with minimal effort.",
  },
  {
    name: "MarcaYa",
    status: "live" as const,
    url: "https://www.marcaya.cl/",
    description:
      "Chilean platform that simplifies trademark registration with INAPI using AI. Integrates real trademark search against the INAPI registry, Claude Opus AI for Nice class classification, PDF generation for official submission, and live Mercado Pago payments.",
    tags: ["Next.js", "Supabase Auth", "Claude AI", "Mercado Pago", "PDF generation", "Vercel"],
    highlight: "Key discovery: INAPI exposes a JSON endpoint — no Playwright needed, zero extra infra cost.",
  },
  {
    name: "GirasolesEti",
    status: "private" as const,
    url: null,
    description:
      "Full-stack billing management app for a multidisciplinary healthcare center. Features an automatic invoice matching algorithm: when a payment arrives, the system identifies the provider by tax ID and calculates every combination matching the exact amount.",
    tags: ["Next.js 15", "TypeScript", "Prisma ORM", "PostgreSQL", "Supabase", "Zod"],
    highlight: "Real-time dashboard with pending totals, overdue alerts, and partial payment tracking.",
  },
  {
    name: "New project",
    status: "wip" as const,
    url: null,
    description:
      "Currently in development. Details coming soon.",
    tags: ["Next.js", "Supabase"],
    highlight: "",
  },
];

const statusConfig = {
  live: { label: "LIVE", bg: "var(--green-bg)", color: "var(--green)", border: "#B8E8D4" },
  private: { label: "PRIVATE", bg: "var(--orange-bg)", color: "var(--orange)", border: "#F0D8A0" },
  wip: { label: "IN PROGRESS", bg: "var(--purple-bg)", color: "var(--purple)", border: "#D4CCF8" },
};

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 40px",
        maxWidth: 1100,
        margin: "0 auto",
        borderTop: "1px solid var(--border-soft)",
      }}
    >
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "2px", color: "var(--accent)", marginBottom: 8, textTransform: "uppercase" }}>
        Work
      </p>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-1px", marginBottom: 48 }}>
        Selected projects.
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {projects.map((p) => {
          const s = statusConfig[p.status];
          return (
            <div
              key={p.name}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-soft)",
                borderRadius: 14,
                padding: 24,
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.2s, transform 0.2s",
                borderTop: p.status === "live" ? "2px solid var(--accent)" : "1px solid var(--border-soft)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-soft)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  {p.name}
                </h3>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 9,
                    fontWeight: 500,
                    padding: "3px 9px",
                    borderRadius: 4,
                    letterSpacing: "1px",
                    background: s.bg,
                    color: s.color,
                    border: `1px solid ${s.border}`,
                  }}
                >
                  {s.label}
                </span>
              </div>

              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300, marginBottom: 14 }}>
                {p.description}
              </p>

              {p.highlight && (
                <p style={{
                  fontSize: 12,
                  color: "var(--accent)",
                  background: "var(--accent-light)",
                  border: "1px solid #D4CCF8",
                  borderRadius: 6,
                  padding: "8px 12px",
                  marginBottom: 16,
                  fontStyle: "italic",
                  lineHeight: 1.5,
                }}>
                  💡 {p.highlight}
                </p>
              )}

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      padding: "3px 8px",
                      borderRadius: 4,
                      background: "var(--bg-card2)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                      letterSpacing: "0.2px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    color: "var(--accent)",
                    textDecoration: "none",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.3px",
                    fontWeight: 500,
                  }}
                >
                  ↗ view live site
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
