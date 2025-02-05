import { useEffect, useState } from 'react';
import { addFavorite, removeFavorite, getFavorites } from '../../services/favorites';

const Favorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = getFavorites();
    setFavorites(storedFavorites);
  }, []);

  const handleAddFavorite = (productId: string) => {
    addFavorite(productId);
    setFavorites(getFavorites());
  };

  const handleRemoveFavorite = (productId: string) => {
    removeFavorite(productId);
    setFavorites(getFavorites());
  };

  return (
    <div>
      <h2>Mes favoris</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite}>
            {favorite}
            <button onClick={() => handleRemoveFavorite(favorite)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddFavorite('product_id_example')}>Ajouter un favori</button>
    </div>
  );
};

export default Favorites;
