/**
 * ═══════════════════════════════════════════════════
 *  LAI Lab Website — SPA Router & Page Renderers
 *
 *  This file reads from the data/* files and renders
 *  each page dynamically. You should NOT need to edit
 *  this file when adding content — edit data/*.js instead.
 * ═══════════════════════════════════════════════════
 */

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
  const featured = PUBLICATIONS.filter(p => p.featured);

  const recentHTML = featured.slice(0, 5).map(p => `
    <div class="recent-item">
      <span class="recent-tag ${venueTagClass(p.venue, p.type)}">${shortVenue(p.venue, p.year, p.type)}</span>
      <h3><a href="${p.links[0]?.url || '#'}">${p.title}</a></h3>
    </div>
  `).join('');

  const newsHTML = NEWS.map(n => {
    return `<div class="news-item"><div class="news-date">${n.date}</div><p>${n.content}</p></div>`;
  }).join('');


  return `
    ${renderHighlightSlider()}

    <div class="welcome fade-in">
      <p class="welcome-intro">${SITE.welcome.intro}</p>
      <div class="join-quote">
        ${SITE.recruitment.description} <a href="https://forms.gle/pAHdt5M8bjy6vpvK9" target="_blank">Apply here</a>
      </div>
    </div>

    <div class="home-grid">
      <div class="fade-in">
        <div class="home-section-title">Recent Research</div>
        ${recentHTML}
        <a href="#publications" class="view-all" onclick="showPage('publications');return false;">View all publications</a>
      </div>
      <div class="fade-in">
        <div class="home-section-title">News</div>
        ${newsHTML}
      </div>
    </div>
  `;
}

function renderResearch() {
  const cards = RESEARCH.map(r => `
    <div class="research-card fade-in">
      <div class="research-card-img ${r.bgClass}">
        ${r.svg || ''}
      </div>
      <div class="research-card-body">
        <h3>${r.title}</h3>
        <p>${r.description}</p>
        <div class="research-keywords">
          ${r.keywords.map(k => `<span class="keyword">${k}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="subpage">
      <div class="subpage-header">
        <h2>Research</h2>
        <p>Our research spans AI for Science, Efficient AI, and Natural Language Processing.</p>
      </div>
      <div class="research-grid-page">${cards}</div>
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
      return `
      <div class="pub-entry">
        <span class="recent-tag ${venueTagClass(p.venue, p.type)}">${shortVenue(p.venue, p.year, p.type)}</span>
        <h4>${p.title}</h4>
        <div class="pub-authors">${highlightPI(p.authors)}</div>
        <div class="pub-venue-line"><em>${p.venue}</em></div>
        ${tagsHTML}
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
        <p>Selected papers. See <a href="${SITE.pi.scholar}" target="_blank">Google Scholar</a> for a complete list.</p>
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
        <p style="color:var(--text-light); font-style:italic; text-align:center; font-size:0.95rem;">This page is currently being updated.<br>Please check back soon.</p>
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
        <p>${a.description}</p>
        <div class="app-entry-links">${renderLinks(a.links)}</div>
      </div>
    </div>
  `).join('');

  return `
    <div class="subpage">
      <div class="subpage-header">
        <h2>Applications</h2>
        <p>Research prototypes and tools developed by our lab.</p>
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
        <p style="color:var(--text-light); font-style:italic; text-align:center; font-size:0.9rem;">More photos coming soon.</p>
      </div>
    </div>
  `;
}

function renderProfessor() {
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
    <div class="subpage">
      <div class="subpage-header">
        <h2>Professor</h2>
      </div>
      <div class="prof-profile fade-in">
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
      <div class="prof-bio fade-in">
        ${bioHTML}
      </div>
      ${expHTML}
      ${eduHTML}
      ${awardsHTML}
    </div>
  `;
}

// ═══════════════════════════════════════════════════
//  ROUTER
// ═══════════════════════════════════════════════════

const PAGE_RENDERERS = {
  home: renderHome,
  professor: renderProfessor,
  research: renderResearch,
  publications: renderPublications,
  projects: renderProjects,
  gallery: renderGallery,
  applications: renderApplications,
};

function showPage(pageName) {
  const renderer = PAGE_RENDERERS[pageName];
  if (!renderer) return;

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
  // Build nav from SITE config
  const nav = document.getElementById('mainNav');
  nav.innerHTML = SITE.nav.map(item =>
    `<a href="#${item.id}" data-page="${item.id}">${item.label}</a>`
  ).join('');

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
