// src/components/layout/BentoGrid.jsx
import HeroCard from '../cards/HeroCard';
import AboutCard from '../cards/AboutCard';
import SkillsCard from '../cards/SkillsCard';
import ProjectsCard from '../cards/ProjectsCard';
import HonorsCard from '../cards/HonorsCard';
import ContactCard from '../cards/ContactCard';
import ResumeCard from '../cards/ResumeCard';
import BlogCard from '../cards/BlogCard';

/**
 * Bento Grid Layout:
 *
 * Row 1: [Hero 7col] [About 5col]
 * Row 2: [Skills 4col] [Projects 8col]
 * Row 3: [Honors 6col] [Contact 3col] [Resume 3col]
 * Row 4: [Blog 12col — full width]
 */
export default function BentoGrid() {
  return (
    <main className="bento-grid" role="main">
      {/* Row 1 */}
      <HeroCard />
      <AboutCard />

      {/* Row 2 */}
      <SkillsCard />
      <ProjectsCard />

      {/* Row 3 */}
      <HonorsCard />
      <ContactCard />
      <ResumeCard />

      {/* Row 4 */}
      <BlogCard />
    </main>
  );
}
