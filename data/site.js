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
  piNameInPapersKo: '김예찬',     // bolded in domestic (Korean) author lists

  // Welcome message (Home page)
  welcome: {
    intro: `Welcome to the <strong>Language &amp; Adaptive Intelligence Lab (LAI Lab)</strong> at HUFS.
      A model is something you train; <strong>intelligence</strong> is what survives contact with a new
      domain, a tight memory budget, and data that does not cooperate. We work on that difference —
      making <strong>language intelligence</strong> efficient, adaptive, and safe — through
      memory-efficient fine-tuning and efficient reasoning, domain adaptation by continued
      pre-training and knowledge-guided proxies, and robustness to biased or noisy data.
      We carry it into fields that have a language of their own, from molecules and materials
      to the performance records of national teams.`,
    intro_ko: `한국외국어대학교(HUFS) <strong>언어·적응형 지능 연구실(LAI Lab)</strong>에 오신 것을 환영합니다.
      모델은 학습시키면 만들어지지만, <strong>지능</strong>은 처음 보는 분야와 빠듯한 메모리,
      말을 듣지 않는 데이터를 견뎌 내야 비로소 지능입니다. 저희는 그 차이를 연구합니다 —
      <strong>언어 지능</strong>을 효율적이고, 적응력 있고, 안전하게 만드는 일입니다.
      메모리 효율적 미세조정과 효율적 추론, 추가 사전학습과 지식 기반 프록시를 통한 도메인 적응,
      편향되거나 잡음이 섞인 데이터에 대한 강건성이 그 방법입니다.
      그리고 이를 고유한 언어를 가진 분야로 가져갑니다. 분자와 소재에서 국가대표 경기 기록까지.`,
    // 첫 화면 히어로용 짧은 버전. "더 큰 모델이 아니라 지능" 이 한 문장에서
    // 바로 드러나야 한다. 비워 두면 히어로가 intro 를 그대로 쓴다.
    // <em> 세 개가 연구실이 내세우는 세 가지다 — 히어로에서 색으로 강조된다.
    // (intro 는 현재 라이브 사이트가 그대로 쓰므로 <em> 을 넣지 않았다. style.css
    //  에는 .welcome-intro em 규칙이 없어 이탤릭으로 기울어 버린다.)
    lead: `We do not set out to build larger language models. We set out to build
      <strong>language intelligence</strong> — <em>efficient</em> enough to run on the compute at hand,
      <em>adaptive</em> enough to meet a domain it has never seen,
      and <em>safe</em> enough to be trusted once it is there.`,
    lead_ko: `저희가 만들려는 것은 더 큰 언어 모델이 아니라 <strong>언어 지능</strong>입니다.
      주어진 연산 안에서 돌아갈 만큼 <em>효율적</em>이고, 처음 보는 분야에도 <em>적응</em>하며,
      그곳에서 믿고 맡길 만큼 <em>안전한</em> 지능입니다.`,

    detail: `Led by Prof. Yeachan Kim, the lab is part of the Division of Language &amp; AI at
      Hankuk University of Foreign Studies (HUFS), Seoul. Our recent work appears at ACL, EMNLP,
      ICLR and in TACL, and is supported by the NRF Core Research Program (2026–2029) together with
      compute grants from the KISTI National Supercomputing Center and Lambda. We collaborate with
      groups in materials science, industry, and sport, and we welcome students who want to build
      language intelligence that is efficient, adaptive, and safe.`,
    detail_ko: `본 연구실은 김예찬 교수가 이끌며, 서울 소재 한국외국어대학교(HUFS) 언어·AI융합학부에 속해 있습니다.
      최근 연구는 ACL, EMNLP, ICLR, TACL에 발표되고 있으며, 한국연구재단 핵심연구(기본연구B, 2026–2029)와
      KISTI 국가슈퍼컴퓨팅센터·Lambda의 연산 자원 지원을 받고 있습니다.
      소재과학, 산업계, 스포츠 분야의 연구진과 협력하고 있으며,
      효율적이고 적응력 있으며 안전한 언어 지능을 함께 만들어 갈 학생을 환영합니다.`,
  },

  // "Join Us" recruitment banner (Home page)
  recruitment: {
    title: 'Join Our Lab',
    description: 'We are looking for motivated M.S./Ph.D. students and research interns.<br>If you are interested, please apply through <a href="https://forms.gle/pAHdt5M8bjy6vpvK9" target="_blank" rel="noopener">this form</a>.',
    description_ko: '열정적인 석·박사 과정 학생과 연구 인턴을 모집하고 있습니다.<br>관심이 있으시다면 <a href="https://forms.gle/pAHdt5M8bjy6vpvK9" target="_blank" rel="noopener">지원 양식</a>을 작성해 주세요.',
  },

  // Navigation tabs
  // To add/remove/reorder pages, edit this array.
  // `id` must match a renderer in js/app.js
  nav: [
    { id: 'home',         label: 'Home' },
    { id: 'research',     label: 'Research' },
    { id: 'members',      label: 'Members' },
    { id: 'publications', label: 'Publications' },
    { id: 'gallery',      label: 'Gallery' },
    { id: 'joinus',       label: 'Join Us' },
  ],
};
