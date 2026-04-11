// =============================================
// L'AUTHENTIK — DONNÉES MENU
// =============================================

const MENU_DATA = {
  sauces: ["Harissa","Blanche","Ketchup","Mayonnaise","Algérienne","Samouraï","Andalouse","Moutarde"],
  crudites: ["Salade","Tomate","Oignon","Maïs"],
  crudites_max: 3,
  sauces_max: 2,
  pains: ["Pain","Galette"],
  viandes_tacos: ["Viande kebab","Poulet curry","Steak haché","Cordon bleu","Merguez","Tenders","Nuggets"],
  boissons: [
    { nom:"Coca-Cola", prix:1.5 },
    { nom:"Coca Cherry", prix:1.5 },
    { nom:"Fanta Orange", prix:1.5 },
    { nom:"Perrier", prix:1.5 },
    { nom:"Capri-Sun", prix:1.5 }
  ],
  horaires: [
    { jour:"Dimanche",  matin:"7h00–14h00",  soir:"18h00–22h30", ferme:false },
    { jour:"Lundi",     matin:"11h00–14h30", soir:"18h00–22h30", ferme:false },
    { jour:"Mardi",     matin:"11h00–14h30", soir:"18h00–22h30", ferme:false },
    { jour:"Mercredi",  matin:"11h00–14h30", soir:"18h00–22h30", ferme:false },
    { jour:"Jeudi",     matin:"11h00–14h30", soir:"18h00–22h30", ferme:false },
    { jour:"Vendredi",  matin:"11h00–14h30", soir:"18h00–22h30", ferme:false },
    { jour:"Samedi",    matin:"",            soir:"",             ferme:true  }
  ],
  categories: {
    sandwichs: {
      label: "Sandwichs",
      items: [
        { id:"sw-kebab",       actif:true, nom:"Kebab",                  img:"assets/img/sandwich-kebab.jpg",         desc:"Pain/galette, crudités, viande kebab, sauce au choix.",                            prix:9,    avecFrites:10.5, menu:11.5, hasSauce:true,  hasCrudites:true,  hasPain:true },
        { id:"sw-kebab-geant", actif:true, nom:"Kebab géant",            img:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop", desc:"Galette, crudités, viande kebab grande portion, sauce au choix.", prix:null, avecFrites:null, menu:null, hasSauce:true, hasCrudites:true, hasPain:false, painFixe:"Galette" },
        { id:"sw-algerien",    actif:true, nom:"Sandwich algérien",      img:"assets/img/sandwich-algerien.jpg",      desc:"Pain/galette, crudités, steak haché, oeuf, cheddar, sauce au choix.",              prix:9,    avecFrites:10.5, menu:11.5, hasSauce:true,  hasCrudites:true,  hasPain:true },
        { id:"sw-americain",   actif:true, nom:"Sandwich américain",     img:"assets/img/sandwich-americain.jpg",     desc:"Pain/galette, crudités, steak haché, sauce au choix.",                            prix:9,    avecFrites:10.5, menu:11.5, hasSauce:true,  hasCrudites:true,  hasPain:true },
        { id:"sw-poulet",      actif:true, nom:"Sandwich poulet mariné", img:"assets/img/sandwich-poulet-marine.jpg", desc:"Pain, crudités, poulet mariné, sauce au choix.",                                  prix:9,    avecFrites:10.5, menu:11.5, hasSauce:true,  hasCrudites:true,  hasPain:true },
        { id:"sw-merguez",     actif:true, nom:"Sandwich merguez",       img:"assets/img/sandwich-merguez.jpg",       desc:"Pain, frites, 2 merguez, sauce au choix.",                                       prix:9,    avecFrites:null, menu:10.5, hasSauce:true,  hasCrudites:false, hasPain:false, painFixe:"Pain" },
        { id:"sw-kefta",       actif:true, nom:"Sandwich kefta",         img:"assets/img/sandwich-kefta.jpg",         desc:"Pain, frites, kefta, sauce au choix.",                                           prix:9,    avecFrites:null, menu:10.5, hasSauce:true,  hasCrudites:false, hasPain:false, painFixe:"Pain" },
        { id:"sw-tenders",     actif:true, nom:"Sandwich tenders",       img:"assets/img/sandwich-tenders.jpg",       desc:"Pain, frites, tenders, sauce au choix.",                                         prix:9,    avecFrites:null, menu:10.5, hasSauce:true,  hasCrudites:false, hasPain:false, painFixe:"Pain" },
        { id:"sw-cordon-bleu", actif:true, nom:"Sandwich cordon bleu",   img:"assets/img/sandwich-cordon-bleu.jpg",   desc:"Pain, frites, cordon bleu, sauce au choix.",                                     prix:9,    avecFrites:null, menu:10.5, hasSauce:true,  hasCrudites:false, hasPain:false, painFixe:"Pain" },
        { id:"sw-vegan",       actif:true, nom:"Sandwich végan",         img:"assets/img/sandwich-vegan.jpg",         desc:"Pain/galette, crudités, sauce au choix.",                                        prix:9,    avecFrites:null, menu:10.5, hasSauce:true,  hasCrudites:true,  hasPain:true },
        { id:"sw-royal",       actif:true, nom:"Sandwich royal",         img:"assets/img/sandwich-royal.jpg",         desc:"Pain/galette, crudités, steak haché, merguez, kebab, cheddar, sauce au choix.",  prix:9,    avecFrites:10.5, menu:11.5, hasSauce:true,  hasCrudites:true,  hasPain:true },
        { id:"sw-texas",       actif:true, nom:"Sandwich texas",         img:"assets/img/sandwich-texas.jpg",         desc:"Pain, frites, steak, cordon bleu, cheddar, sauce au choix.",                    prix:9,    avecFrites:null, menu:10.5, hasSauce:true,  hasCrudites:false, hasPain:false, painFixe:"Pain" }
      ]
    },
    burgers: {
      label: "Burgers",
      items: [
        { id:"bu-cheese",    actif:true, nom:"Cheeseburger",         img:"assets/img/burger-cheeseburger.jpg",        desc:"Pain, steak 120g, crudités, cheddar, sauce au choix.",                               prix:7.5,  avecFrites:8.5,  menu:9.5  },
        { id:"bu-double",    actif:true, nom:"Double cheeseburger",  img:"assets/img/burger-double-cheeseburger.jpg", desc:"Pain, crudités, 2 steaks 120g, 2 fromages, sauce au choix.",                        prix:9.5,  avecFrites:10.5, menu:11.5 },
        { id:"bu-authentik", actif:true, nom:"Authentik Burger",     img:"assets/img/burger-authentik.jpg",           desc:"Pain maison, steak 120g, crudités, lards de boeuf, cheddar.",                      prix:11.5, avecFrites:12.5, menu:13.5 },
        { id:"bu-blue",      actif:true, nom:"Blue cheeseburger",    img:"assets/img/burger-blue-cheeseburger.jpg",   desc:"Pain maison, steak 120g, fromage bleu, oignons caramélisés, lards de boeuf.",      prix:11.5, avecFrites:12.5, menu:13.5 },
        { id:"bu-raclette",  actif:true, nom:"Raclette Burger",      img:"assets/img/burger-raclette.jpg",            desc:"Pain maison, steak 120g, fromage raclette, lards de boeuf, oignons rouges.",       prix:9,    avecFrites:10.5, menu:11.5 },
        { id:"bu-savoyard",  actif:true, nom:"Classic savoyard",     img:"assets/img/burger-classic-savoyard.jpg",   desc:"Pain maison, steak haché, reblochon, galette pomme de terre, oignons caramélisés.", prix:11.5, avecFrites:12.5, menu:13.5 },
        { id:"bu-chicken",   actif:true, nom:"Chicken burger",       img:"assets/img/burger-chicken.jpg",             desc:"Pain maison, poulet, oignons caramélisés, salade, tomate.",                        prix:11.5, avecFrites:12.5, menu:13.5 }
      ]
    },
    assiettes: {
      label: "Assiettes & Salades",
      items: [
        { id:"as-kebab",         actif:true, nom:"Assiette kebab",         img:"assets/img/assiette-kebab.jpg",         desc:"Crudités, viande kebab, frites, sauce au choix.",                       prix:13.5, hasSauce:true  },
        { id:"as-americaine",    actif:true, nom:"Assiette américaine",    img:"assets/img/assiette-americaine.jpg",    desc:"Crudités, steak haché 120g, frites, cheddar, sauce au choix.",         prix:13.5, hasSauce:true  },
        { id:"as-poulet",        actif:true, nom:"Assiette poulet curry",  img:"assets/img/assiette-poulet-curry.jpg",  desc:"Crudités, poulet mariné, frites, sauce au choix.",                      prix:13.5, hasSauce:true  },
        { id:"as-royale",        actif:true, nom:"Assiette royale",        img:"assets/img/assiette-royale.jpg",        desc:"Crudités, frites, viande kebab, steak, merguez, oeuf, fromage KIRI.",  prix:18,   hasSauce:false },
        { id:"as-merguez",       actif:true, nom:"Assiette merguez",       img:"assets/img/assiette-merguez.jpg",       desc:"Crudités, frites, 3 merguez, sauce au choix.",                         prix:12.5, hasSauce:true  },
        { id:"as-salade-thon",   actif:true, nom:"Salade au thon",         img:"assets/img/salade-thon.jpg",            desc:"Salade verte, tomate, oignons, thon.",                                 prix:7.5,  hasSauce:false },
        { id:"as-salade-chevre", actif:true, nom:"Salade au chèvre",       img:"assets/img/salade-chevre.jpg",          desc:"Salade verte, tomate, oignons, fromage de chèvre.",                   prix:7.5,  hasSauce:false }
      ]
    },
    krousty_panini: {
      label: "Krousty & Panini",
      items: [
        { id:"kp-krousty",   actif:true, nom:"Krousty",              img:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop", desc:"Riz, viande au choix (tenders/nuggets/poulet mariné/kebab), oignons, frites, sauce fromagère maison.", prix:null, hasSauce:true, hasViandeKrousty:true },
        { id:"kp-3fromages", actif:true, nom:"Panini 3 fromages",    img:"assets/img/panini-3-fromages.jpg",   desc:"Galette, crudités, 3 fromages, frites, sauce au choix.",           prix:6,   avecFrites:7.5, menu:9, hasSauce:true },
        { id:"kp-chevre",    actif:true, nom:"Panini chèvre au miel",img:"https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600&h=400&fit=crop", desc:"Galette, fromage de chèvre, miel, sauce au choix.", prix:null, hasSauce:false },
        { id:"kp-kebab",     actif:true, nom:"Panini kebab",         img:"assets/img/panini-kebab.jpg",        desc:"Galette, crudités, viande kebab, frites, sauce au choix.",         prix:6,   avecFrites:7.5, menu:9, hasSauce:true },
        { id:"kp-poulet",    actif:true, nom:"Panini poulet",        img:"assets/img/panini-poulet.jpg",       desc:"Galette, crudités, poulet, frites, sauce au choix.",               prix:6,   avecFrites:7.5, menu:9, hasSauce:true },
        { id:"kp-americain", actif:true, nom:"Panini américain",     img:"assets/img/panini-americain.jpg",    desc:"Galette, crudités, steak haché, frites, sauce au choix.",          prix:6,   avecFrites:7.5, menu:9, hasSauce:true },
        { id:"kp-nutella",   actif:true, nom:"Panini nutella",       img:"assets/img/panini-nutella.jpg",      desc:"Version sucrée au nutella.",                                       prix:3.5, hasSauce:false }
      ]
    },
    tacos: {
      label: "Tacos",
      items: [
        { id:"ta-1v", actif:true, nom:"Tacos 1 viande",  img:"assets/img/tacos-1-viande.jpg",  desc:"Galette, 1 viande au choix, crudités, frites, sauce au choix.",  prix:7.5,  hasSauce:true, nbViandes:1 },
        { id:"ta-2v", actif:true, nom:"Tacos 2 viandes", img:"assets/img/tacos-2-viandes.jpg", desc:"Galette, 2 viandes au choix, crudités, frites, sauce au choix.", prix:9.5,  hasSauce:true, nbViandes:2 },
        { id:"ta-3v", actif:true, nom:"Tacos 3 viandes", img:"assets/img/tacos-3-viandes.jpg", desc:"Galette, 3 viandes au choix, crudités, frites, sauce au choix.", prix:11.5, hasSauce:true, nbViandes:3 }
      ]
    },
    menu_enfant: {
      label: "Menu Enfant",
      items: [
        { id:"me-nuggets",      actif:true, nom:"Menu nuggets",      img:"assets/img/menu-enfant-nuggets.jpg",      desc:"Pain, crudités, nuggets, sauce au choix. Capri-Sun inclus.",           prix:7, hasSauce:true },
        { id:"me-mini-kebab",   actif:true, nom:"Menu mini kebab",   img:"assets/img/menu-enfant-mini-kebab.jpg",   desc:"Galette, viande kebab, crudités, frites, sauce au choix. Capri-Sun.", prix:7, hasSauce:true },
        { id:"me-cheeseburger", actif:true, nom:"Menu cheeseburger", img:"assets/img/menu-enfant-cheeseburger.jpg", desc:"Pain, crudités, steak, fromage, sauce au choix. Capri-Sun inclus.",   prix:7, hasSauce:true }
      ]
    },
    supplements: {
      label: "Suppléments",
      items: [
        { id:"su-nuggets-4", actif:true, nom:"Nuggets x4",           img:"assets/img/supplement-nuggets.jpg",       desc:"4 nuggets.",          prix:4.5 },
        { id:"su-nuggets-6", actif:true, nom:"Nuggets x6",           img:"assets/img/supplement-nuggets.jpg",       desc:"6 nuggets.",          prix:5.5 },
        { id:"su-nuggets-9", actif:true, nom:"Nuggets x9",           img:"assets/img/supplement-nuggets.jpg",       desc:"9 nuggets.",          prix:6.5 },
        { id:"su-rings-4",   actif:true, nom:"Oignons rings x4",     img:"assets/img/supplement-oignons-rings.jpg", desc:"4 oignons rings.",    prix:4.5 },
        { id:"su-rings-6",   actif:true, nom:"Oignons rings x6",     img:"assets/img/supplement-oignons-rings.jpg", desc:"6 oignons rings.",    prix:5.5 },
        { id:"su-rings-9",   actif:true, nom:"Oignons rings x9",     img:"assets/img/supplement-oignons-rings.jpg", desc:"9 oignons rings.",    prix:6.5 },
        { id:"su-viande",    actif:true, nom:"Viande supplémentaire", img:"assets/img/supplement-viande.jpg",        desc:"Supplément viande.", prix:3   }
      ]
    }
  }
};

function getMenuData() {
  try {
    const s = localStorage.getItem('lauthentik_menu_data');
    if (s) {
      const d = JSON.parse(s);
      if (!d.crudites_max) d.crudites_max = 3;
      if (!d.sauces_max)   d.sauces_max   = 2;
      if (!d.horaires)     d.horaires     = MENU_DATA.horaires;
      return d;
    }
  } catch(e) {}
  return MENU_DATA;
}

function saveMenuData(data) {
  localStorage.setItem('lauthentik_menu_data', JSON.stringify(data));
}

function findItemById(id) {
  const data = getMenuData();
  for (const cat of Object.values(data.categories)) {
    const found = cat.items.find(i => i.id === id);
    if (found) return found;
  }
  return null;
}
