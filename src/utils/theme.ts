// utils/theme.ts
import { extendTheme } from "@mui/material";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // Personnalisez le mode clair ici
        primary: {
          main: '#1976d2',
        },
      },
    },
    dark: {
      palette: {
        // Personnalisez le mode sombre ici
        primary: {
          main: '#90caf9',
        },
      },
    },
  },
});

export default theme;