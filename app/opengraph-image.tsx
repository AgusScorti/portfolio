import { ImageResponse } from "next/og";

export const alt = "Agustín Scorticati — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#EEF2F9",
          padding: "0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "2px solid #6B5CE7",
            opacity: 0.25,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 80,
            width: 260,
            height: 260,
            borderRadius: "50%",
            border: "2px solid #3BBFCE",
            opacity: 0.32,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: 160,
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: "1.5px solid #6B5CE7",
            opacity: 0.18,
            display: "flex",
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            width: 110,
            height: 110,
            borderRadius: 22,
            background: "#6B5CE7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginRight: 52,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "white",
              lineHeight: 1,
            }}
          >
            A
          </span>
        </div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <span
            style={{
              fontSize: 20,
              color: "#6B5CE7",
              fontFamily: "monospace",
              letterSpacing: 1,
              marginBottom: 14,
            }}
          >
            // agustinscorticati.com.ar
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#1A1F3A",
              lineHeight: 1.05,
            }}
          >
            Agustín Scorticati
          </span>
          <span
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "#4A5280",
              marginTop: 16,
            }}
          >
            Software Developer · Systems Engineer
          </span>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 28,
            }}
          >
            {[".NET/C#", "React", "Next.js", "PostgreSQL"].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 18,
                  background: "#EAEEF8",
                  color: "#6B5CE7",
                  border: "1px solid #D4DCF0",
                  borderRadius: 6,
                  padding: "6px 16px",
                  fontFamily: "monospace",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
