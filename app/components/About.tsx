"use client";
import { useState, useEffect, useRef } from "react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "linear-gradient(135deg, #6B5CE7 0%, #3BBFCE 100%)",
  },
  {
    category: "Backend",
    items: [".NET / C#", "REST APIs", "Node.js"],
    gradient: "linear-gradient(135deg, #3BBFCE 0%, #27AE7A 100%)",
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Supabase", "SQL Server", "Prisma ORM"],
    gradient: "linear-gradient(135deg, #7C6EF0 0%, #6B5CE7 100%)",
  },
  {
    category: "Tools",
    items: ["Docker", "Git", "Azure DevOps", "Power BI"],
    gradient: "linear-gradient(135deg, #D4860A 0%, #E8A020 100%)",
  },
];

const certs = [
  "ISTQB® CTFL v4.0",
  "Data Engineer",
  "Power BI Specialization",
  "Data Analysis with Python",
];

const STYLES = `
  @keyframes fadeUpIn {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes cardFloat {
    0%,100% { transform: translateY(0px); }
    50%     { transform: translateY(-6px); }
  }

  .about-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 40px 60px;
    max-width: 1100px;
    margin: 0 auto;
    border-top: 1px solid var(--border-soft);
  }

  .about-visible .anim { animation: fadeUpIn 0.65s ease both; }
  .anim { opacity: 0; }

  /* Flip card grid */
  .flip-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin: 36px 0 44px;
  }
  .flip-wrap {
    perspective: 1000px;
    cursor: pointer;
    height: 250px;
  }
  .flip-wrap:hover .flip-front {
    box-shadow: 0 12px 40px rgba(107,92,231,0.18);
    transform: translateY(-4px) scale(1.02);
  }
  .flip-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .flip-wrap.flipped .flip-inner {
    transform: rotateY(180deg);
  }
  .flip-front, .flip-back {
    position: absolute;
    inset: 0;
    border-radius: 20px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    display: flex;
    flex-direction: column;
  }
  .flip-front {
    background: var(--bg-card);
    border: 1px solid var(--border-soft);
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
  .flip-back {
    transform: rotateY(180deg);
    padding: 22px 20px;
    justify-content: flex-start;
  }

  /* Certs as chips */
  .cert-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .cert-chip {
    transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }
  .cert-chip-0:hover { background: linear-gradient(135deg, #6B5CE7, #3BBFCE); border-color: transparent; color: #fff; }
  .cert-chip-1:hover { background: linear-gradient(135deg, #3BBFCE, #27AE7A); border-color: transparent; color: #fff; }
  .cert-chip-2:hover { background: linear-gradient(135deg, #7C6EF0, #6B5CE7); border-color: transparent; color: #fff; }
  .cert-chip-3:hover { background: linear-gradient(135deg, #D4860A, #E8A020); border-color: transparent; color: #fff; }

  @media (max-width: 640px) {
    .about-section {
      min-height: 100svh;
      padding: 90px 24px 60px;
    }
    .flip-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
      margin: 28px 0 36px;
    }
    .flip-wrap { height: 200px; }
    .flip-wrap:hover .flip-front {
      transform: none;
      box-shadow: none;
    }
  }
`;

export default function About() {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`about-section${visible ? " about-visible" : ""}`}
      ref={ref}
    >
      <style>{STYLES}</style>

      {/* Header */}
      <div>
        <p
          className="anim"
          style={{ animationDelay: "0.05s", fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "2px", color: "var(--accent)", marginBottom: 10, textTransform: "uppercase" }}
        >
          // about
        </p>

        <div style={{ display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
          <h2
            className="anim"
            style={{ animationDelay: "0.15s", fontFamily: "'Nunito', sans-serif", fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.1, margin: 0 }}
          >
            What I do<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <span
            className="anim"
            style={{ animationDelay: "0.22s", fontFamily: "'Nunito', sans-serif", fontSize: 15, color: "var(--text-muted)", fontWeight: 500 }}
          >
            4+ years building things
          </span>
        </div>
      </div>

      {/* Flip cards */}
      <div className="flip-grid">
        {skills.map(({ category, items, gradient }, i) => (
          <div
            key={category}
            className={`flip-wrap anim${flipped === i ? " flipped" : ""}`}
            style={{ animationDelay: `${0.25 + i * 0.09}s` }}
            onClick={() => setFlipped(flipped === i ? null : i)}
          >
            <div className="flip-inner">
              {/* Front */}
              <div className="flip-front">
                <div style={{
                  width: 40,
                  height: 4,
                  borderRadius: 2,
                  background: gradient,
                  marginBottom: 8,
                }} />
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 20,
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  textAlign: "center",
                }}>
                  {category}
                </span>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 12,
                  color: "var(--text-muted)",
                  fontWeight: 500,
                }}>
                  {items.length} skills
                </span>
              </div>

              {/* Back */}
              <div className="flip-back" style={{ background: gradient }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}>
                  {category}
                </div>
                {items.map((s) => (
                  <div key={s} style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 7,
                  }}>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div
        className="anim"
        style={{ animationDelay: "0.65s" }}
      >
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 10,
          color: "var(--accent2)",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: 16,
        }}>
          Certifications
        </p>
        <div className="cert-list">
          {certs.map((c, i) => (
            <span key={c} className={`cert-chip cert-chip-${i}`} style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text-secondary)",
              background: "var(--bg-card)",
              border: "1.5px solid var(--border)",
              borderRadius: 999,
              padding: "7px 16px",
              display: "inline-block",
              cursor: "default",
            }}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
