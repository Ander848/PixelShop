// PIXELSHOP — Shared navbar + footer injector
// Include this script in every page, then call PS.init('page-id')

const PS_WA = '521XXXXXXXXXX'; // ← Cambia por tu número real

const PS = {
  waLink(msg) {
    return `https://wa.me/${PS_WA}?text=${encodeURIComponent(msg)}`;
  },

  navHTML(active) {
    const links = [
      { id: 'home',      href: 'index.html',    label: 'Inicio' },
      { id: 'catalogo',  href: 'catalogo.html',  label: 'Catálogo' },
      { id: 'nosotros',  href: 'nosotros.html',  label: 'Nosotros' },
      { id: 'faq',       href: 'faq.html',       label: 'FAQ' },
      { id: 'contacto',  href: 'contacto.html',  label: 'Contacto' },
    ];
    const lis = links.map(l =>
      `<li class="nav-item">
        <a class="nav-link${l.id === active ? ' active' : ''}" href="${l.href}">${l.label}</a>
      </li>`
    ).join('');
    return `
    <nav class="ps-nav navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="index.html">PIXEL<span>SHOP</span></a>
        <button class="navbar-toggler border-0" type="button"
          data-bs-toggle="collapse" data-bs-target="#psNav"
          aria-controls="psNav" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="psNav">
          <ul class="navbar-nav mx-auto gap-1">${lis}</ul>
          <a class="btn-nav-cta nav-link"
            href="${PS.waLink('Hola PixelShop! Quiero información sobre sus productos 🎮')}"
            target="_blank">
            <i class="fab fa-whatsapp me-1"></i> Comprar ahora
          </a>
        </div>
      </div>
    </nav>`;
  },

  footerHTML() {
    return `
    <footer class="ps-footer">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-4">
            <div class="ps-footer-brand">PIXEL<span>SHOP</span></div>
            <p class="mt-3" style="max-width:300px">
              Tu tienda confiable de cuentas y objetos de videojuegos.
              Entrega rápida, precios justos y soporte real por WhatsApp.
            </p>
            <a href="${PS.waLink('Hola PixelShop! 👋')}" target="_blank"
              class="btn-wa mt-3 d-inline-flex" style="font-size:0.85rem;padding:9px 20px">
              <i class="fab fa-whatsapp"></i> Escribirnos
            </a>
          </div>
          <div class="col-6 col-lg-2">
            <div class="ps-footer-heading">Tienda</div>
            <a href="index.html" class="footer-link">Inicio</a>
            <a href="catalogo.html" class="footer-link">Catálogo</a>
            <a href="catalogo.html?juego=roblox" class="footer-link">Roblox</a>
            <a href="catalogo.html?juego=fortnite" class="footer-link">Fortnite</a>
            <a href="catalogo.html?juego=freefire" class="footer-link">Free Fire</a>
          </div>
          <div class="col-6 col-lg-2">
            <div class="ps-footer-heading">Info</div>
            <a href="nosotros.html" class="footer-link">Nosotros</a>
            <a href="faq.html" class="footer-link">FAQ</a>
            <a href="faq.html#como-funciona" class="footer-link">Cómo funciona</a>
            <a href="faq.html#pagos" class="footer-link">Métodos de pago</a>
            <a href="contacto.html" class="footer-link">Contacto</a>
          </div>
          <div class="col-lg-4">
            <div class="ps-footer-heading">Métodos de pago</div>
            <div class="d-flex flex-wrap gap-2">
              ${['🏪 OXXO Pay','🏦 SPEI','📱 CoDi / DiMo','💳 PayPal'].map(m=>
                `<span style="background:var(--bg3);border:1px solid var(--border2);border-radius:8px;padding:6px 12px;font-size:0.78rem;color:var(--text)">${m}</span>`
              ).join('')}
            </div>
            <div class="mt-4" style="font-size:0.8rem;color:var(--muted)">
              Horario de atención:<br>
              <span style="color:var(--text)">Lunes a Domingo — 9:00 AM a 11:00 PM</span>
            </div>
          </div>
        </div>
        <div class="ps-footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <span>© 2025 PixelShop — Todos los derechos reservados</span>
          <span>PixelShop no está afiliado con Roblox, Epic Games, Garena, Mojang ni Riot Games.</span>
        </div>
      </div>
    </footer>
    <a class="wa-float" href="${PS.waLink('Hola PixelShop! Quiero información 🎮')}" target="_blank" title="WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>`;
  },

  init(pageId) {
    // Inject navbar
    const navEl = document.getElementById('ps-nav');
    if (navEl) navEl.innerHTML = PS.navHTML(pageId);
    // Inject footer
    const footEl = document.getElementById('ps-footer');
    if (footEl) footEl.innerHTML = PS.footerHTML();
  }
};
