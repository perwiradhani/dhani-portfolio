import { useReveal } from './useReveal'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['HTML', 'CSS', 'PHP', 'JavaScript', 'Python', 'Java', 'C#', 'Dart'],
  },
  {
    category: 'Frameworks',
    skills: ['Laravel', 'CodeIgniter', 'ReactJS', 'ExpressJS', 'Flutter'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'phpMyAdmin', 'Navicat'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Figma', 'Unity Engine', 'Godot Engine', 'Postman', 'Git'],
  },
  {
    category: 'Operating Systems',
    skills: ['Windows', 'Ubuntu', 'Kali Linux'],
  },
  {
    category: 'Soft Skills',
    skills: ['Team Collaboration', 'Time Management', 'Communication', 'Problem Solving', 'Responsibility'],
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="reveal flex items-center gap-3 mb-16">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">04 — Skills</span>
        <div className="accent-line flex-1" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className={`reveal delay-${(i + 1) * 100} bg-surface border border-border rounded-sm p-6 hover:border-muted transition-colors`}
          >
            <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-5">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs text-text bg-bg border border-border px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
