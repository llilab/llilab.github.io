/* ═══════════════════════════════════════════════════
 *  시안 B 레이어
 *
 *  js/app.js 를 엔진으로 그대로 쓴다 — 라우팅, 언어 전환, Research /
 *  Members / Publications / Gallery / Join Us 렌더러가 전부 거기 있다.
 *  이 파일은 두 가지만 바꾼다:
 *    1) 헤더를 캠퍼스 사진 마스트헤드로 다시 짠다
 *    2) Home 을 News 중심 + Recent publications 로 바꾼다
 *  app.js 다음에 로드되므로 DOMContentLoaded 처리기도 뒤에 실행된다.
 * ═══════════════════════════════════════════════════ */

// ─── Home: News 가 본문이 된다 ───
function renderHomeB() {
  const newsYear = n => parseInt(String(n.date).slice(-4), 10);
  const latestYear = Math.max(...NEWS.map(newsYear));

  const mark = n => n.image
    ? `<img src="${n.image}" alt="${n.imageAlt || ''}" loading="lazy" onerror="this.remove();">`
    : (n.badge ? `<span class="news-badge">${n.badge}</span>` : '');
  const papers = n => (n.papers && n.papers.length)
    ? `<ul class="news-papers">${n.papers.map(t => `<li>${t}</li>`).join('')}</ul>`
    : '';
  const item = n => `<div class="news-item${n.highlight ? ' is-highlight' : ''}">
        <div class="news-logo">${mark(n)}</div>
        <div class="news-body"><div class="news-date">${n.date}</div>
          <p>${L(n.content, n.content_ko)}</p>${papers(n)}</div>
      </div>`;

  const recent = NEWS.filter(n => newsYear(n) >= latestYear);
  const older  = NEWS.filter(n => newsYear(n) <  latestYear);
  const newsHTML = recent.map(item).join('') + (older.length ? `
      <div class="news-older" id="newsOlder" hidden>${older.map(item).join('')}</div>
      <button type="button" class="news-more" aria-expanded="false" aria-controls="newsOlder"
              onclick="toggleOlderNews(this)"
              data-more="${L('More', '더보기')} (${older.length})"
              data-less="${L('Less', '접기')}">${L('More', '더보기')} (${older.length})</button>` : '');

  // 최신 논문 4편 — 대표 그림 / 제목 / 학회·연도.
  // 그림은 Publications 페이지의 .pub-figure 와 같은 150x94 로 잘라 쓴다.
  // 원본이 1600x550 짜리 가로로 긴 구조도라 읽히지는 않는다 — 시각적 앵커다.
  const pubFig = p => p.image
    ? `<img src="${p.image}" alt="" loading="lazy"
           onerror="this.closest('.pub-fig').classList.add('is-empty');this.remove();">`
    : '';
  const pubs = PUBLICATIONS.slice(0, 4).map(p => `
      <div class="pub-row">
        <div class="pub-fig${p.image ? '' : ' is-empty'}">${pubFig(p)}</div>
        <span class="pub-row-t">${p.title}
          <span class="pub-row-au">${highlightPI(p.authors)}</span></span>
        <span class="pub-row-v">${shortVenue(p.venue, p.year, p.type)}</span>
      </div>`).join('');

  return `
    <section class="home-news fade-in">
      <div class="b-head"><div class="home-section-title">News</div></div>
      <div class="news-list">${newsHTML}</div>
    </section>

    <section class="home-pubs fade-in">
      <div class="b-head">
        <div class="home-section-title">${L('Recent publications', '최근 논문')}</div>
        <a href="#publications" class="view-all"
           onclick="showPage('publications');return false;">${L('All papers', '전체 논문')}</a>
      </div>
      <div class="pub-rows">${pubs}</div>
    </section>
  `;
}

// app.js 의 PAGE_RENDERERS 는 const 객체지만 속성은 바꿀 수 있다.
// DOMContentLoaded 보다 먼저 갈아끼워야 최초 렌더부터 B 가 나온다
PAGE_RENDERERS.home = renderHomeB;

// ─── 마스트헤드 ───

// 연구실 약칭(LAI)을 표제 안에서 드러낸다 — 머리글자 세 개에만 색이 들어간다
function mastTitleHTML() {
  return SITE.labName
    .replace(/\bLanguage\b/,     '<em>L</em>anguage')
    .replace(/\bAdaptive\b/,     '<em>A</em>daptive')
    .replace(/\bIntelligence\b/, '<em>I</em>ntelligence')
    // 끝의 Lab / Laboratory 는 머리글자가 아니라 단어 전체에 색을 준다
    .replace(/\bLab(oratory)?\b/, '<em>Lab$1</em>');
}

// ─── 표제 타자 효과 ───
// 글자를 하나씩 찍고, 다 찍으면 커서(|)만 깜빡인다.
// 핵심은 '아래가 밀리지 않는 것' — 완성된 표제를 투명하게 한 벌 깔아
// (.tw-ghost) 칸을 먼저 잡아 두고 그 위에 겹쳐 찍는다. 그래서 글자가
// 늘어나다 두 줄로 접히는 폭에서도 아래 소개 문단이 흔들리지 않는다.
let __twTimer  = null;
let __twPlayed = false;   // 한 번 찍고 나면 페이지를 옮겨도 다시 찍지 않는다

