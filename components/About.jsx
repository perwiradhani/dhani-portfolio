import { useReveal } from './useReveal'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Built' },
  { value: '2', label: 'Internships' },
  { value: 'D3', label: 'UNS Graduate' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section label */}
      <div className="reveal flex items-center gap-3 mb-16">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">01 — About</span>
        <div className="accent-line flex-1" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div>
          <h2 className="reveal font-display font-bold text-4xl md:text-5xl leading-tight mb-8" style={{ letterSpacing: '-0.02em' }}>
            Crafting digital tools that actually{' '}
            <span className="text-accent">work.</span>
          </h2>
          <p className="reveal delay-100 text-dim leading-relaxed mb-6">
            I'm a D3 Informatics graduate from Universitas Sebelas Maret with hands-on experience
            building full-stack web applications. My journey spans from IoT-integrated monitoring
            systems to tender management platforms serving real users.
          </p>
          <p className="reveal delay-200 text-dim leading-relaxed mb-8">
            I'm deeply curious about technology and love adapting to new tools and frameworks.
            Whether working solo or in a team, I bring strong communication and a problem-solving
            mindset to every project I touch.
          </p>
          <div className="reveal delay-300 flex flex-wrap gap-3">
            {['Laravel', 'ReactJS', 'CodeIgniter', 'Flutter', 'MySQL', 'PHP'].map((t) => (
              <span
                key={t}
                className="font-mono text-xs border border-border text-dim px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`reveal delay-${(i + 1) * 100} bg-surface border border-border rounded-sm p-6 hover:border-muted transition-colors`}
            >
              <span className="font-display font-extrabold text-4xl text-accent block mb-2" style={{ letterSpacing: '-0.03em' }}>
                {stat.value}
              </span>
              <span className="font-mono text-xs text-dim tracking-wider uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
