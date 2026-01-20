'use client';

import Image from "next/image";
import { useState } from "react";
import { useTitleAnimation } from "@/app/hooks/useTitleAnimation";
import { useI18n } from "@/app/contexts/I18nContext";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

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
      {/* Navigation */}
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Content */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:pl-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="section-title text-3xl sm:text-4xl md:text-5xl mb-12">{t.pages.aboutMe.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div className="space-y-3 sm:space-y-4 order-2 md:order-1">
              <p className="text-gray-300 text-sm sm:text-base font-semibold">{t.pages.aboutMe.greeting}</p>
              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                {t.pages.aboutMe.bio1}
              </p>
              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                {t.pages.aboutMe.bio2}
              </p>
              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                {t.pages.aboutMe.bio3}
              </p>
              <button className="px-4 sm:px-6 py-2 border border-primary text-primary hover:bg-primary/10 transition text-xs sm:text-sm md:text-base">
                {t.pages.aboutMe.downloadResume}
              </button>
            </div>

            <div className="relative h-64 sm:h-80 md:h-96 order-1 md:order-2">
              <div className="w-full h-full bg-gradient-to-br from-accent-purple/20 via-primary/10 to-accent-purple/5 flex items-center justify-center overflow-hidden relative p-4">
                {/* Image frame with border */}
                <div className="relative w-full h-full border-2 border-accent-purple/40 flex items-center justify-center bg-dark-bg/40">
                  <Image
                    src="/Dandung-removebg-preview.png"
                    alt="Muhamad Irvan Dandung"
                    fill
                    className="object-contain object-center"
                    priority
                  />
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
                  <p className="text-gray-300 text-xs sm:text-sm">{t.pages.aboutMe.onlineCourses}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">{t.pages.aboutMe.modernWeb}</p>
                  <p className="text-gray-300 text-xs sm:text-sm">{t.pages.aboutMe.modernWebDesc}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary"># {t.pages.aboutMe.experience}</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm sm:text-base">{t.pages.aboutMe.freelanceDeveloper}</p>
                  <p className="text-gray-300 text-xs sm:text-sm">{t.pages.aboutMe.freelanceDates}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">{t.pages.aboutMe.webProjects}</p>
                  <p className="text-gray-300 text-xs sm:text-sm">{t.pages.aboutMe.webProjectsDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
