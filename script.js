/* ============================================================
   Wedding Invitation — Lavanya ♥ Prasanna Kumar
   ▼▼▼ EDIT EVERYTHING IN `CONFIG` BELOW ▼▼▼
   ============================================================ */

const CONFIG = {
  // Drop your looping track next to index.html with this name.
  music: 'music.mp3',

  // Countdown target = muhurtham date & time (IST).
  // ⚠ Time is a placeholder (10:00 AM) — update when the lagnam is fixed.
  muhurthamISO: '2026-08-30T10:00:00+05:30',

  bride: {
    name: 'Lavanya',
    full: 'Chi.La.Sow. Kota Lavanya',
    parent: 'D/o Smt. Kota Durga Bhavani',
  },

  groom: {
    name: 'Prasanna Kumar',
    full: 'Chi. Prasanna Kumar',
    parent: 'S/o Sri ......................', // ⚠ placeholder — fill in groom's parents
  },

  weddingDate: 'Sunday, 30 August 2026',
  // ⚠ placeholder until the exact lagnam time is fixed
  muhurthamLine: 'Muhurtham time: to be announced',

  venue: {
    name: 'Sri Kalyana Mandapam',          // ⚠ placeholder
    address: 'Address to be announced',    // ⚠ placeholder
    // Put the real venue name/address here — used for the map + directions button.
    mapQuery: 'Hyderabad, Telangana',      // ⚠ placeholder
  },

  // Events shown on the timeline, in order.
  // icon: 'haldi' | 'mehendi' | 'wedding' | 'reception'
  // Dates/times/venues are placeholders ("to follow") until you fill them.
  events: [
    {
      icon: 'haldi',
      name: 'Haldi',
      date: 'Date to follow',
      time: 'Time to follow',
      venue: 'Venue to follow',
    },
    {
      icon: 'mehendi',
      name: 'Mehendi & Sangeet',
      date: 'Date to follow',
      time: 'Time to follow',
      venue: 'Venue to follow',
    },
    {
      icon: 'wedding',
      name: 'Wedding Ceremony',
      date: 'Sunday, 30 August 2026',
      time: 'Lagnam time: to follow',
      venue: 'Venue to follow',
      lagnam: true, // highlights the time line in green
    },
    {
      icon: 'reception',
      name: 'Reception',
      date: 'Date to follow',
      time: 'Time to follow',
      venue: 'Venue to follow',
    },
  ],

  // "With the blessings of" — grandparents / elders. ⚠ placeholders
  blessings: [
    'Smt. & Sri ......................',
    'Smt. & Sri ......................',
  ],

  // Gallery: photos load from assets/photos/1.jpg … 8.jpg.
  // Missing files show an elegant placeholder automatically.
  galleryCount: 8,
};

/* ============================================================
   No editing needed below this line
   ============================================================ */

const $ = (id) => document.getElementById(id);

/* always start at the sealed cover, even after a refresh mid-page */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

/* ---------- traditional line-art icons for the timeline ---------- */
const ICONS = {
  haldi: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M9 22h30c-1 10-8 15-15 15S10 32 9 22z"/><path d="M14 22c3-3 17-3 20 0"/><path d="M24 15c0-4 3-5 3-8 3 3 4 6-3 8z"/></svg>',
  mehendi: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M26 8c9 4 12 14 8 22-3 7-13 9-17 3-3-5 0-11 6-11 5 0 7 4 5 7"/><circle cx="24" cy="26" r="1.4" fill="currentColor"/><circle cx="31" cy="15" r="1.4" fill="currentColor"/><circle cx="15" cy="34" r="1.4" fill="currentColor"/></svg>',
  wedding: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M15 20h18M17 20c-2 11 2 18 7 18s9-7 7-18"/><circle cx="24" cy="13" r="4.2"/><path d="M16 17c2-4 4-5 8-6M32 17c-2-4-4-5-8-6"/></svg>',
  reception: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M10 30h28c-2 8-11 10-14 10s-12-2-14-10z"/><path d="M24 26c4-4 0-8 0-11-5 4-6 8 0 11z"/><path d="M17 30c0-2 3-4 7-4s7 2 7 4"/></svg>',
};

