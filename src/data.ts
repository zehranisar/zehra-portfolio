// All the content of the portfolio lives here. Edit this file to update the website.
// Wording follows Zehra's CV (CV_job.pdf); only spelling mistakes were corrected.

export const profile = {
  name: "Zehra Nisar",
  initials: "ZN",
  location: "Rawalpindi, Pakistan",
  roles: ["AI/ML Engineer", "Full-Stack Developer", "Computer Science Student"],
  tagline:
    "Computer Science undergraduate who loves turning ideas into working software, with full-stack AI and machine learning projects built on Python, FastAPI, React and PostgreSQL.",
  about: [
    "Computer Science undergraduate (BS, expected 2027) who loves turning ideas into working software. I have completed three internships in web development and built five full-stack AI and machine learning projects using Python, FastAPI, React, and PostgreSQL, covering natural language processing, predictive modelling, REST APIs, and interactive analytics dashboards.",
    "Most of what I build ships as a working web app with a live demo, not just a notebook.",
  ],
  email: "zehranisar75@gmail.com",
  github: "https://github.com/zehranisar",
  linkedin: "https://www.linkedin.com/in/zehra-nisar-868ba3423/",
};

export const competencies = [
  "Full-Stack Web Development",
  "ML & Deep Learning",
  "Natural Language Processing",
  "RAG & LLM Applications",
  "REST API Design (FastAPI)",
  "Responsive Front-End Design",
  "Database Design (PostgreSQL)",
  "Data Visualization Dashboards",
  "Agile Teamwork & Leadership",
];

export const stats = [
  { value: "3", label: "Internships in 2026" },
  { value: "12", label: "Projects built" },
  { value: "5", label: "Apps live on the web" },
  { value: "7", label: "Controllers benchmarked in my RL project" },
];

export type Education = {
  school: string;
  degree: string;
  detail: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi",
    degree: "Bachelor of Science in Computer Science",
    detail: "CGPA: 3.31 / 4.00",
    period: "Sep 2023 – Sep 2027",
  },
  {
    school: "Astron College of Science and Commerce, Rawalpindi",
    degree: "Intermediate (FSc)",
    detail: "90% marks",
    period: "Jun 2020 – Jun 2022",
  },
];

export type Experience = {
  period: string;
  place: string;
  role: string;
  org: string;
  link?: string;
  points: string[];
  focus?: string;
  tags: string[];
  // Word that appears in the file name of the letter in src/letters (see sections.tsx).
  letter: string;
};

export const experience: Experience[] = [
  {
    period: "Aug 25 – Oct 20, 2026",
    place: "Onsite · Islamabad",
    role: "Frontend Developer Intern",
    org: "Gravite",
    link: "https://www.wearegravite.com",
    points: [
      "Contributed to building responsive, user-centric web applications while working onsite with the development team.",
      "Wrote clean code and incorporated feedback into projects, consistently meeting project deadlines.",
    ],
    tags: ["Frontend", "Responsive UI", "Teamwork"],
    letter: "gravite",
  },
  {
    period: "Jun 2026 – Aug 2026",
    place: "Remote",
    role: "Front-End Development Intern",
    org: "ImagineTech Sol",
    points: [
      "Built responsive, user-friendly web interfaces that look and work well on mobile, tablet, and desktop screens.",
      "Gained hands-on experience with modern front-end tools, turning page designs into working, interactive layouts.",
      "Recognised by the CEO for being hardworking, punctual, and eager to learn throughout the internship.",
    ],
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    letter: "imaginetech",
  },
  {
    period: "Jun 2026 – Aug 2026",
    place: "Rawalpindi",
    role: "Web Development Intern",
    org: "Digitronix360 Consulting (Pvt.) Ltd.",
    points: [
      "Designed and built websites from the ground up, with a strong focus on clean, easy-to-use front-end layouts.",
      "Looked after existing websites: tracking down bugs, fixing them, and keeping everything running smoothly.",
      "Worked alongside the team to deliver web development solutions for assigned tasks, which sharpened my problem-solving and teamwork skills.",
    ],
    focus: "Website Design, Front-End Development, Website Maintenance, Debugging",
    tags: ["Website Design", "Front-End", "Maintenance", "Debugging"],
    letter: "digitronix",
  },
];

