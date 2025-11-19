async function carregarComponente(caminho, seletor) {
  try {
    const resposta = await fetch(caminho);
    if (!resposta.ok) throw new Error('HTTP ' + resposta.status);
    const html = await resposta.text();
    document.querySelector(seletor).innerHTML = html;
  } catch (erro) {
    console.error('Erro ao carregar componente:', erro);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Load header and footer if containers exist
  if (document.querySelector('#header-container')) {
    carregarComponente('componentes/header.html', '#header-container').then(() => {
      // after header loaded, attach menu toggle
      const toggle = document.getElementById('menu-toggle');
      const nav = document.getElementById('site-nav');
      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          const expanded = toggle.getAttribute('aria-expanded') === 'true';
          toggle.setAttribute('aria-expanded', String(!expanded));
          nav.classList.toggle('open');
        });
      }
    });
  }
  if (document.querySelector('#footer-container')) {
    carregarComponente('componentes/footer.html', '#footer-container');
  }

  // Back to top button
  const topBtn = document.createElement('button');
  topBtn.id = 'back-to-top';
  topBtn.innerText = '↑';
  topBtn.setAttribute('aria-label', 'Voltar ao topo');
  topBtn.style.display = 'none';
  document.body.appendChild(topBtn);
  topBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) topBtn.style.display = 'block'; else topBtn.style.display = 'none';
  });
});
