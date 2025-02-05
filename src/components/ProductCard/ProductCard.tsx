import { Card, Typography, Button, Modal } from '@mui/joy';
import { useState, useEffect } from 'react';
import { Product } from '../../types/Product';
import styles from './ProductCard.module.css';
import { addFavorite, removeFavorite, getFavorites } from '../../services/favorites';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); // Empêcher la propagation du clic à la carte
    if (isFavorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
    setIsFavorite(!isFavorite);
  };

  // Vérification de la valeur de src
  const imageSrc = product.image || '';

  // Vérifier si le produit est dans les favoris
  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.some((fav: Product) => fav.id === product.id));
  }, [product.id]);

  return (
    <>
      <Card onClick={handleOpen} className={styles.card}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={product.title}
            className={styles.productImage}
            loading="lazy"
          />
        ) : (
          <div className={styles.placeholder}>No Image</div>
        )}
        <Typography level="h4" className={styles.productTitle}>
          {product.title}
        </Typography>
        <Typography level="body-sm" className={styles.productPrice}>
          {product.price} €
        </Typography>
        <Button onClick={handleFavorite} className={styles.favoriteButton}>
          {isFavorite ? '❤️' : '♡'}
        </Button>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <div className={styles.modal}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={product.title}
              className={styles.modalImage}
              loading="lazy"
            />
          ) : (
            <div className={styles.placeholder}>No Image</div>
          )}
          <Typography level="h4" className={styles.modalTitle}>{product.title}</Typography>
          <Typography className={styles.modalDescription}>{product.description}</Typography>
          <Typography className={styles.modalPrice}>{product.price} €</Typography>
          <Button onClick={handleClose}>Fermer</Button>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;
