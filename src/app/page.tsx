'use client';

import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useTitleAnimation } from "./hooks/useTitleAnimation";
import { useI18n } from "./contexts/I18nContext";

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
      {/* Left Sidebar - Hidden on mobile */}
      <aside className="sidebar hidden md:flex md:fixed">
        <a href="https://github.com/irvandandung" target="_blank" rel="noopener noreferrer" className="sidebar-icon">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/irvandandung/" target="_blank" rel="noopener noreferrer" className="sidebar-icon">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/irvandandung/" target="_blank" rel="noopener noreferrer" className="sidebar-icon">
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
            <span>⚫</span> <span className="hidden sm:inline">MID</span>
          </Link>

           {/* Desktop Navigation */}
           <div className="hidden md:flex gap-6 lg:gap-8 items-center">
             <Link href="/" className="text-sm lg:text-base text-primary transition font-semibold">
               #home
             </Link>
             <Link href="/projects" className="text-sm lg:text-base text-gray-300 hover:text-primary transition">
               #projects
             </Link>
             <Link href="/about-me" className="text-sm lg:text-base text-gray-300 hover:text-primary transition">
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
               <Link href="/" className="block text-primary transition font-semibold">
                 #home
               </Link>
               <Link href="/projects" className="block text-gray-300 hover:text-primary transition">
                 #projects
               </Link>
               <Link href="/about-me" className="block text-gray-300 hover:text-primary transition">
                 #about-me
               </Link>
               <LanguageSwitcher />
             </div>
           </div>
         )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:pl-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center relative">
          {/* Decorative elements - Hidden on mobile */}
          <div className="hidden md:block absolute top-20 right-32 w-32 h-32 border border-primary/20 rounded"></div>
          <div className="hidden md:block absolute top-40 right-20 w-20 h-20 border border-primary/20 rounded"></div>
          
           {/* Left content */}
           <div className="space-y-4 sm:space-y-6 z-10">
             <div>
               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary-light">
                   {t.pages.home.hero.title1}
                 </span>
                 <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary-light">
                   {t.pages.home.hero.title2}
                 </span>
                 <span className="text-gray-300"> {t.pages.home.hero.title3}</span>
                 <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary-light">
                   {t.pages.home.hero.title4}
                 </span>
               </h1>
             </div>

             <p className="text-base sm:text-lg text-gray-400">
               {t.pages.home.hero.description}
             </p>

             <button className="px-4 sm:px-6 py-2 border border-primary text-primary hover:bg-primary/10 rounded transition text-sm sm:text-base">
               {t.pages.home.hero.cta}
             </button>

             <div className="pt-2 sm:pt-4">
               <div className="badge inline-flex items-center gap-2">
                 <span className="w-2 h-2 bg-primary rounded-full"></span>
                 <span className="text-xs sm:text-sm">{t.pages.home.hero.status}</span>
               </div>
             </div>
           </div>

          {/* Right image placeholder */}
          <div className="relative h-64 sm:h-80 md:h-96 flex items-end justify-end">
            <div className="w-full bg-gradient-to-br from-primary/30 to-primary/5 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 text-sm">[Hero Image]</p>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="hidden sm:block absolute bottom-4 right-4 space-y-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-1 h-1 bg-primary/40 rounded-full"></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
             <h2 className="section-title mb-0 text-2xl sm:text-3xl">#{t.pages.home.projects.title}</h2>
             <Link href="/projects" className="text-primary hover:text-primary-light text-xs sm:text-sm whitespace-nowrap">
               {t.pages.home.projects.viewAll}
             </Link>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
             {t.pages.home.projects.items.map((project: any, idx: number) => (
               <div key={idx} className="project-card">
                 <div className={`${['bg-orange-600/20', 'bg-green-600/20', 'bg-purple-600/20'][idx]} h-24 sm:h-32 rounded mb-4 flex items-center justify-center`}>
                   <span className="text-lg sm:text-2xl font-bold text-gray-400">{['CN', 'PX', 'KA'][idx]}</span>
                 </div>
                 <h3 className="text-base sm:text-xl font-semibold mb-2">{project.title}</h3>
                 <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{project.description}</p>
                 <div className="flex flex-wrap gap-2">
                   {project.tags.map((tag: string, i: number) => (
                     <span key={i} className="px-2 sm:px-3 py-1 bg-dark-tertiary text-gray-300 text-xs rounded border border-dark-tertiary">
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
           <h2 className="section-title text-2xl sm:text-3xl">#{t.pages.home.skills.title}</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
             {/* Left decorative elements - Hidden on mobile */}
             <div className="hidden md:block relative h-64">
               <div className="absolute top-0 left-0 w-20 h-20 border border-primary/20 rounded"></div>
               <div className="absolute top-24 left-12 w-16 h-16 border border-primary/20 rounded"></div>
               <div className="absolute bottom-0 left-20 w-24 h-24 border border-primary/20 rounded"></div>
             </div>

             {/* Skills Table */}
             <div className="overflow-x-auto">
               <table className="skills-table text-xs sm:text-sm">
                 <thead>
                   <tr>
                     <th>{t.pages.home.skills.languages}</th>
                     <th>{t.pages.home.skills.databases}</th>
                     <th className="hidden sm:table-cell">{t.pages.home.skills.tools}</th>
                   </tr>
                 </thead>
                 <tbody>
                   {[0, 1, 2, 3].map((idx) => (
                     <tr key={idx}>
                       <td>{t.pages.home.skills.items.languages[idx]}</td>
                       <td>{t.pages.home.skills.items.databases[idx] || ''}</td>
                       <td className="hidden sm:table-cell">{t.pages.home.skills.items.tools[idx] || ''}</td>
                     </tr>
                   ))}
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
         <div className="max-w-7xl mx-auto">
           <h2 className="section-title text-2xl sm:text-3xl">#{t.pages.home.about.title}</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
             <div className="space-y-3 sm:space-y-4 order-2 md:order-1">
               <p className="text-gray-300 text-sm sm:text-base">{t.pages.home.about.intro}</p>
               <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
                 {t.pages.home.about.description1}
               </p>
               <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
                 {t.pages.home.about.description2}
               </p>
               <button className="px-4 sm:px-6 py-2 border border-primary text-primary hover:bg-primary/10 rounded transition text-xs sm:text-sm md:text-base">
                 {t.pages.home.about.readMore}
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
         </div>
       </section>

       {/* Contacts Section */}
       <section id="contacts" className="py-12 sm:py-20 px-4 sm:px-6 md:pl-20">
         <div className="max-w-7xl mx-auto">
           <h2 className="section-title text-2xl sm:text-3xl">#{t.pages.home.contacts.title}</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
             <div className="space-y-2 sm:space-y-4">
               <p className="text-gray-300 text-sm sm:text-base">{t.pages.home.contacts.interested}</p>
               <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                 {t.pages.home.contacts.description}
               </p>
             </div>

             <div className="space-y-3 sm:space-y-4">
               <div className="border border-dark-tertiary rounded p-4 sm:p-6 bg-dark-secondary/50">
                 <p className="text-primary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t.pages.home.contacts.messageHere}</p>
                 <div className="space-y-2">
                   <p className="text-gray-400 text-xs sm:text-sm">
                     <span className="text-primary">💬</span> {t.pages.home.contacts.discord}
                   </p>
                   <p className="text-gray-400 text-xs sm:text-sm">
                     <span className="text-primary">✉️</span> {t.pages.home.contacts.email}
                   </p>
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
                <a href="https://github.com/irvandandung" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/irvandandung/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/irvandandung/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition">
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