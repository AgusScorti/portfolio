"use client";
import { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    nav: {
      links: [
        { label: "about",    href: "#about" },
        { label: "projects", href: "#projects" },
        { label: "fiverr",   href: "#fiverr" },
        { label: "contact",  href: "#contact" },
      ],
      cta: "Hire me",
      darkMode: "Dark mode",
      lightMode: "Light mode",
      langToggle: "ES",
    },
    hero: {
      tag: "// available for freelance",
      greeting: "Hi, my name is",
      typeWords: ["Agustín.", "a developer.", "a problem solver.", "based in Buenos Aires."],
      iAm: "I'm",
      location: "Software Developer · Systems Engineer · Buenos Aires, AR",
    },
    about: {
      tag: "// about",
      heading: "What I do.",
      sub: "4+ years building things",
      skillsSuffix: "skills",
      certsLabel: "Certifications",
    },
    projects: {
      tag: "// work",
      heading: "Things I've built.",
      status: { live: "Live", private: "Private", wip: "In progress" },
      viewSite: "View live site ↗",
      data: [
        {
          name: "CaluContable",
          description:
            "Full-stack platform for accounting firms — landing page, admin panel, video section, resources and Calendly scheduling. All manageable without code.",
        },
        {
          name: "MarcaYa",
          description:
            "Chilean platform that simplifies trademark registration with INAPI using AI. Real trademark search, Claude AI for classification, PDF generation and live payments.",
        },
        {
          name: "GirasolesEti",
          description:
            "Billing management app for a healthcare center. Automatic invoice matching — when a payment arrives, it finds the provider and calculates every combination matching the exact amount.",
        },
        {
          name: "New project",
          description: "Something new is in the works. Stay tuned.",
        },
      ],
    },
    fiverr: {
      tag: "// freelance",
      heading: "Hire me on Fiverr.",
      body: {
        pre: "Need a reliable developer for your next project?",
        bold1: "Clean code",
        bold2: "clear communication",
        bold3: "fast delivery",
        post: "— every time.",
      },
      servicesLabel: "Services",
      services: [
        "Full-stack web apps",
        "Next.js development",
        "REST API development",
        "Database design",
        "Supabase integration",
        "Admin panel / CMS",
      ],
      viewProfile: "View my profile ↗",
      contactDirect: "Contact directly",
    },
    contact: {
      tag: "// contact",
      heading: "Let's build something.",
      subtext: "Prefer reaching out directly? Pick whichever works best for you.",
      nameLbl: "Name",
      namePh: "Your name",
      emailLbl: "Email",
      emailPh: "your@email.com",
      msgLbl: "Message",
      msgPh: "Tell me about your project...",
      sendEmail: "Send via email ↗",
      whatsapp: "WhatsApp ↗",
      hint: "Opens your email client or WhatsApp pre-filled.",
      waGreeting: (name: string, email: string) =>
        `Hi Agustín! I'm ${name} (${email}).`,
    },
  },
  es: {
    nav: {
      links: [
        { label: "sobre mí",   href: "#about" },
        { label: "proyectos",  href: "#projects" },
        { label: "fiverr",     href: "#fiverr" },
        { label: "contacto",   href: "#contact" },
      ],
      cta: "Contratame",
      darkMode: "Modo oscuro",
      lightMode: "Modo claro",
      langToggle: "EN",
    },
    hero: {
      tag: "// disponible para freelance",
      greeting: "Hola, mi nombre es",
      typeWords: ["Agustín.", "desarrollador.", "solucionador.", "de Buenos Aires."],
      iAm: "Soy",
      location: "Desarrollador de Software · Ingeniero en Sistemas · Buenos Aires, AR",
    },
    about: {
      tag: "// sobre mí",
      heading: "Lo que hago.",
      sub: "4+ años construyendo cosas",
      skillsSuffix: "habilidades",
      certsLabel: "Certificaciones",
    },
    projects: {
      tag: "// proyectos",
      heading: "Lo que construí.",
      status: { live: "En vivo", private: "Privado", wip: "En progreso" },
      viewSite: "Ver sitio ↗",
      data: [
        {
          name: "CaluContable",
          description:
            "Plataforma full-stack para estudios contables — landing page, panel de administración, sección de videos, recursos y agendado con Calendly. Todo gestionable sin código.",
        },
        {
          name: "MarcaYa",
          description:
            "Plataforma chilena que simplifica el registro de marcas en INAPI con IA. Búsqueda de marcas en tiempo real, clasificación con Claude AI, generación de PDF y pagos en vivo.",
        },
        {
          name: "GirasolesEti",
          description:
            "App de gestión de facturación para un centro de salud. Matching automático — cuando llega un pago, encuentra al proveedor y calcula todas las combinaciones que coinciden con el monto exacto.",
        },
        {
          name: "Nuevo proyecto",
          description: "Algo nuevo está en camino. Próximamente.",
        },
      ],
    },
    fiverr: {
      tag: "// freelance",
      heading: "Contratame en Fiverr.",
      body: {
        pre: "¿Necesitás un desarrollador confiable para tu próximo proyecto?",
        bold1: "Código limpio",
        bold2: "comunicación clara",
        bold3: "entrega rápida",
        post: "— siempre.",
      },
      servicesLabel: "Servicios",
      services: [
        "Apps web full-stack",
        "Desarrollo con Next.js",
        "Desarrollo de APIs REST",
        "Diseño de bases de datos",
        "Integración con Supabase",
        "Panel de admin / CMS",
      ],
      viewProfile: "Ver mi perfil ↗",
      contactDirect: "Contactar directamente",
    },
    contact: {
      tag: "// contacto",
      heading: "Construyamos algo.",
      subtext: "¿Preferís contactar directamente? Elegí lo que más te convenga.",
      nameLbl: "Nombre",
      namePh: "Tu nombre",
      emailLbl: "Email",
      emailPh: "tu@email.com",
      msgLbl: "Mensaje",
      msgPh: "Contame sobre tu proyecto...",
      sendEmail: "Enviar por email ↗",
      whatsapp: "WhatsApp ↗",
      hint: "Abre tu cliente de email o WhatsApp con el mensaje.",
      waGreeting: (name: string, email: string) =>
        `¡Hola Agustín! Soy ${name} (${email}).`,
    },
  },
};

export type Lang = "en" | "es";
export type Translations = typeof translations.en;

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: translations.en,
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "es") setLang(stored);
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "es" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
