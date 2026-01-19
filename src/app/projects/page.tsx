'use client';

import { useState } from "react";
import { useTitleAnimation } from "@/app/hooks/useTitleAnimation";
import { useI18n } from "@/app/contexts/I18nContext";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export default function ProjectsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, isReady } = useI18n();
  useTitleAnimation('projects');

  // Prevent rendering until translations are ready (hydration safety)
  if (!isReady || !t) {
    return null;
  }

  const colorMap = ['bg-orange-600/20', 'bg-green-600/20', 'bg-purple-600/20', 'bg-blue-600/20', 'bg-indigo-600/20', 'bg-pink-600/20'];
  const iconMap = ['CN', 'PX', 'KA', 'P4', 'P5', 'P6'];

  return (
    <main className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Content */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:pl-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="section-title text-3xl sm:text-4xl md:text-5xl mb-12">{t.pages.projects.title}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {t.pages.projects.items.map((project: any, idx: number) => (
              <a
                key={idx}
                href={project.link}
                className="project-card group cursor-pointer"
              >
                <div className={`${colorMap[idx]} h-24 sm:h-32 mb-4 flex items-center justify-center group-hover:brightness-110 transition`}>
                   <span className="text-lg sm:text-2xl font-bold text-gray-300">{iconMap[idx]}</span>
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
