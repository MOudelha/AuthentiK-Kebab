# Configuration EmailJS — L'Authentik

## Étapes à suivre sur dashboard.emailjs.com

### 1. Créer le Template

Aller dans **Email Templates** → **Create New Template**

**Template ID à utiliser : `template_lauthentik`**

---

### Paramètres du template :

| Champ | Valeur |
|-------|--------|
| Template Name | Commande L'Authentik |
| Template ID | `template_lauthentik` |
| To Email | `kebab.lauthentik@gmail.com` |
| Subject | `🧾 Commande #{{numero_commande}} — {{heure}} — {{client_nom}}` |

---

### Corps du message (copier tel quel dans "Content") :

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 🧾 COMMANDE #{{numero_commande}} — {{heure}} — {{date}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLIENT
  Nom : {{client_nom}}
  Téléphone : {{client_tel}}

COMMANDE
{{commande_detail}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TOTAL : {{total}}
  (Paiement en caisse — carte ou espèces)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Note générale : {{note_generale}}
```

---

### 2. Vérifier les clés (déjà configurées dans le code)

- **Service ID** : `service_bpji14a`  
- **Template ID** : `template_lauthentik` ← doit correspondre exactement  
- **Public Key** : `BtYKjzMMSaT4wc-PW`

---

### 3. Tester

Cliquer **Save** puis **Test** dans EmailJS pour vérifier que `kebab.lauthentik@gmail.com` reçoit bien l'email.

---

## Structure des fichiers ajoutés

```
assets/
  css/
    commande.css        ← Styles panier + modals
  js/
    menu-data.js        ← Toutes les données menu (modifiables)
    commander.js        ← Logique panier + commande + EmailJS
admin.html              ← Page administration (mot de passe: Lauthentik@2025)
EMAILJS_SETUP.md        ← Ce fichier
```

## Page admin

URL : `votre-site/admin.html`  
Mot de passe : `Lauthentik@2025`

Fonctionnalités :
- Commandes du jour avec statistiques
- Historique global avec recherche et filtre par date
- Export CSV
- Modifier les prix (seul / avec frites / menu complet)
- Ajouter/supprimer sauces, boissons, crudités
