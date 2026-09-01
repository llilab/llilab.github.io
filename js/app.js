/**
 * ═══════════════════════════════════════════════════
 *  LAI Lab Website — SPA Router & Page Renderers
 *
 *  This file reads from the data/* files and renders
 *  each page dynamically. You should NOT need to edit
 *  this file when adding content — edit data/*.js instead.
 * ═══════════════════════════════════════════════════
 */

// ─── Language (i18n) state ───
// Menu labels and page/section titles stay in English;
// only descriptive body content is translated.
let LANG = localStorage.getItem('lang') || 'en';

// Pick a value based on the current language.
// `ko` falls back to `en` when a translation is missing.
function L(en, ko) {
  return (LANG === 'ko' && ko != null && ko !== '') ? ko : en;
}

// Track the currently displayed page so we can re-render on language switch.
let currentPage = 'home';

function setLang(lang) {
  if (lang === LANG) return;
  LANG = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = (lang === 'ko') ? 'ko' : 'en';
  updateLangToggle();
  showPage(currentPage);
}

function updateLangToggle() {
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === LANG);
  });
}

// ─── Utility: highlight PI name in author strings ───
function highlightPI(authors) {
  const name = SITE.piNameInPapers;
  return authors.replace(name, `<span class="me">${name}</span>`);
}

// ─── Utility: get tag CSS class from type ───
function tagClass(type) {
  const map = { conf: 'tag-conf', journal: 'tag-journal', findings: 'tag-findings', industry: 'tag-industry', preprint: 'tag-preprint' };
  return map[type] || 'tag-conf';
}
function tagLabel(type) {
  const map = { conf: 'Conference', journal: 'Journal', findings: 'Findings', industry: 'Industry', preprint: 'Preprint' };
  return map[type] || type;
}

// ─── Utility: extract short venue name (e.g. "ACL 2025") ───
function shortVenue(venue, year, type) {
  const v = venue.toLowerCase();
  const findings = (type === 'findings');
  const industry = (type === 'industry');
  // TACL must come before ACL (since "tacl" contains "acl")
  if (v.includes('tacl') || v.includes('transactions of the association')) return 'TACL ' + year;
  if (v.includes('emnlp') && findings)              return 'Findings of EMNLP ' + year;
  if (v.includes('emnlp') && industry)              return 'EMNLP Industry ' + year;
  if (v.includes('emnlp'))                          return 'EMNLP ' + year;
  if (findings && v.includes('acl'))                return 'Findings of ACL ' + year;
  if (v.includes('acl') && !v.includes('coling'))   return 'ACL ' + year;
  if (v.includes('naacl'))                          return 'NAACL ' + year;
  if (v.includes('coling'))                         return 'COLING ' + year;
  if (v.includes('lrec'))                           return 'LREC ' + year;
  if (v.includes('iclr'))                           return 'ICLR ' + year;
  if (v.includes('neurips') || v.includes('nips'))  return 'NeurIPS ' + year;
  if (v.includes('icml'))                           return 'ICML ' + year;
  if (v.includes('aaai'))                           return 'AAAI ' + year;
  if (v.includes('uai') || v.includes('uncertainty in artificial intelligence')) return 'UAI ' + year;
  if (v.includes('kdd') || v.includes('sigkdd'))    return 'KDD ' + year;
  if (v.includes('www') || v.includes('web conference')) return 'WWW ' + year;
  if (v.includes('icprai'))                         return 'ICPRAI ' + year;
  if (v.includes('sac') || v.includes('sigapp'))    return 'SAC ' + year;
  if (v.includes('icci'))                           return 'ICCI*CC ' + year;
  if (v.includes('preprint'))                       return 'Preprint';
  return venue.split(',')[0].substring(0, 20);
}

