/**
 * ═══════════════════════════════════════════════════
 *  Domestic (Korean) papers — journals and conferences such as HCLT
 *  Shown under the "Domestic" tab of the Publications page, in the same
 *  format as the international list. The tab appears only once this list
 *  has at least one paper.
 *
 *  HOW TO ADD A PAPER:
 *  Same fields as data/publications.js — copy an entry and edit it.
 *  Papers are grouped by year and sorted newest-first automatically.
 *
 *  Fields:
 *    title    — Title as published (Korean is fine)
 *    authors  — Author list; the PI's name is bolded automatically
 *               (both 'Yeachan Kim' and '김예찬' are recognised)
 *    venue    — Venue name ending in the year, e.g.
 *               'Annual Conference on Human and Language Technology (HCLT), 2026'
 *               The short badge ('HCLT 2026') is derived from it.
 *    year     — Publication year (number)
 *    type     — "conf" | "journal"
 *    links    — Array of { label, url }
 *    tags     — Array of keyword hashtags
 *    image    — (optional) path to a paper figure; a dashed placeholder
 *               is shown without one
 * ═══════════════════════════════════════════════════
 */
const DOMESTIC_PUBLICATIONS = [

  // ──────────── 2026 ────────────
  {
    title: '대규모 추론 모델의 선택적 조기 종료를 위한 추론 경계 최적화',
    authors: '서채영, 김예찬',
    venue: 'Annual Conference on Human and Language Technology (HCLT), 2026',
    year: 2026,
    type: 'conf',
    links: [],
    tags: ['Large Reasoning Models', 'Early Exit', 'Inference Efficiency'],
  },
  {
    title: '거대 언어 모델의 효율적 미세조정을 위한 계층 적응형 그룹 공유 적응',
    authors: '김진희, 조은영, 김예찬',
    venue: 'Annual Conference on Human and Language Technology (HCLT), 2026',
    year: 2026,
    type: 'conf',
    links: [],
    tags: ['LLM', 'Parameter-Efficient Fine-Tuning', 'Parameter Sharing'],
  },
  {
    title: '블록 좌표 하강법 기반 파인튜닝을 위한 민감도 인지 샘플링 예산 조정',
    authors: '조은영, 김진희, 김예찬',
    venue: 'Annual Conference on Human and Language Technology (HCLT), 2026',
    year: 2026,
    type: 'conf',
    links: [],
    tags: ['Block-Coordinate Training', 'Fine-Tuning', 'Sensitivity'],
  },
];
