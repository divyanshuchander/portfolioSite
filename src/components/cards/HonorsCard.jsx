// src/components/cards/HonorsCard.jsx
import { honors } from '../../data/portfolio';

const colorMap = {
  gold: { bg: 'rgba(217,119,6,0.1)', color: '#d97706', border: 'rgba(217,119,6,0.25)' },
  indigo: { bg: 'var(--accent-soft)', color: 'var(--accent)', border: 'rgba(99,102,241,0.25)' },
  slate: { bg: 'rgba(100,116,139,0.1)', color: '#64748b', border: 'rgba(100,116,139,0.25)' },
};

const TrophyIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

export default function HonorsCard() {
  return (
    <div
      className="bento-card animate-fade-up"
      style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '14px' }}
    >
      <div className="section-label">Honors & Achievements</div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {honors.map((honor, i) => {
          const c = colorMap[honor.color] || colorMap.slate;
          return (
            <div key={i} className="honor-item">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '8px',
                    backgroundColor: c.bg,
                    border: `1px solid ${c.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: c.color,
                    flexShrink: 0,
                    marginTop: '1px',
                  }}
                >
                  <TrophyIcon />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {honor.title}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', flexShrink: 0 }}>
                      {honor.year}
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: '600', color: c.color, marginTop: '2px' }}>
                    {honor.position}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '1px' }}>
                    {honor.level}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
