"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const STYLES = `
  @keyframes fadeUpIn {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .fiverr-section {
    padding: 100px 40px 80px;
    max-width: 1100px;
    margin: 0 auto;
    border-top: 1px solid var(--border-soft);
  }
  .fiverr-visible .anim-f { animation: fadeUpIn 0.65s ease both; }
  .anim-f { opacity: 0; }

  .fiverr-card {
    margin-top: 40px;
    background: var(--bg-card);
    border: 1px solid var(--border-soft);
    border-radius: 24px;
    padding: 48px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 48px;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  .fiverr-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(135deg, #1DBF73, #14A864);
    border-radius: 24px 24px 0 0;
  }

  .fiverr-services {
    background: var(--bg-card2);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px 28px;
    min-width: 210px;
  }

  .service-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  .service-item:last-child { margin-bottom: 0; }

  .fiverr-btn-primary {
    background: #1DBF73;
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: 13px 26px;
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: opacity 0.2s, transform 0.2s;
  }
  .fiverr-btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }

  .fiverr-btn-secondary {
    background: transparent;
    color: var(--text-secondary);
    border: 1.5px solid var(--border);
    border-radius: 999px;
    padding: 12px 26px;
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: border-color 0.2s, color 0.2s;
  }
  .fiverr-btn-secondary:hover { border-color: var(--accent); color: var(--accent); }

  @media (max-width: 640px) {
    .fiverr-section {
      padding: 72px 24px 64px;
    }
    .fiverr-card {
      grid-template-columns: 1fr;
      padding: 32px 24px;
      gap: 32px;
    }
    .fiverr-services { min-width: unset; }
  }
`;

export default function Fiverr() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="fiverr"
      className={`fiverr-section${visible ? " fiverr-visible" : ""}`}
      ref={ref}
    >
      <style>{STYLES}</style>

      <p className="anim-f" style={{
        animationDelay: "0.05s",
        fontFamily: "'DM Mono', monospace",
        fontSize: 11,
        letterSpacing: "2px",
        color: "var(--accent)",
        marginBottom: 10,
        textTransform: "uppercase",
      }}>
        {t.fiverr.tag}
      </p>

      <h2 className="anim-f" style={{
        animationDelay: "0.15s",
        fontFamily: "'Nunito', sans-serif",
        fontSize: "clamp(36px, 5vw, 54px)",
        fontWeight: 800,
        color: "var(--text-primary)",
        lineHeight: 1.1,
        margin: 0,
      }}>
        {t.fiverr.heading.replace(".", "")}<span style={{ color: "#1DBF73" }}>.</span>
      </h2>

      <div className="fiverr-card anim-f" style={{ animationDelay: "0.25s" }}>
        {/* Left */}
        <div>
          <div style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(38px, 5vw, 52px)",
            fontWeight: 900,
            color: "#1DBF73",
            lineHeight: 1,
            marginBottom: 20,
            letterSpacing: "-1px",
          }}>
            fiverr<span style={{ color: "#14A864" }}>.</span>
          </div>

          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 16,
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            fontWeight: 400,
            maxWidth: 440,
            marginBottom: 28,
          }}>
            {t.fiverr.body.pre}{" "}
            <strong style={{ fontWeight: 700, color: "var(--text-primary)" }}>{t.fiverr.body.bold1}</strong>,{" "}
            <strong style={{ fontWeight: 700, color: "var(--text-primary)" }}>{t.fiverr.body.bold2}</strong> and{" "}
            <strong style={{ fontWeight: 700, color: "var(--text-primary)" }}>{t.fiverr.body.bold3}</strong>{" "}
            {t.fiverr.body.post}
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://www.fiverr.com/agusscorti?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
              className="fiverr-btn-primary"
            >
              {t.fiverr.viewProfile}
            </a>
            <a href="#contact" className="fiverr-btn-secondary">
              {t.fiverr.contactDirect}
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="fiverr-services">
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 10,
            color: "var(--accent2)",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: 18,
          }}>
            {t.fiverr.servicesLabel}
          </div>
          {t.fiverr.services.map((s, i) => (
            <div key={s} className="service-item">
              <div style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: i % 2 === 0 ? "#1DBF73" : "var(--accent2)",
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 13,
                color: "var(--text-secondary)",
                fontWeight: 500,
              }}>
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
