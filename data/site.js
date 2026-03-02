/**
 * ═══════════════════════════════════════════════════
 *  Site-wide configuration
 *  Edit this file to change lab info, PI details,
 *  welcome message, and navigation.
 * ═══════════════════════════════════════════════════
 */
const SITE = {
  // Lab info (shown in header & footer)
  labName: 'Language & Adaptive Intelligence Lab',
  labShort: 'LAI Lab',
  university: 'Hankuk University of Foreign Studies (HUFS)',
  department: 'Division of Language & AI',
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
    intro: `Welcome to the <strong>Language &amp; Adaptive Intelligence Lab (LAI Lab)</strong>.
      We pursue research in natural language processing, with a focus on building efficient and adaptive large language models.
      Our work covers a broad range of topics including model efficiency, reliable adaptation and alignment,
      and language applications across diverse real-world domains such as science and industry.`,
    detail: `Led by Prof. Yeachan Kim, the lab is part of the Division of Language & AI at
      Hankuk University of Foreign Studies (HUFS), Seoul. We aim to develop language models that are not only powerful
      but also practical — lightweight enough for real deployment and adaptable to specialized tasks.
      We actively collaborate across disciplines and welcome students who share our passion for
      advancing the frontiers of NLP and language intelligence.`,
  },

  // "Join Us" recruitment banner (Home page)
  recruitment: {
    title: 'Join Our Lab',
    description: 'We are looking for motivated M.S./Ph.D. students and research interns.<br>If you are interested, please apply through the form.',
  },

  // Navigation tabs
  // To add/remove/reorder pages, edit this array.
  // `id` must match a renderer in js/app.js
  nav: [
    { id: 'home',         label: 'Home' },
    { id: 'professor',    label: 'Professor' },
    { id: 'research',     label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects',     label: 'Projects' },
    { id: 'joinus',       label: 'Join Us' },
  ],
};