// ─── Utility: get venue-specific tag CSS class ───
function venueTagClass(venue, type) {
  const v = venue.toLowerCase();
  if (v.includes('tacl') || v.includes('transactions of the association')) return 'tag-tacl';
  if (v.includes('emnlp') && type === 'findings')   return 'tag-findings';
  if (v.includes('emnlp') && type === 'industry')   return 'tag-industry';
  if (v.includes('emnlp'))                          return 'tag-emnlp';
  if (type === 'findings' && v.includes('acl'))     return 'tag-findings';
  if (v.includes('acl') && !v.includes('coling'))   return 'tag-acl';
  if (v.includes('iclr'))                           return 'tag-iclr';
  if (v.includes('neurips') || v.includes('nips'))  return 'tag-neurips';
  if (v.includes('aaai'))                           return 'tag-aaai';
  if (v.includes('kdd') || v.includes('sigkdd'))    return 'tag-kdd';
  if (v.includes('coling'))                         return 'tag-coling';
  if (v.includes('naacl'))                          return 'tag-naacl';
  if (v.includes('lrec'))                           return 'tag-lrec';
  if (v.includes('uai'))                            return 'tag-uai';
  if (v.includes('www'))                            return 'tag-www';
  if (type === 'industry')                          return 'tag-industry';
  if (type === 'findings')                          return 'tag-findings';
  if (type === 'journal')                           return 'tag-journal';
  if (type === 'preprint')                          return 'tag-preprint';
  return 'tag-conf';
}

// ─── Utility: render links array ───
function renderLinks(links, cssClass) {
  return links.map(l => `<a href="${l.url}">${l.label}</a>`).join('');
}

// ─── Utility: render research highlight slider ───
function renderHighlightSlider() {
  const slides = PUBLICATIONS.filter(p => p.featured && p.image).slice(0, 5);
  if (slides.length === 0) return '';

  const slidesHTML = slides.map((p, i) => `
    <div class="slider-slide" data-index="${i}" style="background-image:url('${p.image}')">
      <div class="slider-overlay">
        <span class="recent-tag ${venueTagClass(p.venue, p.type)}">${shortVenue(p.venue, p.year, p.type)}</span>
        <h3><a href="${p.links[0]?.url || '#'}">${p.title}</a></h3>
        <div class="slider-venue">${p.venue}</div>
      </div>
    </div>
  `).join('');

  const dotsHTML = slides.map((_, i) =>
    `<button class="slider-dot${i === 0 ? ' active' : ''}" data-slide="${i}" aria-label="Go to slide ${i + 1}"></button>`
  ).join('');

  return `
    <div class="highlight-slider fade-in">
      <div class="home-section-title">Research Highlights</div>
      <div class="slider-wrapper">
        <div class="slider-track" id="sliderTrack">
          ${slidesHTML}
        </div>
        <div class="slider-arrows">
          <button class="slider-arrow" id="sliderPrev" aria-label="Previous slide">&#8592;</button>
          <button class="slider-arrow" id="sliderNext" aria-label="Next slide">&#8594;</button>
        </div>
      </div>
    </div>
  `;
}

function initSlider() {
  const track = document.getElementById('sliderTrack');
  if (!track) return;

  const slides = track.querySelectorAll('.slider-slide');
  const dots = document.querySelectorAll('#sliderDots .slider-dot');
  const counter = document.getElementById('sliderCurrent');
  const total = slides.length;
  let current = 0;
  let autoTimer = null;

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    if (counter) counter.textContent = current + 1;
  }

  document.getElementById('sliderPrev')?.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  document.getElementById('sliderNext')?.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
  dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.slide); resetAuto(); }));

  // Auto-advance every 6 seconds
  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 6000);
  }
  resetAuto();
}

// ═══════════════════════════════════════════════════
//  PAGE RENDERERS
// ═══════════════════════════════════════════════════

