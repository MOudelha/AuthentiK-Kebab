// =============================================
// L'AUTHENTIK — DONNÉES MENU (modifiable admin)
// =============================================

const MENU_DATA = {
  sauces: ["Harissa","Blanche","Ketchup","Mayonnaise","Algérienne","Samouraï","Andalouse","Moutarde"],
  crudites: ["Salade","Tomate","Oignon","Maïs"],
  pains: ["Pain","Galette"],
  viandes_tacos: ["Viande kebab","Poulet curry","Steak haché","Cordon bleu","Merguez","Tenders","Nuggets"],
  boissons: [
    { nom: "Coca-Cola", prix: 1.5 },
    { nom: "Coca Cherry", prix: 1.5 },
    { nom: "Fanta Orange", prix: 1.5 },
    { nom: "Perrier", prix: 1.5 },
    { nom: "Capri-Sun", prix: 1.5 }
  ],
  categories: {
    sandwichs: {
      label: "Sandwichs",
      items: [
        { id:"sw-kebab", nom:"Kebab", img:"assets/img/sandwich-kebab.jpg", desc:"Pain/galette, crudités, viande kebab, sauce au choix.", prix:9, avecFrites:10.5, menu:11.5, hasSauce:true, hasCrudites:true, hasPain:true },
        { id:"sw-kebab-geant", nom:"Kebab géant", img:"assets/img/sandwich-kebab-geant.jpg", desc:"Galette, crudités, viande kebab, sauce au choix.", prix:null, avecFrites:null, menu:null, hasSauce:true, hasCrudites:true, hasPain:false, painFixe:"Galette" },
        { id:"sw-algerien", nom:"Sandwich algérien", img:"assets/img/sandwich-algerien.jpg", desc:"Pain/galette, crudités, steak haché, œuf, cheddar, sauce au choix.", prix:9, avecFrites:10.5, menu:11.5, hasSauce:true, hasCrudites:true, hasPain:true },
        { id:"sw-americain", nom:"Sandwich américain", img:"assets/img/sandwich-americain.jpg", desc:"Pain/galette, crudités, steak haché, sauce au choix.", prix:9, avecFrites:10.5, menu:11.5, hasSauce:true, hasCrudites:true, hasPain:true },
        { id:"sw-poulet", nom:"Sandwich poulet mariné", img:"assets/img/sandwich-poulet-marine.jpg", desc:"Pain, crudités, poulet mariné, sauce au choix.", prix:9, avecFrites:10.5, menu:11.5, hasSauce:true, hasCrudites:true, hasPain:true },
        { id:"sw-merguez", nom:"Sandwich merguez", img:"assets/img/sandwich-merguez.jpg", desc:"Pain, frites, 2 merguez, sauce au choix.", prix:9, avecFrites:null, menu:10.5, hasSauce:true, hasCrudites:false, hasPain:false, painFixe:"Pain" },
        { id:"sw-kefta", nom:"Sandwich kefta", img:"assets/img/sandwich-kefta.jpg", desc:"Pain, frites, kefta, sauce au choix.", prix:9, avecFrites:null, menu:10.5, hasSauce:true, hasCrudites:false, hasPain:false, painFixe:"Pain" },
        { id:"sw-tenders", nom:"Sandwich tenders", img:"assets/img/sandwich-tenders.jpg", desc:"Pain, frites, tenders, sauce au choix.", prix:9, avecFrites:null, menu:10.5, hasSauce:true, hasCrudites:false, hasPain:false, painFixe:"Pain" },
        { id:"sw-cordon-bleu", nom:"Sandwich cordon bleu", img:"assets/img/sandwich-cordon-bleu.jpg", desc:"Pain, frites, cordon bleu, sauce au choix.", prix:9, avecFrites:null, menu:10.5, hasSauce:true, hasCrudites:false, hasPain:false, painFixe:"Pain" },
        { id:"sw-vegan", nom:"Sandwich végan", img:"assets/img/sandwich-vegan.jpg", desc:"Pain/galette, crudités, sauce au choix.", prix:9, avecFrites:null, menu:10.5, hasSauce:true, hasCrudites:true, hasPain:true },
        { id:"sw-royal", nom:"Sandwich royal", img:"assets/img/sandwich-royal.jpg", desc:"Pain/galette, crudités, steak haché, merguez, kebab, cheddar, sauce au choix.", prix:9, avecFrites:10.5, menu:11.5, hasSauce:true, hasCrudites:true, hasPain:true },
        { id:"sw-texas", nom:"Sandwich texas", img:"assets/img/sandwich-texas.jpg", desc:"Pain, frites, steak, cordon bleu, cheddar, sauce au choix.", prix:9, avecFrites:null, menu:10.5, hasSauce:true, hasCrudites:false, hasPain:false, painFixe:"Pain" }
      ]
    },
    burgers: {
      label: "Burgers",
      items: [
        { id:"bu-cheese", nom:"Cheeseburger", img:"assets/img/burger-cheeseburger.jpg", desc:"Pain, steak 120g, crudités, cheddar, sauce au choix.", prix:7.5, avecFrites:8.5, menu:9.5, hasSauce:true, hasCrudites:false, hasPain:false },
        { id:"bu-double", nom:"Double cheeseburger", img:"assets/img/burger-double-cheeseburger.jpg", desc:"Pain, crudités, 2 steaks 120g, 2 fromages, sauce au choix.", prix:9.5, avecFrites:10.5, menu:11.5, hasSauce:true, hasCrudites:false, hasPain:false },
        { id:"bu-authentik", nom:"Authentik Burger", img:"assets/img/burger-authentik.jpg", desc:"Pain maison, steak 120g, crudités, lards de bœuf, cheddar.", prix:11.5, avecFrites:12.5, menu:13.5, hasSauce:false, hasCrudites:false, hasPain:false },
        { id:"bu-blue", nom:"Blue cheeseburger", img:"assets/img/burger-blue-cheeseburger.jpg", desc:"Pain maison, steak haché 120g, fromage bleu, oignons caramélisés, lards de bœuf, salade, tomate.", prix:11.5, avecFrites:12.5, menu:13.5, hasSauce:false, hasCrudites:false, hasPain:false },
        { id:"bu-raclette", nom:"Raclette Burger", img:"assets/img/burger-raclette.jpg", desc:"Pain maison, steak 120g, fromage raclette, lards de bœuf, oignons rouges.", prix:9, avecFrites:10.5, menu:11.5, hasSauce:false, hasCrudites:false, hasPain:false },
        { id:"bu-savoyard", nom:"Classic savoyard", img:"assets/img/burger-classic-savoyard.jpg", desc:"Pain maison, steak haché, reblochon, galette de pomme de terre, oignons caramélisés.", prix:11.5, avecFrites:12.5, menu:13.5, hasSauce:false, hasCrudites:false, hasPain:false },
        { id:"bu-chicken", nom:"Chicken burger", img:"assets/img/burger-chicken.jpg", desc:"Pain maison, poulet, oignons caramélisés, salade, tomate.", prix:11.5, avecFrites:12.5, menu:13.5, hasSauce:false, hasCrudites:false, hasPain:false }
      ]
    },
    assiettes: {
      label: "Assiettes & Salades",
      items: [
        { id:"as-kebab", nom:"Assiette kebab", img:"assets/img/assiette-kebab.jpg", desc:"Crudités, viande kebab, frites, sauce au choix.", prix:13.5, hasSauce:true, hasCrudites:false, hasPain:false },
        { id:"as-americaine", nom:"Assiette américaine", img:"assets/img/assiette-americaine.jpg", desc:"Crudités, steak haché 120g, frites, cheddar, sauce au choix.", prix:13.5, hasSauce:true, hasCrudites:false, hasPain:false },
        { id:"as-poulet", nom:"Assiette poulet curry", img:"assets/img/assiette-poulet-curry.jpg", desc:"Crudités, poulet mariné, frites, sauce au choix.", prix:13.5, hasSauce:true, hasCrudites:false, hasPain:false },
        { id:"as-royale", nom:"Assiette royale", img:"assets/img/assiette-royale.jpg", desc:"Crudités, frites, viande kebab, steak, merguez, œuf, fromage KIRI.", prix:18, hasSauce:false, hasCrudites:false, hasPain:false },
        { id:"as-merguez", nom:"Assiette merguez", img:"assets/img/assiette-merguez.jpg", desc:"Crudités, frites, 3 merguez, sauce au choix.", prix:12.5, hasSauce:true, hasCrudites:false, hasPain:false },
        { id:"as-salade-thon", nom:"Salade au thon", img:"assets/img/salade-thon.jpg", desc:"Salade verte, tomate, oignons, thon.", prix:7.5, hasSauce:false, hasCrudites:false, hasPain:false },
        { id:"as-salade-chevre", nom:"Salade au chèvre", img:"assets/img/salade-chevre.jpg", desc:"Salade verte, tomate, oignons, fromage de chèvre.", prix:7.5, hasSauce:false, hasCrudites:false, hasPain:false }
      ]
    },
    krousty_panini: {
      label: "Krousty & Panini",
      items: [
        { id:"kp-krousty", nom:"Krousty", img:"assets/img/krousty.jpg", desc:"Riz, viande au choix (tenders/nuggets/poulet mariné/kebab), oignons, frites, sauce au choix.", prix:null, hasSauce:true, hasCrudites:false, hasPain:false, hasViandeKrousty:true },
        { id:"kp-3fromages", nom:"Panini 3 fromages", img:"assets/img/panini-3-fromages.jpg", desc:"Galette, crudités, 3 fromages, frites, sauce au choix.", prix:6, avecFrites:7.5, menu:9, hasSauce:true, hasCrudites:false, hasPain:false },
        { id:"kp-chevre", nom:"Panini chèvre au miel", img:"assets/img/panini-chevre-miel.jpg", desc:"Galette, crudités, chèvre, miel.", prix:null, hasSauce:false, hasCrudites:false, hasPain:false },
        { id:"kp-kebab", nom:"Panini kebab", img:"assets/img/panini-kebab.jpg", desc:"Galette, crudités, viande kebab, frites, sauce au choix.", prix:6, avecFrites:7.5, menu:9, hasSauce:true, hasCrudites:false, hasPain:false },
        { id:"kp-poulet", nom:"Panini poulet", img:"assets/img/panini-poulet.jpg", desc:"Galette, crudités, poulet, frites, sauce au choix.", prix:6, avecFrites:7.5, menu:9, hasSauce:true, hasCrudites:false, hasPain:false },
        { id:"kp-americain", nom:"Panini américain", img:"assets/img/panini-americain.jpg", desc:"Galette, crudités, steak haché, frites, sauce au choix.", prix:6, avecFrites:7.5, menu:9, hasSauce:true, hasCrudites:false, hasPain:false },
        { id:"kp-nutella", nom:"Panini nutella", img:"assets/img/panini-nutella.jpg", desc:"Version sucrée.", prix:3.5, hasSauce:false, hasCrudites:false, hasPain:false }
      ]
    },
    tacos: {
      label: "Tacos",
      items: [
        { id:"ta-1v", nom:"Tacos 1 viande", img:"assets/img/tacos-1-viande.jpg", desc:"Galette, 1 viande au choix, crudités, frites, sauce au choix.", prix:7.5, hasSauce:true, hasCrudites:false, hasPain:false, nbViandes:1 },
        { id:"ta-2v", nom:"Tacos 2 viandes", img:"assets/img/tacos-2-viandes.jpg", desc:"Galette, 2 viandes au choix, crudités, frites, sauce au choix.", prix:9.5, hasSauce:true, hasCrudites:false, hasPain:false, nbViandes:2 },
        { id:"ta-3v", nom:"Tacos 3 viandes", img:"assets/img/tacos-3-viandes.jpg", desc:"Galette, 3 viandes au choix, crudités, frites, sauce au choix.", prix:11.5, hasSauce:true, hasCrudites:false, hasPain:false, nbViandes:3 }
      ]
    },
    menu_enfant: {
      label: "Menu Enfant",
      items: [
        { id:"me-nuggets", nom:"Menu nuggets", img:"assets/img/menu-enfant-nuggets.jpg", desc:"Pain, crudités, nuggets, sauce au choix. Capri-Sun inclus.", prix:7, hasSauce:true, hasCrudites:false, hasPain:false },
        { id:"me-mini-kebab", nom:"Menu mini kebab", img:"assets/img/menu-enfant-mini-kebab.jpg", desc:"Galette, viande kebab, crudités, frites, sauce au choix. Capri-Sun inclus.", prix:7, hasSauce:true, hasCrudites:false, hasPain:false },
        { id:"me-cheeseburger", nom:"Menu cheeseburger", img:"assets/img/menu-enfant-cheeseburger.jpg", desc:"Pain, crudités, steak, fromage, sauce au choix. Capri-Sun inclus.", prix:7, hasSauce:true, hasCrudites:false, hasPain:false }
      ]
    },
    supplements: {
      label: "Suppléments",
      items: [
        { id:"su-nuggets-4", nom:"Nuggets x4", img:"assets/img/supplement-nuggets.jpg", desc:"4 nuggets.", prix:4.5 },
        { id:"su-nuggets-6", nom:"Nuggets x6", img:"assets/img/supplement-nuggets.jpg", desc:"6 nuggets.", prix:5.5 },
        { id:"su-nuggets-9", nom:"Nuggets x9", img:"assets/img/supplement-nuggets.jpg", desc:"9 nuggets.", prix:6.5 },
        { id:"su-rings-4", nom:"Oignons rings x4", img:"assets/img/supplement-oignons-rings.jpg", desc:"4 oignons rings.", prix:4.5 },
        { id:"su-rings-6", nom:"Oignons rings x6", img:"assets/img/supplement-oignons-rings.jpg", desc:"6 oignons rings.", prix:5.5 },
        { id:"su-rings-9", nom:"Oignons rings x9", img:"assets/img/supplement-oignons-rings.jpg", desc:"9 oignons rings.", prix:6.5 },
        { id:"su-viande", nom:"Viande supplémentaire", img:"assets/img/supplement-viande.jpg", desc:"Supplément viande au choix.", prix:3 }
      ]
    }
  }
};

// Récupère les données menu (admin peut overrider via localStorage)
function getMenuData() {
  try {
    const override = localStorage.getItem('lauthentik_menu_data');
    if (override) return JSON.parse(override);
  } catch(e) {}
  return MENU_DATA;
}

// Sauvegarde les données menu (admin)
function saveMenuData(data) {
  localStorage.setItem('lauthentik_menu_data', JSON.stringify(data));
}

// Trouve un item par son id dans toutes les catégories
function findItemById(id) {
  const data = getMenuData();
  for (const cat of Object.values(data.categories)) {
    const found = cat.items.find(i => i.id === id);
    if (found) return found;
  }
  return null;
}
