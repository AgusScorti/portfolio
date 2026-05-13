"use client";
import { useEffect, useRef } from "react";

export default function AvatarSVG() {
  const pupilLRef = useRef<SVGCircleElement>(null);
  const pupilRRef = useRef<SVGCircleElement>(null);
  const glintLRef = useRef<SVGCircleElement>(null);
  const glintRRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const angle = Math.atan2(dy, dx);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const norm = Math.min(dist / 300, 1);
      const mx = Math.cos(angle) * norm * 4;
      const my = Math.sin(angle) * norm * 4;

      if (pupilLRef.current) {
        pupilLRef.current.setAttribute("cx", String(72 + mx));
        pupilLRef.current.setAttribute("cy", String(105 + my));
      }
      if (pupilRRef.current) {
        pupilRRef.current.setAttribute("cx", String(128 + mx));
        pupilRRef.current.setAttribute("cy", String(105 + my));
      }
      if (glintLRef.current) {
        glintLRef.current.setAttribute("cx", String(74 + mx));
        glintLRef.current.setAttribute("cy", String(103 + my));
      }
      if (glintRRef.current) {
        glintRRef.current.setAttribute("cx", String(130 + mx));
        glintRRef.current.setAttribute("cy", String(103 + my));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", maxWidth: 280, margin: "0 auto" }}>
      <svg
        viewBox="0 0 200 240"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto" }}
      >
        {/* Background hatch rectangle like Robb Owen */}
        <defs>
          <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#C8D4EE" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="60" y="50" width="140" height="160" fill="url(#hatch)" opacity="0.6" />

        {/* Neck */}
        <rect x="82" y="170" width="36" height="35" rx="4" fill="#B8D4E8" stroke="#6B5CE7" strokeWidth="1.5" />

        {/* Shoulders / shirt */}
        <ellipse cx="100" cy="218" rx="58" ry="28" fill="#A8C4E0" stroke="#6B5CE7" strokeWidth="1.5" />

        {/* Head */}
        <ellipse cx="100" cy="105" rx="52" ry="58" fill="#C8E0EE" stroke="#6B5CE7" strokeWidth="2" />

        {/* Hair */}
        <path d="M48 95 Q50 40 100 38 Q150 40 152 95 Q145 50 100 48 Q55 50 48 95Z" fill="#3BBFCE" stroke="#6B5CE7" strokeWidth="1.5" />
        {/* Hair spikes */}
        <path d="M52 72 Q58 52 68 58" stroke="#6B5CE7" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M60 58 Q70 40 80 46" stroke="#6B5CE7" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M80 44 Q95 32 105 40" stroke="#6B5CE7" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Ears */}
        <ellipse cx="48" cy="108" rx="8" ry="12" fill="#C8E0EE" stroke="#6B5CE7" strokeWidth="1.5" />
        <ellipse cx="152" cy="108" rx="8" ry="12" fill="#C8E0EE" stroke="#6B5CE7" strokeWidth="1.5" />

        {/* Glasses frame */}
        <rect x="54" y="96" width="36" height="22" rx="8" fill="white" fillOpacity="0.6" stroke="#6B5CE7" strokeWidth="2" />
        <rect x="110" y="96" width="36" height="22" rx="8" fill="white" fillOpacity="0.6" stroke="#6B5CE7" strokeWidth="2" />
        {/* Bridge */}
        <line x1="90" y1="107" x2="110" y2="107" stroke="#6B5CE7" strokeWidth="2" />
        {/* Arms */}
        <line x1="54" y1="107" x2="44" y2="104" stroke="#6B5CE7" strokeWidth="2" strokeLinecap="round" />
        <line x1="146" y1="107" x2="156" y2="104" stroke="#6B5CE7" strokeWidth="2" strokeLinecap="round" />

        {/* Pupils */}
        <circle ref={pupilLRef} cx="72" cy="105" r="7" fill="#2A2050" />
        <circle ref={pupilRRef} cx="128" cy="105" r="7" fill="#2A2050" />
        {/* Glints */}
        <circle ref={glintLRef} cx="74" cy="103" r="2.5" fill="white" />
        <circle ref={glintRRef} cx="130" cy="103" r="2.5" fill="white" />

        {/* Eyebrows */}
        <path d="M56 91 Q72 86 88 90" stroke="#3BBFCE" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M112 90 Q128 86 144 91" stroke="#3BBFCE" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Nose */}
        <path d="M97 115 Q94 128 100 132 Q106 128 103 115" stroke="#6B5CE7" strokeWidth="1.2" fill="none" strokeLinecap="round" />

        {/* Mouth / smile */}
        <path d="M86 148 Q100 158 114 148" stroke="#6B5CE7" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Stubble dots */}
        <circle cx="84" cy="155" r="1.5" fill="#6B5CE7" opacity="0.3" />
        <circle cx="90" cy="158" r="1.5" fill="#6B5CE7" opacity="0.3" />
        <circle cx="96" cy="160" r="1.5" fill="#6B5CE7" opacity="0.3" />
        <circle cx="102" cy="160" r="1.5" fill="#6B5CE7" opacity="0.3" />
        <circle cx="108" cy="158" r="1.5" fill="#6B5CE7" opacity="0.3" />
        <circle cx="114" cy="155" r="1.5" fill="#6B5CE7" opacity="0.3" />
      </svg>
    </div>
  );
}
