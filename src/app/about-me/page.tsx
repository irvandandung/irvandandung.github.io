'use client';

import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";
import { useTitleAnimation } from "@/app/hooks/useTitleAnimation";
import { useI18n } from "@/app/contexts/I18nContext";

export default function AboutMePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, isReady } = useI18n();
  useTitleAnimation('about-me');

  // Prevent rendering until translations are ready (hydration safety)
  if (!isReady || !t) {
    return null;
  }

  return (
    <main className="min-h-screen bg-dark-bg">
      {/* Left Sidebar - Hidden on mobile */}
      <aside className="sidebar hidden md:flex md:fixed">
        <a href="#" className="sidebar-icon">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="#" className="sidebar-icon">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
          </svg>
        </a>
        <a href="#" className="sidebar-icon">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      </aside>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 backdrop-blur-sm bg-dark-bg/95 border-b border-dark-tertiary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg md:text-xl font-bold text-primary hover:text-primary-light flex items-center gap-2">
            <span>⚫</span> <span className="hidden sm:inline">Elias</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            <Link href="/" className="text-sm lg:text-base text-gray-300 hover:text-primary transition">
              Home
            </Link>
            <Link href="/projects" className="text-sm lg:text-base text-gray-300 hover:text-primary transition">
              #projects
            </Link>
            <Link href="/about-me" className="text-sm lg:text-base text-primary transition font-semibold">
              #about-me
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-secondary border-t border-dark-tertiary">
            <div className="px-4 py-4 space-y-4">
              <Link href="/" className="block text-gray-300 hover:text-primary transition">
                Home
              </Link>
              <Link href="/projects" className="block text-gray-300 hover:text-primary transition">
                #projects
              </Link>
              <Link href="/about-me" className="block text-primary transition font-semibold">
                #about-me
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:pl-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="section-title text-3xl sm:text-4xl md:text-5xl mb-12">#{t.pages.aboutMe.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div className="space-y-3 sm:space-y-4 order-2 md:order-1">
              <p className="text-gray-300 text-sm sm:text-base font-semibold">{t.pages.aboutMe.greeting}</p>
              <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
                {t.pages.aboutMe.bio1}
              </p>
              <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
                {t.pages.aboutMe.bio2}
              </p>
              <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
                {t.pages.aboutMe.bio3}
              </p>
              <button className="px-4 sm:px-6 py-2 border border-primary text-primary hover:bg-primary/10 rounded transition text-xs sm:text-sm md:text-base">
                {t.pages.aboutMe.downloadResume}
              </button>
            </div>

            <div className="relative h-64 sm:h-80 md:h-96 order-1 md:order-2">
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 text-sm">[About Image]</p>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="hidden sm:block absolute top-4 right-4 space-y-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-1 h-1 bg-primary/40 rounded-full"></div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Decorative squares */}
              <div className="hidden sm:block absolute bottom-4 right-4 space-y-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex gap-1">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="w-2 h-2 border border-primary/40"></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-16 sm:mt-20">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary"># {t.pages.aboutMe.education}</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm sm:text-base">{t.pages.aboutMe.selfTaught}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{t.pages.aboutMe.onlineCourses}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">{t.pages.aboutMe.modernWeb}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{t.pages.aboutMe.modernWebDesc}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary"># {t.pages.aboutMe.experience}</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm sm:text-base">{t.pages.aboutMe.freelanceDeveloper}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{t.pages.aboutMe.freelanceDates}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">{t.pages.aboutMe.webProjects}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{t.pages.aboutMe.webProjectsDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-tertiary py-6 sm:py-8 px-4 sm:px-6 md:pl-20 mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs sm:text-sm flex-wrap">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span>⚫</span>
              <p className="text-gray-500">
                {t.footer.email}
              </p>
            </div>
            <div className="text-gray-500">
              <p>{t.footer.copyright}</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-primary transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
