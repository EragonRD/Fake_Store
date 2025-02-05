# 🛒 Fakestore 🛒

**Description courte du projet** : Une application e-commerce moderne avec authentification, gestion des favoris, recherche et filtrage des produits, et bien plus encore.

---

## 🚀 **Technologies Utilisées**

- **Frontend** :
  - **React** (avec **Next.js** pour le rendu côté serveur et le routage)
  - **TypeScript** pour un code plus sûr et maintenable
  - **Material-UI (MUI)** pour les composants UI modernes et réactifs
  - **Context API** pour la gestion de l'état global (authentification, favoris, etc.)
  - **Axios** pour les requêtes HTTP vers l'API externe
  - **React Hook Form** pour la gestion des formulaires et la validation
  - **Jest** et **React Testing Library** pour les tests unitaires

- **Backend** (si applicable) :
  - **Supabase** pour la base de données

- **Outils** :
  - **Git** pour le versioning
  - **ESLint** et **Prettier** pour la qualité du code
  - **Webpack** pour le bundling
  
---

## 📋 **Fonctionnalités Implémentées**

### 1. **Authentification et Autorisation**
- **Connexion** : Les utilisateurs peuvent se connecter avec leur email et mot de passe.
- **Inscription** : Les nouveaux utilisateurs peuvent créer un compte.
- **Profil** : Les utilisateurs connectés peuvent mettre à jour leurs informations.
- **Protection des routes** : Les routes protégées redirigent les utilisateurs non authentifiés vers la page de connexion.

### 2. **Navigation**
- **Routing** : Utilisation de **Next.js** pour une navigation fluide entre les pages.
- **Bouton Retour** : Un bouton "Retour" est disponible sur les pages de connexion, d'inscription et de profil pour améliorer l'expérience utilisateur.

### 3. **Utilisation d’une API Externe**
- **API de produits** : Les produits sont récupérés depuis une API externe (par exemple, [FakeStoreAPI](https://fakestoreapi.com/)).
- **Requêtes optimisées** : Utilisation d'**Axios** pour les requêtes HTTP avec gestion des erreurs et mise en cache.

### 4. **Recherche et Filtrage**
- **Barre de recherche** : Les utilisateurs peuvent rechercher des produits par nom ou catégorie.
- **Filtres** : Filtrage des produits par prix, catégorie, etc.

### 5. **Gestion de l'État Global (Context API)**
- **Authentification** : L'état de l'utilisateur (connecté/déconnecté) est géré via **Context API**.
- **Favoris** : Les produits favoris sont stockés dans le contexte et persistés dans le `localStorage`.

### 6. **Tests Unitaires**
- **Tests des composants** : Utilisation de **Jest** et **React Testing Library** pour tester les composants critiques (composants de formulaire, boutons, etc.).
- **Tests d'intégration** : Tests des interactions entre les composants et l'API.

### 7. **Optimisation des Performances**
- **Chargement différé (lazy loading)** : Les composants et les images sont chargés à la demande pour améliorer les performances.
- **Préchargement des données** : Les données critiques sont préchargées pour réduire les temps de chargement.
- **Optimisation des requêtes API** : Les requêtes sont limitées et mises en cache pour éviter les appels inutiles.

### 8. **Gestion des Erreurs**
- **Erreurs API** : Les erreurs de requête API sont capturées et affichées à l'utilisateur de manière conviviale.
- **Validation des formulaires** : Les erreurs de validation sont affichées en temps réel.

### 9. **Formulaires et Validation**
- **React Hook Form** : Utilisé pour gérer les formulaires de connexion, d'inscription et de mise à jour du profil.
- **Validation** : Les champs sont validés côté client avant soumission.

### 10. **Opérations CRUD**
- **Création** : Ajout de nouveaux produits (si applicable).
- **Lecture** : Affichage des produits et des détails du produit.
- **Mise à jour** : Mise à jour des informations du profil utilisateur.
- **Suppression** : Suppression des produits favoris.

### 11. **Pagination des Résultats**
- **Pagination des favoris** : Les produits favoris sont paginés par groupes de 2 pour une meilleure lisibilité.
- **Boutons de navigation** : Boutons "Précédent" et "Suivant" pour naviguer entre les pages.

### 12. **Versioning avec Git**
- **Branches** : Utilisation de branches pour le développement de nouvelles fonctionnalités (`feature/`), les corrections de bugs (`bugfix/`), et les releases (`release/`).
- **Commits** : Messages de commit clairs et descriptifs suivant la convention [Conventional Commits](https://www.conventionalcommits.org/).
- **Pull Requests** : Revue de code obligatoire avant fusion dans la branche principale.

---

## 🛠️ **Installation et Utilisation**

### Prérequis
- **Node.js** (version 16 ou supérieure)
- **npm** ou **yarn**

### Étapes d'installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/votre-projet.git

2. Installez les dépendances :
   ```bash
   cd votre-projet
   npm install

3. Tester le programme :
   ```bash
   npm run dev

4. Ouvrez votre navigateur et accédez à :

    http://localhost:3000
