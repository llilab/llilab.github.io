/**
 * ═══════════════════════════════════════════════════
 *  Publications data
 *
 *  HOW TO ADD A NEW PAPER:
 *  Copy an existing entry and fill in the fields.
 *  Papers are auto-grouped by year and sorted newest-first.
 *
 *  Fields:
 *    title    — Paper title
 *    authors  — Author list (PI name is auto-bolded)
 *    venue    — Journal / conference name (italicized)
 *    year     — Publication year (number)
 *    type     — "conf" | "journal" | "findings" | "industry" | "preprint"
 *    links    — Array of { label, url } for PDF/Code/Demo/BibTeX
 *    featured — true to show on Home page "Recent Research"
 * ═══════════════════════════════════════════════════
 */
const PUBLICATIONS = [

  // ──────────── 2025 ────────────
  {
    title: 'Forward Knows Efficient Backward Path: Saliency-Guided Memory-Efficient Fine-tuning of Large Language Models',
    authors: 'Yeachan Kim, SangKeun Lee',
    venue: 'Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL), pp. 9341–9356, Vienna, Austria, 2025',
    year: 2025,
    type: 'conf',
    links: [
      { label: 'PDF', url: 'https://aclanthology.org/2025.acl-long.459/' },
      { label: 'Code', url: '#' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: true,
  },
  {
    title: 'Curriculum Debiasing: Toward Robust Parameter-Efficient Fine-Tuning Against Dataset Biases',
    authors: 'Mingyu Lee, Yeachan Kim, Wing-Lam Mok, SangKeun Lee',
    venue: 'Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL), pp. 9524–9540, Vienna, Austria, 2025',
    year: 2025,
    type: 'conf',
    links: [
      { label: 'PDF', url: 'https://aclanthology.org/2025.acl-long.469/' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: true,
  },
  {
    title: 'Enhancing Zero-Shot Commonsense Reasoning by Integrating Visual Knowledge Via Machine Imagination',
    authors: 'Hyuntae Park, Yeachan Kim, SangKeun Lee',
    venue: 'Preprint, 2025',
    year: 2025,
    type: 'preprint',
    links: [
      { label: 'PDF', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5116670' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: false,
  },

  // ──────────── 2024 ────────────
  {
    title: 'SparseFlow: Accelerating Transformers by Sparsifying Information Flows',
    authors: 'Yeachan Kim, SangKeun Lee',
    venue: 'Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (ACL), pp. 5937–5948, Bangkok, Thailand, 2024',
    year: 2024,
    type: 'conf',
    links: [
      { label: 'PDF', url: 'https://aclanthology.org/2024.acl-long.323/' },
      { label: 'Code', url: '#' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: true,
  },
  {
    title: 'Towards Robust and Generalized Parameter-Efficient Fine-Tuning for Noisy Label Learning',
    authors: 'Yeachan Kim, Junho Kim, SangKeun Lee',
    venue: 'Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (ACL), pp. 5922–5936, Bangkok, Thailand, 2024',
    year: 2024,
    type: 'conf',
    links: [
      { label: 'PDF', url: '#' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: false,
  },
  {
    title: 'KOMBO: Korean Character Representations Based on the Combination Rules of Subcharacters',
    authors: 'SungHo Kim, Juhyeong Park, Yeachan Kim, SangKeun Lee',
    venue: 'Findings of ACL, pp. 5102–5119, 2024',
    year: 2024,
    type: 'findings',
    links: [
      { label: 'PDF', url: '#' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: false,
  },
  {
    title: 'MolTRES: Improving Chemical Language Representation Learning for Molecular Property Prediction',
    authors: 'Jun-Hyung Park, Yeachan Kim, Mingyu Lee, Hyuntae Park, SangKeun Lee',
    venue: 'Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP), pp. 14241–14254, Miami, Florida, 2024',
    year: 2024,
    type: 'conf',
    links: [
      { label: 'PDF', url: 'https://aclanthology.org/2024.emnlp-main.788/' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: false,
  },
  {
    title: 'Moleco: Molecular Contrastive Learning with Chemical Language Models for Molecular Property Prediction',
    authors: 'Jun-Hyung Park, Hyuntae Park, Yeachan Kim, Woosang Lim, SangKeun Lee',
    venue: 'EMNLP 2024 Industry Track, Miami, Florida, 2024',
    year: 2024,
    type: 'industry',
    links: [
      { label: 'PDF', url: '#' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: false,
  },
  {
    title: 'SEED: Semantic Knowledge Transfer for Language Model Adaptation to Materials Science',
    authors: 'Yeachan Kim, Jun-Hyung Park, SungHo Kim, Juhyeong Park, Sangyun Kim, SangKeun Lee',
    venue: 'EMNLP 2024 Industry Track, Miami, Florida, 2024',
    year: 2024,
    type: 'industry',
    links: [
      { label: 'PDF', url: '#' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: false,
  },

  // ──────────── 2023 ────────────
  {
    title: 'Leap-of-Thought: Accelerating Transformers via Dynamic Token Routing',
    authors: 'Yeachan Kim, Junho Kim, Jun-Hyung Park, Mingyu Lee, SangKeun Lee',
    venue: 'Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP), pp. 15757–15769, 2023',
    year: 2023,
    type: 'conf',
    links: [
      { label: 'PDF', url: '#' },
      { label: 'Code', url: '#' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: false,
  },
  {
    title: 'Client-Customized Adaptation for Parameter-Efficient Federated Learning',
    authors: 'Yeachan Kim, Junho Kim, Wing-Lam Mok, Jun-Hyung Park, SangKeun Lee',
    venue: 'Findings of ACL, pp. 1159–1172, Toronto, Canada, 2023',
    year: 2023,
    type: 'findings',
    links: [
      { label: 'PDF', url: 'https://aclanthology.org/2023.findings-acl.75/' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: false,
  },
  {
    title: 'Improving Bias Mitigation through Bias Experts in Natural Language Understanding',
    authors: 'Eojin Jeon, Mingyu Lee, Juhyeong Park, Yeachan Kim, Wing-Lam Mok, SangKeun Lee',
    venue: 'Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP), pp. 11053–11066, 2023',
    year: 2023,
    type: 'conf',
    links: [
      { label: 'PDF', url: '#' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: false,
  },

  // ──────────── 2020 ────────────
  {
    title: 'Adaptive Compression of Word Embeddings',
    authors: 'Yeachan Kim, Kang-Min Kim, SangKeun Lee',
    venue: 'Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics (ACL), pp. 3950–3959, 2020',
    year: 2020,
    type: 'conf',
    links: [
      { label: 'PDF', url: '#' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: false,
  },
  {
    title: 'Multi-pretraining for Large-scale Text Classification',
    authors: 'Kang-Min Kim, Bumsu Hyeon, Yeachan Kim, Jun-Hyung Park, SangKeun Lee',
    venue: 'Findings of EMNLP, pp. 2041–2050, 2020',
    year: 2020,
    type: 'findings',
    links: [
      { label: 'PDF', url: '#' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: false,
  },
  {
    title: 'Representation Learning for Unseen Words by Bridging Subwords to Semantic Networks',
    authors: 'Yeachan Kim, Kang-Min Kim, SangKeun Lee',
    venue: 'Proceedings of the 12th Language Resources and Evaluation Conference (LREC), pp. 4774–4780, Marseille, France, 2020',
    year: 2020,
    type: 'conf',
    links: [
      { label: 'PDF', url: 'https://aclanthology.org/2020.lrec-1.587/' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: false,
  },

  // ──────────── 2018 ────────────
  {
    title: 'Learning to Generate Word Representations using Subword Information',
    authors: 'Yeachan Kim, Kang-Min Kim, Ji-Min Lee, SangKeun Lee',
    venue: 'Proceedings of the 27th International Conference on Computational Linguistics (COLING), pp. 2551–2561, 2018',
    year: 2018,
    type: 'conf',
    links: [
      { label: 'PDF', url: '#' },
      { label: 'BibTeX', url: '#' },
    ],
    featured: false,
  },
];
