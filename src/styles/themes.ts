import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#0070f3', // Bleu Joy UI
          solidHoverBg: '#005bb5', // Bleu plus foncé au survol
        },
        background: {
          body: '#f5f5f5', // Fond de la page (gris clair)
          surface: '#ffffff', // Fond des composants (blanc)
        },
        text: {
          primary: '#333333', // Texte principal (gris foncé)
          secondary: '#666666', // Texte secondaire (gris moyen)
        },
      },
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Coins arrondis pour les boutons
        },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Coins arrondis pour les cartes
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Ombre légère
        },
      },
    },
    JoyInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Coins arrondis pour les champs de texte
        },
      },
    },
    JoySelect: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Coins arrondis pour les dropdowns
        },
      },
    },
  },
});

export default theme;