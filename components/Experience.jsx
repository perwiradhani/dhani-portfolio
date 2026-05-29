import { useReveal } from './useReveal'

const experiences = [
  {
    type: 'work',
    company: 'PT. Swevel Universal Media',
    role: 'Full-Stack Developer',
    period: 'Jan 2025 – May 2026',
    points: [
      'Developed and maintained multiple company websites including tenderplus.id and rumahtinggal.id',
      'Designed and managed databases powering the systems',
      'Built REST APIs consumed by the Tenderplus mobile application',
    ],
    tech: ['CodeIgniter', 'MySQL', 'Postman'],
    current: true,
  },
  {
    type: 'internship',
    company: 'PT. Baracipta Esa Engineering',
    role: 'Full-Stack Developer',
    period: 'Aug 2023 – Dec 2023',
    points: [
      'Developed Tenderplus.id — a platform for monitoring the latest tender packages on LPSE',
    ],
    tech: ['CodeIgniter', 'JavaScript', 'MySQL'],
    current: false,
  },
  {
    type: 'internship',
    company: 'CV. Surya Anugrah Techindo',
    role: 'Full-Stack Developer',
    period: 'Feb 2023 – Jun 2023',
    points: [
      'Built a web + IoT system to check and monitor truck license plates, weight, and cargo type at a mining site',
    ],
    tech: ['Laravel', 'ReactJS', 'MySQL', 'NodeMCU ESP8266'],
    current: false,
  },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="reveal flex items-center gap-3 mb-16">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">02 — Experience</span>
        <div className="accent-line flex-1" />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => (
            <div key={i} className={`reveal delay-${(i + 1) * 100} flex flex-col md:flex-row gap-6`}>
              {/* Period */}
              <div className="md:w-[200px] md:text-right shrink-0 md:pr-8">
                <span className="font-mono text-xs text-dim tracking-wider">{exp.period}</span>
                {exp.current && (
                  <span className="block mt-2 font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-sm inline-block">
                    Current
                  </span>
                )}
                <span className="block mt-1 font-mono text-xs uppercase tracking-widest text-muted">
                  {exp.type}
                </span>
              </div>

              {/* Dot */}
              <div className="hidden md:flex items-start pt-0.5">
                <div className={`w-2 h-2 rounded-full border-2 mt-1 ${exp.current ? 'border-accent bg-accent' : 'border-muted bg-transparent'}`} />
              </div>

              {/* Content */}
              <div className="flex-1 md:pl-8 bg-surface border border-border rounded-sm p-6 hover:border-muted transition-colors">
                <h3 className="font-display font-bold text-xl text-text mb-1">{exp.company}</h3>
                <p className="font-mono text-sm text-accent mb-4">{exp.role}</p>
                <ul className="space-y-2 mb-5">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-dim text-sm leading-relaxed">
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="font-mono text-xs bg-bg border border-border text-muted px-2.5 py-1 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
