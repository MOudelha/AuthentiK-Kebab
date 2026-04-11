// =============================================
// L'AUTHENTIK — RENDU DYNAMIQUE DES PAGES MENU
// Ce script remplace le contenu statique par les
// données du menu (localStorage ou défaut).
// Tout changement admin est visible immédiatement.
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  // Rendre chaque grille menu trouvée sur la page
  document.querySelectorAll('[data-render-cat]').forEach(grid => {
    const catKey = grid.dataset.renderCat;
    renderGrid(grid, catKey);
  });

  // Rendre la section suppléments tacos si présente
  const suppGrid = document.querySelector('[data-render-supps]');
  if (suppGrid) renderSupplements(suppGrid);

  // Mettre à jour les horaires sur la page d'accueil
  updateHoraires();
});

function prixDisplay(item) {
  if (!item.prix) return '<span class="menu-price" style="color:#c9bea9">Prix à définir</span>';
  let html = `<div class="menu-price">${item.prix.toFixed(2)} €</div>`;
  const extras = [];
  if (item.avecFrites) extras.push(`avec frites ${item.avecFrites.toFixed(2)} €`);
  if (item.menu)       extras.push(`menu ${item.menu.toFixed(2)} €`);
  if (extras.length)   html += `<div class="menu-extra">${extras.join(' • ')}</div>`;
  return html;
}

function renderGrid(grid, catKey) {
  const data = getMenuData();
  const cat  = data.categories[catKey];
  if (!cat) return;

  const activeItems = cat.items.filter(item => item.actif !== false);

  if (activeItems.length === 0) {
    grid.innerHTML = '<div style="padding:2rem;color:#c9bea9;text-align:center">Aucun article disponible.</div>';
    return;
  }

  grid.innerHTML = activeItems.map(item => `
    <article class="menu-card" data-id="${item.id}">
      <img src="${item.img}" alt="${item.nom}" onerror="this.src='assets/img/logo.png';this.style.objectFit='contain';this.style.padding='1rem'">
      <div>
        <div class="menu-name">${item.nom}</div>
        ${prixDisplay(item)}
        <div class="menu-desc">${item.desc}</div>
        <div class="menu-card-actions">
          <button class="btn-panier"   onclick="cmdAjouterAuPanier('${item.id}')">🛒 Panier</button>
          <button class="btn-commander" onclick="cmdAcheterMaintenant('${item.id}')">⚡ Commander</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderSupplements(grid) {
  const data = getMenuData();
  const supps = data.categories.supplements;
  if (!supps) return;
  const active = supps.items.filter(i => i.actif !== false);
  grid.innerHTML = active.map(item => `
    <article class="supp-card" data-id="${item.id}">
      <img src="${item.img}" alt="${item.nom}" onerror="this.src='assets/img/logo.png'">
      <div class="menu-name">${item.nom}</div>
      <div class="menu-price">${item.prix ? item.prix.toFixed(2)+' €' : '—'}</div>
      <div class="menu-desc">${item.desc}</div>
      <div class="menu-card-actions" style="margin-top:.6rem">
        <button class="btn-panier"    onclick="cmdAjouterAuPanier('${item.id}')">🛒 Panier</button>
        <button class="btn-commander" onclick="cmdAcheterMaintenant('${item.id}')">⚡ Commander</button>
      </div>
    </article>
  `).join('');
}

function updateHoraires() {
  const data = getMenuData();
  if (!data.horaires) return;
  // Mettre à jour toutes les listes d'horaires dans la page
  document.querySelectorAll('[data-horaires-list]').forEach(list => {
    list.innerHTML = data.horaires.map(h => `
      <div class="line">
        <strong>${h.jour}</strong>
        <div class="muted">${h.ferme ? 'Fermé' : (h.matin && h.soir ? h.matin + ' • ' + h.soir : h.matin || h.soir || 'Fermé')}</div>
      </div>
    `).join('');
  });
  // Format compact (footer)
  document.querySelectorAll('[data-horaires-small]').forEach(el => {
    el.innerHTML = data.horaires.map(h =>
      `<div>${h.jour} : ${h.ferme ? 'Fermé' : (h.matin && h.soir ? h.matin + ' • ' + h.soir : h.matin || h.soir || 'Fermé')}</div>`
    ).join('');
  });
}
