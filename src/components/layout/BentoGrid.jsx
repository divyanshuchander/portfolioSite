// src/components/layout/BentoGrid.jsx
import HeroCard from '../cards/HeroCard';
import SkillsCard from '../cards/SkillsCard';
import { ProjectCard, projects } from '../cards/ProjectsCard';
import HonorsCard from '../cards/HonorsCard';
import ContactCard from '../cards/ContactCard';
import ResumeCard from '../cards/ResumeCard';
import BlogCard from '../cards/BlogCard';

/**
 * Bento Grid Layout:
 *
 * Row 1: [Hero 7col]         [About 5col]
 * Row 2: [Skills 4col]       [Honors 4col]     [Resume+Contact 4col]
 * Row 3: [Project 01 — 6col] [Project 02 — 6col]
 * Row 4: [Project 03 — 12col full width]
 * Row 5: [Blog 12col — full width]
 */
export default function BentoGrid() {
  return (
    <main className="bento-grid" role="main">
      {/* Row 1 — Intro (Hero & Education combined) */}
      <HeroCard />

      {/* Row 2 — Quick info */}
      <SkillsCard />
      <HonorsCard />
      <div
        className="animate-fade-up"
        style={{
          gridColumn: 'span 4',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <ResumeCard />
        <ContactCard />
      </div>

      {/* Row 3–4 — Projects (each is its own card) */}
      <div className="section-label" style={{ gridColumn: 'span 12', marginTop: '16px', marginBottom: '-4px' }}>
        Selected Projects
      </div>
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} ordinal={i + 1} />
      ))}

      {/* Row 5 — Blog */}
      <BlogCard />
    </main>
  );
}