function renderHome() {
  const newsHTML = NEWS.map(n => {
    // The venue / agency logo sits behind the text as a faded watermark on the
    // right, the way the recruitment banner carries the lab mark. Space in this
    // column is too tight for a logo of its own.
    const mark = n.image
      ? `<img class="news-mark" src="${n.image}" alt="" aria-hidden="true" loading="lazy"
             onerror="this.remove();">`
      : '';
    return `<div class="news-item">${mark}<div class="news-body"><div class="news-date">${n.date}</div><p>${L(n.content, n.content_ko)}</p></div></div>`;
  }).join('');

  return `
    ${renderHighlightSlider()}

    <div class="join-banner fade-in">
      <span class="join-banner-mark" aria-hidden="true"></span>
      <div class="join-banner-body">
        <div class="join-banner-title">${SITE.recruitment.title}</div>
        <p>${L(SITE.recruitment.description, SITE.recruitment.description_ko)}</p>
        <div class="join-banner-actions">
          <a href="https://forms.gle/pAHdt5M8bjy6vpvK9" target="_blank">${L('Apply here', '지원하기')}</a>
        </div>
      </div>
    </div>

    <div class="home-grid">
      <div class="home-main fade-in">
        <div class="home-section-title">${L('Welcome', '환영합니다')}</div>
        <p class="welcome-intro">${L(SITE.welcome.intro, SITE.welcome.intro_ko)}</p>

        <div class="directions">
          <div class="directions-label">${L('Research Directions', '연구 방향')}</div>
          <ul class="direction-list">
            ${RESEARCH.map(r => `
              <li class="direction-item">
                <span class="direction-title">${r.title}</span>
                <span class="direction-keywords">${r.keywords.join(' · ')}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <a href="#publications" class="view-all" onclick="showPage('publications');return false;">${L('View all publications', '전체 논문 보기')}</a>
      </div>
      <aside class="home-side fade-in">
        <div class="home-section-title">News</div>
        ${newsHTML}
      </aside>
    </div>
  `;
}

function renderResearch() {
  const byTitle = {};
  PUBLICATIONS.forEach(p => { byTitle[p.title] = p; });

  const highlightsLabel = L('Representative Work', '대표 연구');

  const items = RESEARCH.map((r, i) => {
    // Highlights are named by title in data/research.js; the figure, venue
    // and authors come from data/publications.js, so nothing is repeated.
    const picks = (r.highlights || [])
      .map(h => ({ ...h, pub: byTitle[h.title] }))
      .filter(h => h.pub);

    const highlightsHTML = picks.length ? `
      <div class="research-highlights">
        <div class="research-section-label">${highlightsLabel}</div>
        ${picks.map(h => {
          const p = h.pub;
          const figHTML = p.image
            ? `<img src="${p.image}" alt="Figure from ${p.title}" loading="lazy"
                   onerror="this.parentElement.classList.add('is-empty');this.remove();">`
            : '';
          const titleHTML = p.links && p.links.length
            ? `<a href="${p.links[0].url}">${p.title}</a>`
            : p.title;
          return `
          <article class="research-highlight">
            <div class="research-highlight-fig${p.image ? '' : ' is-empty'}">${figHTML}</div>
            <div class="research-highlight-body">
              <span class="recent-tag ${venueTagClass(p.venue, p.type)}">${shortVenue(p.venue, p.year, p.type)}</span>
              <h4>${titleHTML}</h4>
              <p class="research-highlight-note">${L(h.note, h.note_ko)}</p>
              <div class="research-highlight-authors">${highlightPI(p.authors)}</div>
            </div>
          </article>`;
        }).join('')}
      </div>
    ` : '';

    return `
      <section class="research-item fade-in">
        <div class="research-item-num">0${i + 1}</div>
        <h3>${r.title}</h3>
        <div class="research-item-head">
          <p>${L(r.description, r.description_ko)}</p>
          <div class="research-keywords">
            ${r.keywords.map(k => `<span class="keyword">${k}</span>`).join('')}
          </div>
        </div>
        ${highlightsHTML}
      </section>
    `;
  }).join('');

  return `
    <div class="subpage">
      <div class="subpage-header">
        <h2>Research</h2>
        <p>${L('Our research spans AI for Science, Efficient AI, and Reliable & Robust AI. Each area below opens with the papers that best represent where the work stands now.',
              '우리 연구는 과학을 위한 AI, 효율적 AI, 신뢰할 수 있는 AI를 아우릅니다. 각 분야마다 현재 연구를 가장 잘 보여주는 대표 논문을 함께 소개합니다.')}</p>
      </div>
      <div class="research-items">${items}</div>
      <a href="#publications" class="view-all" onclick="showPage('publications');return false;">${L('View all publications', '전체 논문 보기')}</a>
    </div>
  `;
}

function renderPublications() {
  // Group by year
  const byYear = {};
  PUBLICATIONS.forEach(p => {
    if (!byYear[p.year]) byYear[p.year] = [];
    byYear[p.year].push(p);
  });
  const years = Object.keys(byYear).sort((a, b) => b - a);

  const groupsHTML = years.map(year => {
    const entries = byYear[year].map(p => {
      const tagsHTML = (p.tags && p.tags.length) ? `<div class="pub-tags">${p.tags.map(t => `<span class="pub-hashtag">#${t}</span>`).join('')}</div>` : '';
      const figHTML = p.image
        ? `<img src="${p.image}" alt="" loading="lazy"
               onerror="this.parentElement.classList.add('is-empty');this.remove();">`
        : '';
      return `
      <div class="pub-entry">
        <div class="pub-figure${p.image ? '' : ' is-empty'}">${figHTML}</div>
        <div class="pub-body">
          <span class="recent-tag ${venueTagClass(p.venue, p.type)}">${shortVenue(p.venue, p.year, p.type)}</span>
          <h4>${p.title}</h4>
          <div class="pub-authors">${highlightPI(p.authors)}</div>
          <div class="pub-venue-line"><em>${p.venue}</em></div>
          ${tagsHTML}
        </div>
      </div>
    `;
    }).join('');

    return `
      <div class="pub-year-group fade-in">
        <div class="pub-year-label">${year}</div>
        ${entries}
      </div>
    `;
  }).join('');

  return `
    <div class="subpage">
      <div class="subpage-header">
        <h2>Publications</h2>
        <p>${L('Selected papers. See', '선별된 논문 목록입니다. 전체 목록은')} <a href="${SITE.pi.scholar}" target="_blank">Google Scholar</a>${L(' for a complete list.', '를 참고해 주세요.')}</p>
      </div>
      ${groupsHTML}
    </div>
  `;
}

function renderProjects() {
  return `
    <div class="subpage">
      <div class="subpage-header">
        <h2>Projects</h2>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center; padding:3rem 0 4rem;">
        <img src="images/updating.svg" alt="Updating" style="width:80px; height:80px; margin-bottom:1.25rem;">
        <p style="color:var(--text-light); font-style:italic; text-align:center; font-size:0.95rem;">${L('This page is currently being updated.<br>Please check back soon.', '이 페이지는 현재 업데이트 중입니다.<br>곧 다시 확인해 주세요.')}</p>
      </div>
    </div>
  `;
}

function renderApplications() {
  const entries = APPLICATIONS.map(a => `
    <div class="app-entry fade-in">
      <div class="app-entry-icon">${a.icon}</div>
      <div>
        <h3>${a.title}</h3>
        <p>${L(a.description, a.description_ko)}</p>
        <div class="app-entry-links">${renderLinks(a.links)}</div>
      </div>
    </div>
  `).join('');

  return `
    <div class="subpage">
      <div class="subpage-header">
        <h2>Applications</h2>
        <p>${L('Research prototypes and tools developed by our lab.', '연구실에서 개발한 연구 프로토타입과 도구입니다.')}</p>
      </div>
      ${entries}
    </div>
  `;
}

function renderGallery() {
  const items = GALLERY.map(g => `
    <div class="gallery-item fade-in">
      <div class="gallery-img-wrap">
        <img src="${g.image}" alt="${g.caption}" class="gallery-img">
      </div>
      <div class="gallery-caption">
        <p>${g.caption}</p>
        ${g.date ? `<span class="gallery-date">${g.date}</span>` : ''}
      </div>
    </div>
  `).join('');

  return `
    <div class="subpage">
      <div class="subpage-header">
        <h2>Gallery</h2>
      </div>
      <div class="gallery-grid">
        ${items}
      </div>
      <div style="display:flex; flex-direction:column; align-items:center; padding:3rem 0 2rem;">
        <img src="images/updating.svg" alt="Updating" style="width:60px; height:60px; margin-bottom:1rem;">
        <p style="color:var(--text-light); font-style:italic; text-align:center; font-size:0.9rem;">${L('More photos coming soon.', '더 많은 사진이 곧 공개됩니다.')}</p>
      </div>
    </div>
  `;
}

function professorProfileHTML() {
  const p = PROFESSOR;
  const pi = SITE.pi;

  const bioHTML = p.bio.map(para => `<p class="prof-bio-para">${para}</p>`).join('');

  const eduHTML = p.education.length
    ? `<div class="prof-section fade-in">
        <h3>Education</h3>
        ${p.education.map(e => `
          <div class="prof-entry">
            <div class="prof-entry-main">${e.degree}</div>
            <div class="prof-entry-sub">${e.institution}${e.year ? ' &middot; ' + e.year : ''}</div>
          </div>
        `).join('')}
      </div>`
    : '';

  const expHTML = p.experience.length
    ? `<div class="prof-section fade-in">
        <h3>Experience</h3>
        ${p.experience.map(e => `
          <div class="prof-entry">
            <div class="prof-entry-main">${e.role}</div>
            <div class="prof-entry-sub">${e.organization}${e.period ? ' &middot; ' + e.period : ''}</div>
          </div>
        `).join('')}
      </div>`
    : '';

  const awardsHTML = p.awards && p.awards.length
    ? `<div class="prof-section fade-in">
        <h3>Honors &amp; Awards</h3>
        ${p.awards.map(a => `
          <div class="prof-entry">
            <div class="prof-entry-main">${a.title}</div>
            <div class="prof-entry-sub">${a.organization}${a.year ? ' &middot; ' + a.year : ''}</div>
          </div>
        `).join('')}
      </div>`
    : '';

  // Build contact links
  const links = [];
  if (pi.email) links.push(`<a href="mailto:${pi.email}">Email</a>`);
  if (pi.scholar) links.push(`<a href="${pi.scholar}" target="_blank">Google Scholar</a>`);
  if (pi.aclAnthology) links.push(`<a href="${pi.aclAnthology}" target="_blank">ACL Anthology</a>`);
  if (pi.github) links.push(`<a href="${pi.github}" target="_blank">GitHub</a>`);
  if (pi.homepage) links.push(`<a href="${pi.homepage}" target="_blank">Homepage</a>`);

  return `
      <div class="prof-profile fade-in" style="border-bottom:none; padding-bottom:0;">
        <div class="prof-photo-wrap">
          <img src="${p.photo}" alt="${pi.name}" class="prof-photo"
               onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\\'prof-photo-placeholder\\'>${pi.name.split(' ').map(n=>n[0]).join('')}</div>';">
        </div>
        <div class="prof-info">
          <h2 class="prof-name">${pi.name}</h2>
          <div class="prof-title">${pi.title}</div>
          <div class="prof-affiliation">${SITE.department}<br>${SITE.university}</div>
          <div class="prof-office">Office: Faculty Building (교수회관) 520</div>
          <div class="prof-links">${links.join('')}</div>
        </div>
      </div>
  `;
}

function renderMembers() {
  const initials = (name) =>
    name.trim().split(/\s+/).map(n => n[0]).join('').substring(0, 2).toUpperCase();

  function card(m) {
    const photoHTML = m.photo
      ? `<img src="${m.photo}" alt="${m.name}" class="member-photo"
            onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\\'member-photo-placeholder\\'>${initials(m.name)}</div>';">`
      : `<div class="member-photo-placeholder">${initials(m.name)}</div>`;

    const emailHTML = m.email
      ? `<div class="member-email"><a href="mailto:${m.email}">${m.email}</a></div>`
      : '';

    const links = [];
    if (m.scholar)  links.push(`<a href="${m.scholar}" target="_blank" title="Google Scholar">Scholar</a>`);
    if (m.github)   links.push(`<a href="${m.github}" target="_blank" title="GitHub">GitHub</a>`);
    if (m.homepage) links.push(`<a href="${m.homepage}" target="_blank" title="Homepage">Homepage</a>`);
    const linksHTML = links.length ? `<div class="member-links">${links.join('')}</div>` : '';

    const interestsHTML = (m.interests && m.interests.length)
      ? `<div class="member-interests">${m.interests.map(i => `<span class="member-interest">${i}</span>`).join('')}</div>`
      : '';

    return `
      <div class="member-card fade-in">
        <div class="member-photo-wrap">${photoHTML}</div>
        <div class="member-name">${m.name}</div>
        <div class="member-role">${m.role}</div>
        ${interestsHTML}
        ${emailHTML}
        ${linksHTML}
      </div>
    `;
  }

  const sectionsHTML = MEMBER_GROUPS.map(g => {
    const people = MEMBERS.filter(m => m.group === g.id);
    if (!people.length && !g.showWhenEmpty) return '';
    const body = people.length
      ? `<div class="member-grid">${people.map(card).join('')}</div>`
      : (g.emptyText ? `<p class="member-empty">${g.emptyText}</p>` : '');
    return `
      <div class="member-section fade-in">
        <div class="member-group-title">${g.label}</div>
        ${body}
      </div>
    `;
  }).join('');

  const facultyHTML = `
    <div class="member-section">
      <div class="member-group-title">Faculty</div>
      ${professorProfileHTML()}
    </div>
  `;

  return `
    <div class="subpage">
      <div class="subpage-header">
        <h2>Members</h2>
        <p>Meet the people who make up the LAI Lab.</p>
      </div>
      ${facultyHTML}
      ${sectionsHTML}
    </div>
  `;
}

