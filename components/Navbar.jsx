import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-lg tracking-tight text-text hover:text-accent transition-colors">
          PDR<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="font-mono text-xs text-dim hover:text-accent transition-colors tracking-widest uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:perwira.dzakwan11@gmail.com"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-bg font-mono text-xs font-medium px-4 py-2 rounded-sm hover:bg-accent/80 transition-colors tracking-wider uppercase"
        >
          Hire me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-text transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-6 bg-text transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-text transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <ul className="flex flex-col px-6 pb-6 gap-5 border-t border-border pt-4">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs text-dim hover:text-accent transition-colors tracking-widest uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:perwira.dzakwan11@gmail.com"
              className="inline-flex bg-accent text-bg font-mono text-xs font-medium px-4 py-2 rounded-sm tracking-wider uppercase"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
