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

  // filtro + "Ver mais"
  const LIMIT = 8;                       // quantos vídeos aparecem antes do "Ver mais"
  const moreWrap = document.getElementById('portfolioMoreWrap');
  const moreBtn = document.getElementById('portfolioMore');
  const countEl = document.getElementById('portfolioCount');
  let filter = 'all';
  let expanded = false;

  const render = (animateNew = false) => {
    const matches = cards.filter(c => filter === 'all' || c.dataset.cat === filter);
    const shown = expanded ? matches : matches.slice(0, LIMIT);
    let delay = 0;

    cards.forEach(c => {
      const show = shown.includes(c);
      const wasHidden = c.classList.contains('is-hidden');
      c.classList.toggle('is-hidden', !show);
      // entrada em sequência para os cards que acabaram de aparecer
      if (show && wasHidden && animateNew) {
        c.style.transitionDelay = `${delay * 70}ms`;
        delay++;
        setTimeout(() => { c.style.transitionDelay = ''; }, 1400);
      }
    });

    const hasMore = matches.length > LIMIT;
    moreWrap.hidden = !hasMore;
    if (hasMore) {
      countEl.textContent = `Mostrando ${shown.length} de ${matches.length} projetos`;
      moreBtn.querySelector('.label').textContent =
        expanded ? 'Ver menos' : `Ver mais ${matches.length - LIMIT} projetos`;
      moreBtn.setAttribute('aria-expanded', expanded);
    }
  };

  buttons.forEach(b => b.addEventListener('click', () => {
    filter = b.dataset.filter;
    expanded = false;
    restore();
    buttons.forEach(x => {
      const on = x === b;
      x.classList.toggle('is-active', on);
      x.setAttribute('aria-pressed', on);
    });
    render(true);
  }));

  moreBtn.addEventListener('click', () => {
    expanded = !expanded;
    restore();
    render(true);
    if (!expanded) document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
  });

  render();
})();

/* ---------- CONTATO: envio pelo WhatsApp ou e-mail, com validação ---------- */
(() => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const WHATS = '5531983342557';
  const MAIL  = 'vseixasalves@gmail.com';
  const nameEl = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const msgEl = document.getElementById('message');
  const status = document.getElementById('formStatus');

  const setStatus = (text, kind) => {
    status.textContent = text;
    status.className = 'form-status' + (kind ? ' is-' + kind : '');
  };

  [nameEl, emailEl, msgEl].forEach(el => el.addEventListener('input', () => {
    el.classList.remove('is-invalid');
    setStatus('');
  }));

  // devolve os dados se estiver tudo certo; senão marca os campos e devolve null
  const read = () => {
    const data = {
      name: nameEl.value.trim(),
      email: emailEl.value.trim(),
      message: msgEl.value.trim(),
      type: (form.querySelector('input[name="type"]:checked') || {}).value || 'Outro'
    };
    const bad = [];
    if (!data.name) bad.push(nameEl);
    if (data.email && !emailEl.validity.valid) bad.push(emailEl);
    if (!data.message) bad.push(msgEl);

    [nameEl, emailEl, msgEl].forEach(el => el.classList.toggle('is-invalid', bad.includes(el)));
    if (bad.length) {
      const emailOnly = bad.length === 1 && bad[0] === emailEl;
      setStatus(emailOnly ? 'Esse e-mail parece incompleto. Confira ou deixe em branco.' : 'Preencha seu nome e a mensagem para continuar.', 'error');
      bad[0].focus();
      return null;
    }
    return data;
  };

  document.getElementById('sendWhats').addEventListener('click', () => {
    const d = read();
    if (!d) return;
    const text =
      `Olá, Victor! Me chamo ${d.name}.\n` +
      `Preciso de: ${d.type}\n\n${d.message}` +
      (d.email ? `\n\nMeu e-mail: ${d.email}` : '');
    const url = `https://wa.me/${WHATS}?text=${encodeURIComponent(text)}`;
    const w = window.open(url, '_blank');
    if (w) w.opener = null; else window.location.href = url;
    setStatus('Abri o WhatsApp com a mensagem pronta. É só enviar por lá.', 'ok');
  });

  document.getElementById('sendMail').addEventListener('click', () => {
    const d = read();
    if (!d) return;
    const subject = encodeURIComponent(`Contato via portfólio — ${d.name}`);
    const body = encodeURIComponent(
      `Nome: ${d.name}\nE-mail: ${d.email || '(não informado)'}\nTipo de vídeo: ${d.type}\n\nMensagem:\n${d.message}`
    );
    window.location.href = `mailto:${MAIL}?subject=${subject}&body=${body}`;
    setStatus('Abri seu app de e-mail com a mensagem pronta. É só enviar por lá.', 'ok');
  });
})();

/* ---------- BRILHO DE ESPELHO: cada card em um ponto diferente do ciclo ---------- */
document.querySelectorAll('.glass-inner').forEach((el, i) => {
  el.style.setProperty('--shine-delay', `-${((i * 1.9) % 7).toFixed(1)}s`);
});

/* ---------- INCLINAÇÃO NATURAL (celular): cada card balança no seu próprio ritmo ---------- */
document.querySelectorAll('.glass-border:not(.contact-form), .proj-card').forEach((el, i) => {
  el.style.setProperty('--tilt-dur', `${(8 + (i * 1.3) % 4).toFixed(1)}s`);
  el.style.setProperty('--tilt-offset', `${((i * 0.7) % 2.5).toFixed(1)}s`);
  el.style.setProperty('--tilt-dir', i % 2 ? 'reverse' : 'normal');
});

/* ---------- BOTÃO FLUTUANTE DO WHATSAPP: aparece depois do topo, some na seção de contato ---------- */
(() => {
  const fab = document.getElementById('whatsFab');
  if (!fab) return;
  let past = false, atContact = false;
  const update = () => fab.classList.toggle('is-visible', past && !atContact);

  addEventListener('scroll', () => {
    const p = window.scrollY > 500;
    if (p !== past) { past = p; update(); }
  }, { passive: true });

  const contact = document.getElementById('contato');
  if (contact) {
    new IntersectionObserver(([e]) => { atContact = e.isIntersecting; update(); },
      { threshold: 0.2 }).observe(contact);
  }
  update();
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

  /* 4. Inclinação 3D em todos os cards (cards de vidro + vídeos do portfólio) */
  document.querySelectorAll('.glass-border:not(.contact-form), .proj-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      if (card.querySelector('iframe')) return;            // vídeo tocando: não mexe
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      const max = Math.max(2, Math.min(6, 1800 / r.width)); // cards largos inclinam menos
      card.style.transition =
        'transform 0.15s ease-out, box-shadow 0.35s ease, background-position 0.6s ease';
      card.style.transform =
        `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = '';
      card.style.transform = '';
    });
    // ao dar play num vídeo, o card volta ao normal
    card.addEventListener('click', () => setTimeout(() => {
      if (card.querySelector('iframe')) card.style.transform = '';
    }, 0));
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