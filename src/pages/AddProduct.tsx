import { useState } from 'react';
import { Button, Card, Typography, Input } from '@mui/joy';
import { addProduct } from '../services/api';
import styles from '../styles/AddProduct.module.css';
import { useRouter } from 'next/router';

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      title,
      price,
      description,
      image
    };

    try {
      const response = await addProduct(newProduct);
      console.log('Produit ajouté:', response);
      router.push('/');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du produit:', error);
    }
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Typography level="h4" className={styles.title}>
          Ajouter un Produit
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            placeholder="Titre"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
          <Input
            placeholder="Prix"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={styles.input}
          />
          <Input
            placeholder="Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.input}
          />
          <Input
            placeholder="Image URL"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className={styles.input}
          />
          <Button type="submit" className={styles.button}>
            Ajouter
          </Button>
        </form>
      </Card>
    </div>
  );
}
