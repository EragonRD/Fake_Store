import { Card, Typography, Button, Modal } from '@mui/joy';
import { useState } from 'react';
import { Product } from '../../types/Product';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Vérification de la valeur de src
  const imageSrc = product.image || '';

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
