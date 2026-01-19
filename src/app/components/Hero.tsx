'use client';

import { useI18n } from "@/app/contexts/I18nContext";

export function Hero() {
  const { t, isReady } = useI18n();

  if (!isReady || !t) {
    return null;
  }

  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:pl-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center relative">
        {/* Decorative elements - Hidden on mobile */}
        <div className="hidden md:block absolute top-20 right-32 w-32 h-32 border border-primary/20"></div>
        <div className="hidden md:block absolute top-40 right-20 w-20 h-20 border border-primary/20"></div>
        
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

          <p className="text-base sm:text-lg text-gray-300">
            {t.pages.home.hero.description}
          </p>

          <button className="px-4 sm:px-6 py-2 border border-primary text-primary hover:bg-primary/10 transition text-sm sm:text-base">
            {t.pages.home.hero.cta}
          </button>

          <div className="pt-2 sm:pt-4">
            <div className="badge inline-flex items-center gap-2">
              <div className="w-3 h-3 border border-accent-purple"></div>
              <span className="text-xs sm:text-sm">{t.pages.home.hero.status}</span>
            </div>
          </div>
        </div>

        {/* Right image - Developer illustration */}
        <div className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-accent-purple/20 via-primary/10 to-accent-purple/5 flex items-center justify-center overflow-hidden relative">
            {/* Decorative code window */}
            <div className="w-4/5 h-3/4 border-2 border-accent-purple/40 flex flex-col">
              {/* Window header */}
              <div className="bg-accent-purple/20 border-b border-accent-purple/40 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent-purple/60"></div>
                <div className="w-3 h-3 rounded-full bg-accent-purple/40"></div>
                <div className="w-3 h-3 rounded-full bg-accent-purple/20"></div>
                <span className="text-xs text-accent-purple/60 ml-2">portfolio.tsx</span>
              </div>
              
              {/* Code content */}
              <div className="flex-1 p-4 space-y-2 text-xs font-mono">
                <div className="text-accent-purple">{'<Hero />'}</div>
                <div className="text-gray-300 ml-4">
                  <span className="text-primary">{`name`}</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-green-400">"Muhamad Irvan"</span>
                </div>
                <div className="text-gray-300 ml-4">
                  <span className="text-primary">{`role`}</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-green-400">"Developer"</span>
                </div>
                <div className="text-gray-300 ml-4">
                  <span className="text-primary">{`experience`}</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-green-400">3</span>
                  <span className="text-gray-400">+</span>
                  <span className="text-green-400">"years"</span>
                </div>
                <div className="text-accent-purple">{'  />'}</div>
              </div>
            </div>
          </div>

          {/* Decorative dots */}
          <div className="hidden sm:block absolute bottom-4 right-4 space-y-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="w-1 h-1 bg-primary/40"></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
