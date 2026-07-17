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
    description_ko: '모든 트랜스포머 블록에 걸친 조밀한 정보 흐름을 희소화하여 사전학습된 트랜스포머를 가속하는 플러그인 모듈입니다. 다양한 NLP 벤치마크에서 최소한의 정확도 손실로 상당한 속도 향상을 달성합니다.',
    links: [
      { label: 'Paper', url: 'https://aclanthology.org/2024.acl-long.323/' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    title: 'MolTRES',
    icon: '🧪',
    description: 'A chemical language representation learning framework that uses generator-discriminator training for molecular property prediction. Learns from challenging molecular examples requiring structural understanding.',
    description_ko: '분자 물성 예측을 위해 생성자-판별자 학습을 활용하는 화학 언어 표현 학습 프레임워크입니다. 구조적 이해가 필요한 어려운 분자 예제로부터 학습합니다.',
    links: [
      { label: 'Paper', url: 'https://aclanthology.org/2024.emnlp-main.788/' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    title: 'CleaR (Clean Routing)',
    icon: '🛡️',
    description: 'A noise-robust parameter-efficient fine-tuning framework that separates clean and noisy gradient signals to improve PEFT robustness under noisy label conditions.',
    description_ko: '깨끗한 그래디언트 신호와 잡음 그래디언트 신호를 분리하여 잡음 레이블 환경에서 PEFT의 강건성을 높이는, 잡음에 강건한 파라미터 효율적 미세조정 프레임워크입니다.',
    links: [
      { label: 'Paper', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    title: 'Korean Writing Assistant',
    icon: '✍️',
    description: 'An LLM-powered tool for Korean language learners that provides detailed grammatical error correction and explanatory feedback tailored to learner proficiency levels.',
    description_ko: '한국어 학습자를 위한 LLM 기반 도구로, 학습자의 숙련도에 맞춰 상세한 문법 오류 교정과 설명형 피드백을 제공합니다.',
    links: [
      { label: 'Demo (Coming Soon)', url: '#' },
    ],
  },
];
