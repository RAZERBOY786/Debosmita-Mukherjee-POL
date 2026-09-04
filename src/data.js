const profile = {
  name: 'Debosmita Mukherjee',
  brand: 'DM',
  role: 'Aspiring Web Developer',
  status: 'Open to Web Development Roles • 2026',
  email: 'diyamukherjee2006@gmail.com',
  phone: '+91-9674773984',
  location: 'Barasat, Kolkata, West Bengal, India',
  leetcode: 'BCA (Hons) • Brainware University',
  title: 'Debosmita Mukherjee',
  tagline:
    'Building efficient, user-friendly web solutions with strong foundations in Python, C, HTML, CSS & JavaScript',
  objective:
    'Aspiring Web Developer with a strong foundation in Python, C, HTML, CSS, and JavaScript. Eager to apply programming skills and problem-solving abilities to build efficient, user-friendly web solutions while continuously learning emerging technologies.',
  stats: [
    { label: 'Education', value: 'BCA', note: 'Brainware University', accent: 'emerald' },
    { label: 'CGPA', value: '9.04', note: 'Till 6th Semester', accent: 'amber' },
    { label: 'Internships', value: '1+', note: 'Web Dev @ InternPe', accent: 'emerald' },
    { label: 'Languages', value: '3', note: 'Bengali • English • Hindi', accent: 'surface' },
  ],
}

const skills = {
  languages: [
    {
      name: 'Python',
      icon: 'data_object',
      accent: 'emerald',
      pct: 90,
      desc: 'Programming foundations, problem solving',
      years: 'Academic',
    },
    {
      name: 'C (Programming)',
      icon: 'memory',
      accent: 'emerald',
      pct: 85,
      desc: 'Procedural programming & logic building',
      years: 'Academic',
    },
  ],
  frontend: [
    {
      name: 'HTML5',
      icon: 'web',
      accent: 'emerald',
      pct: 92,
      desc: 'Semantic, structured web markup',
      years: 'Hands-on',
    },
    {
      name: 'CSS3',
      icon: 'brush',
      accent: 'amber',
      pct: 88,
      desc: 'Responsive, user-friendly layouts',
      years: 'Hands-on',
    },
    {
      name: 'JavaScript',
      icon: 'code',
      accent: 'emerald',
      pct: 85,
      desc: 'Interactive front-end behaviour',
      years: 'Academic',
    },
  ],
  backend: [],
  cloud: [],
  databases: [
    {
      name: 'DBMS',
      icon: 'database',
      accent: 'emerald',
      pct: 82,
      desc: 'Database design, SQL & basic CRUD',
      years: 'Academic',
    },
  ],
}

