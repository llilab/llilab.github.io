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
    date: 'Jul 2025',
    content: 'Two papers accepted at <strong>ACL 2025</strong> (main conference) on memory-efficient LLM fine-tuning and curriculum debiasing for PEFT.',
    highlight: true,
  },
  {
    date: 'Nov 2024',
    content: 'Three papers presented at <strong>EMNLP 2024</strong> including MolTRES (main) and two industry track papers on molecular property prediction and materials science.',
    highlight: false,
  },
  {
    date: 'Aug 2024',
    content: 'Two papers accepted at <strong>ACL 2024</strong>: SparseFlow on efficient transformers and a study on robust PEFT for noisy label learning.',
    highlight: false,
  },
  {
    date: 'Dec 2023',
    content: 'Two papers presented at <strong>EMNLP 2023</strong>: Leap-of-Thought on dynamic token routing and bias mitigation in NLU.',
    highlight: false,
  },
  {
    date: 'Jul 2023',
    content: 'Paper on <strong>Client-Customized Adaptation</strong> for federated learning accepted at ACL 2023 Findings.',
    highlight: false,
  },
];