// ═══════════════════════════════════════════════════
//  ROUTER
// ═══════════════════════════════════════════════════

function renderJoinUs() {
  const positions = [
    {
      title: 'M.S. / Ph.D. Students',
      description: 'We are looking for motivated graduate students interested in NLP, large language models, and efficient AI. Students will have the opportunity to work on cutting-edge research and publish at top-tier venues.',
      description_ko: 'NLP, 대규모 언어 모델, 효율적 AI에 관심 있는 열정적인 대학원생을 모집합니다. 최신 연구에 참여하고 최고 수준의 학회·저널에 논문을 게재할 기회를 갖게 됩니다.',
      qualifications: [
        'Strong interest in NLP or machine learning',
        'Self-motivated with good communication skills',
      ],
      qualifications_ko: [
        'NLP 또는 기계학습에 대한 깊은 관심',
        '자기주도적이며 원활한 의사소통 능력',
      ],
    },
    {
      title: 'Research Interns',
      description: 'We welcome undergraduate students who want to gain hands-on research experience and prepare for graduate studies (M.S./Ph.D.).',
      description_ko: '실전 연구 경험을 쌓고 대학원(석·박사) 진학을 준비하고자 하는 학부생을 환영합니다.',
      qualifications: [
        'Currently enrolled in a relevant undergraduate or graduate program',
        'Basic knowledge of machine learning and NLP',
      ],
      qualifications_ko: [
        '관련 학부 또는 대학원 과정에 재학 중',
        '기계학습과 NLP에 대한 기초 지식',
      ],
    },
  ];

  const positionsHTML = positions.map(pos => {
    const quals = (LANG === 'ko' && pos.qualifications_ko) ? pos.qualifications_ko : pos.qualifications;
    return `
    <div class="joinus-position fade-in">
      <h3>${pos.title}</h3>
      <p>${L(pos.description, pos.description_ko)}</p>
      <div class="joinus-quals">
        <span class="joinus-quals-label">${L('Preferred Qualifications', '우대 사항')}</span>
        ${quals.map(q => `<div class="joinus-qual-item">${q}</div>`).join('')}
      </div>
    </div>
  `;
  }).join('');

  return `
    <div class="subpage">
      <div class="subpage-header">
        <h2>Join Us</h2>
        <p>${L('We are always looking for talented and passionate individuals to join our lab.', '저희 연구실은 재능 있고 열정적인 분들을 언제나 환영합니다.')}</p>
      </div>

      <div class="joinus-banner fade-in">
        <p>${L('If you are interested in joining LAI Lab, please apply through the form below or contact us via email.', 'LAI Lab 합류에 관심이 있으시다면 아래 양식을 통해 지원하거나 이메일로 문의해 주세요.')}</p>
        <div class="joinus-actions">
          <a href="https://forms.gle/pAHdt5M8bjy6vpvK9" target="_blank" class="joinus-btn">${L('Apply Here', '지원하기')}</a>
          <a href="mailto:${SITE.pi.email}" class="joinus-btn joinus-btn-outline">${L('Email Us', '이메일 문의')}</a>
        </div>
      </div>

      <div class="joinus-section-title">Open Positions</div>
      ${positionsHTML}
    </div>
  `;
}

