// =============================================
// L'AUTHENTIK — SYSTÈME DE COMMANDE
// EmailJS: service_bpji14a / Public Key: BtYKjzMMSaT4wc-PW
// =============================================

const EMAILJS_SERVICE = 'service_bpji14a';
const EMAILJS_TEMPLATE = 'template_lauthentik';
const EMAILJS_PUBLIC_KEY = 'BtYKjzMMSaT4wc-PW';

// ---- Panier ----
let panier = [];

function getPanier() { return panier; }

function ajouterAuPanier(item) {
  panier.push(item);
  updateCartUI();
  showCartNotif(item.nom);
}

function retirerDuPanier(index) {
  panier.splice(index, 1);
  updateCartUI();
  renderPanierModal();
}

function changerQte(index, delta) {
  panier[index].qte = (panier[index].qte || 1) + delta;
  if (panier[index].qte <= 0) retirerDuPanier(index);
  else { updateCartUI(); renderPanierModal(); }
}

function viderPanier() {
  panier = [];
  updateCartUI();
}

function totalPanier() {
  return panier.reduce((s, i) => s + (i.prix * (i.qte || 1)), 0);
}

// ---- Numéro de commande ----
function getNumCommande() {
  const today = new Date().toISOString().slice(0, 10);
  const stored = JSON.parse(localStorage.getItem('lauthentik_num_cmd') || '{}');
  if (stored.date !== today) {
    localStorage.setItem('lauthentik_num_cmd', JSON.stringify({ date: today, num: 1 }));
    return '001';
  }
  const next = (stored.num % 999) + 1;
  localStorage.setItem('lauthentik_num_cmd', JSON.stringify({ date: today, num: next }));
  return String(next).padStart(3, '0');
}

// ---- Historique ----
function sauvegarderCommande(commande) {
  const hist = JSON.parse(localStorage.getItem('lauthentik_historique') || '[]');
  hist.unshift(commande);
  localStorage.setItem('lauthentik_historique', JSON.stringify(hist));
}

