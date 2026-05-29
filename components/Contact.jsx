import { useReveal } from './useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="reveal flex items-center gap-3 mb-16">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">05 — Contact</span>
        <div className="accent-line flex-1" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <h2
            className="reveal font-display font-extrabold leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}
          >
            Let's build
            <br />
            something
            <br />
            <span className="text-accent">together.</span>
          </h2>
          <p className="reveal delay-100 text-dim leading-relaxed max-w-sm">
            I'm open to full-time roles, freelance projects, and interesting collaborations.
            Drop me a line and let's talk.
          </p>
        </div>

        {/* Right */}
        <div className="reveal delay-200 space-y-4">
          {[
            {
              label: 'Email',
              value: 'perwira.dzakwan11@gmail.com',
              href: 'mailto:perwira.dzakwan11@gmail.com',
            },
            {
              label: 'Phone / WhatsApp',
              value: '+62 815 5323 0899',
              href: 'tel:+6281553230899',
            },
            {
              label: 'LinkedIn',
              value: 'perwira-dzakwan-ramadhani',
              href: 'https://www.linkedin.com/in/perwira-dzakwan-ramadhani',
            },
            {
              label: 'GitHub',
              value: 'perwiradhani',
              href: 'https://github.com/perwiradhani',
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-surface border border-border rounded-sm px-6 py-5 hover:border-accent transition-all"
            >
              <div>
                <span className="font-mono text-xs text-muted tracking-widest uppercase block mb-1">
                  {item.label}
                </span>
                <span className="font-sans text-text group-hover:text-accent transition-colors">
                  {item.value}
                </span>
              </div>
              <span className="text-muted group-hover:text-accent transition-colors text-xl">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
