/**
 * ═══════════════════════════════════════════════════
 *  Research areas
 *
 *  HOW TO ADD A NEW RESEARCH AREA:
 *  Add a new object to the array. Provide an SVG
 *  illustration as a string in the `svg` field,
 *  or leave it empty for a plain gradient card.
 *
 *  Fields:
 *    title       — Area title
 *    description — Short description paragraph
 *    keywords    — Array of keyword strings
 *    bgClass     — CSS class for card background gradient
 *    svg         — Inline SVG string for illustration
 * ═══════════════════════════════════════════════════
 */
const RESEARCH = [
  {
    title: 'AI for Science (AI4Science)',
    description: 'We develop language model-based approaches for scientific discovery, including molecular property prediction, chemical language representation learning, and domain-adaptive pre-training for materials science. Our work bridges NLP techniques with domain-specific scientific knowledge.',
    keywords: ['Molecular Property Prediction', 'Chemical Language Models', 'Materials Science NLP', 'Domain Adaptation'],
    bgClass: 'ri-efficient',
    svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrow1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#3b82f6" opacity="0.5"/></marker></defs>
      <!-- Molecule structure (centered around x=80, y=82) -->
      <circle cx="55" cy="82" r="20" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" stroke-width="2" stroke-opacity="0.6"/>
      <text x="55" y="87" font-family="IBM Plex Sans, sans-serif" font-size="13" fill="#2563eb" font-weight="600" opacity="0.85" text-anchor="middle">C</text>
      <circle cx="105" cy="55" r="20" fill="#1e40af" opacity="0.15" stroke="#1e40af" stroke-width="2" stroke-opacity="0.6"/>
      <text x="105" y="60" font-family="IBM Plex Sans, sans-serif" font-size="13" fill="#1e40af" font-weight="600" opacity="0.85" text-anchor="middle">N</text>
      <circle cx="105" cy="110" r="20" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" stroke-width="2" stroke-opacity="0.6"/>
      <text x="105" y="115" font-family="IBM Plex Sans, sans-serif" font-size="13" fill="#2563eb" font-weight="600" opacity="0.85" text-anchor="middle">O</text>
      <line x1="72" y1="72" x2="88" y2="63" stroke="#3b82f6" stroke-width="2" opacity="0.55"/>
      <line x1="72" y1="92" x2="88" y2="102" stroke="#3b82f6" stroke-width="2" opacity="0.55"/>
      <line x1="105" y1="75" x2="105" y2="90" stroke="#1e40af" stroke-width="2" opacity="0.45" stroke-dasharray="4,2"/>
      <!-- Arrow 1 -->
      <line x1="130" y1="82" x2="155" y2="82" stroke="#3b82f6" stroke-width="2.5" opacity="0.5" marker-end="url(#arrow1)"/>
      <!-- LLM box (centered at x=200, y=82) -->
      <rect x="163" y="50" width="74" height="64" rx="10" fill="#1e40af" opacity="0.1" stroke="#1e40af" stroke-width="1.5" stroke-opacity="0.35"/>
      <text x="200" y="76" font-family="IBM Plex Sans, sans-serif" font-size="12" fill="#1e40af" font-weight="600" opacity="0.7" text-anchor="middle">Scientific</text>
      <text x="200" y="93" font-family="IBM Plex Sans, sans-serif" font-size="12" fill="#1e40af" font-weight="600" opacity="0.7" text-anchor="middle">LM</text>
      <!-- Arrow 2 -->
      <line x1="244" y1="82" x2="269" y2="82" stroke="#3b82f6" stroke-width="2.5" opacity="0.5" marker-end="url(#arrow1)"/>
      <!-- Prediction output (centered at x=310, y=82) -->
      <rect x="277" y="55" width="66" height="24" rx="5" fill="#16a34a" opacity="0.18" stroke="#16a34a" stroke-width="1" stroke-opacity="0.35"/>
      <text x="310" y="71" font-family="IBM Plex Sans, sans-serif" font-size="10" fill="#16a34a" font-weight="600" opacity="0.75" text-anchor="middle">Toxic: No</text>
      <rect x="277" y="85" width="66" height="24" rx="5" fill="#3b82f6" opacity="0.12" stroke="#3b82f6" stroke-width="1" stroke-opacity="0.3"/>
      <text x="310" y="101" font-family="IBM Plex Sans, sans-serif" font-size="10" fill="#2563eb" font-weight="600" opacity="0.7" text-anchor="middle">LogP: 2.1</text>
      <!-- Labels -->
      <text x="80" y="160" font-family="IBM Plex Sans, sans-serif" font-size="11" fill="#3b82f6" opacity="0.5" text-anchor="middle" font-weight="500">Molecular Input</text>
      <text x="200" y="138" font-family="IBM Plex Sans, sans-serif" font-size="11" fill="#1e40af" opacity="0.5" text-anchor="middle" font-weight="500">Language Model</text>
      <text x="310" y="130" font-family="IBM Plex Sans, sans-serif" font-size="11" fill="#2563eb" opacity="0.5" text-anchor="middle" font-weight="500">Prediction</text>
    </svg>`,
  },
  {
    title: 'Efficient AI',
    description: 'We develop methods to reduce the computational cost of large-scale models without sacrificing performance. Our work includes dynamic token routing, information flow sparsification, memory-efficient training, model compression, and active learning for data-efficient training.',
    keywords: ['Sparse Transformers', 'Dynamic Token Routing', 'Memory-Efficient Training', 'Model Compression', 'Active Learning'],
    bgClass: 'ri-peft',
    svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Large model block -->
      <rect x="20" y="25" width="90" height="130" rx="10" fill="#15803d" opacity="0.08" stroke="#15803d" stroke-opacity="0.3" stroke-width="1.5"/>
      <text x="65" y="48" font-family="IBM Plex Sans, sans-serif" font-size="11" fill="#15803d" font-weight="600" opacity="0.6" text-anchor="middle">Full Model</text>
      <rect x="32" y="58" width="66" height="10" rx="3" fill="#15803d" opacity="0.12"/>
      <rect x="32" y="72" width="66" height="10" rx="3" fill="#16a34a" opacity="0.45"/>
      <rect x="32" y="86" width="66" height="10" rx="3" fill="#15803d" opacity="0.12"/>
      <rect x="32" y="100" width="66" height="10" rx="3" fill="#16a34a" opacity="0.45"/>
      <rect x="32" y="114" width="66" height="10" rx="3" fill="#15803d" opacity="0.12"/>
      <rect x="32" y="128" width="66" height="10" rx="3" fill="#16a34a" opacity="0.45"/>
      <!-- Lightning bolt -->
      <polygon points="152,28 137,82 155,76 140,132 170,65 152,72 165,28" fill="#16a34a" opacity="0.4" stroke="#15803d" stroke-width="0.5" stroke-opacity="0.3"/>
      <!-- Compressed model -->
      <rect x="185" y="45" width="65" height="90" rx="10" fill="#16a34a" opacity="0.12" stroke="#16a34a" stroke-width="1.5" stroke-opacity="0.4"/>
      <text x="217" y="68" font-family="IBM Plex Sans, sans-serif" font-size="11" fill="#15803d" font-weight="600" opacity="0.7" text-anchor="middle">Efficient</text>
      <rect x="197" y="78" width="42" height="10" rx="3" fill="#16a34a" opacity="0.55"/>
      <rect x="197" y="92" width="42" height="10" rx="3" fill="#16a34a" opacity="0.55"/>
      <rect x="197" y="106" width="42" height="10" rx="3" fill="#16a34a" opacity="0.55"/>
      <!-- Metrics -->
      <rect x="270" y="38" width="78" height="42" rx="8" fill="#16a34a" opacity="0.08" stroke="#16a34a" stroke-width="1.5" stroke-opacity="0.25"/>
      <text x="309" y="55" font-family="IBM Plex Sans, sans-serif" font-size="10" fill="#16a34a" opacity="0.6" text-anchor="middle" font-weight="500">Speed</text>
      <text x="309" y="73" font-family="IBM Plex Sans, sans-serif" font-size="18" fill="#16a34a" opacity="0.75" text-anchor="middle" font-weight="700">3.2x</text>
      <rect x="270" y="88" width="78" height="42" rx="8" fill="#15803d" opacity="0.08" stroke="#15803d" stroke-width="1.5" stroke-opacity="0.25"/>
      <text x="309" y="105" font-family="IBM Plex Sans, sans-serif" font-size="10" fill="#15803d" opacity="0.6" text-anchor="middle" font-weight="500">Memory</text>
      <text x="309" y="123" font-family="IBM Plex Sans, sans-serif" font-size="18" fill="#15803d" opacity="0.75" text-anchor="middle" font-weight="700">−60%</text>
      <!-- Label -->
      <text x="180" y="175" font-family="IBM Plex Sans, sans-serif" font-size="11" fill="#15803d" opacity="0.5" text-anchor="middle" font-weight="500">Acceleration &amp; Compression</text>
    </svg>`,
  },
  {
    title: 'Natural Language Processing (NLP)',
    description: 'We conduct foundational research in NLP including parameter-efficient fine-tuning, representation learning, robust training under noisy labels and dataset biases, and text classification.',
    keywords: ['Parameter-Efficient Fine-Tuning', 'Robust Training', 'Representation Learning', 'Text Classification'],
    bgClass: 'ri-repr',
    svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Input text doc -->
      <rect x="15" y="30" width="100" height="120" rx="8" fill="white" opacity="0.6" stroke="#7c3aed" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="28" y="48" width="60" height="7" rx="2" fill="#7c3aed" opacity="0.3"/>
      <rect x="28" y="61" width="74" height="7" rx="2" fill="#7c3aed" opacity="0.22"/>
      <rect x="28" y="74" width="65" height="7" rx="2" fill="#7c3aed" opacity="0.3"/>
      <rect x="28" y="87" width="70" height="7" rx="2" fill="#7c3aed" opacity="0.22"/>
      <line x1="28" y1="68" x2="75" y2="68" stroke="#ef4444" stroke-width="2" opacity="0.5" stroke-dasharray="3,2"/>
      <rect x="28" y="104" width="36" height="16" rx="4" fill="#7c3aed" opacity="0.15" stroke="#7c3aed" stroke-width="1" stroke-opacity="0.25"/>
      <text x="46" y="115" font-family="IBM Plex Sans, sans-serif" font-size="8" fill="#7c3aed" font-weight="600" opacity="0.7" text-anchor="middle">Adapter</text>
      <rect x="70" y="104" width="36" height="16" rx="4" fill="#6d28d9" opacity="0.15" stroke="#6d28d9" stroke-width="1" stroke-opacity="0.25"/>
      <text x="88" y="115" font-family="IBM Plex Sans, sans-serif" font-size="8" fill="#6d28d9" font-weight="600" opacity="0.7" text-anchor="middle">LoRA</text>
      <!-- Arrow -->
      <defs><marker id="arrow3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#7c3aed" opacity="0.5"/></marker></defs>
      <line x1="122" y1="90" x2="145" y2="90" stroke="#7c3aed" stroke-width="2.5" opacity="0.5" marker-end="url(#arrow3)"/>
      <!-- Transformer block -->
      <rect x="152" y="30" width="78" height="120" rx="10" fill="#7c3aed" opacity="0.06" stroke="#7c3aed" stroke-width="1.5" stroke-opacity="0.25"/>
      <rect x="164" y="46" width="54" height="26" rx="5" fill="#7c3aed" opacity="0.15"/>
      <text x="191" y="63" font-family="IBM Plex Sans, sans-serif" font-size="10" fill="#7c3aed" font-weight="600" opacity="0.7" text-anchor="middle">Attention</text>
      <rect x="164" y="78" width="54" height="26" rx="5" fill="#7c3aed" opacity="0.12"/>
      <text x="191" y="95" font-family="IBM Plex Sans, sans-serif" font-size="10" fill="#7c3aed" font-weight="600" opacity="0.6" text-anchor="middle">FFN</text>
      <rect x="164" y="110" width="54" height="26" rx="5" fill="#7c3aed" opacity="0.15"/>
      <text x="191" y="127" font-family="IBM Plex Sans, sans-serif" font-size="10" fill="#7c3aed" font-weight="600" opacity="0.7" text-anchor="middle">Output</text>
      <!-- Arrow -->
      <line x1="237" y1="90" x2="260" y2="90" stroke="#7c3aed" stroke-width="2.5" opacity="0.5" marker-end="url(#arrow3)"/>
      <!-- Output tasks -->
      <rect x="268" y="32" width="78" height="32" rx="7" fill="#16a34a" opacity="0.12" stroke="#16a34a" stroke-width="1.5" stroke-opacity="0.3"/>
      <text x="307" y="52" font-family="IBM Plex Sans, sans-serif" font-size="11" fill="#16a34a" font-weight="600" opacity="0.7" text-anchor="middle">Classify</text>
      <rect x="268" y="72" width="78" height="32" rx="7" fill="#7c3aed" opacity="0.1" stroke="#7c3aed" stroke-width="1.5" stroke-opacity="0.25"/>
      <text x="307" y="92" font-family="IBM Plex Sans, sans-serif" font-size="11" fill="#7c3aed" font-weight="600" opacity="0.65" text-anchor="middle">Generate</text>
      <rect x="268" y="112" width="78" height="32" rx="7" fill="#ea580c" opacity="0.1" stroke="#ea580c" stroke-width="1.5" stroke-opacity="0.25"/>
      <text x="307" y="132" font-family="IBM Plex Sans, sans-serif" font-size="11" fill="#ea580c" font-weight="600" opacity="0.65" text-anchor="middle">Understand</text>
      <!-- Label -->
      <text x="180" y="180" font-family="IBM Plex Sans, sans-serif" font-size="11" fill="#7c3aed" opacity="0.5" text-anchor="middle" font-weight="500">Language Understanding &amp; Generation</text>
    </svg>`,
  },
];
