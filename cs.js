// CORIALSTORE — Shared UI (navbar + footer + WhatsApp links)
// ← CAMBIA TU NÚMERO AQUÍ  (521 + 10 dígitos, ej: 5214771234567)
const CS_WA = '573226502683';

const CS = {
  wa(msg) {
    return `https://wa.me/${CS_WA}?text=${encodeURIComponent(msg)}`;
  },

  nav(active) {
    const pages = [
      { id:'home',     href:'index.html',    label:'Inicio'   },
      { id:'catalogo', href:'catalogo.html', label:'Catálogo' },
      { id:'nosotros', href:'nosotros.html', label:'Nosotros' },
      { id:'faq',      href:'faq.html',      label:'FAQ'      },
      { id:'contacto', href:'contacto.html', label:'Contacto' },
    ];
    const lis = pages.map(p =>
      `<li class="nav-item">
         <a class="nav-link${p.id===active?' active':''}" href="${p.href}">${p.label}</a>
       </li>`
    ).join('');
    return `
      <nav class="cs-nav navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="index.html">CORIAL<span>STORE</span></a>
          <button class="navbar-toggler border-0" type="button"
            data-bs-toggle="collapse" data-bs-target="#csNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="csNav">
            <ul class="navbar-nav mx-auto gap-1">${lis}</ul>
            <a class="btn-nav-cta nav-link"
              href="${CS.wa('Hola CorialStore! Quiero información sobre sus productos 🎮')}"
              target="_blank">
              <i class="fab fa-whatsapp me-1"></i> Comprar ahora
            </a>
          </div>
        </div>
      </nav>`;
  },

  footer() {
    const methods = ['₿ Crypto','🏪 Depósito OXXO','🏦 Transferencia'];
    return `
      <footer class="cs-footer">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-4">
              <div class="cs-footer-brand">CORIAL<span>STORE</span></div>
              <p class="mt-3" style="max-width:300px">
                Tu tienda confiable de cuentas y objetos de videojuegos.
                Entrega rápida, precios justos y soporte por WhatsApp.
              </p>
              <a href="${CS.wa('Hola CorialStore! 👋')}" target="_blank"
                class="btn-wa mt-3 d-inline-flex" style="font-size:0.85rem;padding:9px 20px">
                <i class="fab fa-whatsapp"></i> Escribirnos
              </a>
            </div>
            <div class="col-6 col-lg-2">
              <div class="cs-footer-heading">Tienda</div>
              <a href="index.html"            class="footer-link">Inicio</a>
              <a href="catalogo.html"         class="footer-link">Catálogo</a>
              <a href="catalogo.html?juego=roblox"   class="footer-link">Roblox</a>
              <a href="catalogo.html?juego=fortnite" class="footer-link">Fortnite</a>
              <a href="catalogo.html?juego=freefire" class="footer-link">Free Fire</a>
            </div>
            <div class="col-6 col-lg-2">
              <div class="cs-footer-heading">Info</div>
              <a href="nosotros.html" class="footer-link">Nosotros</a>
              <a href="faq.html"      class="footer-link">FAQ</a>
              <a href="faq.html#como-funciona" class="footer-link">Cómo funciona</a>
              <a href="faq.html#pagos"         class="footer-link">Métodos de pago</a>
              <a href="contacto.html" class="footer-link">Contacto</a>
            </div>
            <div class="col-lg-4">
              <div class="cs-footer-heading">Métodos de pago</div>
              <div class="d-flex flex-wrap gap-2">
                ${methods.map(m=>`<span style="background:var(--bg3);border:1px solid var(--border2);border-radius:8px;padding:6px 12px;font-size:0.78rem;color:var(--text)">${m}</span>`).join('')}
              </div>
              <div class="mt-4" style="font-size:0.8rem;color:var(--muted)">
                Horario:<br>
                <span style="color:var(--text)">Lunes – Domingo · 8:00 AM – 2:00 AM</span>
              </div>
            </div>
          </div>
          <div class="cs-footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <span>© 2026 CorialStore — Todos los derechos reservados</span>
            <span style="font-size:0.72rem;opacity:0.7">No afiliado con Roblox, Epic Games, Garena, Mojang ni Riot Games.</span>
          </div>
        </div>
      </footer>
      <a class="wa-float" href="${CS.wa('Hola CorialStore! 🎮')}" target="_blank" title="WhatsApp">
        <i class="fab fa-whatsapp"></i>
      </a>`;
  },

  init(pageId) {
    const n = document.getElementById('cs-nav');
    if (n) n.innerHTML = CS.nav(pageId);
    const f = document.getElementById('cs-footer');
    if (f) f.innerHTML = CS.footer();
  }
};
