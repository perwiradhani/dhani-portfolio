import { useReveal } from './useReveal'

const projects = [
  {
    number: '01',
    title: 'Truck Load Monitoring System',
    period: 'Feb 2023 – Jun 2023',
    description:
      'A website integrated with IoT hardware to monitor trucks at a mining site. Features include license plate scanning and automatic weight detection of truck cargo.',
    tech: ['Laravel', 'ReactJS', 'MySQL', 'NodeMCU ESP8266'],
    repo: 'https://github.com/perwiradhani/digital-scale.git',
    live: null,
    featured: true,
  },
  {
    number: '02',
    title: 'Tenderplus.id',
    period: 'Aug 2023 – Dec 2023',
    description:
      'A platform that simplifies monitoring the latest tender packages on LPSE (government procurement portal), helping businesses stay on top of opportunities.',
    tech: ['CodeIgniter', 'JavaScript', 'MySQL'],
    repo: null,
    live: 'https://tenderplus.id/',
    featured: true,
  },
  {
    number: '03',
    title: 'Online Ticket Booking System',
    period: 'Jun 2023',
    description:
      'A web application for booking travel tickets online, enabling users to search and reserve seats conveniently.',
    tech: ['Laravel', 'MySQL'],
    repo: null,
    live: null,
    featured: false,
  },
]

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="reveal flex items-center gap-3 mb-16">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">03 — Projects</span>
        <div className="accent-line flex-1" />
      </div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`reveal delay-${(i + 1) * 100} group relative bg-surface border border-border rounded-sm p-8 hover:border-muted transition-all duration-300 ${
              project.featured ? 'md:p-10' : ''
            }`}
          >
            {/* Featured badge */}
            {project.featured && (
              <span className="absolute top-4 right-4 font-mono text-xs text-accent/60 tracking-widest uppercase">
                Featured
              </span>
            )}

            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Number */}
              <span
                className="font-display font-extrabold text-5xl text-border group-hover:text-muted transition-colors leading-none shrink-0"
                style={{ letterSpacing: '-0.04em' }}
              >
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-bold text-2xl text-text group-hover:text-accent transition-colors" style={{ letterSpacing: '-0.01em' }}>
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-muted">{project.period}</span>
                </div>

                <p className="text-dim leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono text-xs border border-border text-muted px-2.5 py-1 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 ml-auto">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-dim hover:text-accent transition-colors tracking-wider uppercase"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-dim hover:text-accent transition-colors tracking-wider uppercase"
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
