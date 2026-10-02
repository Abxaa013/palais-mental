# Palais mental

Application d'entraînement à la mémorisation (méthode des lieux), installable sur Android depuis Chrome
et utilisable sans connexion.

## Mettre l'appli en ligne (GitHub Pages, gratuit)

1. Sur github.com, créez un dépôt **public**, par exemple `palais-mental`.
2. Dans le dépôt : **Add file → Upload files**, puis glissez **le contenu** de ce dossier
   (index.html, manifest.webmanifest, sw.js et les dossiers icons et fonts). Validez avec **Commit changes**.
3. **Settings → Pages** : dans « Branch », choisissez `main` et `/ (root)`, puis **Save**.
4. Après une à deux minutes, l'appli est disponible à l'adresse `https://VOTRE-PSEUDO.github.io/palais-mental/`.

## L'installer sur le téléphone

Ouvrez l'adresse dans Chrome, puis menu ⋮ → **Installer l'application**
(selon la version de Chrome : « Ajouter à l'écran d'accueil », puis « Installer »).
L'icône apparaît avec vos autres applis. Après la première ouverture, plus besoin de connexion.

## Modifier l'appli plus tard

Remplacez les fichiers dans le dépôt, puis changez la ligne `const VERSION = 'palais-mental-v1';`
dans `sw.js` (par exemple `v2`). Le téléphone récupère la nouvelle version à l'ouverture suivante.

## Contenu

- `index.html` : l'application et sa base de 1 000 mots
- `manifest.webmanifest` : nom, icônes et affichage plein écran
- `sw.js` : fonctionnement hors ligne
- `icons/` : icônes de l'appli
- `fonts/` : polices IBM Plex Sans et Literata (licence SIL Open Font License, fichiers OFL-*.txt)
