/* ==========================================================
   i18n.js — troca de idioma do site (Português · Español · English)
   - Carregue ANTES do animations.js.
   - Os textos em português ficam no próprio HTML (bom para busca);
     os de espanhol e inglês estão no dicionário abaixo.
   - Para editar uma tradução, procure a chave (ex.: "hero.sub") e mude o texto.
   - Link direto em outro idioma: ...?lang=en  ou  ...?lang=es
   ========================================================== */
(() => {
  const DICT = {
 "pt": {
  "nav.about": "Sobre",
  "nav.services": "Serviços",
  "nav.portfolio": "Portfólio",
  "nav.tools": "Ferramentas",
  "nav.testimonials": "Depoimentos",
  "nav.contact": "Contato",
  "hero.eyebrow": "Portfólio — Victor Seixas",
  "hero.cta1": "Ver portfólio",
  "hero.cta2": "Falar no WhatsApp",
  "hero.scroll": "role para ver mais",
  "about.h2": "Quem edita",
  "about.p1": "Me chamo Victor Seixas! Estudante de Sistemas de Informação na UNIMONTES e editor de vídeo focado em conteúdo para redes sociais e vídeos institucionais. Uso o CapCut como ferramenta principal, unindo ritmo, cor e storytelling para transformar gravação bruta em vídeo que prende atenção do primeiro frame ao último corte.",
  "about.p2": "Ter uma base em tecnologia e programação me ajuda a pensar cada edição como um processo: estrutura clara, decisões rápidas e entrega consistente.",
  "fact.loc": "Localização",
  "fact.locV": "Montes Claros, MG",
  "fact.edu": "Formação",
  "fact.eduV": "Sistemas de Informação — UNIMONTES (7° período)",
  "fact.tool": "Ferramenta principal",
  "fact.lang": "Idiomas",
  "fact.langV": "Português · Inglês avançado",
  "svc.h2": "O que eu faço",
  "svc.1.t": "Edição para Redes Sociais",
  "svc.1.p": "Reels, TikToks e vídeos verticais com cortes dinâmicos, legendas estilizadas e ritmo pensado pro algoritmo.",
  "svc.2.t": "Vídeos Institucionais",
  "svc.2.p": "Conteúdo corporativo com narrativa clara, identidade visual consistente e acabamento profissional para representar sua marca com credibilidade.",
  "svc.tag.corp": "#Corporativo",
  "svc.tag.train": "#Treinamento",
  "svc.tag.pres": "#Apresentações",
  "svc.tag.events": "#Eventos",
  "pf.h2": "Projetos",
  "client.patricia": "Dra. Patrícia Lopes",
  "tools.h2": "Stack de edição",
  "tools.capcut": "Motion graphics, correção de cor, legendas automáticas e um fluxo rápido de exportação.",
  "tools.ps": "Capas e esboço de ideias",
  "tools.canva": "Peças gráficas de apoio",
  "test.h2": "O que dizem",
  "test.chip1": "Redes Sociais",
  "test.chip2": "Marketing Médico",
  "test.q1": "\"Qualidade e prazo, os vídeos foram entregues muito rápido e com uma qualidade fora da curva, indico de olho fechado.\"",
  "test.q2": "\"No marketing médico, cada detalhe importa. A edição sempre valoriza a mensagem, mantém um alto padrão de qualidade e as entregas acontecem com muita agilidade. Recomendo sem pensar duas vezes!!\"",
  "test.role2": "Especialista em Marketing Médico",
  "contact.h2": "Vamos criar seu próximo vídeo",
  "contact.p": "Me chama pelo canal que for melhor para você — retorno rápido.",
  "email": "E-mail",
  "form.name": "Nome",
  "form.type": "Tipo de vídeo",
  "form.type.social": "Redes sociais",
  "form.type.corp.label": "Institucional",
  "form.type.other": "Outro",
  "form.message": "Mensagem",
  "form.note": "A mensagem abre pronta no WhatsApp ou no seu app de e-mail. É só conferir e enviar.",
  "fab.label": "Fale comigo",
  "footer.copy": "© 2026 Victor Seixas Alves. Todos os direitos reservados.",
  "meta.title": "Victor Seixas — Editor de Vídeo para Redes Sociais e Institucional",
  "meta.desc": "Victor Seixas Alves — editor de vídeo em Montes Claros, MG, especializado em conteúdo para redes sociais (Reels, TikTok, Shorts) e vídeos institucionais. Veja o portfólio.",
  "meta.ogDesc": "Edito para prender atenção: do primeiro frame ao último corte. Reels, TikToks, Shorts e vídeos institucionais.",
  "hero.title": "Edito para prender atenção: <span class=\"gradient-text\">do primeiro frame ao último corte.</span>",
  "hero.sub": "Edição de vídeo para redes sociais e conteúdo institucional. Ritmo, cor e uma pegada visual que não passa despercebida.",
  "nav.menu": "Abrir menu",
  "lang.label": "Idioma",
  "about.photoAlt": "Foto de Victor Seixas, editor de vídeo",
  "alt.capcut": "Logo do CapCut",
  "alt.ps": "Logo do Photoshop",
  "alt.canva": "Logo do Canva",
  "pf.all": "Todos",
  "pf.filterAria": "Filtrar projetos por cliente",
  "pf.project": "Projeto",
  "pf.play": "Reproduzir",
  "pf.more": "Ver mais {n} projetos",
  "pf.less": "Ver menos",
  "pf.count": "Mostrando {shown} de {total} projetos",
  "form.optional": "(opcional)",
  "form.phName": "Como posso te chamar?",
  "form.phMsg": "Me conta um pouco sobre o vídeo que você precisa...",
  "form.sendWa": "Enviar pelo WhatsApp",
  "form.sendMail": "Enviar por e-mail",
  "form.type.corp": "Vídeo institucional",
  "form.errReq": "Preencha seu nome e a mensagem para continuar.",
  "form.errEmail": "Esse e-mail parece incompleto. Confira ou deixe em branco.",
  "form.okWa": "Abri o WhatsApp com a mensagem pronta. É só enviar por lá.",
  "form.okMail": "Abri seu app de e-mail com a mensagem pronta. É só enviar por lá.",
  "form.notInformed": "(não informado)",
  "msg.wa": "Olá, Victor! Me chamo {name}.\nPreciso de: {type}\n\n{message}",
  "msg.waEmail": "\n\nMeu e-mail: {email}",
  "msg.mailSubject": "Contato via portfólio — {name}",
  "msg.mailBody": "Nome: {name}\nE-mail: {email}\nTipo de vídeo: {type}\n\nMensagem:\n{message}",
  "fab.aria": "Falar com Victor no WhatsApp",
  "fab.msg": "Olá, Victor! Vi seu portfólio e gostaria de fazer um orçamento de vídeo.",
  "how.eyebrow": "Como funciona",
  "how.h2": "Do primeiro contato à entrega",
  "how.s1.t": "Você me conta o que precisa",
  "how.s1.p": "Me passa o material bruto e o objetivo do vídeo: público, onde vai ser postado e estilo.",
  "how.s2.t": "Eu cuido da edição",
  "how.s2.p": "Cortes, ritmo, cor e legendas pensados para prender a atenção do primeiro ao último frame.",
  "how.s3.t": "Ajustes e entrega",
  "how.s3.p": "Você revisa, ajustamos em rodadas de revisão e, aprovado, eu envio o arquivo final.",
  "how.deadline.label": "Prazo",
  "how.deadline.p": "Entrego com a maior rapidez possível, em no máximo uma semana.",
  "hero.play": "Reproduzir vídeo de apresentação"
 },
 "es": {
  "nav.about": "Sobre mí",
  "nav.services": "Servicios",
  "nav.portfolio": "Portafolio",
  "nav.tools": "Herramientas",
  "nav.testimonials": "Testimonios",
  "nav.contact": "Contacto",
  "hero.eyebrow": "Portafolio — Victor Seixas",
  "hero.cta1": "Ver portafolio",
  "hero.cta2": "Hablar por WhatsApp",
  "hero.scroll": "desplázate para ver más",
  "about.h2": "Quién edita",
  "about.p1": "¡Me llamo Victor Seixas! Soy estudiante de Sistemas de Información en la UNIMONTES y editor de video enfocado en contenido para redes sociales y videos institucionales. Uso CapCut como herramienta principal, uniendo ritmo, color y storytelling para transformar grabaciones en bruto en videos que captan la atención desde el primer frame hasta el último corte.",
  "about.p2": "Tener una base en tecnología y programación me ayuda a pensar cada edición como un proceso: estructura clara, decisiones rápidas y entrega consistente.",
  "fact.loc": "Ubicación",
  "fact.locV": "Montes Claros, MG, Brasil",
  "fact.edu": "Formación",
  "fact.eduV": "Sistemas de Información — UNIMONTES (7.º período)",
  "fact.tool": "Herramienta principal",
  "fact.lang": "Idiomas",
  "fact.langV": "Portugués · Inglés avanzado",
  "svc.h2": "Lo que hago",
  "svc.1.t": "Edición para Redes Sociales",
  "svc.1.p": "Reels, TikToks y videos verticales con cortes dinámicos, subtítulos estilizados y un ritmo pensado para el algoritmo.",
  "svc.2.t": "Videos Institucionales",
  "svc.2.p": "Contenido corporativo con narrativa clara, identidad visual consistente y acabado profesional para representar tu marca con credibilidad.",
  "svc.tag.corp": "#Corporativo",
  "svc.tag.train": "#Capacitación",
  "svc.tag.pres": "#Presentaciones",
  "svc.tag.events": "#Eventos",
  "pf.h2": "Proyectos",
  "client.patricia": "Dra. Patrícia Lopes",
  "tools.h2": "Stack de edición",
  "tools.capcut": "Motion graphics, corrección de color, subtítulos automáticos y un flujo de exportación rápido.",
  "tools.ps": "Portadas y bocetos de ideas",
  "tools.canva": "Piezas gráficas de apoyo",
  "test.h2": "Lo que dicen",
  "test.chip1": "Redes Sociales",
  "test.chip2": "Marketing Médico",
  "test.q1": "\"Calidad y plazos: los videos se entregaron muy rápido y con una calidad fuera de serie. Lo recomiendo con los ojos cerrados.\"",
  "test.q2": "\"En el marketing médico, cada detalle importa. La edición siempre valora el mensaje, mantiene un alto estándar de calidad y las entregas se hacen con mucha agilidad. ¡¡Lo recomiendo sin pensarlo dos veces!!\"",
  "test.role2": "Especialista en Marketing Médico",
  "contact.h2": "Creemos tu próximo video",
  "contact.p": "Escríbeme por el canal que prefieras — respuesta rápida.",
  "email": "Correo",
  "form.name": "Nombre",
  "form.type": "Tipo de video",
  "form.type.social": "Redes sociales",
  "form.type.corp.label": "Institucional",
  "form.type.other": "Otro",
  "form.message": "Mensaje",
  "form.note": "El mensaje se abre listo en WhatsApp o en tu app de correo. Solo revísalo y envíalo.",
  "fab.label": "Escríbeme",
  "footer.copy": "© 2026 Victor Seixas Alves. Todos los derechos reservados.",
  "meta.title": "Victor Seixas — Editor de Video para Redes Sociales e Institucional",
  "meta.desc": "Victor Seixas Alves — editor de video en Montes Claros, Brasil, especializado en contenido para redes sociales (Reels, TikTok, Shorts) y videos institucionales. Mira el portafolio.",
  "meta.ogDesc": "Edito para captar la atención: del primer frame al último corte. Reels, TikToks, Shorts y videos institucionales.",
  "hero.title": "Edito para captar la atención: <span class=\"gradient-text\">del primer frame al último corte.</span>",
  "hero.sub": "Edición de video para redes sociales y contenido institucional. Ritmo, color y una estética visual que no pasa desapercibida.",
  "nav.menu": "Abrir menú",
  "lang.label": "Idioma",
  "about.photoAlt": "Foto de Victor Seixas, editor de video",
  "alt.capcut": "Logo de CapCut",
  "alt.ps": "Logo de Photoshop",
  "alt.canva": "Logo de Canva",
  "pf.all": "Todos",
  "pf.filterAria": "Filtrar proyectos por cliente",
  "pf.project": "Proyecto",
  "pf.play": "Reproducir",
  "pf.more": "Ver {n} proyectos más",
  "pf.less": "Ver menos",
  "pf.count": "Mostrando {shown} de {total} proyectos",
  "form.optional": "(opcional)",
  "form.phName": "¿Cómo puedo llamarte?",
  "form.phMsg": "Cuéntame un poco sobre el video que necesitas...",
  "form.sendWa": "Enviar por WhatsApp",
  "form.sendMail": "Enviar por correo",
  "form.type.corp": "Video institucional",
  "form.errReq": "Completa tu nombre y el mensaje para continuar.",
  "form.errEmail": "Ese correo parece incompleto. Revísalo o déjalo en blanco.",
  "form.okWa": "Abrí WhatsApp con el mensaje listo. Solo envíalo desde allí.",
  "form.okMail": "Abrí tu app de correo con el mensaje listo. Solo envíalo desde allí.",
  "form.notInformed": "(no indicado)",
  "msg.wa": "¡Hola, Victor! Me llamo {name}.\nNecesito: {type}\n\n{message}",
  "msg.waEmail": "\n\nMi correo: {email}",
  "msg.mailSubject": "Contacto desde el portafolio — {name}",
  "msg.mailBody": "Nombre: {name}\nCorreo: {email}\nTipo de video: {type}\n\nMensaje:\n{message}",
  "fab.aria": "Hablar con Victor por WhatsApp",
  "fab.msg": "¡Hola, Victor! Vi tu portafolio y me gustaría pedir un presupuesto de video.",
  "how.eyebrow": "Cómo funciona",
  "how.h2": "Del primer contacto a la entrega",
  "how.s1.t": "Me cuentas lo que necesitas",
  "how.s1.p": "Me pasas el material en bruto y el objetivo del video: público, dónde se publicará y estilo.",
  "how.s2.t": "Me encargo de la edición",
  "how.s2.p": "Cortes, ritmo, color y subtítulos pensados para captar la atención del primer al último frame.",
  "how.s3.t": "Ajustes y entrega",
  "how.s3.p": "Revisas, ajustamos en rondas de revisión y, una vez aprobado, te envío el archivo final.",
  "how.deadline.label": "Plazo",
  "how.deadline.p": "Entrego con la mayor rapidez posible, en un máximo de una semana.",
  "hero.play": "Reproducir video de presentación"
 },
 "en": {
  "nav.about": "About",
  "nav.services": "Services",
  "nav.portfolio": "Portfolio",
  "nav.tools": "Tools",
  "nav.testimonials": "Testimonials",
  "nav.contact": "Contact",
  "hero.eyebrow": "Portfolio — Victor Seixas",
  "hero.cta1": "View portfolio",
  "hero.cta2": "Chat on WhatsApp",
  "hero.scroll": "scroll to see more",
  "about.h2": "Who’s editing",
  "about.p1": "I’m Victor Seixas! I’m an Information Systems student at UNIMONTES and a video editor focused on social media content and corporate videos. I use CapCut as my main tool, combining rhythm, color and storytelling to turn raw footage into video that holds attention from the first frame to the last cut.",
  "about.p2": "Having a background in technology and programming helps me think of each edit as a process: clear structure, quick decisions and consistent delivery.",
  "fact.loc": "Location",
  "fact.locV": "Montes Claros, MG, Brazil",
  "fact.edu": "Education",
  "fact.eduV": "Information Systems — UNIMONTES (7th semester)",
  "fact.tool": "Main tool",
  "fact.lang": "Languages",
  "fact.langV": "Portuguese · Advanced English",
  "svc.h2": "What I do",
  "svc.1.t": "Social Media Editing",
  "svc.1.p": "Reels, TikToks and vertical videos with dynamic cuts, styled captions and pacing designed for the algorithm.",
  "svc.2.t": "Corporate Videos",
  "svc.2.p": "Corporate content with a clear narrative, consistent visual identity and a professional finish to represent your brand with credibility.",
  "svc.tag.corp": "#Corporate",
  "svc.tag.train": "#Training",
  "svc.tag.pres": "#Presentations",
  "svc.tag.events": "#Events",
  "pf.h2": "Projects",
  "client.patricia": "Dr. Patrícia Lopes",
  "tools.h2": "Editing stack",
  "tools.capcut": "Motion graphics, color grading, automatic captions and a fast export workflow.",
  "tools.ps": "Covers and idea sketches",
  "tools.canva": "Supporting graphic pieces",
  "test.h2": "What they say",
  "test.chip1": "Social Media",
  "test.chip2": "Medical Marketing",
  "test.q1": "\"Quality and deadlines: the videos were delivered very fast and with outstanding quality. I recommend him without hesitation.\"",
  "test.q2": "\"In medical marketing, every detail matters. The editing always highlights the message, keeps a high standard of quality and deliveries are made with great speed. I recommend it without a second thought!!\"",
  "test.role2": "Medical Marketing Specialist",
  "contact.h2": "Let’s create your next video",
  "contact.p": "Message me on whichever channel suits you best — quick reply.",
  "email": "Email",
  "form.name": "Name",
  "form.type": "Video type",
  "form.type.social": "Social media",
  "form.type.corp.label": "Corporate",
  "form.type.other": "Other",
  "form.message": "Message",
  "form.note": "The message opens ready in WhatsApp or your email app. Just check it and send.",
  "fab.label": "Chat with me",
  "footer.copy": "© 2026 Victor Seixas Alves. All rights reserved.",
  "meta.title": "Victor Seixas — Video Editor for Social Media and Corporate Content",
  "meta.desc": "Victor Seixas Alves — video editor in Montes Claros, Brazil, specialized in social media content (Reels, TikTok, Shorts) and corporate videos. See the portfolio.",
  "meta.ogDesc": "I edit to hold attention: from the first frame to the last cut. Reels, TikToks, Shorts and corporate videos.",
  "hero.title": "I edit to hold attention: <span class=\"gradient-text\">from the first frame to the last cut.</span>",
  "hero.sub": "Video editing for social media and corporate content. Rhythm, color and a visual style that doesn’t go unnoticed.",
  "nav.menu": "Open menu",
  "lang.label": "Language",
  "about.photoAlt": "Photo of Victor Seixas, video editor",
  "alt.capcut": "CapCut logo",
  "alt.ps": "Photoshop logo",
  "alt.canva": "Canva logo",
  "pf.all": "All",
  "pf.filterAria": "Filter projects by client",
  "pf.project": "Project",
  "pf.play": "Play",
  "pf.more": "Show {n} more projects",
  "pf.less": "Show less",
  "pf.count": "Showing {shown} of {total} projects",
  "form.optional": "(optional)",
  "form.phName": "What should I call you?",
  "form.phMsg": "Tell me a bit about the video you need...",
  "form.sendWa": "Send via WhatsApp",
  "form.sendMail": "Send by email",
  "form.type.corp": "Corporate video",
  "form.errReq": "Please fill in your name and message to continue.",
  "form.errEmail": "That email looks incomplete. Check it or leave it blank.",
  "form.okWa": "I opened WhatsApp with the message ready. Just send it there.",
  "form.okMail": "I opened your email app with the message ready. Just send it there.",
  "form.notInformed": "(not provided)",
  "msg.wa": "Hello, Victor! My name is {name}.\nI need: {type}\n\n{message}",
  "msg.waEmail": "\n\nMy email: {email}",
  "msg.mailSubject": "Contact via portfolio — {name}",
  "msg.mailBody": "Name: {name}\nEmail: {email}\nVideo type: {type}\n\nMessage:\n{message}",
  "fab.aria": "Chat with Victor on WhatsApp",
  "fab.msg": "Hi, Victor! I saw your portfolio and would like a quote for a video.",
  "how.eyebrow": "How it works",
  "how.h2": "From first contact to delivery",
  "how.s1.t": "You tell me what you need",
  "how.s1.p": "Send me the raw footage and the video’s goal: audience, where it will be posted and style.",
  "how.s2.t": "I handle the editing",
  "how.s2.p": "Cuts, pacing, color and captions designed to hold attention from the first to the last frame.",
  "how.s3.t": "Revisions and delivery",
  "how.s3.p": "You review, we adjust in revision rounds and, once approved, I send the final file.",
  "how.deadline.label": "Turnaround",
  "how.deadline.p": "I deliver as fast as possible, within one week at most.",
  "hero.play": "Play showreel video"
 }
};

  const LANGS = {
    pt: { html: 'pt-BR', code: 'PT' },
    es: { html: 'es',    code: 'ES' },
    en: { html: 'en',    code: 'EN' }
  };

  let lang = 'pt';
  const t = (key, vars) => {
    let s = (DICT[lang] && DICT[lang][key]);
    if (s == null) s = DICT.pt[key];
    if (s == null) return key;
    if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? vars[k] : m));
    return s;
  };

  const store = {
    get() { try { return localStorage.getItem('lang'); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem('lang', v); } catch (e) {} }
  };

  const setMeta = (sel, value) => { const el = document.querySelector(sel); if (el) el.setAttribute('content', value); };

  const apply = () => {
    document.documentElement.lang = LANGS[lang].html;

    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = t(el.dataset.i18nAlt); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('[data-i18n-value]').forEach(el => { el.value = t(el.dataset.i18nValue); });

    // título e descrição (aba do navegador, Google, prévias)
    document.title = t('meta.title');
    setMeta('meta[name="description"]', t('meta.desc'));
    setMeta('meta[property="og:title"]', t('meta.title'));
    setMeta('meta[property="og:description"]', t('meta.ogDesc'));
    setMeta('meta[name="twitter:title"]', t('meta.title'));
    setMeta('meta[name="twitter:description"]', t('meta.ogDesc'));

    // vídeos: nome "Projeto 01" e rótulo do botão de play
    document.querySelectorAll('.video-embed[data-yt]').forEach(box => {
      if (!box.dataset.n) { const m = (box.dataset.title || '').match(/\d+/); box.dataset.n = m ? m[0] : ''; }
      const title = `${t('pf.project')} ${box.dataset.n}`;
      box.dataset.title = title;
      const facade = box.querySelector('.yt-facade');
      if (facade) facade.setAttribute('aria-label', `${t('pf.play')} ${title}`);
      const frame = box.querySelector('iframe');
      if (frame) frame.title = title;
    });

    // botão flutuante do WhatsApp: mensagem pronta no idioma escolhido
    const fab = document.getElementById('whatsFab');
    if (fab) fab.href = `https://wa.me/5531983342557?text=${encodeURIComponent(t('fab.msg'))}`;

    // seletor
    const code = document.getElementById('langCode');
    if (code) code.textContent = LANGS[lang].code;
    document.querySelectorAll('.lang-opt').forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-checked', on);
    });
  };

  const setLang = (next, save = true) => {
    if (!LANGS[next]) next = 'pt';
    lang = next;
    if (save) store.set(next);
    apply();
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
  };

  window.I18N = { t, setLang, get lang() { return lang; } };

  // idioma inicial: ?lang=xx  >  escolha salva  >  português
  const fromUrl = new URLSearchParams(location.search).get('lang');
  const initial = LANGS[fromUrl] ? fromUrl : (LANGS[store.get()] ? store.get() : 'pt');
  lang = initial;
  apply();

  // ---------- menu do seletor ----------
  const box = document.getElementById('langSwitch');
  const btn = document.getElementById('langBtn');
  const menu = document.getElementById('langMenu');
  if (!box || !btn || !menu) return;

  const toggle = open => {
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open);
    box.classList.toggle('is-open', open);
  };
  btn.addEventListener('click', e => { e.stopPropagation(); toggle(menu.hidden); });
  menu.addEventListener('click', e => {
    const opt = e.target.closest('.lang-opt');
    if (!opt) return;
    setLang(opt.dataset.lang);
    toggle(false);
    btn.focus();
  });
  document.addEventListener('click', e => { if (!box.contains(e.target)) toggle(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { toggle(false); btn.focus(); } });
})();