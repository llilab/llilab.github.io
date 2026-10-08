/**
 * ═══════════════════════════════════════════════════
 *  News items (shown on Home page)
 *
 *  HOW TO ADD NEWS:
 *  Add a new object at the TOP of the array.
 *  Set highlight: true for the latest / most important item.
 *
 *  Fields:
 *    date      — Display date string (e.g. "Jul 2025")
 *    content   — HTML string (supports <strong>, <a>, etc.)
 *    papers    — Paper titles listed under the sentence, for acceptances
 *    image     — Venue / agency logo shown in the left column (images/news/)
 *    imageAlt  — Name of the organisation in the logo
 *    badge     — Short text label used when there is no logo file
 *    highlight — true for featured blue banner style
 * ═══════════════════════════════════════════════════
 */
const NEWS = [
  {
    date: 'Oct 2026',
    content: 'Our lab has been selected for the <strong>Lambda Research Grant</strong>, providing GPU compute for our research.',
    content_ko: '<strong>Lambda Research Grant</strong>에 선정되어 연구용 GPU 자원을 지원받게 되었습니다.',
    image: 'images/news/lambda.svg',
    imageAlt: 'Lambda',
    highlight: false,
  },
  {
    date: 'Sep 2026',
    content: 'Three papers accepted as <strong>oral</strong> presentations at <strong>HCLT 2026</strong>. Congrats to Chaeyoung, Jin Hui, and Eunyeong!',
    content_ko: '<strong>HCLT 2026</strong>에 논문 3편이 <strong>구두 발표(Oral)</strong>로 게재 승인되었습니다. 채영, 진희, 은영 학생 축하합니다!',
    papers: [
      '대규모 추론 모델의 선택적 조기 종료를 위한 추론 경계 최적화',
      '거대 언어 모델의 효율적 미세조정을 위한 계층 적응형 그룹 공유 적응',
      '블록 좌표 하강법 기반 파인튜닝을 위한 민감도 인지 샘플링 예산 조정',
    ],
    image: 'images/news/hclt.png',
    imageAlt: '언어공학연구회 SigHclt',
    highlight: false,
  },
  {
    date: 'Aug 2026',
    content: 'Our lab has been selected for the <strong>Core Research Program (기본연구B)</strong> of the NRF, 2026–2029.',
    content_ko: '한국연구재단 <strong>핵심연구(기본연구B)</strong>에 선정되었습니다 (2026–2029).',
    image: 'images/news/nrf.svg',
    imageAlt: 'NRF 한국연구재단',
    highlight: true,
  },
  {
    date: 'Aug 2026',
    content: 'One paper accepted at <strong>EMNLP 2026</strong>.',
    content_ko: '<strong>EMNLP 2026</strong>에 논문 1편이 게재 승인되었습니다.',
    papers: ['Rethinking Gradient Flow Through Frozen Blocks for Memory-Efficient Block-Coordinate Training'],
    image: 'images/news/emnlp2026.png',
    imageAlt: 'EMNLP 2026',
    highlight: false,
  },
  {
    date: 'Apr 2026',
    content: 'One paper accepted at <strong>ICLR 2026</strong>.',
    content_ko: '<strong>ICLR 2026</strong>에 논문 1편이 게재 승인되었습니다.',
    papers: ['KnowProxy: Adapting Large Language Models by Knowledge-guided Proxy'],
    image: 'images/news/iclr2026.svg',
    imageAlt: 'ICLR 2026',
    highlight: false,
  },
  {
    date: 'Jan 2026',
    content: 'One paper accepted to <strong>TACL 2026</strong>, to be presented at ACL 2026.',
    content_ko: '<strong>TACL 2026</strong>에 논문 1편이 게재 승인되었습니다 (ACL 2026에서 발표 예정).',
    papers: ['A Survey on Memory-Efficient Fine-Tuning for Large Language Models'],
    image: 'images/news/acl.svg',
    imageAlt: 'Association for Computational Linguistics',
    highlight: false,
  },
  {
    date: 'Feb 2026',
    content: 'LAI Lab website is now live!',
    content_ko: 'LAI Lab 웹사이트가 정식 공개되었습니다!',
    image: 'images/lai_logo.png',
    imageAlt: 'LAI Lab',
    highlight: false,
  },
  {
    date: 'Oct 2025',
    content: 'One paper accepted at <strong>EMNLP 2025</strong>.',
    content_ko: '<strong>EMNLP 2025</strong>에 논문 1편이 게재 승인되었습니다.',
    papers: ['Bridging the Gap Between Molecule and Textual Descriptions via Substructure-aware Alignment'],
    image: 'images/news/emnlp2025.png',
    imageAlt: 'EMNLP 2025',
    highlight: false,
  },
  {
    date: 'Jul 2025',
    content: 'Two papers accepted at <strong>ACL 2025</strong>.',
    content_ko: '<strong>ACL 2025</strong>에 논문 2편이 게재 승인되었습니다.',
    papers: [
      'Forward Knows Efficient Backward Path: Saliency-Guided Memory-Efficient Fine-tuning of Large Language Models',
      'Curriculum Debiasing: Toward Robust Parameter-Efficient Fine-Tuning Against Dataset Biases',
    ],
    image: 'images/news/acl2025.png',
    imageAlt: 'ACL 2025',
    highlight: false,
  },
];