// mastTitleHTML() 의 <em> 을 글자 단위로 풀어 [{ch, em}] 로 만든다.
// em 을 따로 들고 다녀야 L·A·I 의 코럴이 찍히는 도중에도 유지된다.
function twChars() {
  const box = document.createElement('div');
  box.innerHTML = mastTitleHTML();
  const out = [];
  (function walk(node, em) {
    node.childNodes.forEach(n => {
      if (n.nodeType === 3) for (const ch of n.nodeValue) out.push({ ch, em });
      else walk(n, em || n.tagName === 'EM');
    });
  })(box, false);
  return out;
}

const twEsc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

// 같은 색이 이어지는 구간끼리 묶는다 — 글자마다 <em> 을 열고 닫으면
// 자간(letter-spacing)이 어긋나 유령 글자와 폭이 안 맞는다
function twHTML(chars) {
  let html = '', run = '', em = false;
  const flush = () => { if (run) html += em ? `<em>${twEsc(run)}</em>` : twEsc(run); run = ''; };
  chars.forEach(c => { if (c.em !== em) { flush(); em = c.em; } run += c.ch; });
  flush();
  return html;
}

function startTypewriter(root, animate) {
  const live = root.querySelector('.tw-live');
  if (!live) return;
  clearTimeout(__twTimer);                     // 찍는 도중 페이지를 옮기면 멈춘다
  const chars  = twChars();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 서브페이지·재방문·모션 줄임 설정이면 그냥 다 보여 준다
  if (!animate || reduce || __twPlayed) {
    live.innerHTML = twHTML(chars);
    live.classList.add('is-done');
    if (reduce) live.classList.add('no-caret');
    return;
  }

  __twPlayed = true;
  let i = 0;
  (function tick() {
    live.innerHTML = twHTML(chars.slice(0, ++i));
    if (i < chars.length) {
      // 사람 손처럼 들쭉날쭉하게 — 띄어쓰기 뒤에서 한 박자 쉰다.
      // 전체 1초 안쪽: 첫 화면에서 기다린다는 느낌이 들면 안 된다.
      const gap = (chars[i - 1].ch === ' ' ? 38 : 19) + Math.random() * 13;
      __twTimer = setTimeout(tick, gap);
    } else {
      live.classList.add('is-done');           // 여기서부터 커서가 깜빡인다
    }
  })();
}

function mastHeroHTML() {
  return `
    <h1 class="mast-title" aria-label="${twEsc(SITE.labName)}">
      <span class="tw"><span class="tw-ghost" aria-hidden="true">${mastTitleHTML()}</span
        ><span class="tw-live" aria-hidden="true"></span></span>
    </h1>
    <p class="mast-sub">${L(SITE.welcome.lead || SITE.welcome.intro,
                            SITE.welcome.lead_ko || SITE.welcome.intro_ko)}</p>
    <p class="mast-meta">${L(SITE.recruitment.description, SITE.recruitment.description_ko)}</p>`;
}

// 페이지마다 히어로를 다시 그린다 — 언어를 바꾸면 setLang 이 showPage 를
// 부르므로, showPage 를 감싸는 것만으로 헤더 번역까지 따라온다
function paintMasthead(pageName) {
  const hero = document.querySelector('.mast-hero .mast-inner');
  if (hero) {
    hero.innerHTML = mastHeroHTML();
    // Home 일 때만 찍는다 — 서브페이지에서는 히어로가 접혀 있어 보이지 않는다
    startTypewriter(hero, (pageName || 'home') === 'home');
  }
  const header = document.querySelector('header');
  if (header) header.dataset.page = pageName || 'home';
}

// showPage 를 감싸 히어로 다시 그리기와 '지금 어느 페이지인지'를 붙인다.
// 최상위에서 감싸야 setLang() 이 부르는 showPage 까지 지나간다 —
// 그래서 언어를 바꾸면 헤더의 모집 문구도 같이 번역된다.
const __origShowPage = window.showPage;
window.showPage = function (pageName) {
  __origShowPage(pageName);
  paintMasthead(pageName);
};

document.addEventListener('DOMContentLoaded', () => {
  // app.js 가 이미 채워 둔 로고 블록과 내비를 '옮겨' 온다.
  // 새로 만들면 app.js 가 내비에 걸어 둔 클릭 처리기가 사라진다.
  const header = document.querySelector('header');
  const top    = document.querySelector('.header-top');
  const nav    = document.getElementById('mainNav');
  if (!header || !top || !nav) return;

  const mast = document.createElement('div');
  mast.className = 'mast';
  mast.innerHTML = `
    <div class="mast-bg"></div>
    <div class="mast-scrim-top"></div>
    <div class="mast-scrim-left"></div>
    <div class="mast-bar"><div class="mast-inner"></div></div>
    <div class="mast-hero"><div class="mast-inner"></div></div>`;

  const bar = mast.querySelector('.mast-bar .mast-inner');
  bar.appendChild(top);   // appendChild 는 노드를 옮긴다 (복사가 아니다)
  bar.appendChild(nav);   // 내비는 처리기를 달고 그대로 따라온다

  header.innerHTML = '';
  header.appendChild(mast);

  paintMasthead(location.hash.replace('#', '') || 'home');
});
