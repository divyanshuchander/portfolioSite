/**
 * portfolio.js — Single source of truth for all portfolio content.
 *
 * HOW TO UPDATE FROM A NEW RESUME:
 * Simply share your updated resume with the AI and ask it to update this file.
 * All sections map 1-to-1 with standard resume sections.
 * No other files need to be changed for content updates.
 *
 * LAST UPDATED: June 2026
 */

// ─── Personal Info ────────────────────────────────────────────────────────────
export const personal = {
  name: "Divyanshu Chander",
  title: "Computer Science Student",
  tagline:
    "CS undergrad focused on backend systems, real-time applications, and network-level problem solving.",
  bio: "Computer Science undergraduate with strong foundations in computer networks, operating systems, and system-level troubleshooting. Experienced in building real-time and backend applications using Python, Node.js, and ReactJS, with a focus on reliable and scalable system design. Skilled in analyzing issues, debugging systems, and working in Linux-based environments.",
  location: "India",
  email: "divyanshuchander23@gmail.com",
  github: "https://github.com/divyanshuchander",
  linkedin: "https://linkedin.com/in/divyanshuchander",
  portfolio: "https://divyanshuchander.vercel.app",
  githubUsername: "divyanshuchander",
};

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    school: "Jaypee University of Information Technology",
    shortName: "JUIT",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2022 – 2026",
    location: "Solan, India",
    highlights: ["CGPA: 8.41", "Qualified GATE 2026 (CS & IT)"],
  },
  {
    school: "Army Public School",
    shortName: "APS",
    degree: "CBSE Class XII — 93.6%",
    period: "2021",
    location: "Chandimandir Cantt, India",
    highlights: [],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills = {
  languages: [
    "C",
    "C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "SQL",
    "Bash",
  ],
  backend: ["Node.js", "Express", "Flask", "REST APIs"],
  web: ["ReactJS", "HTML", "CSS", "Tailwind CSS"],
  tools: [
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "Burp Suite",
    "Wireshark",
  ],
  platforms: ["Linux", "macOS", "Windows"],
  core: [
    "Data Structures & Algorithms",
    "Object-Oriented Design",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Cloud Computing",
  ],
};

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "Oikode",
    subtitle: "Real-Time Collaborative Code Editor",
    year: "2025",
    stack: ["React", "TypeScript", "Node.js", "Express", "Socket.IO"],
    description:
      "Real-time collaborative web application enabling multiple users to write, edit, and execute code simultaneously. Live synchronization of files, cursors, chat, and whiteboard actions via WebSockets. Sandboxed multi-language execution across 40+ languages with real-time I/O.",
    github: "https://github.com/divyanshuchander/CollabCode-MajorProject",
    live: "https://oikode.vercel.app",
    featured: true,
  },
  {
    title: "AutoNotes",
    subtitle: "AI Media Summarization Tool",
    year: "2025",
    stack: ["Python", "Flask", "JavaScript", "FFmpeg", "YouTube API"],
    description:
      "Full-stack application to generate concise summaries from YouTube videos and local media files. RESTful APIs for media ingestion, transcription, and summarization with optimized speech-to-text pipelines.",
    github: "https://github.com/divyanshuchander/AutoNotes",
    featured: true,
  },
  {
    title: "Student DB System",
    subtitle: "Database Management Application",
    year: "2024",
    stack: ["Python", "MySQL", "SQL"],
    description:
      "Python and MySQL application to manage student records with robust schemas, SQL queries supporting full CRUD operations, and backend validation for data integrity.",
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
    title: "Qriosity — ACM Technical Competition",
    position: "1st Place (2024) · 2nd Place (2023)",
    level: "University Level — 50+ participants",
    year: "2023–24",
    color: "indigo",
  },
  {
    title: "Hache 3.0 — ACM Cybersecurity CTF",
    position: "3rd Place",
    level: "University Level — 24-hour Capture The Flag",
    year: "2023",
    color: "slate",
  },
];

// ─── Resume ───────────────────────────────────────────────────────────────────
export const resume = {
  pdfPath: "/resume.pdf",
  lastUpdated: "June 2026",
};

// ─── Blog ─────────────────────────────────────────────────────────────────
// Add your Medium username (or other RSS feed URL) below.
// The blog section will auto-fetch and display your latest posts.
export const blog = {
  // Your Medium username — change this to your actual Medium handle
  mediumUsername: "divyanshuchander",
  // Posts to show on the portfolio
  maxPosts: 4,
  // Fallback: if RSS fails or you have no posts yet, show these placeholders
  // Remove these once you have real Medium posts
  placeholders: [
    {
      title: "Coming soon — blogs on the way",
      subtitle:
        "Stay tuned for articles on full-stack dev, cybersecurity, and more.",
      link: "https://medium.com/@divyanshuchander",
      date: "",
    },
  ],
};
