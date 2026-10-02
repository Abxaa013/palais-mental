# Palais mental

Une application pour s'entraîner à la mémorisation par la méthode des lieux (le « palais mental »). Elle affiche une série de mots à retenir, puis vous aide à vérifier ce que vous avez retenu. Elle s'installe sur Android depuis Chrome et fonctionne sans connexion.

**Ouvrir l'appli :** https://Abxaa013.github.io/palais-mental/

## La méthode des lieux

On imagine un parcours dans un lieu que l'on connaît bien, par exemple son appartement, et on place chaque mot à retenir dans une pièce, une étape du trajet. Pour retrouver les mots, il suffit de refaire mentalement le parcours, dans l'ordre. L'appli fournit les mots, le temps et la vérification ; le palais, c'est vous qui le construisez.

## Fonctionnalités

- **Réglages** : de 1 à 1 000 mots, et un temps de mémorisation en minutes, ou sans limite. Vos derniers réglages sont gardés.
- **Mémorisation** : les mots s'affichent en liste numérotée, ou un par un, chacun dans une « pièce » dessinée comme sur un plan. On passe d'une pièce à l'autre avec les boutons ou en glissant le doigt.
- **Minuteur** : il affiche le temps restant et fait vibrer le téléphone à la fin. Le bouton « J'ai fini » permet d'arrêter plus tôt.
- **Vérification** : vous récitez de mémoire. Un premier toucher sur une ligne révèle le mot, un second le coche si vous l'aviez retenu, et le score se met à jour.
- **Sans répétition** : un mot ne revient pas tant que vous n'avez pas vu les 1 000.
- **Hors ligne** : après la première ouverture, l'appli fonctionne sans connexion.
- **Thème clair ou sombre**, selon le réglage du téléphone.

## L'installer sur Android

1. Ouvrir l'adresse de l'appli dans Chrome.
2. Menu ⋮, puis « Installer l'application ». Selon la version de Chrome : « Ajouter à l'écran d'accueil », puis « Installer ».
3. L'icône apparaît avec vos autres applis.

## La base de mots

La base contient 1 000 mots français concrets et faciles à visualiser, répartis en 15 catégories : maison, cuisine, salle de bain, vêtements, école et bureau, électronique, outils et jardin, nature, animaux, fruits et légumes, plats et boissons, musique, loisirs et fête, véhicules, divers. Elle évite volontairement les lieux et les bâtiments, pour ne pas les confondre avec les pièces de votre palais.

## Technologies

- HTML, CSS et JavaScript, sans bibliothèque ni étape de compilation
- Application web installable (PWA) : un manifeste pour l'icône et l'affichage plein écran, un service worker pour le fonctionnement hors ligne
- Polices IBM Plex Sans et Literata, intégrées au projet
- Réglages et ordre de tirage enregistrés dans le navigateur (`localStorage`) : rien n'est envoyé ailleurs

## Structure du projet

| Fichier | Rôle |
| --- | --- |
| `index.html` | L'application complète, avec sa base de 1 000 mots |
| `manifest.webmanifest` | Nom, icônes et affichage plein écran de l'appli installée |
| `sw.js` | Mise en cache des fichiers pour le fonctionnement hors ligne |
| `icons/` | Icônes de l'appli, dont les versions adaptées aux icônes rondes d'Android |
| `fonts/` | Polices et leurs licences |

## Mettre à jour l'appli

1. Remplacer les fichiers modifiés dans le dépôt : Add file, puis Upload files.
2. Dans `sw.js`, changer la ligne `const VERSION = 'palais-mental-v1';`, par exemple en `v2`.

Le téléphone récupère la nouvelle version à l'ouverture suivante. Sans ce changement de version, il continuerait d'afficher l'ancienne, gardée en cache.

## Crédits

- Polices [IBM Plex Sans](https://github.com/IBM/plex) et [Literata](https://github.com/googlefonts/literata), sous licence SIL Open Font License (fichiers `OFL-*.txt` dans `fonts/`)
- Hébergement : GitHub Pages
