// src/components/cards/AboutCard.jsx
import { personal, education } from '../../data/portfolio';

const BookIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
  </svg>
);

export default function AboutCard() {
  return (
    <div
      className="bento-card animate-fade-up"
      style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <div className="section-label">About</div>

      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7', flex: 1 }}>
        {personal.bio}
      </p>

      {/* Education */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {education.map((edu) => (
          <div
            key={edu.shortName}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '12px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border)',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                backgroundColor: 'var(--accent-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                flexShrink: 0,
              }}
            >
              <BookIcon />
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                {edu.shortName}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                {edu.degree}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                {edu.period} · {edu.location}
              </div>
              {edu.highlights && edu.highlights.length > 0 && (
                <div style={{ marginTop: '4px' }}>
                  {edu.highlights.map((h) => (
                    <div key={h} style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
                      {h}
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
