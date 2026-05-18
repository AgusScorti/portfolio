"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "CaluContable",
    status: "live" as const,
    url: "https://www.calucontable.com.ar/",
    description:
      "Full-stack platform for accounting firms — landing page, admin panel, video section, resources and Calendly scheduling. All manageable without code.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind"],
    gradient: "linear-gradient(135deg, #6B5CE7 0%, #3BBFCE 100%)",
  },
  {
    name: "MarcaYa",
    status: "live" as const,
    url: "https://www.marcaya.cl/",
    description:
      "Chilean platform that simplifies trademark registration with INAPI using AI. Real trademark search, Claude AI for classification, PDF generation and live payments.",
    tags: ["Next.js", "Supabase", "Claude AI", "Mercado Pago"],
    gradient: "linear-gradient(135deg, #3BBFCE 0%, #27AE7A 100%)",
  },
  {
    name: "GirasolesEti",
    status: "private" as const,
    url: null,
    description:
      "Billing management app for a healthcare center. Automatic invoice matching — when a payment arrives, it finds the provider and calculates every combination matching the exact amount.",
    tags: ["Next.js", "Prisma ORM", "PostgreSQL", "Supabase", "Zod"],
    gradient: "linear-gradient(135deg, #7C6EF0 0%, #6B5CE7 100%)",
  },
  {
    name: "New project",
    status: "wip" as const,
    url: null,
    description: "Something new is in the works. Stay tuned.",
    tags: ["Next.js", "Supabase"],
    gradient: "linear-gradient(135deg, #D4860A 0%, #E8A020 100%)",
  },
];

const statusConfig = {
  live:    { label: "Live",        bg: "var(--green-bg)",  color: "var(--green)",  border: "#B8E8D4" },
  private: { label: "Private",     bg: "var(--orange-bg)", color: "var(--orange)", border: "#F0D8A0" },
  wip:     { label: "In progress", bg: "var(--purple-bg)", color: "var(--purple)", border: "#D4CCF8" },
};

const STYLES = `
  @keyframes fadeUpIn {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .projects-section {
    padding: 100px 40px 80px;
    max-width: 1100px;
    margin: 0 auto;
    border-top: 1px solid var(--border-soft);
  }
  .projects-visible .anim-p { animation: fadeUpIn 0.65s ease both; }
  .anim-p { opacity: 0; }

  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 40px;
  }

  .project-card {
    background: var(--bg-card);
    border: 1px solid var(--border-soft);
    border-radius: 20px;
    padding: 28px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  .project-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    border-radius: 20px 20px 0 0;
    opacity: 0.9;
    transition: height 0.3s ease;
  }
  .project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(107,92,231,0.12);
  }
  .project-card:hover::before { height: 4px; }

  .project-card.wip {
    border-style: dashed;
    opacity: 0.7;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: auto;
    padding-top: 18px;
  }

  @media (max-width: 640px) {
    .projects-section {
      padding: 72px 24px 64px;
    }
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
`;

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className={`projects-section${visible ? " projects-visible" : ""}`}
      ref={ref}
    >
      <style>{STYLES}</style>

      <p className="anim-p" style={{
        animationDelay: "0.05s",
        fontFamily: "'DM Mono', monospace",
        fontSize: 11,
        letterSpacing: "2px",
        color: "var(--accent)",
        marginBottom: 10,
        textTransform: "uppercase",
      }}>
        // work
      </p>

      <h2 className="anim-p" style={{
        animationDelay: "0.15s",
        fontFamily: "'Nunito', sans-serif",
        fontSize: "clamp(36px, 5vw, 54px)",
        fontWeight: 800,
        color: "var(--text-primary)",
        lineHeight: 1.1,
        margin: 0,
      }}>
        Things I&apos;ve built<span style={{ color: "var(--accent)" }}>.</span>
      </h2>

      <div className="projects-grid">
        {projects.map((p, i) => {
          const s = statusConfig[p.status];
          return (
            <div
              key={p.name}
              className={`project-card anim-p${p.status === "wip" ? " wip" : ""}`}
              style={{
                animationDelay: `${0.2 + i * 0.1}s`,
              }}
            >
              {/* Gradient top bar via pseudo-element — set via inline var */}
              <style>{`.project-card:nth-child(${i + 1})::before { background: ${p.gradient}; }`}</style>

              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <h3 style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  {p.name}
                </h3>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: s.bg,
                  color: s.color,
                  border: `1px solid ${s.border}`,
                  whiteSpace: "nowrap",
                  marginLeft: 12,
                }}>
                  {s.label}
                </span>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 14,
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                fontWeight: 400,
                margin: 0,
              }}>
                {p.description}
              </p>

              {/* Tags */}
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: "var(--bg-card2)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                  }}>
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
                    marginTop: 20,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--accent)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  View live site ↗
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
