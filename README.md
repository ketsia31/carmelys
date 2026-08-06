# Site vitrine Carmelys

Site statique (HTML / CSS / JS, sans framework) prêt à être publié sur **GitHub Pages**.

## Structure

```
index.html
assets/
  css/style.css
  js/main.js
  img/          → photos issues de votre flyer, à remplacer par vos propres visuels
README.md
```

## Publier sur GitHub Pages

1. Créez un nouveau dépôt sur GitHub (ex : `carmelys-site`).
2. Ajoutez tous les fichiers de ce dossier à la racine du dépôt et poussez-les :
   ```bash
   git init
   git add .
   git commit -m "Site vitrine Carmelys"
   git branch -M main
   git remote add origin https://github.com/VOTRE-COMPTE/carmelys-site.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment → Source : Deploy from a branch**, choisissez la branche `main` et le dossier `/ (root)`.
4. Le site sera en ligne quelques minutes après à l'adresse `https://VOTRE-COMPTE.github.io/carmelys-site/`.
5. Pour un nom de domaine personnalisé (ex. `www.carmelys.fr`), ajoutez-le dans **Settings → Pages → Custom domain** et configurez un enregistrement CNAME chez votre registrar.

## Activer le formulaire de contact (via FormSubmit.co)

Le site n'a pas de serveur (GitHub Pages est 100% statique). Le formulaire envoie directement un email via **FormSubmit.co**, un service gratuit — aucune inscription ni JavaScript requis, tout se passe dans l'attribut `action` du formulaire (`index.html`).

**Une seule étape d'activation, à faire une fois le site en ligne :**

1. Publiez le site (voir ci-dessus), puis remplissez et envoyez le formulaire de contact une première fois, depuis le site en ligne.
2. FormSubmit.co envoie automatiquement un email de confirmation à `contactcarmelys@gmail.com` avec un lien **"Activate Form"** (vérifiez aussi les spams).
3. Cliquez sur ce lien une seule fois. À partir de là, tous les envois suivants arrivent directement par email, sans confirmation à refaire.

**À savoir :**
- Le champ caché `_captcha` est désactivé (comme demandé), ce qui simplifie l'envoi mais laisse la porte ouverte au spam automatisé ; un champ anti-robot invisible (`_honey`) est déjà en place pour limiter ça.
- Après l'envoi, FormSubmit affiche sa propre page de confirmation. Si vous voulez rediriger vers une page à vous une fois votre nom de domaine final choisi, ajoutez un champ cascade `<input type="hidden" name="_next" value="https://votre-domaine.fr/merci.html">` dans le formulaire.
- Documentation complète : https://formsubmit.co

## À personnaliser avant mise en ligne

- **"Ils nous ont fait confiance"** : la bande en bas de page affiche pour l'instant des catégories de clients génériques (Particuliers, Copropriétés, etc.). Remplacez-les par les vrais logos ou noms de vos clients/partenaires dès que vous pourrez les partager.
- **Réalisations / Avant-après** : remplacez ou complétez au fil de vos prochains chantiers livrés, en gardant le même format de noms de fichiers dans `assets/img/`.
- **Mentions légales** : pensez à ajouter une page de mentions légales / politique de confidentialité si vous collectez des données via le formulaire (obligatoire en France - RGPD).

## Modifier le contenu

Tout le texte est directement dans `index.html`, les couleurs et polices dans `assets/css/style.css` (variables tout en haut du fichier, section `:root`).
