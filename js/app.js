/**
 * ═══════════════════════════════════════════════════
 *  LLI Lab Website — SPA Router & Page Renderers
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

// ─── Utility: render links array ───
function renderLinks(links, cssClass) {
  return links.map(l => `<a href="${l.url}">${l.label}</a>`).join('');
}

// ═══════════════════════════════════════════════════
//  PAGE RENDERERS
// ═══════════════════════════════════════════════════

function renderHome() {
  const featured = PUBLICATIONS.filter(p => p.featured);

  const recentHTML = featured.map(p => `
    <div class="recent-item">
      <span class="recent-tag ${tagClass(p.type)}">${p.venue.split(',')[0].replace(/Proceedings of the /, '').substring(0, 30)}</span>
      <h3><a href="${p.links[0]?.url || '#'}">${p.title}</a></h3>
      <div class="recent-authors">${highlightPI(p.authors)}</div>
      <div class="recent-venue">${p.venue.split(',').slice(0, 2).join(',')}</div>
      <div class="recent-links">${renderLinks(p.links)}</div>
    </div>
  `).join('');

  const newsHTML = NEWS.map(n => {
    if (n.highlight) {
      return `<div class="news-highlight"><div class="news-date">${n.date}</div><p>${n.content}</p></div>`;
    }
    return `<div class="news-item"><div class="news-date">${n.date}</div><p>${n.content}</p></div>`;
  }).join('');

  const positionsHTML = SITE.recruitment.positions.map(p => `
    <div class="join-pos">
      <div class="join-pos-title">${p.title}</div>
      <div class="join-pos-detail">${p.detail}</div>
    </div>
  `).join('');

  return `
    <div class="welcome fade-in">
      <p class="welcome-intro">${SITE.welcome.intro}</p>
      <p class="welcome-detail">${SITE.welcome.detail}</p>
      <div class="welcome-links">
        <a href="#research" onclick="showPage('research');return false;">Research areas</a>
        <a href="#publications" onclick="showPage('publications');return false;">Publications</a>
        <a href="${SITE.pi.scholar}" target="_blank">Google Scholar</a>
        <a href="mailto:${SITE.pi.email}">Contact</a>
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

    <div class="join-banner fade-in">
      <h3>${SITE.recruitment.title}</h3>
      <p class="join-banner-desc">${SITE.recruitment.description}</p>
      <div class="join-positions">${positionsHTML}</div>
      <a href="mailto:${SITE.pi.email}" class="join-cta">Contact us</a>
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
        <p>Our research focuses on building efficient, robust, and practical NLP systems.</p>
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
    const entries = byYear[year].map(p => `
      <div class="pub-entry">
        <h4>${p.title}</h4>
        <div class="pub-authors">${highlightPI(p.authors)}</div>
        <div class="pub-venue-line"><em>${p.venue}</em></div>
        <div class="pub-entry-links">${renderLinks(p.links)}</div>
      </div>
    `).join('');

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
  const entries = PROJECTS.map(p => {
    const statusClass = p.status === 'active' ? 'st-active' : 'st-done';
    const statusLabel = p.status === 'active' ? 'Active' : 'Completed';
    return `
      <div class="project-entry fade-in">
        <span class="project-entry-status ${statusClass}">${statusLabel}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-meta">${p.period}</div>
      </div>
    `;
  }).join('');

  return `
    <div class="subpage">
      <div class="subpage-header">
        <h2>Projects</h2>
        <p>Ongoing and completed research projects.</p>
      </div>
      ${entries}
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

// ═══════════════════════════════════════════════════
//  ROUTER
// ═══════════════════════════════════════════════════

const PAGE_RENDERERS = {
  home: renderHome,
  research: renderResearch,
  publications: renderPublications,
  projects: renderProjects,
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

  // Build header
  document.getElementById('labTitle').innerHTML =
    SITE.labName.replace('Intelligence Lab', '<span>Intelligence Lab</span>');
  document.getElementById('labSub').textContent = SITE.university;

  // Build footer
  document.getElementById('footerInfo').innerHTML = `
    <strong>${SITE.labName}</strong><br>
    ${SITE.department}, ${SITE.university}<br>
    ${SITE.address}<br>
    PI: ${SITE.pi.name} · <a href="mailto:${SITE.pi.email}">${SITE.pi.email}</a>
  `;
  document.getElementById('footerLinks').innerHTML = `
    &copy; ${new Date().getFullYear()} ${SITE.labShort}, HUFS<br>
    <a href="${SITE.pi.scholar}" target="_blank">Google Scholar</a>
    <a href="${SITE.pi.aclAnthology}" target="_blank">ACL Anthology</a>
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
