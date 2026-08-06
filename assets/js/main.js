// ---------- menu mobile ----------
const toggle = document.getElementById('nav-toggle');
const header = document.querySelector('header.site');
if (toggle && header) {
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.querySelectorAll('#mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      header.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- formulaire de contact ----------
// Le formulaire de contact n'a besoin d'aucun JavaScript : il envoie
// directement les réponses par email via FormSubmit.co (voir l'attribut
// "action" sur la balise <form> dans index.html). Voir le README pour
// l'étape d'activation (email de confirmation à valider une seule fois).
