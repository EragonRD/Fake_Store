import { useRouter } from 'next/router';
import { Input, Button } from '@mui/joy';
import styles from './Navbar.module.css';
import { useState } from 'react';
import FavoritesWindow from '../Favorites/FavoritesWindow';

// Définition des props de la Navbar
interface NavbarProps {
  onSearch: (term: string) => void; // Fonction appelée lors de la recherche
  onCategoryChange: (category: string) => void; // Fonction appelée lors du changement de catégorie
  categories: string[]; // Liste des catégories
}

// Composant Navbar
const Navbar: React.FC<NavbarProps> = ({ onSearch, onCategoryChange, categories }) => {
  const router = useRouter(); // Hook pour la navigation
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showFavorites, setShowFavorites] = useState(false);

  // Gestion de la recherche
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); // Transmet le terme de recherche au composant parent
  };

  // Redirection vers la page d'accueil
  const handleLogoClick = () => {
    router.push('/');
  };

  // Redirection vers la page de contact
  const handleContactClick = () => {
    router.push('/contact');
  };

  // Redirection vers la page de profil
  const handleProfileClick = () => {
    router.push('/profile');
  };

  // Redirection vers la page d'ajout de produit
  const handleAddProductClick = () => {
    router.push('/AddProduct');
  };

  // Ouvrir la fenêtre des favoris
  const handleOpenFavorites = () => {
    setShowFavorites(true);
  };

  // Fermer la fenêtre des favoris
  const handleCloseFavorites = () => {
    setShowFavorites(false);
  };

  return (
    <div className={styles.navbar}>
      {/* Logo à gauche */}
      <div className={styles.logo} onClick={handleLogoClick}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png' alt="Logo" className={styles.logoImage} loading="lazy" />
      </div>

      {/* Searchbar et dropdown de catégorie au centre */}
      <div className={styles.searchContainer}>
        <Input
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
          variant="outlined"
          color="primary"
          size="sm" // Taille plus petite
        />
        <select onChange={(e) => onCategoryChange(e.target.value)} className={styles.categoryDropdown}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Boutons à droite */}
      <div className={styles.buttonsContainer}>
        <Button
          variant="plain"
          color="primary"
          onClick={() => router.push('/')}
        >
          Accueil
        </Button>
        <Button
          variant="plain"
          color="primary"
          onClick={handleContactClick}
        >
          Contact
        </Button>
        <Button
          variant="plain"
          color="primary"
          onClick={handleAddProductClick}
        >
          Ajouter un Produit
        </Button>
        <Button
          variant="plain"
          color="primary"
          onClick={handleOpenFavorites}
        >
          Favoris
        </Button>
        <div className={styles.profileButtonContainer}>
          <Button
            variant="plain"
            color="primary"
            onClick={handleProfileClick}
          >
            Profil
          </Button>
        </div>
      </div>

      {/* Fenêtre des favoris */}
      {showFavorites && <FavoritesWindow onClose={handleCloseFavorites} />}
    </div>
  );
};

export default Navbar;
