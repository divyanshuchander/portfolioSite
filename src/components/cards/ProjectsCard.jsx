// src/components/cards/ProjectsCard.jsx
import { projects } from '../../data/portfolio';

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M7 17 17 7M7 7h10v10"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

/**
 * Each project is its own bento card (not crammed into one).
 * The parent BentoGrid handles the grid placement.
 */
export function ProjectCard({ project, ordinal }) {
  // Featured projects get a wider card
  const colSpan = project.featured ? 6 : 12;

  return (
    <div
      className="bento-card animate-fade-up"
      style={{
        gridColumn: `span ${colSpan}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        justifyContent: 'space-between',
      }}
    >
      {/* Header */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
            {/* Ordinal number */}
            <span
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: '28px',
                fontWeight: '300',
                color: 'var(--border-strong)',
                lineHeight: '1',
              }}
            >
              {String(ordinal).padStart(2, '0')}
            </span>
            <div>
              <h3
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  lineHeight: '1.2',
                }}
              >
                {project.title}
              </h3>
              {project.subtitle && (
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                  {project.subtitle}
                </div>
              )}
            </div>
          </div>
          <span className="project-year">{project.year}</span>
        </div>

        {/* Description */}
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '14px' }}>
          {project.description}
        </p>

        {/* Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.stack.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '4px', borderTop: '1px solid var(--border)' }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            fontWeight: '600',
            color: 'var(--accent)',
            textDecoration: 'none',
          }}
          aria-label={`View ${project.title} source code`}
        >
          <GitHubIcon /> Source <ArrowIcon />
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontWeight: '600',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              backgroundColor: 'var(--accent-soft)',
              padding: '4px 12px',
              borderRadius: '99px',
              border: '1px solid var(--accent)',
              transition: 'all 180ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            aria-label={`Live demo of ${project.title}`}
          >
            <GlobeIcon /> Live Demo <ArrowIcon />
          </a>
        )}
      </div>
    </div>
  );
}

// Re-export projects for BentoGrid to iterate
export { projects };