export type Category = "AI / ML" | "Full Stack" | "Other";

export type Project = {
  title: string;
  emoji: string;
  category: Category;
  summary: string;
  stack: string[];
  live?: string;
  repo: string;
  highlight?: { value: string; label: string }[];
  featured?: boolean;
  badge?: string;
};

export const projects: Project[] = [
  {
    title: "TalentScan AI",
    emoji: "🧠",
    category: "AI / ML",
    summary:
      "AI-powered resume screening and recruitment assistant. A full-stack platform that automates resume screening with NLP (keyword extraction, skill matching, candidate scoring), plus a Retrieval-Augmented Generation pipeline with sentence-transformers, PostgreSQL vector storage and Groq (LLaMA 3.1) behind a real-time recruiter chatbot. Secure FastAPI backend with JWT authentication, email verification and screening history; responsive React frontend with an analytics dashboard and a token-streamed chatbot with markdown rendering.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "sentence-transformers", "Groq (LLaMA 3.1)", "JWT"],
    repo: "https://github.com/habib-u-rahman/talentscan-ai",
    badge: "Team project",
    featured: true,
  },
  {
    title: "Majestic North Tours",
    emoji: "🏔️",
    category: "Full Stack",
    summary:
      "Tourism discovery and booking platform for exploring and booking tours across Gilgit-Baltistan, Pakistan, with secure authentication and an admin dashboard. Includes destination discovery, tour packages, booking management and travel information modules.",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "JWT"],
    live: "https://majestic-north-tours.vercel.app",
    repo: "https://github.com/zehranisar/Majestic-North-Tours",
    featured: true,
  },
  {
    title: "CardioScan.ai",
    emoji: "❤️",
    category: "AI / ML",
    summary:
      "Cardiovascular risk assessment platform that analyses clinical markers and uploaded medical reports with machine learning to produce explainable risk assessments. Includes secure user authentication, prediction history, medical report upload and parsing, and a Gemini AI chatbot that provides heart-health education while directing users to qualified healthcare professionals.",
    stack: ["Python", "Machine Learning", "FastAPI", "React", "Gemini API"],
    live: "https://cardio-scan-ai-nine.vercel.app",
    repo: "https://github.com/zehranisar/CardioScan.ai",
    featured: true,
  },
  {
    title: "PowerPilot AI",
    emoji: "⚡",
    category: "AI / ML",
    summary:
      "Electricity demand forecasting platform. Machine learning models forecast electricity demand and serve predictions through a live dashboard, with FastAPI backend services delivering model predictions to React-based analytics visualisations.",
    stack: ["Python", "Scikit-learn", "FastAPI", "React", "PostgreSQL"],
    live: "https://power-pilot-ai.vercel.app",
    repo: "https://github.com/zehranisar/PowerPilot-AI",
    featured: true,
  },
  {
    title: "NexSpend",
    emoji: "💰",
    category: "Full Stack",
    summary:
      "Full-stack expense tracking and analytics platform with interactive dashboards for personal finance analysis. RESTful APIs handle all data operations, with real-time analytics of user spending patterns, OCR receipt extraction, budgets and CSV export.",
    stack: ["React", "Flask", "SQLite", "OCR"],
    live: "https://nex-spend.vercel.app",
    repo: "https://github.com/zehranisar/NexSpend",
    featured: true,
  },
  {
    title: "Smart Traffic Signal Control",
    emoji: "🚦",
    category: "AI / ML",
    summary:
      "Q-learning, DQN and PPO agents learn to run a four-way intersection, benchmarked against fixed-timer and longest-queue controllers on 30 unseen scenarios per traffic level. Includes a live side-by-side demo.",
    stack: ["Python", "Gymnasium", "Stable-Baselines3", "PyTorch", "FastAPI", "React"],
    repo: "https://github.com/zehranisar/smart-traffic-rl",
    highlight: [
      { value: "−80%", label: "queue in normal traffic" },
      { value: "−58%", label: "queue in rush traffic" },
    ],
    featured: true,
  },
  {
    title: "Gravite",
    emoji: "🌐",
    category: "Full Stack",
    summary: "Responsive website for a software company.",
    stack: ["React", "Flask"],
    live: "https://gravite-kappa.vercel.app",
    repo: "https://github.com/zehranisar/gravite",
  },
  {
    title: "Event Manager",
    emoji: "📱",
    category: "Other",
    summary:
      "Android app for university events: registrations, reminders and email notifications.",
    stack: ["Java", "XML", "SQLite"],
    repo: "https://github.com/zehranisar/Eventmanager",
  },
  {
    title: "IoT Smart Irrigation System",
    emoji: "🌱",
    category: "Other",
    summary: "IoT-based smart irrigation system.",
    stack: ["C++", "IoT"],
    repo: "https://github.com/zehranisar/IoT-Based-Smart-Irrigation-System",
  },
  {
    title: "Computer Vision Project",
    emoji: "👁️",
    category: "AI / ML",
    summary: "Computer vision experiments in Jupyter Notebook.",
    stack: ["Python", "Jupyter"],
    repo: "https://github.com/zehranisar/Computer-Vision-Project",
  },
];

