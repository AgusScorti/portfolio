"use client";
import useTypewriter from "./useTypewriter";

const FLOAT_STYLES = `
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes floatA {
    0%,100% { transform: translate(0,0); }
    33%      { transform: translate(-14px, 10px); }
    66%      { transform: translate(10px, -12px); }
  }
  @keyframes floatB {
    0%,100% { transform: translate(0,0); }
    50%     { transform: translate(12px, 14px); }
  }
  @keyframes floatC {
    0%,100% { transform: translate(0,0); }
    40%     { transform: translate(-10px, -14px); }
    70%     { transform: translate(8px, 10px); }
  }
  @keyframes floatD {
    0%,100% { transform: translate(0,0); }
    50%     { transform: translate(-8px, 12px); }
  }
  @keyframes floatE {
    0%,100% { transform: translate(0,0); }
    50%     { transform: translate(10px, -8px); }
  }
`;

export default function Hero() {
  const typed = useTypewriter();

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "100px 40px 60px",
        maxWidth: 1100,
        margin: "0 auto",
        position: "relative",
      }}
    >
      <style>{FLOAT_STYLES}</style>

      {/* Background decorative shapes */}
      <div aria-hidden style={{
        position: "absolute",
        top: "18%",
        right: 0,
        width: 440,
        height: 440,
        borderRadius: "50%",
        border: "2px solid var(--accent)",
        opacity: 0.28,
        pointerEvents: "none",
        animation: "fadeIn 1s ease both 0.1s, floatA 11s ease-in-out 1.1s infinite",
      }} />
      <div aria-hidden style={{
        position: "absolute",
        top: "30%",
        right: 60,
        width: 280,
        height: 280,
        borderRadius: "50%",
        border: "2px solid var(--accent2)",
        opacity: 0.38,
        pointerEvents: "none",
        animation: "fadeIn 1s ease both 0.2s, floatB 8s ease-in-out 1.2s infinite",
      }} />
      <div aria-hidden style={{
        position: "absolute",
        top: "48%",
        right: 130,
        width: 110,
        height: 110,
        borderRadius: "50%",
        background: "var(--accent2)",
        opacity: 0.15,
        pointerEvents: "none",
        animation: "fadeIn 1s ease both 0.35s, floatC 9s ease-in-out 1.35s infinite",
      }} />
      <div aria-hidden style={{
        position: "absolute",
        top: "65%",
        right: 10,
        width: 200,
        height: 200,
        borderRadius: "50%",
        border: "1.5px solid var(--accent)",
        opacity: 0.18,
        pointerEvents: "none",
        animation: "fadeIn 1s ease both 0.5s, floatD 13s ease-in-out 1.5s infinite",
      }} />
      <div aria-hidden style={{
        position: "absolute",
        top: "24%",
        right: 210,
        width: 9,
        height: 9,
        borderRadius: "50%",
        background: "var(--accent)",
        opacity: 0.65,
        pointerEvents: "none",
        animation: "fadeIn 0.8s ease both 0.4s, floatE 6s ease-in-out 1.2s infinite",
      }} />
      <div aria-hidden style={{
        position: "absolute",
        top: "38%",
        right: 42,
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "var(--accent2)",
        opacity: 0.7,
        pointerEvents: "none",
        animation: "fadeIn 0.8s ease both 0.55s, floatB 7s ease-in-out 1.35s infinite reverse",
      }} />
      <div aria-hidden style={{
        position: "absolute",
        bottom: "12%",
        right: 90,
        width: 14,
        height: 14,
        borderRadius: "50%",
        background: "var(--accent)",
        opacity: 0.4,
        pointerEvents: "none",
        animation: "fadeIn 0.8s ease both 0.3s, floatA 10s ease-in-out 1.1s infinite reverse",
      }} />

      {/* Content */}
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          color: "var(--accent)",
          marginBottom: 20,
          letterSpacing: "0.5px",
          animation: "fadeUp 0.6s ease both",
          animationDelay: "0.1s",
        }}
      >
        // available for freelance
      </p>

      <h1
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(48px, 7.5vw, 84px)",
          lineHeight: 1.08,
          marginBottom: 0,
          animation: "fadeUp 0.7s ease both",
          animationDelay: "0.25s",
        }}
      >
        <span style={{ fontWeight: 300, color: "var(--text-secondary)" }}>
          Hi, my name is
        </span>
        <br />
        <span style={{ fontWeight: 900, color: "var(--text-primary)" }}>
          Agus
        </span>
        <span style={{ fontWeight: 900, color: "var(--accent)" }}>.</span>
      </h1>

      <div
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(18px, 2.5vw, 26px)",
          fontWeight: 400,
          color: "var(--text-secondary)",
          marginTop: 20,
          marginBottom: 32,
          display: "flex",
          alignItems: "center",
          gap: 8,
          minHeight: "1.5em",
          animation: "fadeUp 0.7s ease both",
          animationDelay: "0.45s",
        }}
      >
        I&apos;m{" "}
        <span style={{ color: "var(--accent)", fontWeight: 700 }}>{typed}</span>
        <span
          style={{
            display: "inline-block",
            width: 2,
            height: "0.85em",
            background: "var(--accent)",
            verticalAlign: "middle",
            animation: "blink 1s step-end infinite",
          }}
        />
      </div>

      <div
        style={{
          borderLeft: "2px solid var(--accent2)",
          paddingLeft: 14,
          marginBottom: 28,
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          color: "var(--text-muted)",
          letterSpacing: "0.3px",
          animation: "fadeUp 0.6s ease both",
          animationDelay: "0.6s",
        }}
      >
        Software Developer · Systems Engineer · Buenos Aires, AR
      </div>

      {/* <p
        style={{
          fontSize: 16,
          color: "var(--text-secondary)",
          lineHeight: 1.75,
          maxWidth: 520,
          fontWeight: 300,
          marginBottom: 36,
        }}
      >
        Building clean, scalable web applications. Specialized in{" "}
        <strong style={{ fontWeight: 500, color: "var(--text-primary)" }}>.NET</strong>,{" "}
        <strong style={{ fontWeight: 500, color: "var(--text-primary)" }}>React</strong> and{" "}
        <strong style={{ fontWeight: 500, color: "var(--text-primary)" }}>Next.js</strong> with
        modern data stacks. Currently @ Banco Provincia.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a
          href="#projects"
          style={{
            background: "var(--accent)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "12px 24px",
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          View projects →
        </a>
        <a
          href="/cv.pdf"
          download
          style={{
            background: "transparent",
            color: "var(--text-secondary)",
            border: "1.5px solid var(--border)",
            borderRadius: 8,
            padding: "11px 24px",
            fontSize: 14,
            fontWeight: 400,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
        >
          Download CV
        </a>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 32 }}>
        {[".NET/C#", "React", "Next.js", "PostgreSQL", "Supabase", "TypeScript", "Docker"].map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              background: "var(--bg-card2)",
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "4px 10px",
              letterSpacing: "0.3px",
            }}
          >
            {t}
          </span>
        ))}
      </div> */}
    </section>
  );
}
