'use client';

import Link from "next/link";
import { useState } from "react";
import { useTitleAnimation } from "./hooks/useTitleAnimation";
import { useI18n } from "./contexts/I18nContext";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { CounterCard } from "./components/CounterCard";
import { PixelatedTriangle, PixelatedDiamond, PixelatedSquares } from "./components/Decorations";

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, isReady } = useI18n();
  useTitleAnimation('home');

  // Prevent rendering until translations are ready (hydration safety)
  if (!isReady || !t) {
    return null;
  }

  return (
    <main className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <Hero />

      {/* Quote Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 md:pl-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl ml-auto">
            <div className="quote-box text-center text-sm sm:text-base md:text-2xl">
              <p className="font-mono text-gray-300 mb-2 sm:mb-4">
                "{t.pages.home.quote.text}"
              </p>
              <p className="text-primary text-right text-sm md:text-base">- {t.pages.home.quote.author}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 md:pl-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
            <h2 className="section-title mb-0 text-2xl sm:text-3xl">{t.pages.home.projects.title}</h2>
            <Link href="/projects" className="text-primary hover:text-primary-light text-xs sm:text-sm whitespace-nowrap">
              {t.pages.home.projects.viewAll}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {t.pages.projects.items.slice(0, 3).map((project: any, idx: number) => (
              <div key={idx} className="project-card">
                <div className={`${['bg-orange-600/20', 'bg-green-600/20', 'bg-purple-600/20'][idx]} h-24 sm:h-32 mb-4 flex items-center justify-center`}>
                   <span className="text-lg sm:text-2xl font-bold text-gray-300">{['CN', 'PX', 'KA'][idx]}</span>
                </div>
                <h3 className="text-base sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                   {project.tags.map((tag: string, i: number) => (
                     <span key={i} className="badge">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 md:pl-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-2xl sm:text-3xl">{t.pages.home.skills.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left decorative elements - Hidden on mobile */}
            <div className="hidden md:block relative h-96">
              {/* Top-left border box */}
              <div className="absolute top-0 left-0 w-20 h-20 border-2 border-primary/40"></div>
              
              {/* Middle-left border box */}
              <div className="absolute top-1/3 left-8 w-24 h-24 border-2 border-primary/40"></div>
              
              {/* Bottom-left border box */}
              <div className="absolute bottom-0 left-0 w-20 h-20 border-2 border-primary/40"></div>

              {/* Pixelated decorations - smaller and contained */}
              <div className="absolute top-8 left-32">
                <PixelatedSquares />
              </div>
              
              <div className="absolute top-1/2 left-16 transform -translate-y-1/2">
                <PixelatedTriangle />
              </div>
              
              <div className="absolute bottom-0 left-32">
                <PixelatedDiamond />
              </div>
            </div>

            {/* Skills Table */}
            <div className="overflow-x-auto">
              {/* Main Skills Table */}
              <table className="skills-table text-xs sm:text-sm">
                <thead>
                  <tr>
                    <th>{t.pages.home.skills.languages}</th>
                    <th>{t.pages.home.skills.databases}</th>
                    <th className="hidden sm:table-cell">{t.pages.home.skills.tools}</th>
                  </tr>
                </thead>
                <tbody>
                  {Math.max(
                    t.pages.home.skills.items.languages.length,
                    t.pages.home.skills.items.databases.length,
                    t.pages.home.skills.items.tools.length
                  ) > 4 ? (
                    // Show all items if more than 4
                    Array.from({ length: Math.max(
                      t.pages.home.skills.items.languages.length,
                      t.pages.home.skills.items.databases.length,
                      t.pages.home.skills.items.tools.length
                    ) }).map((_, idx) => (
                      <tr key={idx}>
                        <td>{t.pages.home.skills.items.languages[idx] || ''}</td>
                        <td>{t.pages.home.skills.items.databases[idx] || ''}</td>
                        <td className="hidden sm:table-cell">{t.pages.home.skills.items.tools[idx] || ''}</td>
                      </tr>
                    ))
                  ) : (
                    // Show first 4 items if 4 or less
                    [0, 1, 2, 3].map((idx) => (
                      <tr key={idx}>
                        <td>{t.pages.home.skills.items.languages[idx] || ''}</td>
                        <td>{t.pages.home.skills.items.databases[idx] || ''}</td>
                        <td className="hidden sm:table-cell">{t.pages.home.skills.items.tools[idx] || ''}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              <div className="mt-6 sm:mt-8">
                <h4 className="text-primary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t.pages.home.skills.other}</h4>
                <table className="skills-table text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>{t.pages.home.skills.frameworks}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.pages.home.skills.items.frameworks.map((framework: string, idx: number) => (
                      <tr key={idx}>
                        <td>{framework}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 md:pl-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="section-title text-2xl sm:text-3xl">{t.pages.home.about.title}</h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              {t.pages.home.about.description1}
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              {t.pages.home.about.description2}
            </p>
            <Link href="/about-me" className="inline-block text-primary hover:text-primary-light transition text-sm sm:text-base">
              {t.pages.home.about.readMore}
            </Link>
          </div>

           {/* Right image placeholder */}
           <div className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
             <div className="w-full h-full bg-gradient-to-br from-accent-purple/15 via-primary/5 to-accent-purple/5 flex items-center justify-center overflow-hidden relative">
               {/* Stats cards */}
                 <div className="grid grid-cols-2 gap-4 w-4/5">
                   {/* Skills card */}
                   <CounterCard 
                     target={t.pages.home.skills.items.languages.length + t.pages.home.skills.items.databases.length + t.pages.home.skills.items.tools.length + t.pages.home.skills.items.frameworks.length}
                     label={t.summaryCard.cardOneTitle}
                   />
                   
                   {/* Projects card */}
                   <CounterCard 
                     target={t.pages.projects.items.length}
                     label={t.summaryCard.cardTwoTitle}
                   />
                   
                   {/* Experience card */}
                   <CounterCard 
                     target={t.pages.aboutMe.items.experience.length}
                     label={t.summaryCard.cardThreeTitle}
                   />
                   
                   {/* Clients card */}
                   <CounterCard 
                     target={parseInt(t.summaryCard.customValueCardFour) || 0}
                     label={t.summaryCard.cardFourTitle}
                   />
                 </div>
             </div>
           </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-12 sm:py-20 px-4 sm:px-6 md:pl-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="section-title text-2xl sm:text-3xl">{t.pages.home.contacts.title}</h2>
            <p className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base">
              {t.pages.home.contacts.interested}{' '}
              <span className="text-primary">{t.pages.home.contacts.description}</span>
            </p>

            <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4 text-sm sm:text-base">
              <p className="text-gray-300">
                <span className="text-primary">📨</span> {t.pages.home.contacts.messageHere}
              </p>
              <p className="text-gray-300">
                <span className="text-primary">💬</span> {t.pages.home.contacts.discord}
              </p>
              <p className="text-gray-300">
                <span className="text-primary">✉️</span> {t.pages.home.contacts.email}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
