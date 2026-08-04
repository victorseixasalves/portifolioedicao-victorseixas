  // Progresso de rolagem
  const progress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progress.style.width = scrolled + '%';
  });

  // Menu mobile
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', () => navbar.classList.toggle('nav-open'));
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navbar.classList.remove('nav-open'));
  });

  // Revelar ao rolar
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Variação de cor do fundo na seção Ferramentas
  const bgOrbs = document.querySelector('.bg-orbs');
  const toolsSection = document.getElementById('ferramentas');
  if (bgOrbs && toolsSection) {
    const toolsObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => bgOrbs.classList.toggle('zone-tools', e.isIntersecting));
    }, { threshold: 0.35 });
    toolsObserver.observe(toolsSection);
  }

  // Formulário de contato
  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = encodeURIComponent('Contato via portfólio — ' + name);
    const body = encodeURIComponent('Nome: ' + name + '\nE-mail: ' + email + '\n\nMensagem:\n' + message);
    window.location.href = 'mailto:vseixasalves@gmail.com?subject=' + subject + '&body=' + body;
  });