const skillTabs = [
  { key: 'all', label: 'All' },
  { key: 'languages', label: 'Languages' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend & APIs' },
  { key: 'cloud', label: 'Cloud & DevOps' },
  { key: 'databases', label: 'Databases & Tools' },
]

const experience = [
  {
    role: 'Web Development Intern',
    company: 'InternPe • Remote',
    accent: 'emerald',
    date: 'Aug 2025 – Oct 2025',
    dateAccent: 'muted',
    points: [
      'Completed a Web Development internship at [strong]InternPe[/strong], gaining hands-on experience in building responsive and user-friendly web applications.',
      'Worked with front-end and back-end technologies to develop and enhance dynamic websites, improving [em]project efficiency[/em].',
    ],
    tags: [
      { label: 'HTML', accent: 'emerald' },
      { label: 'CSS', accent: 'emerald' },
      { label: 'JavaScript', accent: 'emerald' },
      { label: 'Responsive Design', accent: 'emerald' },
    ],
  },
]

const projects = [
  {
    badge: 'Group Project • AI',
    badgeClass: 'badge-emerald',
    version: "Aug'25 – Jun'26",
    title: 'MentoraGen',
    subtitle: 'AI-Powered Educational Assistant',
    desc: 'Group project. Contributed to creating and structuring the knowledge dataset to improve retrieval accuracy and minimize hallucinations. Assisted with technical documentation, system architecture documentation, and project report preparation.',
    corner: 'proj-corner-emerald',
    tags: [
      { label: 'RAG', accent: 'emerald' },
      { label: 'AI / ML', accent: 'emerald' },
      { label: 'Knowledge Dataset', accent: 'emerald' },
    ],
    demoClass: 'btn-demo-emerald',
    demoIcon: 'rocket_launch',
    demoLabel: 'Project Overview',
  },
  {
    badge: 'Internship • InternPe',
    badgeClass: 'badge-featured',
    version: "Aug'25 – Oct'25",
    title: 'InternPe Web Development Tasks',
    subtitle: 'Responsive Web Development Projects',
    desc: 'Developed and enhanced responsive, user-friendly web applications during the InternPe Web Development internship, applying front-end and back-end technologies to improve project efficiency.',
    corner: 'proj-corner-amber',
    tags: [
      { label: 'HTML', accent: 'amber' },
      { label: 'CSS', accent: 'amber' },
      { label: 'JavaScript', accent: 'amber' },
    ],
    demoClass: 'btn-demo-amber',
    demoIcon: 'rocket_launch',
    demoLabel: 'Case Study',
  },
]

const education = {
  badge: 'Qualifications',
  degrees: [
    {
      period: '2023 – 2027',
      grade: '9.04 / 10',
      title: 'Bachelor of Computer Applications (Hons.)',
      school: 'Brainware University',
      note: 'CGPA till 6th Semester',
    },
    {
      period: '2023',
      grade: '79.6%',
      title: '12th (Senior Secondary Examination)',
      school: 'WBCHSE Board',
      note: '',
    },
    {
      period: '2021',
      grade: '82.28%',
      title: '10th (Secondary Examination)',
      school: 'WBBSE Board',
      note: '',
    },
  ],
  degreeAccent: ['emerald', 'muted', 'muted'],
  courses: [
    'Python Programming',
    'C Programming',
    'Web Technologies',
    'Database Management (DBMS)',
    'Data Structures',
    'Computer Networks',
    'Operating Systems',
  ],
  footerLeft: 'ALL CREDENTIALS VERIFIED',
  footerRight: 'BRAINWARE UNIVERSITY',
}

const certifications = [
  {
    name: 'Zero to Python Hero: Smart with AI',
    org: 'Workshop • June 2025',
    icon: 'model_training',
    iconClass: 'cert-icon-emerald',
  },
  {
    name: 'INTERNPE Quiz-A-Thon',
    org: 'InternPe • September 2025',
    icon: 'workspace_premium',
    iconClass: 'cert-icon',
  },
]

const publications = [
  {
    badge: 'In Publication • IGI Global',
    badgeClass: 'paper-badge-emerald',
    doi: 'Expected: Aug – Sep 2026',
    title:
      'MentoraGen: Integrating AI-Driven Socratic Scaffolding Into the Design of Pedagogically-Aligned Programming Education',
    desc: 'Accepted as Author with IGI Global Scientific Publishing. Developed and documented an advanced 7-stage stateful Retrieval-Augmented Generation (RAG) framework tailored for educational technology applications — handling comprehensive technical writing, algorithmic optimizations, and the manuscript pipeline through standard academic review workflows.',
    citeLabel: 'Cite (BibTeX)',
    readLabel: 'Publication Info',
    readClass: 'btn-paper',
    readUrl:
      'https://www.researchgate.net/publication/411027449_MentoraGen_Integrating_AI-Driven_Socratic_Scaffolding_Into_the_Design_of_Pedagogically-Aligned_Programming_Education',
    id: 1,
  },
]

const achievements = [
  {
    icon: 'workspace_premium',
    iconClass: 'ach-icon-wrap-emerald',
    badge: 'Workshop',
    badgeClass: 'ach-badge-emerald',
    title: 'Zero to Python Hero: Smart with AI',
    desc: 'Completed a hands-on workshop on Python programming, enhanced with AI-assisted learning approaches.',
    foot: 'June 2025',
    footClass: 'ach-foot-emerald',
  },
  {
    icon: 'emoji_events',
    iconClass: 'ach-icon-wrap-amber',
    badge: 'Quiz Competition',
    badgeClass: 'ach-badge-amber',
    title: 'INTERNPE Quiz-A-Thon',
    desc: 'Participated in the InternPe Quiz-A-Thon, testing web development and programming fundamentals.',
    foot: 'September 2025',
    footClass: 'ach-foot-muted',
  },
]

const hobbies = [
  {
    emoji: '🎵',
    title: 'Music Appreciation',
    desc: 'Enjoying a wide range of music genres and exploring the emotional and creative dimensions of sound.',
  },
  {
    emoji: '👩‍🍳',
    title: 'Cooking',
    desc: 'Experimenting in the kitchen with new recipes, balancing flavors with the same care as writing clean code.',
  },
]

export {
  profile,
  skills,
  skillTabs,
  experience,
  projects,
  education,
  certifications,
  publications,
  achievements,
  hobbies,
}
