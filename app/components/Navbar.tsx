"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "about",    href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "fiverr",   href: "#fiverr" },
  { label: "contact",  href: "#contact" },
];

const STYLES = `
  .nav-root {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 50;
    transition: background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;
    padding: 0 40px;
    border-bottom: 1px solid transparent;
  }
  .nav-root.scrolled {
    background: rgba(238,242,249,0.92);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom-color: var(--border);
  }
  .nav-root.menu-open {
    background: rgba(238,242,249,0.97);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom-color: var(--border);
  }
  .nav-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
  }
  .nav-logo {
    font-family: 'Nunito', sans-serif;
    font-size: 17px;
    font-weight: 800;
    color: var(--text-primary);
    text-decoration: none;
    letter-spacing: -0.3px;
  }
  .nav-links {
    display: flex;
    gap: 36px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav-link {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.2s;
  }
  .nav-link:hover { color: var(--text-primary); }

  .nav-cta {
    font-family: 'Nunito', sans-serif;
    font-size: 13px;
    font-weight: 700;
    border: 1.5px solid var(--accent);
    color: var(--accent);
    background: transparent;
    border-radius: 999px;
    padding: 7px 18px;
    text-decoration: none;
    letter-spacing: 0.3px;
    transition: background 0.2s, color 0.2s;
  }
  .nav-cta:hover { background: var(--accent); color: #fff; }

  /* Hamburger */
  .nav-hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
    color: var(--text-primary);
    align-items: center;
    justify-content: center;
  }

  /* Mobile overlay */
  .nav-overlay {
    position: fixed;
    top: 64px; left: 0; right: 0; bottom: 0;
    z-index: 49;
    background: rgba(238,242,249,0.97);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  @keyframes overlayLink {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .overlay-link {
    font-family: 'Nunito', sans-serif;
    font-size: 36px;
    font-weight: 800;
    color: var(--text-primary);
    text-decoration: none;
    padding: 10px 0;
    transition: color 0.2s;
    letter-spacing: -0.5px;
  }
  .overlay-link:hover { color: var(--accent); }

  .overlay-cta {
    margin-top: 16px;
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 700;
    border: 1.5px solid var(--accent);
    color: var(--accent);
    background: transparent;
    border-radius: 999px;
    padding: 12px 32px;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
  }
  .overlay-cta:hover { background: var(--accent); color: #fff; }

  @media (max-width: 640px) {
    .nav-root { padding: 0 24px; }
    .nav-links, .nav-cta { display: none; }
    .nav-hamburger { display: flex; }
  }
`;

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <style>{STYLES}</style>

      <nav className={`nav-root${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" className="nav-logo" onClick={close}>
            agus<span style={{ color: "var(--accent)" }}>.</span>dev
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link">{l.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="#contact" className="nav-cta">Hire me</a>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="4" x2="18" y2="18"/>
                <line x1="18" y1="4" x2="4" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="2" y1="6"  x2="20" y2="6"/>
                <line x1="2" y1="11" x2="20" y2="11"/>
                <line x1="2" y1="16" x2="20" y2="16"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="nav-overlay">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="overlay-link"
              onClick={close}
              style={{ animation: `overlayLink 0.28s ease both ${i * 0.07}s` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="overlay-cta"
            onClick={close}
            style={{ animation: `overlayLink 0.28s ease both ${links.length * 0.07}s` }}
          >
            Hire me
          </a>
        </div>
      )}
    </>
  );
}
