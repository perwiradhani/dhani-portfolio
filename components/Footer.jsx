export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-lg text-text">
          PDR<span className="text-accent">.</span>
        </span>
        <span className="font-mono text-xs text-muted text-center">
          © {new Date().getFullYear()} Perwira Dzakwan Ramadhani — Built with Next.js & Tailwind CSS
        </span>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/perwira-dzakwanramadhani/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-accent transition-colors tracking-widest uppercase"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/perwiradhani"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-accent transition-colors tracking-widest uppercase"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
