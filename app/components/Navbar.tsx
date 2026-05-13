"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "fiverr", href: "#fiverr" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled || menuOpen ? "rgba(238,242,249,0.96)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all 0.3s ease",
          padding: "0 40px",
        }}
      >
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 64,
        }}>
          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--text-primary)",
              textDecoration: "none",
              letterSpacing: "0.5px",
            }}
          >
            agus<span style={{ color: "var(--accent)" }}>.</span>dev
          </a>

          {/* Desktop links */}
          <ul style={{
            display: "flex",
            gap: 32,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
            className="nav-desktop-links"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 12,
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    letterSpacing: "0.5px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="nav-desktop-links"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              fontWeight: 500,
              border: "1.5px solid var(--accent)",
              color: "var(--accent)",
              background: "transparent",
              borderRadius: 6,
              padding: "7px 16px",
              textDecoration: "none",
              letterSpacing: "1px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "var(--accent)";
              el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "var(--accent)";
            }}
          >
            HIRE ME
          </a>

          {/* Hamburger button — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              color: "var(--text-primary)",
            }}
          >
            {menuOpen ? (
              /* X icon */
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="3" x2="19" y2="19" />
                <line x1="19" y1="3" x2="3" y2="19" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="6" x2="20" y2="6" />
                <line x1="2" y1="11" x2="20" y2="11" />
                <line x1="2" y1="16" x2="20" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 49,
            background: "rgba(238,242,249,0.97)",
            backdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            animation: "menuFadeIn 0.2s ease",
          }}
        >
          <style>{`
            @keyframes menuFadeIn {
              from { opacity: 0; transform: translateY(-8px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            @media (max-width: 640px) {
              .nav-desktop-links { display: none !important; }
              .nav-hamburger { display: flex !important; }
            }
          `}</style>

          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 32,
                fontWeight: 700,
                color: "var(--text-primary)",
                textDecoration: "none",
                letterSpacing: "-0.5px",
                animation: `menuFadeIn 0.25s ease both ${i * 0.06 + 0.05}s`,
              }}
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              marginTop: 8,
              fontFamily: "'DM Mono', monospace",
              fontSize: 13,
              fontWeight: 500,
              border: "1.5px solid var(--accent)",
              color: "var(--accent)",
              background: "transparent",
              borderRadius: 8,
              padding: "12px 28px",
              textDecoration: "none",
              letterSpacing: "1px",
              animation: `menuFadeIn 0.25s ease both ${links.length * 0.06 + 0.05}s`,
            }}
          >
            HIRE ME
          </a>
        </div>
      )}

      {/* Inject mobile CSS outside the nav to avoid re-render issues */}
      <style>{`
        @media (max-width: 640px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
