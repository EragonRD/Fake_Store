import { useState, useEffect } from 'react';
import { Button, Card, Typography, Modal } from '@mui/joy';
import { getFavorites, removeFavorite } from '../../services/favorites';
import { Product } from '../../types/Product';
import styles from '../../styles/FavoritesWindow.module.css'

interface FavoritesWindowProps {
  onClose: () => void;
}

const FavoritesWindow: React.FC<FavoritesWindowProps> = ({ onClose }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const storedFavorites = getFavorites();
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (productId: number) => {
    removeFavorite(productId);
    setFavorites(getFavorites());
  };

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
          {favorites.map((favorite) => (
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
      </div>
    </Modal>
  );
};

export default FavoritesWindow;
