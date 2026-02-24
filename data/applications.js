/**
 * ═══════════════════════════════════════════════════
 *  Applications / tools data
 *
 *  HOW TO ADD A NEW APPLICATION:
 *  Add a new object to the array.
 *
 *  Fields:
 *    title       — App name
 *    icon        — Emoji or text for the icon
 *    description — Short description paragraph
 *    links       — Array of { label, url }
 * ═══════════════════════════════════════════════════
 */
const APPLICATIONS = [
  {
    title: 'SparseFlow',
    icon: '⚡',
    description: 'A plug-in module for accelerating pre-trained transformers by sparsifying dense information flows across all transformer blocks. Achieves significant speedup with minimal accuracy loss on various NLP benchmarks.',
    links: [
      { label: 'Paper', url: 'https://aclanthology.org/2024.acl-long.323/' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    title: 'MolTRES',
    icon: '🧪',
    description: 'A chemical language representation learning framework that uses generator-discriminator training for molecular property prediction. Learns from challenging molecular examples requiring structural understanding.',
    links: [
      { label: 'Paper', url: 'https://aclanthology.org/2024.emnlp-main.788/' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    title: 'CleaR (Clean Routing)',
    icon: '🛡️',
    description: 'A noise-robust parameter-efficient fine-tuning framework that separates clean and noisy gradient signals to improve PEFT robustness under noisy label conditions.',
    links: [
      { label: 'Paper', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    title: 'Korean Writing Assistant',
    icon: '✍️',
    description: 'An LLM-powered tool for Korean language learners that provides detailed grammatical error correction and explanatory feedback tailored to learner proficiency levels.',
    links: [
      { label: 'Demo (Coming Soon)', url: '#' },
    ],
  },
];
