# Memo Fresque du Climat
## Liens

En Français:

- [Site officiel](https://fresqueduclimat.org/)
- [Le Wiki du Cl!mat](https://fresqueduclimat.org/wiki)
- [Mémo de La Fresque du Climat en Français](https://memo-fresque-du-climat.onrender.com/)

In English:

- [Official website](https://climatecollage.org/)
- [The Cl!mate Wiki ](https://fresqueduclimat.org/wiki/en)
- [Climate Collage Memo](https://climate-collage-memo.onrender.com/)

## Présentation

[<img src="https://raw.githubusercontent.com/JulienRobberechts/memo-fresque-du-climat/main/src/assets/lang/fr/logo-full-fr.png" width="200">](https://memo-fresque-du-climat.onrender.com/)

Ce site web permet un accès facile et rapide aux cartes de [la Fresque du climat](https://fresqueduclimat.org/).
Les animateurs peuvent facilement consulter sur leur téléphone ou ordinateur  la description de chacune des cartes, les liens importants ou facultatifs ainsi que les liens à ne pas faire et pourquoi. C'est donc un aide-mémoire pour les animateurs plus que pour les participants (à priori).

[<img src="https://raw.githubusercontent.com/JulienRobberechts/memo-fresque-du-climat/main/doc/assets/list.jpg" width="200">](https://memo-fresque-du-climat.onrender.com/#carte-3) [<img src="https://raw.githubusercontent.com/JulienRobberechts/memo-fresque-du-climat/main/doc/assets/details-1.jpg" width="200">](https://memo-fresque-du-climat.onrender.com/cards/3) [<img src="https://raw.githubusercontent.com/JulienRobberechts/memo-fresque-du-climat/main/doc/assets/details-2.png" width="200">](https://memo-fresque-du-climat.onrender.com/cards/3)

### Cas d'usages

Vous pouvez utiliser l'application:

- En tant qu'animateur débutant pour réviser les cartes :memo:
- En tant qu'animateur pour vérifier les liens entre des cartes sur votre Mobile :twisted_rightwards_arrows:
- En tant qu'animateur pour savoir quoi expliquer sur une carte :white_check_mark:
- En tant que participant pour tricher :see_no_evil:
- ... A Vous d'inventer d'autres usages ... (voir section "Que faire pour aider ?")

### Sources de données

#### Sources

Les descriptions et explications des cartes et liens sont toutes issues du [Wiki du Cl!mat](https://fresqueduclimat.org/wiki) en Français et du [Cl!mate Wiki](https://fresqueduclimat.org/wiki/en) en Anglais. Le projet ['Climate Collage Wiki Scraping'](https://github.com/JulienRobberechts/climate-collage-wiki-scraping) permet d'extraire les données de chacun des wiki dans un format JSON afin de les importer dans le Mémo. L'import se fait par lancement de cet outil sur une machine locale d'un développeur. Cet import est réalisé aussi souvent que nécessaire (1 fois par mois environ). L'import étant par nature fragile (de nombreuses erreurs peuvent entraver le processus), il n'est pas envisagé de le faire entièrement automatique pour l'instant.

## Notes pour aux participants du projet

### Canal de communication

Rejoignez nous sur le [canal Telegram](https://t.me/memofdc) pour participer à ce projet.

### Que faire pour aider ?

Voici quelques idées pour s'investir dans ce projet:

- Utiliser et partager le lien de l'application (attention le lien peut changer à l'avenir).
- Proposer une vision et des cas d'usages pour ce site web (exemple: Nous pourrions utiliser le site lors de la formation des animateurs).
- Relire le contenu du site et soumettre vos corrections (orthographe ou autres) directement dans le Wiki source (voir chapitre sources).
- Proposer un logo, icônes et des améliorations de design.
- Proposer des contenus pour la documentation (ici même) et la page A propos.
- Proposer une traduction des cartes et liens dans d'autres langues qu'anglais ou français (pour cela il faut proposer une traduction des 2 fichiers de [ce dossier](https://github.com/JulienRobberechts/memo-fresque-du-climat/tree/main/src/data))
- Proposer des améliorations et nouvelles fonctionnalités (Sur le canal Telegram ou dans l'onglet [Issues](https://github.com/JulienRobberechts/memo-fresque-du-climat/issues) directement).
- Donner votre avis sur la liste des bug et améliorations ouverte [onglet Issues de Github](https://github.com/JulienRobberechts/memo-fresque-du-climat/issues)
- Développer des fonctionnalités si vous savez développer en VueJs.
- Proposer des tâches dans cette liste...

:tada: Merci d'avance pour votre participation au projet :sparkles:

## Notes pour les développeurs

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development

Launch one of those 2 commands:
```
yarn serve-fr
```

```
yarn serve-en
```

### Compiles and minifies for production

Launch one of those 2 commands:

```
yarn build-fr
```

```
yarn build-en
```

### Lints and fixes files

To check code rules:
```
yarn lint
```

To check i18n keys:
```
yarn i18n:report
```
## Autre projet sur les Cartes de la Fresque du Climat

### Collage View

C'est un prototype d'un outil de visualisation de la Fresque du climat.

Les projets sont complémentaires et pourrait être rassemblés à terme dans le même outils. (partagez vos idées sur [Telegram](https://t.me/memofdc))
- [repo github](https://github.com/Marc-AntoineA/collage-view/tree/master/src/assets/collages/climatecollage)
- [site web](https://fresqueduclimat.marc-antoinea.fr/#/)


