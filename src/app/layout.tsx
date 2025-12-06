import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import MobileNav from "@/components/MobileNav";
import { getDict } from "@/i18n";
import PageTransition from "@/components/PageTransition";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://formationnet-landing.vercel.app"),
  title: "FormationNet — Find the perfect training program",
  description:
    "FormationNet helps learners discover trusted training centers in Tunisia with advanced search, filters, and verified information.",
  icons: { icon: "/next.svg" },
  robots: { index: true, follow: true },
  alternates: {
    languages: {
      en: "https://formationnet.tn/en",
      fr: "https://formationnet.tn/fr",
    },
  },
  openGraph: {
    title: "FormationNet — Find the perfect training program",
    description:
      "Discover high-quality formations, compare options, and choose the right path for your career in Tunisia.",
    url: "https://formationnet.tn",
    siteName: "FormationNet",
    images: [{ url: "/next.svg", width: 1200, height: 630, alt: "FormationNet" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FormationNet — Find the perfect training program",
    description:
      "Discover high-quality formations, compare options, and choose the right path for your career in Tunisia.",
    images: ["/next.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }, { color: "#ffffff" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = await getDict();
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(() => { try { const t = localStorage.getItem('theme'); const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; if (t === 'dark' || (!t && prefersDark)) { document.documentElement.classList.add('dark'); } if (t === 'light') { document.documentElement.classList.remove('dark'); } } catch {} })();",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FormationNet",
              url: "https://formationnet.tn",
              sameAs: ["https://twitter.com/", "https://www.linkedin.com/", "https://github.com/"],
              logo: "https://formationnet.tn/next.svg",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "FormationNet",
              url: "https://formationnet.tn",
              inLanguage: "en",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://formationnet.tn/?q={search_term}",
                "query-input": "required name=search_term",
              },
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(() => { try { const params = new URLSearchParams(window.location.search); const q = (params.get('q')||'').toLowerCase(); if (!q) return; const map = [ { k: ['service','services'], id: '#services' }, { k: ['project','projects'], id: '#projects' }, { k: ['formationnet','formation','training'], id: '#formationnet' }, { k: ['contact'], id: '#contact' } ]; const match = map.find(m => m.k.some(s => q.includes(s))); const target = match ? match.id : '#home'; const el = document.querySelector(target); if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); history.replaceState(null, '', target); } } catch {} })();",
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen bg-background text-foreground`}>        
        <header className="fixed inset-x-0 top-0 z-50 bg-[var(--navbar-bg)] border-b border-[var(--navbar-border)] backdrop-blur supports-[backdrop-filter]:bg-[var(--navbar-bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="#home" className="text-sm font-semibold tracking-tight text-[var(--navbar-link)]">FormationNet</Link>
              <nav className="hidden gap-6 text-sm font-medium lg:flex" role="navigation" aria-label="Primary">
                <Link href="#services" className="text-[var(--navbar-link)] hover:text-[var(--navbar-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]">{t.nav.services}</Link>
                <Link href="#projects" className="text-[var(--navbar-link)] hover:text-[var(--navbar-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]">{t.nav.projects}</Link>
                <Link href="#about" className="text-[var(--navbar-link)] hover:text-[var(--navbar-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]">{t.nav.about}</Link>
                <Link href="#teams" className="text-[var(--navbar-link)] hover:text-[var(--navbar-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]">{t.nav.teams}</Link>
                <Link href="#contact" className="text-[var(--navbar-link)] hover:text-[var(--navbar-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]">{t.nav.contact}</Link>
                <Link href="#find-us" className="text-[var(--navbar-link)] hover:text-[var(--navbar-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]">{t.nav.findUs}</Link>
              </nav>
              <div className="flex items-center gap-3">
                <MobileNav
                  labels={{ services: t.nav.services, projects: t.nav.projects, about: t.nav.about, contact: t.nav.contact, findUs: t.nav.findUs }}
                  panel={{ menu: t.ui.menu, appearance: t.ui.appearance, language: t.ui.language }}
                />
                <span className="hidden md:block lg:hidden">
                  <ThemeToggle variant="inline" />
                </span>
                <span className="hidden md:block lg:hidden">
                  <LanguageToggle variant="inline" />
                </span>
                <span className="hidden lg:block">
                  <ThemeToggle />
                </span>
                <span className="hidden lg:block">
                  <LanguageToggle />
                </span>
                <div className="hidden lg:flex items-center gap-2 text-[var(--navbar-icon)]" aria-label="Technologies">
                  <span className="sr-only">React</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><title>React</title><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 2c2.76 0 5 4.48 5 10s-2.24 10-5 10-5-4.48-5-10 2.24-10 5-10Z" stroke="currentColor"/></svg>
                  <span className="sr-only">Node.js</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><title>Node.js</title><path d="M12 2l9 5v10l-9 5-9-5V7l9-5Z" stroke="currentColor"/></svg>
                  <span className="sr-only">MongoDB</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><title>MongoDB</title><path d="M12 2s5 4 5 10-5 10-5 10-5-4-5-10 5-10 5-10Z" stroke="currentColor"/></svg>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="pt-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <footer className="mt-24 border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <Link href="#home" className="text-sm font-semibold tracking-tight text-[var(--foreground)]">FormationNet</Link>
                <p className="mt-3 max-w-sm text-sm text-[var(--muted)]">Discover trusted training centers and build your skills with confidence.</p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-[var(--muted)]">Site</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li><Link href="#services" className="text-[var(--navbar-link)] hover:text-[var(--accent)]">{t.nav.services}</Link></li>
                    <li><Link href="#projects" className="text-[var(--navbar-link)] hover:text-[var(--accent)]">{t.nav.projects}</Link></li>
                    <li><Link href="#about" className="text-[var(--navbar-link)] hover:text-[var(--accent)]">{t.nav.about}</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-[var(--muted)]">Company</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li><Link href="#teams" className="text-[var(--navbar-link)] hover:text-[var(--accent)]">{t.nav.teams}</Link></li>
                    <li><Link href="#contact" className="text-[var(--navbar-link)] hover:text-[var(--accent)]">{t.nav.contact}</Link></li>
                  </ul>
                </div>
              </div>
              <div className="flex lg:justify-end">
                <div className="flex items-center gap-3">
                  <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--navbar-icon)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"><FaXTwitter size={16} /></a>
                  <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--navbar-icon)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"><FaLinkedin size={16} /></a>
                  <a href="#" aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--navbar-icon)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"><FaGithub size={16} /></a>
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-between border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)]">
              <p>© FormationNet</p>
              <Link href="#home" className="hover:text-[var(--accent)]">Back to top</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
