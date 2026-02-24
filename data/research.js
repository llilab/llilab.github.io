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
    title: 'Efficient NLP & Transformers',
    description: 'We develop methods to reduce the computational cost of large-scale transformer models without sacrificing performance. Our work includes dynamic token routing, information flow sparsification, and memory-efficient training strategies for LLMs.',
    keywords: ['Sparse Transformers', 'Dynamic Token Routing', 'Memory-Efficient Training', 'Inference Acceleration'],
    bgClass: 'ri-efficient',
    svg: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g1a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6" stop-opacity="0.15"/><stop offset="100%" stop-color="#1e40af" stop-opacity="0.08"/></linearGradient></defs>
      <rect fill="url(#g1a)" width="400" height="180"/>
      <rect x="40" y="45" width="56" height="90" rx="6" fill="#3b82f6" opacity="0.18"/>
      <rect x="48" y="55" width="40" height="12" rx="2" fill="#3b82f6" opacity="0.5"/>
      <rect x="48" y="73" width="40" height="12" rx="2" fill="#3b82f6" opacity="0.4"/>
      <rect x="48" y="91" width="40" height="12" rx="2" fill="#3b82f6" opacity="0.3"/>
      <rect x="48" y="109" width="40" height="12" rx="2" fill="#3b82f6" opacity="0.2"/>
      <line x1="108" y1="90" x2="140" y2="90" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,3" opacity="0.5"/>
      <polygon points="138,85 148,90 138,95" fill="#3b82f6" opacity="0.5"/>
      <rect x="155" y="45" width="56" height="90" rx="6" fill="#1e40af" opacity="0.12"/>
      <rect x="163" y="55" width="40" height="12" rx="2" fill="#1e40af" opacity="0.6"/>
      <rect x="163" y="73" width="40" height="12" rx="2" fill="#1e40af" opacity="0.15"/>
      <rect x="163" y="91" width="40" height="12" rx="2" fill="#1e40af" opacity="0.5"/>
      <rect x="163" y="109" width="40" height="12" rx="2" fill="#1e40af" opacity="0.1"/>
      <polygon points="250,50 240,90 258,85 248,130 270,75 252,80 262,50" fill="#3b82f6" opacity="0.35"/>
      <line x1="290" y1="65" x2="360" y2="65" stroke="#3b82f6" stroke-width="2" opacity="0.2" stroke-linecap="round"/>
      <line x1="300" y1="85" x2="370" y2="85" stroke="#3b82f6" stroke-width="3" opacity="0.15" stroke-linecap="round"/>
      <line x1="295" y1="105" x2="355" y2="105" stroke="#3b82f6" stroke-width="2" opacity="0.2" stroke-linecap="round"/>
      <line x1="305" y1="120" x2="340" y2="120" stroke="#3b82f6" stroke-width="1.5" opacity="0.15" stroke-linecap="round"/>
      <text x="310" y="148" font-family="IBM Plex Sans, sans-serif" font-size="10" fill="#1e40af" opacity="0.4" text-anchor="middle">Sparsification</text>
    </svg>`,
  },
  {
    title: 'Parameter-Efficient Fine-Tuning (PEFT)',
    description: 'We investigate parameter-efficient approaches for adapting large language models to downstream tasks, with particular focus on robustness under noisy labels, dataset biases, and federated learning settings.',
    keywords: ['LoRA / Adapters', 'Noisy Label Learning', 'Debiasing', 'Federated Learning'],
    bgClass: 'ri-peft',
    svg: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g2a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#16a34a" stop-opacity="0.12"/><stop offset="100%" stop-color="#15803d" stop-opacity="0.06"/></linearGradient></defs>
      <rect fill="url(#g2a)" width="400" height="180"/>
      <rect x="30" y="25" width="100" height="130" rx="8" fill="#15803d" opacity="0.1" stroke="#15803d" stroke-opacity="0.2" stroke-width="1"/>
      <text x="80" y="60" font-family="IBM Plex Sans, sans-serif" font-size="9" fill="#15803d" opacity="0.5" text-anchor="middle">Large Model</text>
      <rect x="45" y="70" width="70" height="10" rx="2" fill="#15803d" opacity="0.12"/>
      <rect x="45" y="84" width="70" height="10" rx="2" fill="#16a34a" opacity="0.45"/>
      <rect x="45" y="98" width="70" height="10" rx="2" fill="#15803d" opacity="0.12"/>
      <rect x="45" y="112" width="70" height="10" rx="2" fill="#16a34a" opacity="0.45"/>
      <rect x="45" y="126" width="70" height="10" rx="2" fill="#15803d" opacity="0.12"/>
      <circle cx="125" cy="75" r="4" fill="none" stroke="#15803d" stroke-width="1" opacity="0.3"/>
      <circle cx="125" cy="89" r="4" fill="none" stroke="#15803d" stroke-width="1" opacity="0.3"/>
      <circle cx="125" cy="103" r="4" fill="none" stroke="#15803d" stroke-width="1" opacity="0.3"/>
      <line x1="145" y1="90" x2="175" y2="90" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,3" opacity="0.4"/>
      <polygon points="173,85 183,90 173,95" fill="#16a34a" opacity="0.4"/>
      <rect x="190" y="30" width="80" height="35" rx="6" fill="#16a34a" opacity="0.15" stroke="#16a34a" stroke-width="1" stroke-opacity="0.25"/>
      <text x="230" y="52" font-family="IBM Plex Sans, sans-serif" font-size="9" fill="#15803d" opacity="0.6" text-anchor="middle">Task A</text>
      <rect x="190" y="73" width="80" height="35" rx="6" fill="#16a34a" opacity="0.25" stroke="#16a34a" stroke-width="1" stroke-opacity="0.3"/>
      <text x="230" y="95" font-family="IBM Plex Sans, sans-serif" font-size="9" fill="#15803d" opacity="0.7" text-anchor="middle">Task B</text>
      <rect x="190" y="116" width="80" height="35" rx="6" fill="#16a34a" opacity="0.15" stroke="#16a34a" stroke-width="1" stroke-opacity="0.25"/>
      <text x="230" y="138" font-family="IBM Plex Sans, sans-serif" font-size="9" fill="#15803d" opacity="0.6" text-anchor="middle">Task C</text>
      <path d="M330,55 L350,45 L370,55 L370,80 C370,100 350,115 350,115 C350,115 330,100 330,80 Z" fill="#16a34a" opacity="0.12" stroke="#16a34a" stroke-width="1" stroke-opacity="0.25"/>
      <text x="350" y="82" font-family="IBM Plex Sans, sans-serif" font-size="18" fill="#16a34a" opacity="0.4" text-anchor="middle">&#x2713;</text>
      <text x="350" y="138" font-family="IBM Plex Sans, sans-serif" font-size="9" fill="#15803d" opacity="0.4" text-anchor="middle">Robust</text>
    </svg>`,
  },
  {
    title: 'Representation Learning',
    description: 'We study word and subword representation methods, including adaptive compression of embeddings and bridging subword information with semantic knowledge graphs. We also explore chemical and scientific language representations.',
    keywords: ['Word Embeddings', 'Subword Representations', 'Embedding Compression', 'Scientific NLP'],
    bgClass: 'ri-repr',
    svg: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g3a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#7c3aed" stop-opacity="0.12"/><stop offset="100%" stop-color="#6d28d9" stop-opacity="0.06"/></linearGradient></defs>
      <rect fill="url(#g3a)" width="400" height="180"/>
      <circle cx="80" cy="60" r="18" fill="#7c3aed" opacity="0.1"/><circle cx="80" cy="60" r="4" fill="#7c3aed" opacity="0.5"/>
      <text x="80" y="42" font-family="IBM Plex Sans, sans-serif" font-size="8" fill="#7c3aed" opacity="0.5" text-anchor="middle">king</text>
      <circle cx="145" cy="45" r="18" fill="#7c3aed" opacity="0.1"/><circle cx="145" cy="45" r="4" fill="#7c3aed" opacity="0.5"/>
      <text x="145" y="27" font-family="IBM Plex Sans, sans-serif" font-size="8" fill="#7c3aed" opacity="0.5" text-anchor="middle">queen</text>
      <circle cx="60" cy="120" r="18" fill="#7c3aed" opacity="0.1"/><circle cx="60" cy="120" r="4" fill="#7c3aed" opacity="0.4"/>
      <text x="60" y="102" font-family="IBM Plex Sans, sans-serif" font-size="8" fill="#7c3aed" opacity="0.4" text-anchor="middle">man</text>
      <circle cx="125" cy="110" r="18" fill="#7c3aed" opacity="0.1"/><circle cx="125" cy="110" r="4" fill="#7c3aed" opacity="0.4"/>
      <text x="125" y="92" font-family="IBM Plex Sans, sans-serif" font-size="8" fill="#7c3aed" opacity="0.4" text-anchor="middle">woman</text>
      <line x1="80" y1="60" x2="145" y2="45" stroke="#7c3aed" stroke-width="1" opacity="0.25" stroke-dasharray="3,2"/>
      <line x1="60" y1="120" x2="125" y2="110" stroke="#7c3aed" stroke-width="1" opacity="0.25" stroke-dasharray="3,2"/>
      <line x1="80" y1="60" x2="60" y2="120" stroke="#7c3aed" stroke-width="1" opacity="0.15" stroke-dasharray="3,2"/>
      <line x1="145" y1="45" x2="125" y2="110" stroke="#7c3aed" stroke-width="1" opacity="0.15" stroke-dasharray="3,2"/>
      <path d="M185,90 L215,90" stroke="#7c3aed" stroke-width="2" opacity="0.35"/>
      <polygon points="213,85 223,90 213,95" fill="#7c3aed" opacity="0.35"/>
      <rect x="240" y="40" width="8" height="100" rx="3" fill="#7c3aed" opacity="0.12"/>
      <rect x="240" y="40" width="8" height="30" rx="3" fill="#7c3aed" opacity="0.4"/>
      <rect x="240" y="80" width="8" height="20" rx="3" fill="#7c3aed" opacity="0.3"/>
      <rect x="258" y="40" width="8" height="100" rx="3" fill="#7c3aed" opacity="0.12"/>
      <rect x="258" y="50" width="8" height="25" rx="3" fill="#7c3aed" opacity="0.35"/>
      <rect x="276" y="40" width="8" height="100" rx="3" fill="#7c3aed" opacity="0.12"/>
      <rect x="276" y="60" width="8" height="40" rx="3" fill="#7c3aed" opacity="0.4"/>
      <rect x="294" y="40" width="8" height="100" rx="3" fill="#7c3aed" opacity="0.12"/>
      <rect x="294" y="100" width="8" height="25" rx="3" fill="#7c3aed" opacity="0.35"/>
      <circle cx="350" cy="65" r="10" fill="none" stroke="#7c3aed" stroke-width="1.5" opacity="0.25"/>
      <circle cx="370" cy="85" r="8" fill="none" stroke="#7c3aed" stroke-width="1.5" opacity="0.2"/>
      <circle cx="340" cy="100" r="9" fill="none" stroke="#7c3aed" stroke-width="1.5" opacity="0.2"/>
      <line x1="357" y1="72" x2="365" y2="80" stroke="#7c3aed" stroke-width="1" opacity="0.2"/>
      <line x1="345" y1="73" x2="343" y2="93" stroke="#7c3aed" stroke-width="1" opacity="0.2"/>
      <line x1="348" y1="100" x2="363" y2="89" stroke="#7c3aed" stroke-width="1" opacity="0.2"/>
    </svg>`,
  },
  {
    title: 'AI for Language Education',
    description: 'Leveraging our NLP expertise, we build AI-powered tools for language learning — including automated feedback generation, grammatical error correction, and adaptive content creation for learners at all levels.',
    keywords: ['Automated Feedback', 'Grammatical Error Correction', 'Adaptive Learning', 'CALL'],
    bgClass: 'ri-edu',
    svg: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g4a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ea580c" stop-opacity="0.12"/><stop offset="100%" stop-color="#c2410c" stop-opacity="0.06"/></linearGradient></defs>
      <rect fill="url(#g4a)" width="400" height="180"/>
      <rect x="30" y="30" width="140" height="120" rx="8" fill="white" opacity="0.6" stroke="#ea580c" stroke-width="1" stroke-opacity="0.2"/>
      <rect x="42" y="45" width="80" height="6" rx="2" fill="#ea580c" opacity="0.2"/>
      <rect x="42" y="57" width="110" height="6" rx="2" fill="#ea580c" opacity="0.15"/>
      <rect x="42" y="69" width="95" height="6" rx="2" fill="#ea580c" opacity="0.2"/>
      <rect x="42" y="81" width="105" height="6" rx="2" fill="#ea580c" opacity="0.15"/>
      <line x1="42" y1="54" x2="80" y2="54" stroke="#ef4444" stroke-width="1.5" opacity="0.5" stroke-dasharray="2,1"/>
      <line x1="75" y1="78" x2="115" y2="78" stroke="#ef4444" stroke-width="1.5" opacity="0.5" stroke-dasharray="2,1"/>
      <rect x="42" y="96" width="50" height="16" rx="3" fill="#16a34a" opacity="0.15"/>
      <text x="67" y="107" font-family="IBM Plex Sans, sans-serif" font-size="8" fill="#16a34a" opacity="0.6" text-anchor="middle">corrected</text>
      <rect x="98" y="96" width="55" height="16" rx="3" fill="#ea580c" opacity="0.12"/>
      <text x="125" y="107" font-family="IBM Plex Sans, sans-serif" font-size="8" fill="#ea580c" opacity="0.5" text-anchor="middle">suggestion</text>
      <path d="M185,90 L215,90" stroke="#ea580c" stroke-width="2" opacity="0.35"/>
      <polygon points="213,85 223,90 213,95" fill="#ea580c" opacity="0.35"/>
      <rect x="230" y="50" width="70" height="80" rx="10" fill="#ea580c" opacity="0.08" stroke="#ea580c" stroke-width="1" stroke-opacity="0.2"/>
      <circle cx="250" cy="75" r="5" fill="#ea580c" opacity="0.2"/><circle cx="265" cy="68" r="5" fill="#ea580c" opacity="0.25"/>
      <circle cx="280" cy="75" r="5" fill="#ea580c" opacity="0.2"/><circle cx="250" cy="92" r="5" fill="#ea580c" opacity="0.25"/>
      <circle cx="265" cy="100" r="5" fill="#ea580c" opacity="0.2"/><circle cx="280" cy="92" r="5" fill="#ea580c" opacity="0.25"/>
      <line x1="254" y1="74" x2="261" y2="70" stroke="#ea580c" stroke-width="0.8" opacity="0.25"/>
      <line x1="269" y1="70" x2="276" y2="74" stroke="#ea580c" stroke-width="0.8" opacity="0.25"/>
      <line x1="265" y1="73" x2="265" y2="95" stroke="#ea580c" stroke-width="0.8" opacity="0.2"/>
      <text x="265" y="145" font-family="IBM Plex Sans, sans-serif" font-size="9" fill="#ea580c" opacity="0.4" text-anchor="middle">LLM</text>
      <path d="M310,90 L340,90" stroke="#ea580c" stroke-width="2" opacity="0.35"/>
      <polygon points="338,85 348,90 338,95" fill="#ea580c" opacity="0.35"/>
      <rect x="355" y="45" width="30" height="20" rx="4" fill="#16a34a" opacity="0.2"/>
      <text x="370" y="58" font-family="IBM Plex Sans, sans-serif" font-size="8" fill="#16a34a" opacity="0.6" text-anchor="middle">A+</text>
      <rect x="350" y="75" width="40" height="12" rx="2" fill="#ea580c" opacity="0.12"/>
      <rect x="350" y="93" width="35" height="12" rx="2" fill="#ea580c" opacity="0.1"/>
      <rect x="350" y="111" width="40" height="12" rx="2" fill="#ea580c" opacity="0.08"/>
      <text x="370" y="140" font-family="IBM Plex Sans, sans-serif" font-size="8" fill="#ea580c" opacity="0.35" text-anchor="middle">Feedback</text>
    </svg>`,
  },
];
