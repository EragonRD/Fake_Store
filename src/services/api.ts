import axios from 'axios';

// Récupérer tous les produits
export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
    throw error;
  }
};

// Ajouter un nouveau produit (POST)
export const addProduct = async (newProduct: any) => {
  try {
    const response = await axios.post('https://fakestoreapi.com/products', newProduct);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du produit:', error);
    throw error;
  }
};

// Mettre à jour un produit existant (PUT)
export const updateProduct = async (productId: number, updatedProduct: any) => {
  try {
    const response = await axios.put(`https://fakestoreapi.com/products/${productId}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du produit:', error);
    throw error;
  }
};

// Supprimer un produit (DELETE)
export const deleteProduct = async (productId: number) => {
  try {
    const response = await axios.delete(`https://fakestoreapi.com/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression du produit:', error);
    throw error;
  }
};

// Simuler une connexion (POST)
export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post('https://fakestoreapi.com/auth/login', {
      username,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    throw error;
  }
};
 