/* ---------- render everything that comes from CONFIG ---------- */
function render() {
  // hero
  $('brideName').textContent = CONFIG.bride.name;
  $('groomName').textContent = CONFIG.groom.name;
  $('dateMain').textContent = CONFIG.weddingDate;
  $('dateSub').textContent = CONFIG.muhurthamLine;

  // couple
  $('brideFull').textContent = CONFIG.bride.full;
  $('brideParent').textContent = CONFIG.bride.parent;
  $('groomFull').textContent = CONFIG.groom.full;
  $('groomParent').textContent = CONFIG.groom.parent;

  // events timeline
  $('timeline').innerHTML = CONFIG.events.map((ev) => `
    <div class="tl-item">
      <div class="tl-icon">${ICONS[ev.icon] || ICONS.wedding}</div>
      <div class="tl-body">
        <div class="tl-name">${ev.name}</div>
        <div class="tl-meta">
          ${ev.date}<br>
          <span class="${ev.lagnam ? 'tl-lagnam' : ''}">${ev.time}</span><br>
          ${ev.venue}
        </div>
      </div>
    </div>`).join('');

  // venue
  $('venueName').textContent = CONFIG.venue.name;
  $('venueAddress').textContent = CONFIG.venue.address;
  const q = encodeURIComponent(CONFIG.venue.mapQuery);
  $('mapFrame').src = `https://www.google.com/maps?q=${q}&output=embed`;
  $('directionsBtn').href = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

  // gallery
  $('galleryTrack').innerHTML = Array.from({ length: CONFIG.galleryCount }, (_, i) => `
    <figure class="g-item">
      <span class="g-ph">Photo ${i + 1}<br><small>assets/photos/${i + 1}.jpg</small></span>
      <img src="assets/photos/${i + 1}.jpg" alt="" loading="lazy"
           onerror="this.classList.add('missing')">
    </figure>`).join('');

  // blessings
  $('blessingsList').innerHTML = CONFIG.blessings.map((n) => `<li>${n}</li>`).join('');

  // footer
  $('footerNames').textContent = `${CONFIG.bride.name} ♥ ${CONFIG.groom.name}`;
}

/* ---------- countdown ---------- */
const target = new Date(CONFIG.muhurthamISO).getTime();
const pad = (n) => String(n).padStart(2, '0');
function tick() {
  const diff = target - Date.now();
  if (diff <= 0) {
    $('countdown').hidden = true;
    $('cdDone').hidden = false;
    clearInterval(timerId);
    return;
  }
  $('cdDays').textContent = pad(Math.floor(diff / 864e5));
  $('cdHours').textContent = pad(Math.floor(diff / 36e5) % 24);
  $('cdMins').textContent = pad(Math.floor(diff / 6e4) % 60);
  $('cdSecs').textContent = pad(Math.floor(diff / 1e3) % 60);
}
const timerId = setInterval(tick, 1000);
tick();

/* ---------- music ---------- */
const audio = $('weddingMusic');
const musicBtn = $('musicBtn');
audio.src = CONFIG.music;

let fadeTimer = null;
function fadeVolumeTo(targetVol, ms) {
  clearInterval(fadeTimer);
  const step = 60;
  const start = audio.volume;
  const delta = targetVol - start;
  if (!delta) return;
  let elapsed = 0;
  fadeTimer = setInterval(() => {
    elapsed += step;
    const t = Math.min(1, elapsed / ms);
    audio.volume = start + delta * (t * (2 - t)); // ease-out
    if (t >= 1) clearInterval(fadeTimer);
  }, step);
}

musicBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.volume = 0;
    audio.play().catch(() => {});
    fadeVolumeTo(0.8, 900);
    musicBtn.classList.remove('muted');
  } else {
    audio.pause();
    musicBtn.classList.add('muted');
  }
});

/* ---------- marigold petals ---------- */
function spawnPetals(container, count, once = false) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.style.left = Math.random() * 100 + '%';
    p.style.setProperty('--drift', (Math.random() * 90 - 45).toFixed(0) + 'px');
    p.style.setProperty('--spin', (Math.random() * 540 + 180).toFixed(0) + 'deg');
    const dur = 7 + Math.random() * 7;
    p.style.animationDuration = dur + 's';
    p.style.animationDelay = (once ? Math.random() * 1.2 : Math.random() * dur) + 's';
    if (once) p.style.animationIterationCount = 1;
    const size = 9 + Math.random() * 8;
    p.style.width = p.style.height = size + 'px';
    container.appendChild(p);
  }
}
spawnPetals($('heroPetals'), 14);

/* ---------- opening the invitation ---------- */
const cover = $('cover');
let opened = false;
function openInvitation() {
  if (opened) return;
  opened = true;

  // music must start inside this user gesture (autoplay policy);
  // volume swells in softly with the doors
  audio.volume = 0;
  audio.play().then(() => {
    musicBtn.classList.remove('muted');
    fadeVolumeTo(0.8, 2600);
  }).catch(() => musicBtn.classList.add('muted'));
  musicBtn.hidden = false;

  cover.classList.add('opening');
  document.body.classList.remove('locked');
  document.body.classList.add('opened');

  // celebratory petal burst over the whole screen
  const burst = document.createElement('div');
  burst.className = 'petals burst';
  burst.setAttribute('aria-hidden', 'true');
  document.body.appendChild(burst);
  spawnPetals(burst, 26, true);
  setTimeout(() => burst.remove(), 12000);

  setTimeout(() => cover.classList.add('gone'), 3200);
}
cover.addEventListener('click', openInvitation);
cover.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openInvitation(); }
});

/* ---------- scroll-reveal ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

render();
