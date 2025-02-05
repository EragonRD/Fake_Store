import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '@/components/Navbar/navbar';

describe('Navbar', () => {
  it('should update search term correctly', () => {
    // Rendre le composant Navbar
    render(<Navbar onSearch={jest.fn()} onCategoryChange={jest.fn()} categories={[]} />);

    // Trouver l'élément de recherche
    const searchInput = screen.getByPlaceholderText('Rechercher un produit...');

    // Simuler la saisie d'un terme de recherche
    fireEvent.change(searchInput, { target: { value: 'nouveau terme' } });

    // Vérifier que le terme de recherche a été mis à jour correctement
    expect(searchInput).toHaveValue('nouveau terme');
  });
});
