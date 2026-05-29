import { useEffect, useRef } from 'react'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('[data-animate]')
    els?.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 150 + i * 120)
    })
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24 pb-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute right-0 top-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,243,90,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Left — Text */}
        <div className="flex-1 order-2 md:order-1">
          {/* Tag */}
          <div data-animate className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-accent" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Full-Stack Developer
            </span>
          </div>

          {/* Name */}
          <h1
            data-animate
            className="font-display font-extrabold leading-none mb-5"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', letterSpacing: '-0.02em' }}
          >
            Perwira
            <br />
            <span className="text-accent">Dzakwan</span>
            <br />
            Ramadhani
          </h1>

          {/* Tagline */}
          <p
            data-animate
            className="text-dim font-sans text-base md:text-lg max-w-md leading-relaxed mb-8"
          >
            Building web experiences at the intersection of clean code and thoughtful design.
            Based in <span className="text-c-text">Madiun, Indonesia</span>.
          </p>

          {/* CTAs */}
          <div data-animate className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent text-bg font-mono text-sm font-medium px-6 py-3 rounded-sm hover:bg-accent/80 transition-all hover:gap-3 tracking-wide"
            >
              View Projects
              <span>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-c-border text-dim font-mono text-sm px-6 py-3 rounded-sm hover:border-muted hover:text-c-text transition-all tracking-wide"
            >
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div data-animate className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/perwira-dzakwanramadhani/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-accent transition-colors tracking-widest uppercase"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/perwiradhani"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-accent transition-colors tracking-widest uppercase"
            >
              GitHub ↗
            </a>
            <a
              href="mailto:perwira.dzakwan11@gmail.com"
              className="font-mono text-xs text-muted hover:text-accent transition-colors tracking-widest uppercase"
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* Right — Photo */}
        <div data-animate className="order-1 md:order-2 shrink-0">
          <div className="relative">
            {/* Accent border offset */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full rounded-sm border border-accent/40"
              style={{ zIndex: 0 }}
            />
            {/* Photo container */}
            <div
              className="relative z-10 w-56 h-64 md:w-72 md:h-80 rounded-sm overflow-hidden bg-surface border border-c-border"
            >
              {/* Replace the img src with your actual photo path e.g. /photo.jpg */}
              <img
                src="/profile.jpg"
                alt="Perwira Dzakwan Ramadhani"
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              {/* Fallback placeholder shown when no image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span className="font-mono text-xs tracking-widest uppercase">Add photo.jpg<br/>to /public</span>
              </div>
            </div>
            {/* Accent dot */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-accent rounded-full z-20" />
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}