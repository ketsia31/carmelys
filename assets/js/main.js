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
// Animation interactive de la barre amovible Avant / Après
document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.ba-slider-box');

  sliders.forEach(box => {
    const range = box.querySelector('.ba-range-input');
    const beforeImg = box.querySelector('.ba-img-before');
    const divider = box.querySelector('.ba-divider');

    if (range && beforeImg && divider) {
      range.addEventListener('input', (e) => {
        const val = e.target.value;
        beforeImg.style.clipPath = `polygon(0 0, ${val}% 0, ${val}% 100%, 0 100%)`;
        divider.style.left = `${val}%`;
      });


      // Déplacement de la barre amovible Avant / Après
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.ba-container');
  containers.forEach(container => {
    const input = container.querySelector('.ba-slider-input');
    if (input) {
      input.addEventListener('input', (e) => {
        container.style.setProperty('--pos', `${e.target.value}%`);
      });
    }
  });
});
    }
  });
});
