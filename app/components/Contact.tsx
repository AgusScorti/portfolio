"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const contacts = [
  {
    label: "Email",
    value: "scorticatiagustin@gmail.com",
    href: "mailto:scorticatiagustin@gmail.com",
    gradient: "linear-gradient(135deg, #6B5CE7 0%, #3BBFCE 100%)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+54 9 11 3686-0485",
    href: "https://wa.me/5491136860485",
    gradient: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "agustinscorticati",
    href: "https://www.linkedin.com/in/agustinscorticati/",
    gradient: "linear-gradient(135deg, #0A66C2 0%, #0077B5 100%)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

const STYLES = `
  @keyframes fadeUpIn {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .contact-section {
    padding: 100px 40px 80px;
    max-width: 1100px;
    margin: 0 auto;
    border-top: 1px solid var(--border-soft);
  }
  .contact-visible .anim-c { animation: fadeUpIn 0.65s ease both; }
  .anim-c { opacity: 0; }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    margin-top: 40px;
    align-items: start;
  }

  /* Form fields */
  .contact-input {
    width: 100%;
    background: var(--bg-card);
    border: 1.5px solid var(--border);
    border-radius: 12px;
    padding: 13px 16px;
    font-size: 15px;
    font-family: 'Nunito', sans-serif;
    font-weight: 500;
    color: var(--text-primary);
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }
  .contact-input:focus { border-color: var(--accent); }
  .contact-input::placeholder { color: var(--text-muted); font-weight: 400; }

  /* Contact link cards */
  .contact-link {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 20px;
    background: var(--bg-card);
    border: 1.5px solid var(--border-soft);
    border-radius: 16px;
    text-decoration: none;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .contact-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 32px rgba(107,92,231,0.1);
    border-color: var(--border);
  }
  .contact-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    flex-shrink: 0;
  }

  /* Buttons */
  .btn-primary {
    background: var(--accent);
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: 13px 26px;
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: opacity 0.2s, transform 0.2s;
  }
  .btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }

  .btn-whatsapp {
    background: #25D366;
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: 13px 26px;
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: opacity 0.2s, transform 0.2s;
  }
  .btn-whatsapp:hover { opacity: 0.88; transform: translateY(-2px); }

  @media (max-width: 640px) {
    .contact-section { padding: 72px 24px 64px; }
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 36px;
    }
  }
`;

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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

  const handleEmail = () => {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:scorticatiagustin@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`${t.contact.waGreeting(form.name, form.email)}\n\n${form.message}`);
    window.open(`https://wa.me/5491136860485?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className={`contact-section${visible ? " contact-visible" : ""}`}
      ref={ref}
    >
      <style>{STYLES}</style>

      <p className="anim-c" style={{
        animationDelay: "0.05s",
        fontFamily: "'DM Mono', monospace",
        fontSize: 11,
        letterSpacing: "2px",
        color: "var(--accent)",
        marginBottom: 10,
        textTransform: "uppercase",
      }}>
        {t.contact.tag}
      </p>

      <h2 className="anim-c" style={{
        animationDelay: "0.15s",
        fontFamily: "'Nunito', sans-serif",
        fontSize: "clamp(36px, 5vw, 54px)",
        fontWeight: 800,
        color: "var(--text-primary)",
        lineHeight: 1.1,
        margin: 0,
      }}>
        {t.contact.heading.replace(".", "")}<span style={{ color: "var(--accent)" }}>.</span>
      </h2>

      <div className="contact-grid">
        {/* Form */}
        <div className="anim-c" style={{ animationDelay: "0.25s", display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: "var(--text-muted)",
              letterSpacing: "1px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 8,
            }}>
              {t.contact.nameLbl}
            </label>
            <input
              className="contact-input"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t.contact.namePh}
            />
          </div>

          <div>
            <label style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: "var(--text-muted)",
              letterSpacing: "1px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 8,
            }}>
              {t.contact.emailLbl}
            </label>
            <input
              className="contact-input"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t.contact.emailPh}
            />
          </div>

          <div>
            <label style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: "var(--text-muted)",
              letterSpacing: "1px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 8,
            }}>
              {t.contact.msgLbl}
            </label>
            <textarea
              className="contact-input"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.contact.msgPh}
              rows={5}
              style={{ resize: "vertical" }}
            />
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={handleEmail}>
              {t.contact.sendEmail}
            </button>
            <button className="btn-whatsapp" onClick={handleWhatsApp}>
              {t.contact.whatsapp}
            </button>
          </div>

          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 12,
            color: "var(--text-muted)",
            fontWeight: 400,
            marginTop: -4,
          }}>
            {t.contact.hint}
          </p>
        </div>

        {/* Contact cards */}
        <div className="anim-c" style={{ animationDelay: "0.35s", display: "flex", flexDirection: "column", gap: 14 }}>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 15,
            color: "var(--text-secondary)",
            fontWeight: 400,
            lineHeight: 1.7,
            marginBottom: 8,
          }}>
            {t.contact.subtext}
          </p>

          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-icon" style={{ background: c.gradient }}>
                {c.icon}
              </div>
              <div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9,
                  color: "var(--text-muted)",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: 3,
                }}>
                  {c.label}
                </div>
                <div style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}>
                  {c.value}
                </div>
              </div>
              <span style={{
                marginLeft: "auto",
                color: "var(--text-muted)",
                fontSize: 16,
              }}>
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
