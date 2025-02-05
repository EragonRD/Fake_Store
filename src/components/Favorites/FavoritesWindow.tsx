import { useState, useEffect } from 'react';
import { Button, Card, Typography, Modal } from '@mui/joy';
import { getFavorites, removeFavorite } from '../../services/favorites';
import { Product } from '../../types/Product';
import styles from '../../styles/FavoritesWindow.module.css';

interface FavoritesWindowProps {
  onClose: () => void;
}

const FavoritesWindow: React.FC<FavoritesWindowProps> = ({ onClose }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // État pour la pagination
  const itemsPerPage = 2; // Nombre d'éléments par page

  useEffect(() => {
    const storedFavorites = getFavorites();
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (productId: number) => {
    removeFavorite(productId);
    setFavorites(getFavorites());
  };

  // Calcul des produits à afficher pour la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFavorites = favorites.slice(indexOfFirstItem, indexOfLastItem);

  // Fonction pour changer de page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Modal open={true} onClose={onClose}>
      <div className={styles.modal}>
        <Typography level="h4" className={styles.modalTitle}>
          Mes Favoris
        </Typography>
        <Button onClick={onClose} className={styles.closeButton}>
          Fermer
        </Button>
        <div className={styles.favoritesList}>
          {currentFavorites.map((favorite) => (
            <Card key={favorite.id} className={styles.favoriteCard}>
              <img
                src={favorite.image}
                alt={favorite.title}
                className={styles.favoriteImage}
                loading="lazy"
              />
              <Typography level="h5" className={styles.favoriteTitle}>
                {favorite.title}
              </Typography>
              <Typography level="body-sm" className={styles.favoritePrice}>
                {favorite.price} €
              </Typography>
              <Button onClick={() => handleRemoveFavorite(favorite.id)} className={styles.removeButton}>
                Supprimer
              </Button>
            </Card>
          ))}
        </div>
        {/* Pagination */}
        {favorites.length > itemsPerPage && (
          <div className={styles.pagination}>
            <Button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.paginationButton}
            >
              Précédent
            </Button>
            <Typography>
              Page {currentPage} sur {Math.ceil(favorites.length / itemsPerPage)}
            </Typography>
            <Button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(favorites.length / itemsPerPage)}
              className={styles.paginationButton}
            >
              Suivant
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default FavoritesWindow;