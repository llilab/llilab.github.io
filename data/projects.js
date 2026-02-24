/**
 * ═══════════════════════════════════════════════════
 *  Projects data
 *
 *  HOW TO ADD A NEW PROJECT:
 *  Add a new object to the array.
 *
 *  Fields:
 *    title       — Project title
 *    description — Short description paragraph
 *    period      — e.g. "2024 – Present"
 *    status      — "active" | "completed"
 * ═══════════════════════════════════════════════════
 */
const PROJECTS = [
  {
    title: 'Memory-Efficient Fine-Tuning for Large Language Models',
    description: 'Developing saliency-guided and parameter-efficient strategies for fine-tuning LLMs under limited GPU memory, enabling practical adaptation of billion-parameter models.',
    period: '2024 – Present',
    status: 'active',
  },
  {
    title: 'Robust Parameter-Efficient Fine-Tuning',
    description: 'Investigating robustness of PEFT methods under noisy labels, dataset biases, and heterogeneous federated learning scenarios. Includes the CleaR and Curriculum Debiasing frameworks.',
    period: '2023 – Present',
    status: 'active',
  },
  {
    title: 'AI-Powered Language Education Tools',
    description: 'Building intelligent tutoring systems that leverage LLMs for automated feedback generation, grammatical error correction, and adaptive content creation for language learners.',
    period: '2024 – Present',
    status: 'active',
  },
  {
    title: 'Efficient Transformer Architectures',
    description: 'Designed SparseFlow and Leap-of-Thought — methods for accelerating transformers through information flow sparsification and dynamic token routing.',
    period: '2022 – 2024',
    status: 'completed',
  },
  {
    title: 'Scientific Language Understanding',
    description: 'Applied NLP to chemistry and materials science domains — developed MolTRES, Moleco, and SEED for molecular property prediction and materials science knowledge transfer.',
    period: '2023 – 2024',
    status: 'completed',
  },
];
