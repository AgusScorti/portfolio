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

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(238,242,249,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: "0 40px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: 64 }}>
        {/* Logo */}
        <a
          href="#"
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
        <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
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

        {/* CTA */}
        <a
          href="#contact"
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
      </div>
    </nav>
  );
}
