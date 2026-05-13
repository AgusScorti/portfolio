"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Agustín! I'm ${form.name} (${form.email}).\n\n${form.message}`
    );
    window.open(`https://wa.me/5491136860485?text=${text}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:scorticatiagustin@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 40px",
        maxWidth: 1100,
        margin: "0 auto",
        borderTop: "1px solid var(--border-soft)",
      }}
    >
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "2px", color: "var(--accent)", marginBottom: 8, textTransform: "uppercase" }}>
        Contact
      </p>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-1px", marginBottom: 48 }}>
        Let&apos;s build something.
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 48 }}>
        {/* Form */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 500, color: "var(--text-muted)", letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                style={{
                  width: "100%",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "11px 14px",
                  fontSize: 14,
                  color: "var(--text-primary)",
                  fontFamily: "'DM Sans', sans-serif",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <label style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 500, color: "var(--text-muted)", letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                style={{
                  width: "100%",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "11px 14px",
                  fontSize: 14,
                  color: "var(--text-primary)",
                  fontFamily: "'DM Sans', sans-serif",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <label style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 500, color: "var(--text-muted)", letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                style={{
                  width: "100%",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "11px 14px",
                  fontSize: 14,
                  color: "var(--text-primary)",
                  fontFamily: "'DM Sans', sans-serif",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={handleEmail}
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 24px",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                ✉ Send via Email
              </button>
              <button
                onClick={handleWhatsApp}
                style={{
                  background: "#25D366",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 24px",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                WhatsApp
              </button>
            </div>
            <p style={{ fontSize: 12, color: "var(--text-muted)", fontStyle: "italic" }}>
              The form will open your email client or WhatsApp pre-filled with your message.
            </p>
          </div>
        </div>

        {/* Contact info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, justifyContent: "flex-start", paddingTop: 28 }}>
          {[
            { icon: "✉", label: "Email", value: "scorticatiagustin@gmail.com", href: "mailto:scorticatiagustin@gmail.com", bg: "var(--accent-light)", color: "var(--accent)" },
            { icon: "💬", label: "WhatsApp", value: "+54 9 11 3686-0485", href: "https://wa.me/5491136860485", bg: "var(--green-bg)", color: "var(--green)" },
            { icon: "in", label: "LinkedIn", value: "in/agustinscorticati", href: "https://www.linkedin.com/in/agustinscorticati/", bg: "#E8F0FB", color: "#0A66C2" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "16px",
                background: "var(--bg-card)",
                border: "1px solid var(--border-soft)",
                borderRadius: 10,
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-soft)")}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: c.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  flexShrink: 0,
                  color: c.color,
                  fontWeight: 700,
                }}
              >
                {c.icon}
              </div>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: "var(--text-muted)", letterSpacing: "1px", textTransform: "uppercase" }}>
                  {c.label}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