const PAGE_RENDERERS = {
  home: renderHome,
  members: renderMembers,
  research: renderResearch,
  publications: renderPublications,
  projects: renderProjects,
  gallery: renderGallery,
  joinus: renderJoinUs,
  applications: renderApplications,
};

function showPage(pageName) {
  const renderer = PAGE_RENDERERS[pageName];
  if (!renderer) return;

  currentPage = pageName;

  // Render content
  const container = document.getElementById('page-container');
  container.innerHTML = renderer();

  // Update nav
  document.querySelectorAll('.main-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageName);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Trigger animations
  setTimeout(() => {
    container.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  }, 100);

  // Init slider if on home page
  if (pageName === 'home') {
    setTimeout(initSlider, 150);
  }
}

// ═══════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Reflect stored language on the root element
  document.documentElement.lang = (LANG === 'ko') ? 'ko' : 'en';

  // Build nav from SITE config (menu labels stay in English)
  const nav = document.getElementById('mainNav');
  nav.innerHTML = SITE.nav.map(item =>
    `<a href="#${item.id}" data-page="${item.id}">${item.label}</a>`
  ).join('');

  // Language toggle (EN / 한글) — pushed to the right of the nav
  const langToggle = document.createElement('div');
  langToggle.className = 'lang-toggle';
  langToggle.innerHTML = `
    <button type="button" data-lang="en">EN</button>
    <button type="button" data-lang="ko">KOR</button>
  `;
  nav.appendChild(langToggle);
  langToggle.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-lang]');
    if (btn) setLang(btn.dataset.lang);
  });
  updateLangToggle();

  // Build header with logo
  const headerTop = document.querySelector('.header-top');
  headerTop.innerHTML = `
    <a href="#home" class="header-logo-link" onclick="showPage('home');return false;">
      <img src="images/lai_logo.png" alt="${SITE.labName}" class="header-logo">
      <span class="header-logo-title">${SITE.labShort}</span>
      <span class="header-logo-divider"></span>
      <div class="header-logo-text">
        <span class="header-logo-subtitle">${SITE.labName}</span>
        <span class="header-logo-univ">${SITE.university}</span>
      </div>
    </a>
  `;

  // Build footer
  document.getElementById('footerInfo').innerHTML = `
    <strong>${SITE.labName}</strong><br>
    ${SITE.department}, ${SITE.university}<br>
    ${SITE.address}
  `;
  document.getElementById('footerLinks').innerHTML = `
    &copy; ${new Date().getFullYear()} ${SITE.labShort}, HUFS
  `;

  // Nav click handlers
  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-page]');
    if (!a) return;
    e.preventDefault();
    showPage(a.dataset.page);
    history.pushState(null, '', '#' + a.dataset.page);
  });

  // Browser back/forward
  window.addEventListener('popstate', () => {
    showPage(location.hash.replace('#', '') || 'home');
  });

  // Initial page
  showPage(location.hash.replace('#', '') || 'home');

  // Intersection observer for fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });

  // Observe dynamically with MutationObserver
  new MutationObserver(() => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
  }).observe(document.getElementById('page-container'), { childList: true, subtree: true });
});
