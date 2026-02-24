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
 *    highlight — true for featured blue banner style
 * ═══════════════════════════════════════════════════
 */
const NEWS = [
  {
    date: 'Apr 2026',
    content: '"KnowProxy: Adapting Large Language Models by Knowledge-guided Proxy" accepted at <strong>ICLR 2026</strong>.',
    highlight: true,
  },
  {
    date: '2026',
    content: '"A Survey on Memory-Efficient Fine-Tuning for Large Language Models" accepted at <strong>TACL 2026</strong> (to be presented at ACL 2026).',
    highlight: false,
  },
  {
    date: 'Feb 2026',
    content: 'LLI Lab website is now live!',
    highlight: false,
  },
  {
    date: 'Oct 2025',
    content: '"Bridging the Gap Between Molecule and Textual Descriptions via Substructure-aware Alignment" accepted at <strong>EMNLP 2025</strong>.',
    highlight: false,
  },
  {
    date: 'Jul 2025',
    content: '"Forward Knows Efficient Backward Path" and "Curriculum Debiasing" accepted at <strong>ACL 2025</strong>.',
    highlight: false,
  },
];
