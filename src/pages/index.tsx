import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar/navbar';
import { NavbarProps } from '@/types/navbarProps';
import ProductCard from '../components/ProductCard/ProductCard';
import Pagination from '../components/Pagination/Pagination';
import { fetchProducts } from '../services/api';
import { Product } from '../types/Product';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [productsPerPage, setProductsPerPage] = useState(9); // Par défaut, 9 produits par page
  const [categories, setCategories] = useState<string[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false); // État pour suivre si des résultats sont trouvés

  // Chargement des produits
  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
      updateProductsPerPage(); // Mettre à jour le nombre de produits par page

      // Extraire les catégories uniques
      const uniqueCategories: string[]  = Array.from(new Set(data.map((product: Product) => product.category)));
      setCategories(['all', ...uniqueCategories]);
    };
    loadProducts();
  }, []);

  // Mise à jour du nombre de produits par page en fonction de la largeur de l'écran
  const updateProductsPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      setProductsPerPage(18); // 3 colonnes x 3 lignes
    } else if (screenWidth >= 900) {
      setProductsPerPage(15); // 4 colonnes x 3 lignes
    } else if (screenWidth >= 600) {
      setProductsPerPage(12); // 5 colonnes x 3 lignes
    } else {
      setProductsPerPage(9); // 6 colonnes x 3 lignes
    }
    setTotalPages(Math.ceil(filteredProducts.length / productsPerPage)); // Mettre à jour le nombre total de pages
  };

  // Écouter les changements de taille de l'écran
  useEffect(() => {
    window.addEventListener('resize', updateProductsPerPage);
    return () => window.removeEventListener('resize', updateProductsPerPage);
  }, [filteredProducts]);

  // Filtrage des produits
  useEffect(() => {
    let filtered = products;

    // Filtrer par catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Filtrer par terme de recherche
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
    setTotalPages(Math.ceil(filtered.length / productsPerPage)); // Nombre de pages dynamique
    setNoResults(filtered.length === 0); // Mettre à jour l'état noResults
  }, [searchTerm, selectedCategory, products, productsPerPage]);

  // Gestion de la recherche
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Réinitialiser la pagination
  };

  // Gestion du changement de catégorie
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Réinitialiser la pagination
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} onCategoryChange={handleCategoryChange} categories={categories} />
      <div className={styles.productGrid}>
        {filteredProducts
          .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage) // Produits par page dynamiques
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {noResults && <div className={styles.noResultsMessage}>Aucun résultat trouvé pour "{searchTerm}".</div>}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
