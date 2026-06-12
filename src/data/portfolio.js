/**
 * portfolio.js — Single source of truth for all portfolio content.
 *
 * HOW TO UPDATE FROM A NEW RESUME:
 * Simply share your updated resume with the AI and ask it to update this file.
 * All sections map 1-to-1 with standard resume sections.
 * No other files need to be changed for content updates.
 */

// ─── Personal Info ────────────────────────────────────────────────────────────
export const personal = {
  name: "Divyanshu Chander",
  title: "Computer Science Student",
  tagline: "Building scalable, data-driven applications and real-time systems.",
  bio: "Computer Science undergraduate at Jaypee University of Information Technology (2022–2026) with strong foundations in data structures, databases, and full-stack development. Experienced in building scalable applications and real-time systems using Python, SQL, and modern web technologies. Skilled in translating problem statements into technical solutions and collaborating in team environments.",
  location: "India",
  email: "divyanshuchander23@gmail.com",
  github: "https://github.com/divyanshuchander",
  linkedin: "https://linkedin.com/in/divyanshuchander",
  githubUsername: "divyanshuchander",
};

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    school: "Jaypee University of Information Technology",
    shortName: "JUIT",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2022 – 2026",
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills = {
  languages: ["C / C++", "Python", "JavaScript", "TypeScript", "Java", "SQL"],
  backend: ["Node.js", "Express", "Flask", "React", "Socket.IO"],
  tools: ["Git", "GitHub", "Docker", "Postman", "Burp Suite", "FFmpeg"],
  core: [
    "Data Structures",
    "Algorithms",
    "Object-Oriented Design",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
  ],
};

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "CollabCode Studio",
    year: "2025",
    stack: ["React", "TypeScript", "Node.js", "Express", "Socket.IO"],
    description:
      "Real-time collaborative code editor with multi-user execution, live file/chat synchronization, and sandboxed multi-language execution across 40+ languages.",
    github: "https://github.com/divyanshuchander/CollabCode-MajorProject",
    featured: true,
  },
  {
    title: "AutoNotes",
    year: "2025",
    stack: ["Python", "Flask", "JavaScript", "FFmpeg", "YouTube API"],
    description:
      "AI media summarization tool that generates concise summaries from YouTube videos and local media using optimized speech-to-text pipelines.",
    github: "https://github.com/divyanshuchander/AutoNotes",
    featured: true,
  },
  {
    title: "Student DB System",
    year: "2024",
    stack: ["Python", "MySQL", "SQL"],
    description:
      "Student database management system with robust schemas and full CRUD operations for managing academic records.",
    github:
      "https://github.com/divyanshuchander/Student-Database-Management-Project",
    featured: false,
  },
];

// ─── Honors & Achievements ────────────────────────────────────────────────────
export const honors = [
  {
    title: "Smart India Hackathon 2023",
    position: "Top 5 Teams",
    level: "National Level — Selection Round",
    year: "2023",
    color: "gold",
  },
  {
    title: "Qriosity Technical Competition",
    position: "1st Place (2024) · 2nd Place (2023)",
    level: "University Level — 50+ participants",
    year: "2023–24",
    color: "indigo",
  },
  {
    title: "Hache 3.0 — Cybersecurity CTF",
    position: "3rd Place",
    level: "University Level — 24-hour Capture The Flag",
    year: "2023",
    color: "slate",
  },
];

// ─── Resume ───────────────────────────────────────────────────────────────────
export const resume = {
  // Path relative to /public directory
  pdfPath: "/resume.pdf",
};
