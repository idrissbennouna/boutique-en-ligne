# Projet de Gestion de Boutique de Luxe

Ce projet est une application web de gestion de boutique de luxe. Il comprend une page de connexion sécurisée et une page principale avec un tableau de bord, une gestion des produits, des utilisateurs et des commandes. L'application utilise des graphiques pour visualiser les données et propose une interface utilisateur moderne et responsive.

## Fonctionnalités

### Page de Connexion (`login.html`)
- Formulaire de connexion avec validation côté client.
- Validation statique des identifiants (nom d'utilisateur : `admin`, mot de passe : `admin`).
- Redirection vers la page principale après une connexion réussie.
- Affichage d'un message d'erreur en cas de saisie incorrecte.

### Page Principale (`index.html`)
- **Tableau de bord** :
  - Affichage des statistiques (total des produits, utilisateurs et commandes).
  - Graphiques interactifs pour visualiser les stocks par catégorie, la répartition des clients par région et l'évolution mensuelle des commandes.
- **Gestion des produits** :
  - Ajout, modification, suppression et affichage des produits dans un tableau.
- **Gestion des utilisateurs** :
  - Ajout, modification, suppression et affichage des utilisateurs dans un tableau.
- **Gestion des commandes** :
  - Ajout, modification, suppression et affichage des commandes dans un tableau.
- **Déconnexion** :
  - Bouton de déconnexion pour revenir à la page de connexion.

## Technologies utilisées

- **HTML** : Structure des pages.
- **CSS** : Style et mise en forme des pages.
- **JavaScript** : Logique de connexion, gestion des données et interactions.
- **Chart.js** : Bibliothèque pour la création de graphiques interactifs.

## Structure du projet

- `login.html` : Page de connexion.
- `index.html` : Page principale avec tableau de bord et gestion des données.
- `styles.css` : Feuille de style pour la mise en forme des pages.
- `main.js` : Script principal pour la gestion des données et des interactions.
- `productsChart.js` : Script pour le graphique des produits.
- `usersChart.js` : Script pour le graphique des utilisateurs.
- `ordersChart.js` : Script pour le graphique des commandes.
- `data.json` : Fichier JSON pour stocker les données des produits, utilisateurs et commandes.

## Logique principale (`main.js`)

Le fichier `main.js` contient la logique principale de l'application. Voici les principales fonctionnalités implémentées :

### Gestion des produits
- **Afficher les produits** : Récupère et affiche les produits dans un tableau.
- **Ajouter un produit** : Permet d'ajouter un nouveau produit avec un nom, une catégorie et un stock.
- **Modifier un produit** : Permet de modifier la catégorie et le stock d'un produit existant.
- **Supprimer un produit** : Permet de supprimer un produit de la liste.

### Gestion des utilisateurs
- **Afficher les utilisateurs** : Récupère et affiche les utilisateurs dans un tableau.
- **Ajouter un utilisateur** : Permet d'ajouter un nouvel utilisateur avec une région et un pourcentage.
- **Modifier un utilisateur** : Permet de modifier la région et le pourcentage d'un utilisateur existant.
- **Supprimer un utilisateur** : Permet de supprimer un utilisateur de la liste.

### Gestion des commandes
- **Afficher les commandes** : Récupère et affiche les commandes dans un tableau.
- **Ajouter une commande** : Permet d'ajouter une nouvelle commande avec un mois et un total.
- **Modifier une commande** : Permet de modifier le mois et le total d'une commande existante.
- **Supprimer une commande** : Permet de supprimer une commande de la liste.

### Interaction avec les graphiques
- Les graphiques sont mis à jour dynamiquement en fonction des données des produits, utilisateurs et commandes.
- Les modifications apportées aux données sont reflétées dans les graphiques en temps réel.

### Chargement des données
- Les données sont chargées depuis un fichier `data.json` et affichées dans les tableaux et graphiques.

## Graphique des produits (`productsChart.js`)

Le fichier `productsChart.js` contient la logique pour créer et gérer le graphique des produits. Voici les principales caractéristiques :

- **Type de graphique** : Graphique en barres (`bar`) pour afficher le stock par catégorie.
- **Données initiales** :
  - Catégories : Initialisé à vide, puis rempli dynamiquement.
  - Quantités : Initialisé à vide, puis rempli dynamiquement.
- **Options du graphique** :
  - Titre : "Stock par catégorie".
  - Axes : Axe X pour les catégories et axe Y pour la quantité en stock.
  - Couleurs : Couleurs dynamiques pour les barres.
- **Mise à jour du tableau** :
  - Le tableau des produits est mis à jour en fonction des données du graphique.
  - Les boutons "Modifier" et "Supprimer" permettent de modifier ou supprimer un produit directement depuis le tableau.

## Graphique des utilisateurs (`usersChart.js`)

Le fichier `usersChart.js` contient la logique pour créer et gérer le graphique des utilisateurs. Voici les principales caractéristiques :

- **Type de graphique** : Graphique en camembert (`pie`) pour afficher la répartition des utilisateurs par région.
- **Données initiales** :
  - Régions : Europe, Asie, Amérique, Afrique, Océanie.
  - Pourcentages : 40%, 25%, 20%, 10%, 5%.
- **Options du graphique** :
  - Titre : "Répartition des utilisateurs par région".
  - Couleurs : Couleurs dynamiques pour chaque région.
- **Mise à jour du tableau** :
  - Le tableau des utilisateurs est mis à jour en fonction des données du graphique.
  - Les boutons "Modifier" et "Supprimer" permettent de modifier ou supprimer un utilisateur directement depuis le tableau.

## Graphique des commandes (`ordersChart.js`)

Le fichier `ordersChart.js` contient la logique pour créer et gérer le graphique des commandes. Voici les principales caractéristiques :

- **Type de graphique** : Graphique en ligne (`line`) pour afficher l'évolution mensuelle des commandes.
- **Données initiales** :
  - Mois : Les 12 mois de l'année.
  - Totaux : Des valeurs initiales pour les commandes.
- **Options du graphique** :
  - Titre : "Évolution Mensuelle des Commandes".
  - Axes : Axe X pour les mois et axe Y pour le total des commandes.
  - Couleurs : Fond bleu transparent et bordure bleue pour la ligne.
- **Mise à jour du tableau** :
  - Le tableau des commandes est mis à jour en fonction des données du graphique.
  - Les boutons "Modifier" et "Supprimer" permettent de modifier ou supprimer une commande directement depuis le tableau.

## Styles (`styles.css`)

Le fichier `styles.css` contient les styles pour l'ensemble de l'application. Voici les principales caractéristiques :

### Global Styles
- **Police et couleurs** : Utilisation de polices modernes (Arial) et d'une palette de couleurs claires et sombres pour un design épuré.
- **Mise en page** : Utilisation de `flexbox` pour une mise en page flexible et responsive.

### Navbar
- **Barre de navigation** : Design moderne avec un fond sombre, un logo, un bouton de déconnexion et un sélecteur de langue.
- **Bouton de déconnexion** : Style interactif avec changement de couleur au survol.

### Layout
- **Sidebar** : Menu latéral fixe avec des liens interactifs pour naviguer entre les sections.
- **Contenu principal** : Espace flexible pour afficher les statistiques, les graphiques et les tableaux.

### Cards
- **Cartes de statistiques** : Design simple et moderne pour afficher les totaux (produits, utilisateurs, commandes).

### Charts
- **Graphiques** : Utilisation de `Chart.js` pour des graphiques interactifs et responsives.
- **Conteneurs de graphiques** : Design avec ombres et bordures pour une intégration harmonieuse.

### Tables
- **Tableaux** : Design clair et lisible pour afficher les produits, utilisateurs et commandes.
- **Boutons d'action** : Boutons pour ajouter, modifier ou supprimer des éléments.

### Buttons
- **Boutons interactifs** : Styles pour les boutons d'ajout, d'édition et de suppression avec des effets de survol.

### Responsive Design
- **Adaptabilité** : Mise en page responsive pour une utilisation optimale sur tous les appareils (ordinateurs, tablettes, mobiles).

## Installation

1. Clone ce dépôt sur ton ordinateur :
   ```bash
   git clone https://github.com/ton-utilisateur/ton-projet.git
