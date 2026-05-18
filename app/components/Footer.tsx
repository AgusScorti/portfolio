"use client";

const links = [
  { label: "GitHub",   href: "https://github.com/agustinscorticati" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/agustinscorticati/" },
  { label: "Fiverr",   href: "https://www.fiverr.com/agusscorti?public_mode=true" },
];

const STYLES = `
  .footer-root {
    border-top: 1px solid var(--border-soft);
    padding: 32px 40px;
  }
  .footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
  }
  .footer-link {
    font-family: 'Nunito', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.2s;
  }
  .footer-link:hover { color: var(--accent); }

  @media (max-width: 640px) {
    .footer-root { padding: 28px 24px; }
    .footer-inner { flex-direction: column; align-items: flex-start; gap: 16px; }
  }
`;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-root">
      <style>{STYLES}</style>
      <div className="footer-inner">
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            color: "var(--text-primary)",
          }}>
            agus<span style={{ color: "var(--accent)" }}>.</span>dev
          </span>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: "var(--text-muted)",
          }}>
            — © {year}
          </span>
        </div>

        <div style={{ display: "flex", gap: 28 }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
