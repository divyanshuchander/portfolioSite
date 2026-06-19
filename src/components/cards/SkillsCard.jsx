// src/components/cards/SkillsCard.jsx
import { skills } from '../../data/portfolio';

function SkillGroup({ label, items, accentColor }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div
        style={{
          fontSize: '10px',
          fontWeight: '700',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-tertiary)',
        }}
      >
        {label}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {items.map((skill) => (
          <span key={skill} className="tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsCard() {
  return (
    <div
      className="bento-card animate-fade-up"
      style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '18px' }}
    >
      <div className="section-label">Skills</div>

      <SkillGroup label="Languages" items={skills.languages} />
      <SkillGroup label="Backend & APIs" items={skills.backend} />
      <SkillGroup label="Web" items={skills.web} />
      <SkillGroup label="Tools" items={skills.tools} />
      <SkillGroup label="Platforms" items={skills.platforms} />
      <SkillGroup label="Core CS" items={skills.core} />
    </div>
  );
}
