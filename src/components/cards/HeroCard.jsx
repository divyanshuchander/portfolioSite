// src/components/cards/HeroCard.jsx
import { personal, education } from '../../data/portfolio';

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const BookIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
  </svg>
);

export default function HeroCard() {
  return (
    <div
      className="bento-card hero-card animate-fade-up"
      style={{
        gridColumn: 'span 12',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '30px'
      }}
    >
      {/* Left side: Profile Info */}
      <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img
            src={`https://github.com/${personal.githubUsername}.png`}
            alt={personal.name}
            className="hero-avatar"
            onError={(e) => { e.target.src = '/profile.png'; }}
            width="64"
            height="64"
            style={{ width: '64px', height: '64px' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  backgroundColor: 'var(--accent-soft)',
                  padding: '2px 8px',
                  borderRadius: '99px',
                }}
              >
                Open to Work
              </span>
            </div>
            <h1 className="hero-name" style={{ fontSize: '2rem' }}>{personal.name}</h1>
            <p className="hero-title">
              <span style={{ color: 'var(--text-tertiary)', marginRight: '6px' }}>
                <LocationIcon />
              </span>
              {personal.location} · Computer Science '26
            </p>
          </div>
        </div>

        {/* Tagline replaces the long bio */}
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            maxWidth: '500px',
          }}
        >
          {personal.bio}
        </p>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <GitHubIcon /> GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href={`mailto:${personal.email}`} className="social-link" aria-label="Email">
            <MailIcon /> Email
          </a>
        </div>
      </div>

      {/* Right side: Education (Compact) */}
      <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '300px' }}>
        <div className="section-label" style={{ marginBottom: '0px' }}>Education</div>
        {education.map((edu) => (
          <div
            key={edu.shortName}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '12px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border)',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                flexShrink: 0,
                border: '1px solid var(--border)',
              }}
            >
              <BookIcon />
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                {edu.school}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                {edu.degree}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                {edu.period}
              </div>
              {edu.highlights && edu.highlights.length > 0 && (
                <div style={{ marginTop: '4px' }}>
                  {edu.highlights.map((h) => (
                    <div key={h} style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                      • {h}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
