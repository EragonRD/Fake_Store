import { Product } from '../types/Product';

const FAVORITES_KEY = 'favorites';

// Simuler l'ajout d'un favori
export const addFavorite = (product: Product) => {
  const favorites = getFavorites();
  favorites.push(product);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

// Simuler la suppression d'un favori
export const removeFavorite = (productId: number) => {
  let favorites = getFavorites();
  favorites = favorites.filter((fav: Product) => fav.id !== productId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

// Récupérer les favoris
export const getFavorites = (): Product[] => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};
