/* ==========================================================
   animations.js — interações extras
   Carregue DEPOIS do script.js.
   ========================================================== */

/* ---------- PORTFÓLIO: filtro por cliente + vídeo só carrega ao clicar ---------- */
(() => {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.proj-card')];
  const buttons = [...document.querySelectorAll('.filter-btn')];
  const originals = new Map();   // guarda o HTML original da "capa" de cada vídeo
  let playing = null;

  // capa em alta resolução, quando existir (senão fica a hqdefault)
  grid.querySelectorAll('.yt-facade img').forEach(img => {
    const id = img.closest('.video-embed').dataset.yt;
    const hi = new Image();
    hi.onload = () => { if (hi.naturalWidth > 200) img.src = hi.src; };
    hi.src = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  });

  // contadores nos botões
  buttons.forEach(b => {
    const f = b.dataset.filter;
    const n = f === 'all' ? cards.length : cards.filter(c => c.dataset.cat === f).length;
    b.querySelector('.count').textContent = n;
  });

  const restore = () => {
    if (!playing) return;
    playing.innerHTML = originals.get(playing);
    playing = null;
  };

  // clique na capa -> troca pelo player do YouTube (com autoplay)
  grid.addEventListener('click', e => {
    const facade = e.target.closest('.yt-facade');
    if (!facade) return;
    const box = facade.closest('.video-embed');
    restore();
    originals.set(box, box.innerHTML);
    const f = document.createElement('iframe');
    f.src = `https://www.youtube.com/embed/${box.dataset.yt}?autoplay=1&rel=0&playsinline=1`;
    f.title = box.dataset.title;
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    f.allowFullscreen = true;
    box.innerHTML = '';
    box.appendChild(f);
    playing = box;
  });

  // filtro
  buttons.forEach(b => b.addEventListener('click', () => {
    const f = b.dataset.filter;
    restore();
    buttons.forEach(x => {
      const on = x === b;
      x.classList.toggle('is-active', on);
      x.setAttribute('aria-pressed', on);
    });
    cards.forEach(c => c.classList.toggle('is-hidden', f !== 'all' && c.dataset.cat !== f));
  }));
})();

/* ---------- ANIMAÇÕES ---------- */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* 1. Menu: destaca o link da seção que está na tela */
  const links = [...document.querySelectorAll('.nav-links a')];
  const byId = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.classList.remove('active'));
      byId.get(e.target.id)?.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  byId.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

  /* 2. Parallax do fundo (mouse) e saída suave do hero */
  const bgOrbs = document.querySelector('.bg-orbs');
  const heroContent = document.querySelector('.hero-content');
  let mx = 0, my = 0, cx = 0, cy = 0, ticking = false;

  const frame = () => {
    cx += (mx - cx) * 0.06;
    cy += (my - cy) * 0.06;
    const sy = window.scrollY;

    // só o contêiner acompanha o mouse; o movimento próprio de cada orb vem do CSS
    if (bgOrbs) bgOrbs.style.translate = `${cx * 40}px ${cy * 40}px`;

    if (heroContent) {
      const p = Math.min(sy / 600, 1);
      heroContent.style.translate = `0 ${sy * 0.18}px`;
      heroContent.style.opacity = 1 - p * 0.9;
    }

    ticking = Math.abs(mx - cx) > 0.001 || Math.abs(my - cy) > 0.001;
    if (ticking) requestAnimationFrame(frame);
  };
  const kick = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };

  addEventListener('scroll', kick, { passive: true });
  if (fine) {
    addEventListener('mousemove', e => {
      mx = e.clientX / innerWidth - 0.5;
      my = e.clientY / innerHeight - 0.5;
      kick();
    }, { passive: true });
  }
  kick();

  if (!fine) return; // o resto só faz sentido com mouse

  /* 3. Brilho que segue o cursor nos cards de vidro */
  document.querySelectorAll('.glass-border').forEach(card => {
    const inner = card.querySelector(':scope > .glass-inner');
    if (!inner) return;
    const spot = document.createElement('span');
    spot.className = 'spot';
    spot.setAttribute('aria-hidden', 'true');
    inner.prepend(spot);
    card.addEventListener('mousemove', e => {
      const r = inner.getBoundingClientRect();
      spot.style.setProperty('--mx', `${e.clientX - r.left}px`);
      spot.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  /* 4. Inclinação 3D sutil nos cards de serviço e depoimento */
  document.querySelectorAll('.service-card, .testimonial-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transition = 'transform 0.15s ease-out';
      card.style.transform =
        `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = '';
      card.style.transform = '';
    });
  });

  /* 5. Botões "magnéticos": seguem o cursor de leve */
  document.querySelectorAll('.btn-primary, .hero-cta .btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
      const y = (e.clientY - (r.top + r.height / 2)) * 0.35;
      btn.style.translate = `${x}px ${y}px`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.translate = ''; });
  });
})();