import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar/navbar';

describe('Navbar', () => {
  it('should render the Navbar component', () => {
    // Rendre le composant Navbar avec des props par défaut
    render(
      <Navbar
        onSearch={() => {}}
        onCategoryChange={() => {}}
        categories={[]}
      />
    );

    // Vérifier que l'élément de recherche est présent
    const searchInput = screen.getByPlaceholderText('Rechercher un produit...');
    expect(searchInput).toBeInTheDocument();
  });
});
