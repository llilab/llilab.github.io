/**
 * ═══════════════════════════════════════════════════
 *  Site-wide configuration
 *  Edit this file to change lab info, PI details,
 *  welcome message, and navigation.
 * ═══════════════════════════════════════════════════
 */
const SITE = {
  // Lab info (shown in header & footer)
  labName: 'Language & Learning Intelligence Lab',
  labShort: 'LLI Lab',
  university: 'Hankuk University of Foreign Studies (HUFS)',
  department: 'Dept. of Computer Science',
  address: '107 Imun-ro, Dongdaemun-gu, Seoul, Republic of Korea',

  // Principal Investigator
  pi: {
    name: 'Yeachan Kim',
    title: 'Assistant Professor',
    email: 'yeachan@hufs.ac.kr',
    scholar: 'https://scholar.google.com/citations?user=zyOyBzwAAAAJ',
    aclAnthology: 'https://aclanthology.org/people/yeachan-kim',
    github: '',              // Add GitHub URL if available
    homepage: '',            // Add personal homepage if available
  },

  // The PI's name as it appears in publication author lists
  // Used to auto-bold in publication entries
  piNameInPapers: 'Yeachan Kim',

  // Welcome message (Home page)
  welcome: {
    intro: `Welcome to the <strong>Language &amp; Learning Intelligence Lab (LLI Lab)</strong>.
      We investigate methods at the intersection of natural language processing and intelligent language education.
      Our research spans efficient large language models, parameter-efficient fine-tuning,
      and AI-driven tools that support language learners and educators.`,
    detail: `Led by Prof. Yeachan Kim, the lab is part of the Department of Computer Science at
      Hankuk University of Foreign Studies (HUFS), Seoul. We are particularly interested in
      making modern NLP systems more efficient, robust, and applicable to real-world language learning scenarios.`,
  },

  // "Join Us" recruitment banner (Home page)
  recruitment: {
    title: 'Join Our Lab',
    description: `We are looking for motivated researchers to join the Language &amp; Learning Intelligence Lab.
      If you are passionate about NLP, efficient deep learning, or AI-driven education, we'd love to hear from you.`,
    positions: [
      {
        title: 'M.S. / Ph.D. Students',
        detail: 'Full-time graduate positions with funding. Research on efficient LLMs, PEFT, and AI for language education.',
      },
      {
        title: 'Research Interns',
        detail: 'Undergraduate or external interns (6+ months preferred). Hands-on experience with NLP research projects.',
      },
      {
        title: 'Visiting Researchers',
        detail: 'Short- or long-term visits welcome. Collaborative research on shared topics of interest.',
      },
    ],
  },

  // Navigation tabs
  // To add/remove/reorder pages, edit this array.
  // `id` must match a renderer in js/app.js
  nav: [
    { id: 'home',         label: 'Home' },
    { id: 'research',     label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects',     label: 'Projects' },
    { id: 'applications', label: 'Applications' },
  ],
};
