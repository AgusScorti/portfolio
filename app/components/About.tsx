"use client";
const skills = {
  "Frontend": ["React", "Next.js 15", "TypeScript", "Tailwind CSS"],
  "Backend": [".NET / C#", "REST APIs", "Node.js"],
  "Database": ["PostgreSQL", "Supabase", "SQL Server", "Prisma ORM"],
  "Tools": ["Docker", "Git", "Azure DevOps", "Power BI"],
};

const experience = [
  {
    role: "Software Developer",
    company: "Banco de la Provincia de Buenos Aires",
    period: "Nov 2025 – Present",
    desc: "Building APIs and web apps connecting modern platforms with legacy core banking systems.",
  },
  {
    role: "QA Analyst",
    company: "Banco de la Provincia de Buenos Aires",
    period: "Jul 2021 – Oct 2025",
    desc: "Manual testing for web and mobile banking platforms used by thousands of daily users.",
  },
];

const certs = ["ISTQB® CTFL v4.0", "Data Engineer", "Power BI Specialization", "Data Analysis with Python"];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 40px",
        maxWidth: 1100,
        margin: "0 auto",
        borderTop: "1px solid var(--border-soft)",
      }}
    >
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "2px", color: "var(--accent)", marginBottom: 8, textTransform: "uppercase" }}>
        About
      </p>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-1px", marginBottom: 48 }}>
        A bit about me.
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        {/* Left col */}
        <div>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, fontWeight: 300, marginBottom: 24 }}>
            Systems Engineer from <strong style={{ fontWeight: 500, color: "var(--text-primary)" }}>UTN La Plata</strong> (GPA 8.42). Currently
            working as Software Developer at{" "}
            <strong style={{ fontWeight: 500, color: "var(--text-primary)" }}>Banco de la Provincia de Buenos Aires</strong>, building APIs and web
            applications that bridge modern platforms with legacy core banking systems.
          </p>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, fontWeight: 300, marginBottom: 32 }}>
            I enjoy solving real problems with clean code — whether it&apos;s a full-stack web app, a REST API, or an automated billing system. Fluent in{" "}
            <strong style={{ fontWeight: 500, color: "var(--text-primary)" }}>English</strong> (advanced oral and written).
          </p>

          {/* Experience */}
          <div>
            {experience.map((e, i) => (
              <div
                key={i}
                style={{
                  padding: "16px 0",
                  borderBottom: i < experience.length - 1 ? "1px solid var(--border-soft)" : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>{e.role}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.5px" }}>
                    {e.period}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: "var(--accent)", marginBottom: 4, fontFamily: "'DM Mono', monospace" }}>{e.company}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, fontWeight: 300 }}>{e.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right col */}
        <div>
          {/* Skills grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-soft)",
                  borderRadius: 10,
                  padding: "16px",
                }}
              >
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--accent2)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 10 }}>
                  {category}
                </div>
                {items.map((s) => (
                  <div key={s} style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 4, fontWeight: 300 }}>
                    {s}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
            {[
              { num: "4+", label: "Years exp." },
              { num: "8.42", label: "GPA UTN" },
              { num: "3", label: "Live projects" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "var(--bg-card2)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Certs */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-soft)", borderRadius: 10, padding: 16 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--accent2)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 12 }}>
              Certifications
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {certs.map((c) => (
                <span
                  key={c}
                  style={{
                    fontSize: 12,
                    background: "var(--accent-light)",
                    color: "var(--accent)",
                    border: "1px solid #D4CCF8",
                    borderRadius: 5,
                    padding: "4px 10px",
                    fontWeight: 400,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
