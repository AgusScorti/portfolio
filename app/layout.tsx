import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agustinscorticati.vercel.app"),
  title: "Agustín Scorticati — Software Developer",
  description: "Systems Engineer focused on software development. Building clean, scalable web applications with .NET, React, Next.js and modern data stacks.",
  keywords: ["software developer", "Next.js", ".NET", "React", "PostgreSQL", "Supabase", "Buenos Aires"],
  authors: [{ name: "Agustín Scorticati" }],
  openGraph: {
    title: "Agustín Scorticati — Software Developer",
    description: "Systems Engineer focused on software development.",
    url: "https://agustinscorticati.com.ar",
    siteName: "Agustín Scorticati",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);})();` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
