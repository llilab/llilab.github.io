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
    intro_ko: `<strong>언어·적응형 지능 연구실(LAI Lab)</strong>에 오신 것을 환영합니다.
      저희는 자연어 처리를 연구하며, 특히 효율적이고 적응력 있는 대규모 언어 모델을 구축하는 데 집중하고 있습니다.
      연구 주제는 모델 효율성, 신뢰할 수 있는 적응 및 정렬(alignment),
      그리고 과학·산업 등 다양한 실제 도메인에서의 언어 응용에 이르기까지 폭넓게 아우릅니다.`,
    detail: `Led by Prof. Yeachan Kim, the lab is part of the Division of Language & AI at
      Hankuk University of Foreign Studies (HUFS), Seoul. We aim to develop language models that are not only powerful
      but also practical — lightweight enough for real deployment and adaptable to specialized tasks.
      We actively collaborate across disciplines and welcome students who share our passion for
      advancing the frontiers of NLP and language intelligence.`,
    detail_ko: `본 연구실은 김예찬 교수가 이끌며, 서울 소재 한국외국어대학교(HUFS) 언어·AI융합학부에 속해 있습니다.
      저희는 강력할 뿐만 아니라 실용적인 — 실제 배포가 가능할 만큼 가볍고 특수한 과제에 적응할 수 있는 — 언어 모델 개발을 목표로 합니다.
      다양한 학문 분야와 활발히 협력하며, NLP와 언어 지능의 최전선을 넓히고자 하는 열정을 가진 학생들을 환영합니다.`,
  },

  // "Join Us" recruitment banner (Home page)
  recruitment: {
    title: 'Join Our Lab',
    description: 'We are looking for motivated M.S./Ph.D. students and research interns.<br>If you are interested, please apply through the form.',
    description_ko: '열정적인 석·박사 과정 학생과 연구 인턴을 모집하고 있습니다.<br>관심이 있으시다면 아래 양식을 통해 지원해 주세요.',
  },

  // Navigation tabs
  // To add/remove/reorder pages, edit this array.
  // `id` must match a renderer in js/app.js
  nav: [
    { id: 'home',         label: 'Home' },
    { id: 'research',     label: 'Research' },
    { id: 'members',      label: 'Members' },
    { id: 'publications', label: 'Publications' },
    { id: 'joinus',       label: 'Join Us' },
  ],
};
