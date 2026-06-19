// src/components/cards/ProjectsCard.jsx
import { projects } from '../../data/portfolio';

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M7 7h10v10"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

function ProjectItem({ project }) {
  return (
    <div
      style={{
        padding: '14px',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--bg-subtle)',
        transition: 'all 220ms cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
            {project.title}
          </h3>
          {project.subtitle && (
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
              {project.subtitle}
            </div>
          )}
        </div>
        <span className="project-year">{project.year}</span>
      </div>

      {/* Description */}
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '10px' }}>
        {project.description}
      </p>

      {/* Stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '10px' }}>
        {project.stack.map((tech) => (
          <span key={tech} style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text-tertiary)', padding: '2px 7px', borderRadius: '99px', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '12px',
            fontWeight: '600',
            color: 'var(--accent)',
            textDecoration: 'none',
            transition: 'gap 150ms',
          }}
          aria-label={`View ${project.title} on GitHub`}
        >
          <GitHubIcon />
          View on GitHub
          <ArrowIcon />
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '12px',
              fontWeight: '600',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'gap 150ms',
            }}
            aria-label={`Live demo of ${project.title}`}
          >
            <GlobeIcon />
            Live Demo
            <ArrowIcon />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsCard() {
  return (
    <div
      className="bento-card animate-fade-up"
      style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '14px' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="section-label" style={{ marginBottom: 0 }}>Projects</div>
        <a
          href="https://github.com/divyanshuchander"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          All projects <ArrowIcon />
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
