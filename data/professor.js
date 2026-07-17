/**
 * ═══════════════════════════════════════════════════
 *  Professor page data
 *  Edit this file to update the Professor profile.
 * ═══════════════════════════════════════════════════
 */
const PROFESSOR = {
  // Profile photo (place image in images/ folder)
  photo: 'images/prof.jpg',

  // Bio paragraphs
  bio: [
    `Yeachan Kim is an Assistant Professor in the Division of Language & AI at
     Hankuk University of Foreign Studies (HUFS), Seoul, South Korea.
     He leads the Language & Adaptive Intelligence Lab (LAI Lab),
     where his research focuses on natural language processing and large language models.`,
    `His research interests span efficient and adaptive language models,
     parameter-efficient fine-tuning, robust training methods,
     and language applications across diverse real-world domains including science and industry.`,
  ],

  // Bio paragraphs (Korean)
  bio_ko: [
    `김예찬 교수는 서울 소재 한국외국어대학교(HUFS) 언어·AI융합학부의 조교수입니다.
     언어·적응형 지능 연구실(LAI Lab)을 이끌고 있으며,
     자연어 처리와 대규모 언어 모델을 중심으로 연구를 수행하고 있습니다.`,
    `주요 연구 관심사는 효율적이고 적응력 있는 언어 모델, 파라미터 효율적 미세조정,
     강건한 학습 기법, 그리고 과학과 산업을 비롯한 다양한 실제 도메인에서의 언어 응용을 아우릅니다.`,
  ],

  // Research interests (displayed as keyword tags)
  interests: [
    'Natural Language Processing',
    'Large Language Models',
    'Efficient AI',
    'Parameter-Efficient Fine-Tuning',
    'Robust Training',
    'AI for Science',
  ],

  // Education entries
  education: [
    // { degree: 'Ph.D. in Computer Science', institution: 'University Name', year: '20XX' },
    // { degree: 'B.S. in Computer Science', institution: 'University Name', year: '20XX' },
  ],

  // Professional experience
  experience: [
    { role: 'Assistant Professor', role_ko: '조교수', organization: 'Hankuk University of Foreign Studies (HUFS)', organization_ko: '한국외국어대학교(HUFS)', period: 'Sep 2025 – Present', period_ko: '2025년 9월 – 현재' },
    { role: 'Research Scientist', role_ko: '연구원', organization: 'Deargen, Seoul, South Korea', organization_ko: '디어젠(Deargen), 대한민국 서울', period: 'Sep 2020 – Jul 2022', period_ko: '2020년 9월 – 2022년 7월' },
    { role: 'Research Scientist', role_ko: '연구원', organization: 'Artificial Intelligence Research Institute (AIRI), Seongnam, South Korea', organization_ko: '인공지능연구원(AIRI), 대한민국 성남', period: 'Mar 2019 – Sep 2020', period_ko: '2019년 3월 – 2020년 9월' },
  ],

  // Selected honors / awards
  awards: [
    { title: 'Outstanding Paper Award', title_ko: '우수 논문상', organization: 'Korea University', organization_ko: '고려대학교', year: '2024' },
    { title: 'Achievement Award', title_ko: '학업 성취상', organization: 'Korea University', organization_ko: '고려대학교', year: '2024' },
    { title: 'Outstanding Research Presentation Award', title_ko: '우수 연구 발표상', organization: 'IITP', organization_ko: 'IITP(정보통신기획평가원)', year: '2024' },
    { title: 'Ph.D Research Fellowship', title_ko: '박사과정 연구 장학금', organization: 'NRF', organization_ko: '한국연구재단(NRF)', year: '2024' },
    { title: 'Object Detection Competition, 2nd Winner', title_ko: '객체 탐지 경진대회 2위', organization: 'IRC 2020', organization_ko: 'IRC 2020', year: '2020' },
    { title: 'NLP Challenge, 2nd Winner', title_ko: 'NLP 챌린지 2위', organization: 'HAAFOR', organization_ko: 'HAAFOR', year: '2019' },
  ],
};
