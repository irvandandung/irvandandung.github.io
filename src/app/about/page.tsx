'use client';

import Link from 'next/link';

export default function AboutPage() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
    { category: 'Tools & Platforms', items: ['Docker', 'Git', 'AWS', 'Vercel', 'GitHub Actions'] },
    { category: 'Other', items: ['REST APIs', 'Microservices', 'System Design', 'Agile', 'CI/CD'] },
  ];

  const experience = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
    },
    {
      role: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Built and maintained multiple production applications using modern tech stack.',
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Co.',
      period: '2018 - 2020',
      description: 'Contributed to development of core features and learned industry best practices.',
    },
  ];

  return (
    <main className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-sm bg-dark-bg/95 border-b border-dark-tertiary">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-primary-light">
            Elias
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/" className="text-gray-300 hover:text-primary transition">
              Home
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-primary transition">
              Projects
            </Link>
            <Link href="/about" className="text-primary">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-400">
            A passionate developer dedicated to creating beautiful and functional web experiences.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-primary/30 to-primary/10 h-96 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"></div>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-6">Who Am I?</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm a front-end developer and web designer with a passion for building beautiful,
                responsive websites. I specialize in modern JavaScript frameworks and have experience
                working with teams at various stages of their journey.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My expertise lies in crafting elegant solutions to complex problems using technologies
                like React, Next.js, and TypeScript. I'm committed to writing clean, maintainable code
                and staying updated with the latest industry trends.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond coding, I enjoy mentoring developers, contributing to open-source projects,
                and sharing knowledge through technical content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 px-6 bg-dark-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="border-l-4 border-primary pl-8 py-4">
                <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                <p className="text-gray-400 text-sm">{exp.company} • {exp.period}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-dark-secondary border border-dark-tertiary rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, sidx) => (
                    <li key={sidx} className="text-gray-300">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-dark-secondary/30 border-t border-dark-tertiary">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex gap-4 justify-center pt-4 flex-wrap">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition"
            >
              Send Email
            </a>
            <a
              href="#"
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-tertiary py-8 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <p className="text-gray-500">
            © 2024 Elias. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-primary transition">
              GitHub
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition">
              Twitter
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}