export const collaborations = [
  {
    title: "SimpleLang Compiler",
    emoji: "🛠️",
    summary:
      "A compiler written from scratch in Python: lexer, parser, semantic analysis, IR generation, optimizer, code generator and GUI, with no parser generators.",
    repo: "https://github.com/habib-u-rahman/SimpleLang-Compiler",
  },
  {
    title: "Solar System Simulation",
    emoji: "🪐",
    summary: "Solar system simulation.",
    repo: "https://github.com/habib-u-rahman/Solar_System_simulation",
  },
];

// Technical skills, exactly as listed in the CV.
export const skills: { group: string; items: string[] }[] = [
  { group: "Programming Languages", items: ["Python", "JavaScript", "C++", "SQL"] },
  {
    group: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Retrieval-Augmented Generation (RAG)",
      "Large Language Models (LLMs)",
      "Sentence Transformers",
      "CrewAI",
    ],
  },
  {
    group: "Backend Development",
    items: ["FastAPI", "REST API Design", "JWT Authentication", "PostgreSQL", "Vector Databases", "API Integration"],
  },
  {
    group: "Frontend Development",
    items: ["React.js", "JavaScript", "HTML", "CSS", "Responsive Web Design", "Data Visualization Dashboards"],
  },
  {
    group: "Tools & Platforms",
    items: ["Git", "GitHub", "Jira", "VS Code", "Postman", "Android Studio", "Anaconda", "pgAdmin 4", "Roboflow"],
  },
  {
    group: "Computer Science Fundamentals",
    items: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Software Engineering",
      "Compiler Design",
      "Computer Graphics",
    ],
  },
  { group: "Professional Skills", items: ["Team Leadership", "Technical Documentation", "Agile Methodology"] },
];

export type Certificate = {
  title: string;
  provider: string;
  emoji: string;
  // Words that appear in the certificate's file name (lowercase). Any PDF or image you drop
  // into src/certificates whose name contains one of these words is attached to this card.
  match: string[];
};

export const certificates: Certificate[] = [
  {
    title: "Ethical Hacking & Cyber Security",
    provider: "Learning With Earning (LWE)",
    emoji: "🔐",
    match: ["ethical", "hacking", "cyber"],
  },
  {
    title: "Digital Content Writing Mastery",
    provider: "Learning With Earning (LWE)",
    emoji: "✍️",
    match: ["content", "writing"],
  },
  { title: "Machine Learning Specialization", provider: "Coursera", emoji: "🧠", match: ["machine"] },
  { title: "Python for AI", provider: "Coursera", emoji: "🐍", match: ["python"] },
  { title: "Android Application Development", provider: "Coursera", emoji: "📱", match: ["android"] },
  { title: "CS50x Puzzle Day 2026", provider: "Harvard CS50", emoji: "🧩", match: ["cs50", "puzzle", "harvard"] },
];
