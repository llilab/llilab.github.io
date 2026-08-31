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
 *    image     — Logo watermarked behind the item text: that year's
 *                conference logo for a paper, the funding agency for a
 *                grant. Official logos, kept in images/news/. Omit it and
 *                the item renders as plain text.
 *    imageAlt  — Label for the logo (the watermark itself is decorative and
 *                hidden from screen readers).
 *    highlight — true for featured blue banner style
 * ═══════════════════════════════════════════════════
 */
const NEWS = [
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
    content: '"Rethinking Gradient Flow Through Frozen Blocks for Memory-Efficient Block-Coordinate Training" accepted at <strong>EMNLP 2026</strong>.',
    content_ko: '"Rethinking Gradient Flow Through Frozen Blocks for Memory-Efficient Block-Coordinate Training" 논문이 <strong>EMNLP 2026</strong>에 게재 승인되었습니다.',
    image: 'images/news/emnlp2026.png',
    imageAlt: 'EMNLP 2026',
    highlight: false,
  },
  {
    date: 'Apr 2026',
    content: '"KnowProxy: Adapting Large Language Models by Knowledge-guided Proxy" accepted at <strong>ICLR 2026</strong>.',
    content_ko: '"KnowProxy: Adapting Large Language Models by Knowledge-guided Proxy" 논문이 <strong>ICLR 2026</strong>에 게재 승인되었습니다.',
    image: 'images/news/iclr2026.svg',
    imageAlt: 'ICLR',
    highlight: false,
  },
  {
    date: 'Jan 2026',
    content: '"A Survey on Memory-Efficient Fine-Tuning for Large Language Models" accepted at <strong>TACL 2026</strong> (to be presented at ACL 2026).',
    content_ko: '"A Survey on Memory-Efficient Fine-Tuning for Large Language Models" 논문이 <strong>TACL 2026</strong>에 게재 승인되었습니다 (ACL 2026에서 발표 예정).',
    image: 'images/news/acl2026.png',
    imageAlt: 'ACL 2026',
    highlight: false,
  },
  {
    date: 'Feb 2026',
    content: 'LAI Lab website is now live!',
    content_ko: 'LAI Lab 웹사이트가 정식 공개되었습니다!',
    image: 'images/news/lai.svg',
    imageAlt: 'LAI Lab',
    highlight: false,
  },
  {
    date: 'Oct 2025',
    content: '"Bridging the Gap Between Molecule and Textual Descriptions via Substructure-aware Alignment" accepted at <strong>EMNLP 2025</strong>.',
    content_ko: '"Bridging the Gap Between Molecule and Textual Descriptions via Substructure-aware Alignment" 논문이 <strong>EMNLP 2025</strong>에 게재 승인되었습니다.',
    image: 'images/news/emnlp2025.png',
    imageAlt: 'EMNLP 2025',
    highlight: false,
  },
  {
    date: 'Jul 2025',
    content: '"Forward Knows Efficient Backward Path" and "Curriculum Debiasing" accepted at <strong>ACL 2025</strong>.',
    content_ko: '"Forward Knows Efficient Backward Path"와 "Curriculum Debiasing" 논문이 <strong>ACL 2025</strong>에 게재 승인되었습니다.',
    image: 'images/news/acl2025.png',
    imageAlt: 'ACL 2025',
    highlight: false,
  },
];
