export const addFavorite = (productId: string) => {
	const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
	if (!favorites.includes(productId)) {
	  favorites.push(productId);
	  localStorage.setItem('favorites', JSON.stringify(favorites));
	}
  };
  
  export const removeFavorite = (productId: string) => {
	let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
	favorites = favorites.filter((id: string) => id !== productId);
	localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  export const getFavorites = () => {
	return JSON.parse(localStorage.getItem('favorites') || '[]');
  };
  