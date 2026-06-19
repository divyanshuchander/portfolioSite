// src/components/cards/ResumeCard.jsx
import { resume, personal } from '../../data/portfolio';

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const FileIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);

export default function ResumeCard() {
  return (
    <div
      className="bento-card animate-fade-up"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, var(--accent-soft) 0%, var(--bg-card) 60%)',
        minHeight: '160px',
      }}
    >
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '14px',
          backgroundColor: 'var(--bg-subtle)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FileIcon />
      </div>

      <div>
        <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>
          Resume
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
          {personal.name} · PDF
        </div>
        <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
          Updated: {resume.lastUpdated}
        </div>
      </div>

      <a
        href={resume.pdfPath}
        target="_blank"
        rel="noopener noreferrer"
        className="download-btn"
        aria-label="Download resume PDF"
      >
        <DownloadIcon />
        Download
      </a>
    </div>
  );
}
