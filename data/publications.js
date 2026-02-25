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
 *    tags     — Array of keyword hashtags
 *    featured — true to show on Home page "Recent Research"
 *    image    — (optional) path to paper figure image for homepage slider
 * ═══════════════════════════════════════════════════
 */
const PUBLICATIONS = [

  // ──────────── 2026 ────────────
  {
    title: 'KnowProxy: Adapting Large Language Models by Knowledge-guided Proxy',
    authors: 'Gukhyeon Lee*, Yeachan Kim*, SangKeun Lee',
    venue: 'International Conference on Learning Representations (ICLR), 2026',
    year: 2026,
    type: 'conf',
    links: [],
    tags: ['LLM Adaptation', 'Knowledge Distillation', 'Parameter Efficiency'],
    featured: true,
    image: 'images/iclr26.png',
  },

  // ──────────── 2025 ────────────
  {
    title: 'A Survey on Memory-Efficient Fine-Tuning for Large Language Models',
    authors: 'Yeachan Kim*, Mingyu Lee*, SangKeun Lee',
    venue: 'Transactions of the Association for Computational Linguistics (TACL), 2026',
    year: 2026,
    type: 'journal',
    links: [],
    tags: ['LLM', 'Memory Efficiency', 'Fine-Tuning'],
    featured: true,
    image: 'images/tacl.png',
  },
  {
    title: 'Bridging the Gap Between Molecule and Textual Descriptions via Substructure-aware Alignment',
    authors: 'Hyuntae Park*, Yeachan Kim*, SangKeun Lee',
    venue: 'Conference on Empirical Methods in Natural Language Processing (EMNLP), 2025',
    year: 2025,
    type: 'conf',
    links: [],
    tags: ['Molecular NLP', 'Cross-modal Alignment', 'Scientific Language'],
    featured: true,
    image: 'images/emnlp25_molbridge.png',
  },
  {
    title: 'Forward Knows Efficient Backward Path: Saliency-Guided Memory-Efficient Fine-tuning of Large Language Models',
    authors: 'Yeachan Kim, SangKeun Lee',
    venue: 'Annual Meeting of the Association for Computational Linguistics (ACL), 2025',
    year: 2025,
    type: 'conf',
    links: [],
    tags: ['LLM', 'Memory-Efficient Training', 'Saliency'],
    featured: true,
    image: 'images/acl25_forward_knows.png',
  },
  {
    title: 'Curriculum Debiasing: Toward Robust Parameter-Efficient Fine-Tuning Against Dataset Biases',
    authors: 'Mingyu Lee, Yeachan Kim, Wing-Lam Mok, SangKeun Lee',
    venue: 'Annual Meeting of the Association for Computational Linguistics (ACL), 2025',
    year: 2025,
    type: 'conf',
    links: [],
    tags: ['PEFT', 'Debiasing', 'Robustness'],
    featured: true,
    image: 'images/acl25_curriculum_debias.png',
  },

  // ──────────── 2024 ────────────
  {
    title: 'SparseFlow: Accelerating Transformers by Sparsifying Information Flows',
    authors: 'Yeachan Kim, SangKeun Lee',
    venue: 'Annual Meeting of the Association for Computational Linguistics (ACL), 2024',
    year: 2024,
    type: 'conf',
    links: [],
    tags: ['Transformer', 'Sparsity', 'Inference Efficiency'],
    featured: true,
    image: 'images/fig-3.svg',
  },
  {
    title: 'Towards Robust and Generalized Parameter-Efficient Fine-Tuning for Noisy Label Learning',
    authors: 'Yeachan Kim*, Junho Kim*, SangKeun Lee',
    venue: 'Annual Meeting of the Association for Computational Linguistics (ACL), 2024',
    year: 2024,
    type: 'conf',
    links: [],
    tags: ['PEFT', 'Noisy Labels', 'Robustness'],
    featured: true,
    image: 'images/fig-5.svg',
  },
  {
    title: 'KOMBO: Korean Character Representations Based on the Combination Rules of Subcharacters',
    authors: 'SungHo Kim, Juhyeong Park, Yeachan Kim, SangKeun Lee',
    venue: 'Findings of ACL, 2024',
    year: 2024,
    type: 'findings',
    links: [],
    tags: ['Korean NLP', 'Tokenization', 'Character Representation'],
    featured: false,
  },
  {
    title: 'MolTRES: Improving Chemical Language Representation Learning for Molecular Property Prediction',
    authors: 'Jun-Hyung Park, Yeachan Kim, Mingyu Lee, Hyuntae Park, SangKeun Lee',
    venue: 'Conference on Empirical Methods in Natural Language Processing (EMNLP), 2024',
    year: 2024,
    type: 'conf',
    links: [],
    tags: ['Molecular NLP', 'Representation Learning', 'Property Prediction'],
    featured: false,
  },
  {
    title: 'Moleco: Molecular Contrastive Learning with Chemical Language Models for Molecular Property Prediction',
    authors: 'Jun-Hyung Park, Hyuntae Park, Yeachan Kim, Woosang Lim, SangKeun Lee',
    venue: 'EMNLP 2024 Industry Track',
    year: 2024,
    type: 'industry',
    links: [],
    tags: ['Molecular NLP', 'Contrastive Learning', 'Property Prediction'],
    featured: false,
  },
  {
    title: 'SEED: Semantic Knowledge Transfer for Language Model Adaptation to Materials Science',
    authors: 'Yeachan Kim, Jun-Hyung Park, SungHo Kim, Juhyeong Park, Sangyun Kim, SangKeun Lee',
    venue: 'EMNLP 2024 Industry Track',
    year: 2024,
    type: 'industry',
    links: [],
    tags: ['Materials Science', 'Domain Adaptation', 'Knowledge Transfer'],
    featured: false,
  },
  {
    title: 'MELT: Materials-aware Continued Pre-training for Language Model Adaptation to Materials Science',
    authors: 'Junho Kim*, Yeachan Kim*, Jun-Hyung Park, Yerim Oh, Suho Kim, SangKeun Lee',
    venue: 'Findings of EMNLP, 2024',
    year: 2024,
    type: 'findings',
    links: [],
    tags: ['Materials Science', 'Continued Pretraining', 'Domain Adaptation'],
    featured: false,
  },
  {
    title: 'Zero-shot Commonsense Reasoning over Machine Imagination',
    authors: 'Hyuntae Park*, Yeachan Kim*, Jun-Hyung Park, SangKeun Lee',
    venue: 'Findings of EMNLP, 2024',
    year: 2024,
    type: 'findings',
    links: [],
    tags: ['Commonsense Reasoning', 'Zero-shot', 'Knowledge Generation'],
    featured: false,
  },
  {
    title: 'Dynamic Layer-Wise Token Pruning for Sequence-to-Sequence Transformer Inference',
    authors: 'Ji Hun Keom, Yeachan Kim, Sung Ju Lee, SangKeun Lee',
    venue: 'International Conference on Pattern Recognition and Artificial Intelligence (ICPRAI), 2024',
    year: 2024,
    type: 'conf',
    links: [],
    tags: ['Token Pruning', 'Seq2Seq', 'Inference Efficiency'],
    featured: false,
  },

  // ──────────── 2023 ────────────
  {
    title: 'Leap-of-Thought: Accelerating Transformers via Dynamic Token Routing',
    authors: 'Yeachan Kim, Junho Kim, Jun-Hyung Park, Mingyu Lee, SangKeun Lee',
    venue: 'Conference on Empirical Methods in Natural Language Processing (EMNLP), 2023',
    year: 2023,
    type: 'conf',
    links: [],
    tags: ['Transformer', 'Token Routing', 'Inference Efficiency'],
    featured: true,
    image: 'images/fig-4.svg',
  },
  {
    title: 'Client-Customized Adaptation for Parameter-Efficient Federated Learning',
    authors: 'Yeachan Kim*, Junho Kim*, Wing-Lam Mok, Jun-Hyung Park, SangKeun Lee',
    venue: 'Findings of ACL, 2023',
    year: 2023,
    type: 'findings',
    links: [],
    tags: ['Federated Learning', 'PEFT', 'Personalization'],
    featured: false,
  },
  {
    title: 'Improving Bias Mitigation through Bias Experts in Natural Language Understanding',
    authors: 'Eojin Jeon, Mingyu Lee, Juhyeong Park, Yeachan Kim, Wing-Lam Mok, SangKeun Lee',
    venue: 'Conference on Empirical Methods in Natural Language Processing (EMNLP), 2023',
    year: 2023,
    type: 'conf',
    links: [],
    tags: ['Debiasing', 'NLU', 'Robustness'],
    featured: false,
  },
  {
    title: 'Dynamic Structure Pruning for Compressing CNNs',
    authors: 'Jun-Hyung Park, Yeachan Kim, Junho Kim, Joon-Young Choi, SangKeun Lee',
    venue: 'AAAI Conference on Artificial Intelligence (AAAI), 2023',
    year: 2023,
    type: 'conf',
    links: [],
    tags: ['Model Compression', 'Pruning', 'CNN'],
    featured: false,
  },
  {
    title: 'Phase-shifted Adversarial Training',
    authors: 'Yeachan Kim, Seongyeon Kim, Ihyeok Seo, Bonggun Shin',
    venue: 'Conference on Uncertainty in Artificial Intelligence (UAI), 2023',
    year: 2023,
    type: 'conf',
    links: [],
    tags: ['Adversarial Training', 'Robustness', 'Generalization'],
    featured: false,
  },

  // ──────────── 2022 ────────────
  {
    title: 'In Defense of Core-set: A Density-aware Core-set Selection for Active Learning',
    authors: 'Yeachan Kim, Bonggun Shin',
    venue: 'ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2022',
    year: 2022,
    type: 'conf',
    links: [],
    tags: ['Active Learning', 'Data Selection', 'Core-set'],
    featured: false,
  },
  {
    title: 'Context-based Virtual Adversarial Training for Text Classification with Noisy Labels',
    authors: 'Do-Myoung Lee*, Yeachan Kim*, Chang-gyun Seo',
    venue: 'Language Resources and Evaluation Conference (LREC), 2022',
    year: 2022,
    type: 'conf',
    links: [],
    tags: ['Noisy Labels', 'Text Classification', 'Semi-supervised'],
    featured: false,
  },

  // ──────────── 2020 ────────────
  {
    title: 'Adaptive Compression of Word Embeddings',
    authors: 'Yeachan Kim, Kang-Min Kim, SangKeun Lee',
    venue: 'Annual Meeting of the Association for Computational Linguistics (ACL), 2020',
    year: 2020,
    type: 'conf',
    links: [],
    tags: ['Word Embeddings', 'Compression', 'Efficiency'],
    featured: false,
  },
  {
    title: 'Multi-pretraining for Large-scale Text Classification',
    authors: 'Kang-Min Kim, Bumsu Hyeon, Yeachan Kim, Jun-Hyung Park, SangKeun Lee',
    venue: 'Findings of EMNLP, 2020',
    year: 2020,
    type: 'findings',
    links: [],
    tags: ['Pretraining', 'Text Classification', 'Transfer Learning'],
    featured: false,
  },
  {
    title: 'Representation Learning for Unseen Words by Bridging Subwords to Semantic Networks',
    authors: 'Yeachan Kim, Kang-Min Kim, SangKeun Lee',
    venue: 'Language Resources and Evaluation Conference (LREC), 2020',
    year: 2020,
    type: 'conf',
    links: [],
    tags: ['Word Representation', 'OOV', 'Semantic Networks'],
    featured: false,
  },
  {
    title: 'Personalizing Large-scale Text Classification by Modeling Individual Differences',
    authors: 'Jungho Lee, Byung-Ju Choi, Yeachan Kim, Kang-Min Kim, Woo-Jong Ryu, SangKeun Lee',
    venue: 'ACM/SIGAPP Symposium on Applied Computing (SAC), 2020',
    year: 2020,
    type: 'conf',
    links: [],
    tags: ['Text Classification', 'Personalization', 'User Modeling'],
    featured: false,
  },

  // ──────────── 2019 ────────────
  {
    title: 'From Small-scale to Large-scale Text Classification',
    authors: 'Kang-Min Kim, Yeachan Kim, Jungho Lee, Ji-Min Lee, SangKeun Lee',
    venue: 'The Web Conference (WWW), 2019',
    year: 2019,
    type: 'conf',
    links: [],
    tags: ['Text Classification', 'Scalability', 'Transfer Learning'],
    featured: false,
  },

  // ──────────── 2018 ────────────
  {
    title: 'Learning to Generate Word Representations using Subword Information',
    authors: 'Yeachan Kim, Kang-Min Kim, Ji-Min Lee, SangKeun Lee',
    venue: 'International Conference on Computational Linguistics (COLING), 2018',
    year: 2018,
    type: 'conf',
    links: [],
    tags: ['Word Representation', 'Subword', 'Morphology'],
    featured: false,
  },
  {
    title: 'Improving Open Directory Project-Based Text Classification with Hierarchical Category Embedding',
    authors: 'Ji-Min Lee, Kang-Min Kim, Yeachan Kim, SangKeun Lee',
    venue: 'IEEE International Conference on Cognitive Informatics & Cognitive Computing (ICCI*CC), 2018',
    year: 2018,
    type: 'conf',
    links: [],
    tags: ['Text Classification', 'Hierarchical', 'Category Embedding'],
    featured: false,
  },
];
