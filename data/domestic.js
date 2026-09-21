/**
 * ═══════════════════════════════════════════════════
 *  Domestic (Korean) papers — journals and conferences such as HCLT
 *  Shown under the "Domestic" tab of the Publications page.
 *  The tab appears only once this list has at least one paper.
 *
 *  HOW TO ADD A PAPER:
 *  Copy the example below into the array. Papers are grouped by year
 *  and sorted newest-first automatically.
 *
 *  Fields:
 *    title     — Title as published (usually Korean)
 *    title_en  — (optional) English title, shown in EN mode under the title
 *    authors   — Author list; the PI's name is bolded automatically
 *                (both 'Yeachan Kim' and '김예찬' are recognised)
 *    journal   — Journal or conference name, e.g. '정보과학회논문지'
 *    journal_en— (optional) English name for EN mode
 *    detail    — (optional) volume, issue, pages, e.g. '52(3), pp. 210–219'
 *    year      — Publication year (number)
 *    index     — (optional) badge: a conference short name ('HCLT 2026'),
 *                or 'KCI' / 'KCI 등재후보' for KCI-listed journals
 *    links     — Array of { label, url }, e.g. [{ label: 'KCI', url: '…' }]
 *
 *  Example:
 *  {
 *    title: '대규모 언어 모델의 메모리 효율적 미세조정 기법',
 *    title_en: 'Memory-Efficient Fine-Tuning for Large Language Models',
 *    authors: '홍길동, 김예찬',
 *    journal: '정보과학회논문지',
 *    journal_en: 'Journal of KIISE',
 *    detail: '52(3), pp. 210–219',
 *    year: 2025,
 *    index: 'KCI',
 *    links: [],
 *  },
 * ═══════════════════════════════════════════════════
 */
const DOMESTIC_PUBLICATIONS = [
  {
    title: '대규모 추론 모델의 선택적 조기 종료를 위한 추론 경계 최적화',
    authors: '서채영, 김예찬',
    journal: '한글 및 한국어 정보처리 학술대회',
    journal_en: 'Annual Conference on Human and Language Technology (HCLT)',
    year: 2026,
    index: 'HCLT 2026',
    links: [],
  },
  {
    title: '거대 언어 모델의 효율적 미세조정을 위한 계층 적응형 그룹 공유 적응',
    authors: '김진희, 조은영, 김예찬',
    journal: '한글 및 한국어 정보처리 학술대회',
    journal_en: 'Annual Conference on Human and Language Technology (HCLT)',
    year: 2026,
    index: 'HCLT 2026',
    links: [],
  },
  {
    title: '블록 좌표 하강법 기반 파인튜닝을 위한 민감도 인지 샘플링 예산 조정',
    authors: '조은영, 김진희, 김예찬',
    journal: '한글 및 한국어 정보처리 학술대회',
    journal_en: 'Annual Conference on Human and Language Technology (HCLT)',
    year: 2026,
    index: 'HCLT 2026',
    links: [],
  },
];
