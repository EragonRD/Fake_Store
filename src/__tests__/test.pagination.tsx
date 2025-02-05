import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '@/components/Pagination/Pagination';

describe('Pagination', () => {
  it('should render the Pagination component', () => {
    // Rendre le composant Pagination avec des props par défaut
    render(
      <Pagination
        currentPage={1}
        totalPages={3}
        onPageChange={() => {}}
      />
    );

    // Vérifier que les boutons de pagination sont présents
    const previousButton = screen.getByText('Précédent');
    const nextButton = screen.getByText('Suivant');
    const pageInfo = screen.getByText('Page 1 sur 3');

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(pageInfo).toBeInTheDocument();
  });

  it('should disable the previous button on the first page', () => {
    // Rendre le composant Pagination avec la première page active
    render(
      <Pagination
        currentPage={1}
        totalPages={3}
        onPageChange={() => {}}
      />
    );

    // Vérifier que le bouton précédent est désactivé
    const previousButton = screen.getByText('Précédent');
    expect(previousButton).toBeDisabled();
  });

  it('should disable the next button on the last page', () => {
    // Rendre le composant Pagination avec la dernière page active
    render(
      <Pagination
        currentPage={3}
        totalPages={3}
        onPageChange={() => {}}
      />
    );

    // Vérifier que le bouton suivant est désactivé
    const nextButton = screen.getByText('Suivant');
    expect(nextButton).toBeDisabled();
  });

  it('should call onPageChange when clicking the next button', () => {
    // Fonction mock pour vérifier l'appel de onPageChange
    const handlePageChange = jest.fn();

    // Rendre le composant Pagination avec la première page active
    render(
      <Pagination
        currentPage={1}
        totalPages={3}
        onPageChange={handlePageChange}
      />
    );

    // Simuler un clic sur le bouton suivant
    const nextButton = screen.getByText('Suivant');
    fireEvent.click(nextButton);

    // Vérifier que onPageChange a été appelé avec la page suivante
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  it('should call onPageChange when clicking the previous button', () => {
    // Fonction mock pour vérifier l'appel de onPageChange
    const handlePageChange = jest.fn();

    // Rendre le composant Pagination avec la deuxième page active
    render(
      <Pagination
        currentPage={2}
        totalPages={3}
        onPageChange={handlePageChange}
      />
    );

    // Simuler un clic sur le bouton précédent
    const previousButton = screen.getByText('Précédent');
    fireEvent.click(previousButton);

    // Vérifier que onPageChange a été appelé avec la page précédente
    expect(handlePageChange).toHaveBeenCalledWith(1);
  });
});
 