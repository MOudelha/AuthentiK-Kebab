
const toggle=document.querySelector('[data-nav-toggle]');
const nav=document.querySelector('[data-nav]');
if(toggle&&nav){toggle.addEventListener('click',()=>{const o=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',o?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
