/**
 * ═══════════════════════════════════════════════════
 *  Research areas (shown on the Research page)
 *
 *  HOW TO ADD A NEW RESEARCH AREA:
 *  Add an object to the array. `id` must match the
 *  `area` field used in data/publications.js, so the
 *  page can pull that area's papers automatically.
 *
 *  Fields:
 *    id          — Area key, matched against PUBLICATIONS[].area
 *    title       — Area title
 *    description — Overview paragraph (EN), description_ko for KO
 *    keywords    — Array of keyword strings
 *    highlights  — Representative papers, newest first. `title` must
 *                  match a paper title in data/publications.js exactly;
 *                  the figure, venue, and authors are taken from there.
 *                  `note` is a one-line summary shown under the title.
 *
 *  Only the highlighted papers appear on the Research page; the full
 *  list lives on the Publications page.
 * ═══════════════════════════════════════════════════
 */
const RESEARCH = [
  {
    id: 'ai4science',
    title: 'AI for Science',
    description: 'Science has its own languages: SMILES strings, reaction descriptions, decades of materials literature. We build language models that read them and connect that text to molecular structure and physical properties. Our work covers chemical language representation learning for molecular property prediction, cross-modal alignment between molecules and the text that describes them, and adapting general-purpose language models to materials science through domain-aware continued pre-training and knowledge transfer.',
    description_ko: '과학에는 고유한 언어가 있습니다. SMILES 문자열, 반응 기술문, 수십 년간 축적된 재료 문헌이 그것입니다. 우리는 이러한 언어를 읽고 분자 구조 및 물성과 연결하는 언어 모델을 연구합니다. 분자 물성 예측을 위한 화학 언어 표현 학습, 분자와 이를 설명하는 텍스트 간의 교차 모달 정렬, 그리고 도메인 특화 추가 사전학습과 지식 전이를 통한 범용 언어 모델의 재료과학 적응을 다룹니다.',
    keywords: ['Molecular Property Prediction', 'Chemical Language Models', 'Materials Science NLP', 'Domain Adaptation'],
    highlights: [
      {
        title: 'Bridging the Gap Between Molecule and Textual Descriptions via Substructure-aware Alignment',
        note: 'Aligns molecules and their textual descriptions at the level of substructures.',
        note_ko: '분자와 텍스트 설명을 부분 구조 단위에서 정렬합니다.',
      },
      {
        title: 'MolTRES: Improving Chemical Language Representation Learning for Molecular Property Prediction',
        note: 'Strengthens chemical language representation learning for molecular property prediction.',
        note_ko: '분자 물성 예측을 위한 화학 언어 표현 학습을 강화합니다.',
      },
      {
        title: 'MELT: Materials-aware Continued Pre-training for Language Model Adaptation to Materials Science',
        note: 'Adapts a general language model to materials science through materials-aware continued pre-training.',
        note_ko: '재료 특화 추가 사전학습으로 범용 언어 모델을 재료과학에 적응시킵니다.',
      },
    ],
  },
  {
    id: 'efficient',
    title: 'Efficient AI',
    description: 'Large models are limited less by ideas than by memory and compute. We look for the parts of a computation that actually carry signal and cut the rest. On the training side this means memory-efficient fine-tuning: deciding which blocks to update and how gradients should reach them, letting the forward pass tell the backward pass where to spend memory, and adapting a large model through a small guided proxy. On the inference side we sparsify information flows, route tokens dynamically so easy inputs take short paths, and prune model structure. We also study data efficiency through active learning and core-set selection.',
    description_ko: '대규모 모델의 한계는 아이디어보다 메모리와 연산에서 옵니다. 우리는 연산 중 실제로 의미 있는 부분을 찾아내고 나머지를 줄입니다. 학습 측면에서는 어떤 블록을 갱신하고 그래디언트를 어떻게 전달할지 결정하는 방법, 순전파가 역전파의 메모리 사용처를 알려주는 방법, 작은 프록시로 큰 모델을 적응시키는 방법 등 메모리 효율적 미세조정을 연구합니다. 추론 측면에서는 정보 흐름을 희소화하고, 쉬운 입력이 짧은 경로를 지나도록 토큰을 동적으로 라우팅하며, 모델 구조를 가지치기합니다. 능동 학습과 코어셋 선택을 통한 데이터 효율성도 함께 다룹니다.',
    keywords: ['Memory-Efficient Training', 'Sparse Transformers', 'Dynamic Token Routing', 'Model Compression', 'Active Learning'],
    highlights: [
      {
        title: 'Rethinking Gradient Flow Through Frozen Blocks for Memory-Efficient Block-Coordinate Training',
        note: 'Revisits how gradients travel through frozen blocks to make block-coordinate training memory-efficient.',
        note_ko: '얼어붙은 블록을 통과하는 그래디언트 흐름을 재검토하여 블록 좌표 학습의 메모리 효율을 높입니다.',
      },
      {
        title: 'KnowProxy: Adapting Large Language Models by Knowledge-guided Proxy',
        note: 'Adapts large language models through a small knowledge-guided proxy.',
        note_ko: '지식 기반의 작은 프록시를 통해 대규모 언어 모델을 적응시킵니다.',
      },
      {
        title: 'Forward Knows Efficient Backward Path: Saliency-Guided Memory-Efficient Fine-tuning of Large Language Models',
        note: 'Uses saliency from the forward pass to pick the backward path, cutting fine-tuning memory.',
        note_ko: '순전파에서 얻은 중요도로 역전파 경로를 선택하여 미세조정 메모리를 줄입니다.',
      },
    ],
  },
  {
    id: 'nlp',
    title: 'Reliable & Robust AI',
    description: 'A model that scores well on a benchmark often leans on shortcuts in the data, and fine-tuning on imperfect labels makes that worse. We study how to keep models dependable when the data does not cooperate: mitigating dataset bias during parameter-efficient fine-tuning, keeping that fine-tuning robust and generalizable under noisy labels, and stabilizing training with adversarial and virtual-adversarial objectives. We also work on representation learning for words and subwords a model has never seen.',
    description_ko: '벤치마크 점수가 높은 모델도 데이터의 지름길에 기대는 경우가 많고, 불완전한 레이블로 미세조정하면 문제는 더 커집니다. 우리는 데이터가 이상적이지 않은 상황에서도 모델을 신뢰할 수 있게 만드는 방법을 연구합니다. 파라미터 효율적 미세조정 과정에서의 데이터셋 편향 완화, 잡음 레이블 하에서의 강건하고 일반화되는 미세조정, 적대적·가상 적대적 목적함수를 통한 학습 안정화를 다룹니다. 모델이 학습 중 본 적 없는 단어와 서브워드에 대한 표현 학습도 함께 연구합니다.',
    keywords: ['Bias Mitigation', 'Noisy Label Learning', 'Adversarial Training', 'Parameter-Efficient Fine-Tuning', 'Representation Learning'],
    highlights: [
      {
        title: 'Curriculum Debiasing: Toward Robust Parameter-Efficient Fine-Tuning Against Dataset Biases',
        note: 'Orders training so parameter-efficient fine-tuning does not latch onto dataset biases.',
        note_ko: '학습 순서를 조절하여 파라미터 효율적 미세조정이 데이터셋 편향에 의존하지 않도록 합니다.',
      },
      {
        title: 'Towards Robust and Generalized Parameter-Efficient Fine-Tuning for Noisy Label Learning',
        note: 'Keeps parameter-efficient fine-tuning robust and generalizable when labels are noisy.',
        note_ko: '레이블에 잡음이 있어도 파라미터 효율적 미세조정이 강건하고 일반화되도록 합니다.',
      },
      {
        title: 'Improving Bias Mitigation through Bias Experts in Natural Language Understanding',
        note: 'Improves bias mitigation in natural language understanding with dedicated bias experts.',
        note_ko: '전용 편향 전문가 모델을 통해 자연어 이해에서의 편향 완화를 개선합니다.',
      },
    ],
  },
];