// ---- UI Panier flottant ----
function updateCartUI() {
  const total = panier.reduce((s, i) => s + (i.qte || 1), 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
  document.querySelectorAll('.cart-total-display').forEach(el => {
    el.textContent = totalPanier().toFixed(2) + ' €';
  });
}

function showCartNotif(nom) {
  const notif = document.getElementById('cart-notif');
  if (!notif) return;
  notif.textContent = `✓ ${nom} ajouté au panier`;
  notif.classList.add('show');
  setTimeout(() => notif.classList.remove('show'), 2500);
}

// ---- Modal Panier ----
function openPanierModal() {
  const modal = document.getElementById('panier-modal');
  if (modal) { modal.classList.add('open'); renderPanierModal(); }
}

function closePanierModal() {
  document.getElementById('panier-modal')?.classList.remove('open');
}

function renderPanierModal() {
  const container = document.getElementById('panier-items');
  if (!container) return;
  if (panier.length === 0) {
    container.innerHTML = '<div class="panier-empty">Votre panier est vide.</div>';
    document.getElementById('panier-total').textContent = '0,00 €';
    return;
  }
  container.innerHTML = panier.map((item, i) => `
    <div class="panier-line">
      <div class="panier-line-info">
        <div class="panier-line-nom">${item.nom}</div>
        <div class="panier-line-detail">${item.detail || ''}</div>
        <div class="panier-line-prix">${(item.prix * (item.qte||1)).toFixed(2)} €</div>
      </div>
      <div class="panier-line-qte">
        <button onclick="changerQte(${i},-1)" class="qte-btn">−</button>
        <span>${item.qte||1}</span>
        <button onclick="changerQte(${i},1)" class="qte-btn">+</button>
        <button onclick="retirerDuPanier(${i})" class="qte-btn del">✕</button>
      </div>
    </div>
  `).join('');
  document.getElementById('panier-total').textContent = totalPanier().toFixed(2) + ' €';
}

// ---- Modal Commande (formulaire client) ----
function openCommandeModal(fromPanier = false) {
  closePanierModal();
  if (!fromPanier && panier.length === 0) return;
  const modal = document.getElementById('commande-modal');
  if (modal) modal.classList.add('open');
}

function closeCommandeModal() {
  document.getElementById('commande-modal')?.classList.remove('open');
}

// ---- Modal Options produit ----
let currentItemCallback = null;

function openOptionsModal(itemId, quickBuy = false) {
  const data = getMenuData();
  const item = findItemById(itemId);
  if (!item) return;

  const modal = document.getElementById('options-modal');
  const body = document.getElementById('options-body');
  if (!modal || !body) return;

  document.getElementById('options-title').textContent = item.nom;
  document.getElementById('options-prix-base').textContent = item.prix ? item.prix.toFixed(2) + ' €' : 'Prix à définir';

  let html = '';

  // Format (sandwich seul / avec frites / menu)
  const formats = [];
  if (item.prix) formats.push({ label: `Sandwich seul — ${item.prix.toFixed(2)} €`, val: 'seul', prix: item.prix });
  if (item.avecFrites) formats.push({ label: `Avec frites — ${item.avecFrites.toFixed(2)} €`, val: 'frites', prix: item.avecFrites });
  if (item.menu) {
    // menu = sandwich + frites + boisson
    formats.push({ label: `Menu complet (+ frites + boisson) — ${item.menu.toFixed(2)} €`, val: 'menu', prix: item.menu });
  }

  if (formats.length > 1) {
    html += `<div class="opt-section"><div class="opt-label">Format</div>
      ${formats.map((f,i) => `
        <label class="opt-radio">
          <input type="radio" name="opt_format" value="${f.val}" data-prix="${f.prix}" ${i===0?'checked':''}>
          ${f.label}
        </label>`).join('')}
    </div>`;
  } else if (formats.length === 1) {
    html += `<input type="hidden" name="opt_format" value="${formats[0].val}" data-prix="${formats[0].prix}">`;
  }

  // Boisson si menu
  if (item.menu) {
    const boissons = getMenuData().boissons;
    html += `<div class="opt-section" id="opt-boisson-section" style="display:none">
      <div class="opt-label">Boisson (menu)</div>
      ${boissons.map((b,i) => `
        <label class="opt-radio">
          <input type="radio" name="opt_boisson" value="${b.nom}" ${i===0?'checked':''}>
          ${b.nom}
        </label>`).join('')}
    </div>`;
  }

  // Pain
  if (item.hasPain) {
    html += `<div class="opt-section"><div class="opt-label">Pain ou galette</div>
      ${getMenuData().pains.map((p,i) => `
        <label class="opt-radio">
          <input type="radio" name="opt_pain" value="${p}" ${i===0?'checked':''}>
          ${p}
        </label>`).join('')}
    </div>`;
  }

  // Crudités (3 parmi 4 max)
  if (item.hasCrudites) {
    html += `<div class="opt-section"><div class="opt-label">Crudités <small>(3 max)</small></div>
      <div class="opt-crudites">
      ${getMenuData().crudites.map(c => `
        <label class="opt-check">
          <input type="checkbox" name="opt_crudites" value="${c}" checked>
          ${c}
        </label>`).join('')}
      </div>
    </div>`;
  }

  // Sauce (2 max)
  if (item.hasSauce) {
    html += `<div class="opt-section"><div class="opt-label">Sauce <small>(2 max)</small></div>
      <div class="opt-sauces">
      ${getMenuData().sauces.map(s => `
        <label class="opt-check">
          <input type="checkbox" name="opt_sauce" value="${s}">
          ${s}
        </label>`).join('')}
      </div>
    </div>`;
  }

  // Viandes tacos
  if (item.nbViandes) {
    html += `<div class="opt-section"><div class="opt-label">Viande${item.nbViandes>1?'s':''} <small>(${item.nbViandes} max)</small></div>
      <div class="opt-viandes">
      ${getMenuData().viandes_tacos.map(v => `
        <label class="opt-check">
          <input type="checkbox" name="opt_viande" value="${v}">
          ${v}
        </label>`).join('')}
      </div>
    </div>`;
  }

  // Viande Krousty
  if (item.hasViandeKrousty) {
    const vk = ["Tenders","Nuggets","Poulet mariné","Viande kebab"];
    html += `<div class="opt-section"><div class="opt-label">Viande Krousty</div>
      ${vk.map((v,i) => `
        <label class="opt-radio">
          <input type="radio" name="opt_viande_krousty" value="${v}" ${i===0?'checked':''}>
          ${v}
        </label>`).join('')}
    </div>`;
  }

  // Note
  html += `<div class="opt-section">
    <div class="opt-label">Note / remarque <small>(facultatif)</small></div>
    <textarea name="opt_note" rows="2" placeholder="Ex: sans oignon, bien cuit..."></textarea>
  </div>`;

  body.innerHTML = html;

  // Toggle boisson section selon format choisi
  body.addEventListener('change', (e) => {
    if (e.target.name === 'opt_format') {
      const boissonSec = document.getElementById('opt-boisson-section');
      if (boissonSec) boissonSec.style.display = e.target.value === 'menu' ? 'block' : 'none';
    }
    // Limite crudités à 3
    if (e.target.name === 'opt_crudites') {
      const checked = body.querySelectorAll('[name="opt_crudites"]:checked');
      if (checked.length > 3) e.target.checked = false;
    }
    // Limite sauces à 2
    if (e.target.name === 'opt_sauce') {
      const checked = body.querySelectorAll('[name="opt_sauce"]:checked');
      if (checked.length > 2) e.target.checked = false;
    }
    // Limite viandes tacos
    if (e.target.name === 'opt_viande' && item.nbViandes) {
      const checked = body.querySelectorAll('[name="opt_viande"]:checked');
      if (checked.length > item.nbViandes) e.target.checked = false;
    }
  });

  currentItemCallback = (quickBuy) ? (lineItem) => {
    panier = [lineItem];
    updateCartUI();
    openCommandeModal(true);
  } : (lineItem) => {
    ajouterAuPanier(lineItem);
  };

  document.getElementById('options-add-btn').textContent = quickBuy ? 'Commander maintenant' : 'Ajouter au panier';
  modal.classList.add('open');
}

function closeOptionsModal() {
  document.getElementById('options-modal')?.classList.remove('open');
}

function confirmerOptions() {
  const body = document.getElementById('options-body');
  const item = findItemById(document.getElementById('options-modal').dataset.itemId);

  // Format & prix
  const formatInput = body.querySelector('[name="opt_format"]:checked') || body.querySelector('[name="opt_format"]');
  const format = formatInput ? formatInput.value : 'seul';
  const prix = formatInput ? parseFloat(formatInput.dataset.prix) : (item?.prix || 0);

  // Boisson
  const boissonInput = body.querySelector('[name="opt_boisson"]:checked');
  const boisson = boissonInput ? boissonInput.value : '';

  // Pain
  const painInput = body.querySelector('[name="opt_pain"]:checked');
  const pain = painInput ? painInput.value : (item?.painFixe || '');

  // Crudités
  const crudites = [...body.querySelectorAll('[name="opt_crudites"]:checked')].map(e => e.value);

  // Sauces
  const sauces = [...body.querySelectorAll('[name="opt_sauce"]:checked')].map(e => e.value);

  // Viandes tacos
  const viandes = [...body.querySelectorAll('[name="opt_viande"]:checked')].map(e => e.value);

  // Viande krousty
  const viandeKroustyInput = body.querySelector('[name="opt_viande_krousty"]:checked');
  const viandeKrousty = viandeKroustyInput ? viandeKroustyInput.value : '';

  // Note
  const note = body.querySelector('[name="opt_note"]')?.value || '';

  // Validation viandes tacos
  const itemFull = findItemById(document.getElementById('options-modal').dataset.itemId);
  if (itemFull?.nbViandes && viandes.length !== itemFull.nbViandes) {
    showError(`Veuillez choisir exactement ${itemFull.nbViandes} viande${itemFull.nbViandes > 1 ? 's' : ''}.`);
    return;
  }

  // Construire détail
  const details = [];
  if (format === 'frites') details.push('avec frites');
  if (format === 'menu') details.push(`menu complet${boisson ? ' — boisson: ' + boisson : ''}`);
  if (pain) details.push(pain);
  if (crudites.length) details.push('crudités: ' + crudites.join(', '));
  if (sauces.length) details.push('sauce: ' + sauces.join(' + '));
  if (viandes.length) details.push('viande: ' + viandes.join(' + '));
  if (viandeKrousty) details.push('viande: ' + viandeKrousty);
  if (note) details.push('note: ' + note);

  const lineItem = {
    id: itemFull?.id,
    nom: itemFull?.nom || '',
    detail: details.join(' · '),
    prix: prix,
    qte: 1,
    format, boisson, pain, crudites, sauces, viandes, viandeKrousty, note
  };

  closeOptionsModal();
  if (currentItemCallback) currentItemCallback(lineItem);
}

function showError(msg) {
  let err = document.getElementById('options-error');
  if (!err) {
    err = document.createElement('div');
    err.id = 'options-error';
    err.className = 'options-error';
    document.getElementById('options-body').prepend(err);
  }
  err.textContent = msg;
  setTimeout(() => err.remove(), 3000);
}

// ---- Envoi commande ----
async function envoyerCommande() {
  const nom = document.getElementById('cmd-nom')?.value.trim();
  const tel = document.getElementById('cmd-tel')?.value.trim();
  const note = document.getElementById('cmd-note')?.value.trim();
  const err = document.getElementById('cmd-error');

  if (!nom) { err.textContent = 'Veuillez entrer votre prénom et nom.'; return; }
  if (panier.length === 0) { err.textContent = 'Votre panier est vide.'; return; }

  err.textContent = '';
  const btn = document.getElementById('cmd-submit-btn');
  btn.disabled = true;
  btn.textContent = 'Envoi en cours...';

  const numCmd = getNumCommande();
  const now = new Date();
  const heure = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('fr-FR');

  // Construire résumé commande
  const lignes = panier.map(item => {
    const qte = item.qte || 1;
    return `• ${qte}x ${item.nom}${item.detail ? '\n  ↳ ' + item.detail : ''}\n  Prix: ${(item.prix * qte).toFixed(2)} €`;
  }).join('\n\n');

  const total = totalPanier().toFixed(2);

  const msgEmail = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 🧾 COMMANDE #${numCmd} — ${heure} — ${dateStr}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLIENT
  Nom : ${nom}
  Téléphone : ${tel || '—'}

COMMANDE
${lignes}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TOTAL : ${total} €
  (Paiement en caisse — carte ou espèces)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${note ? '\nNote : ' + note : ''}
  `;

  const commandeObj = {
    numero: numCmd,
    date: dateStr,
    heure,
    client_nom: nom,
    client_tel: tel || '',
    items: panier.map(i => ({ ...i })),
    total: parseFloat(total),
    note: note || '',
    timestamp: now.toISOString()
  };

  try {
    await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
      numero_commande: numCmd,
      date: dateStr,
      heure: heure,
      client_nom: nom,
      client_tel: tel || 'Non renseigné',
      commande_detail: lignes,
      total: total + ' €',
      note_generale: note || 'Aucune',
      message_complet: msgEmail
    });

    sauvegarderCommande(commandeObj);
    viderPanier();
    closeCommandeModal();
    showSuccessModal(numCmd, nom);
  } catch (e) {
    console.error(e);
    err.textContent = 'Erreur lors de l\'envoi. Vérifiez votre connexion ou appelez directement.';
    btn.disabled = false;
    btn.textContent = 'Confirmer la commande';
  }
}

function showSuccessModal(num, nom) {
  const modal = document.getElementById('success-modal');
  if (!modal) return;
  document.getElementById('success-num').textContent = '#' + num;
  document.getElementById('success-nom').textContent = nom;
  modal.classList.add('open');
}

function closeSuccessModal() {
  document.getElementById('success-modal')?.classList.remove('open');
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);

  // Injecter le HTML des modals + panier flottant dans toutes les pages
  injectCommandeUI();
  updateCartUI();

  // Fermer modals sur click extérieur
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeOptionsModal();
      closePanierModal();
      closeCommandeModal();
      closeSuccessModal();
    }
  });
});

function injectCommandeUI() {
  const html = `
<!-- Panier flottant -->
<div id="cart-notif" class="cart-notif"></div>
<button class="cart-fab" onclick="openPanierModal()" aria-label="Voir le panier">
  🛒
  <span class="cart-count" style="display:none">0</span>
</button>

<!-- Modal Options -->
<div id="options-modal" class="modal-overlay" data-item-id="">
  <div class="modal-box">
    <div class="modal-header">
      <div>
        <div class="modal-title" id="options-title"></div>
        <div class="modal-subtitle" id="options-prix-base"></div>
      </div>
      <button class="modal-close" onclick="closeOptionsModal()">✕</button>
    </div>
    <div class="modal-body" id="options-body"></div>
    <div class="modal-footer">
      <button class="btn-modal secondary" onclick="closeOptionsModal()">Annuler</button>
      <button class="btn-modal primary" id="options-add-btn" onclick="confirmerOptions()">Ajouter au panier</button>
    </div>
  </div>
</div>

<!-- Modal Panier -->
<div id="panier-modal" class="modal-overlay">
  <div class="modal-box">
    <div class="modal-header">
      <div class="modal-title">Mon panier</div>
      <button class="modal-close" onclick="closePanierModal()">✕</button>
    </div>
    <div class="modal-body" id="panier-items"></div>
    <div class="panier-footer">
      <div class="panier-total-row">
        <span>Total</span>
        <strong id="panier-total">0,00 €</strong>
      </div>
      <div class="modal-footer">
        <button class="btn-modal secondary" onclick="viderPanier();renderPanierModal()">Vider</button>
        <button class="btn-modal primary" onclick="openCommandeModal(true)">Commander →</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Commande -->
<div id="commande-modal" class="modal-overlay">
  <div class="modal-box">
    <div class="modal-header">
      <div class="modal-title">Finaliser la commande</div>
      <button class="modal-close" onclick="closeCommandeModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="opt-section">
        <div class="opt-label">Prénom et nom <span style="color:#e05">*</span></div>
        <input type="text" id="cmd-nom" placeholder="Ex: Mohamed Dupont" autocomplete="name">
      </div>
      <div class="opt-section">
        <div class="opt-label">Téléphone <small>(facultatif)</small></div>
        <input type="tel" id="cmd-tel" placeholder="06 XX XX XX XX" autocomplete="tel">
      </div>
      <div class="opt-section">
        <div class="opt-label">Note générale <small>(facultatif)</small></div>
        <textarea id="cmd-note" rows="2" placeholder="Remarques supplémentaires..."></textarea>
      </div>
      <div class="cmd-info-box">
        💳 Paiement en caisse : carte bancaire ou espèces
      </div>
      <div class="cmd-error" id="cmd-error"></div>
    </div>
    <div class="modal-footer">
      <button class="btn-modal secondary" onclick="closeCommandeModal()">Retour</button>
      <button class="btn-modal primary" id="cmd-submit-btn" onclick="envoyerCommande()">Confirmer la commande</button>
    </div>
  </div>
</div>

<!-- Modal Succès -->
<div id="success-modal" class="modal-overlay">
  <div class="modal-box success-box">
    <div class="success-icon">✅</div>
    <div class="modal-title">Commande envoyée !</div>
    <p>Votre commande <strong id="success-num"></strong> a bien été transmise.<br>
    Merci <strong id="success-nom"></strong>, à tout de suite !</p>
    <p style="color:#c9bea9;font-size:.9rem">Paiement en caisse — carte ou espèces.</p>
    <button class="btn-modal primary" onclick="closeSuccessModal()" style="margin-top:1rem">Fermer</button>
  </div>
</div>
`;

  document.body.insertAdjacentHTML('beforeend', html);

  // Bind options-modal item id via event delegation
  document.getElementById('options-modal').addEventListener('click', () => {});
}

// ---- Helpers pour les pages HTML ----
function cmdAjouterAuPanier(itemId) {
  const modal = document.getElementById('options-modal');
  modal.dataset.itemId = itemId;
  openOptionsModal(itemId, false);
}

function cmdAcheterMaintenant(itemId) {
  const modal = document.getElementById('options-modal');
  modal.dataset.itemId = itemId;
  openOptionsModal(itemId, true);
}
