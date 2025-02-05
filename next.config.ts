import { NextConfig } from 'next';

/**
 * Configuration de Next.js.
 * @type {NextConfig}
 */
const nextConfig: NextConfig = {
  // Mode strict de React (recommandé)
  reactStrictMode: true,

  // Configuration des images
  images: {
    // Domaines autorisés pour les images externes
    domains: ['fakestoreapi.com'],
  },

  // Configuration de la compilation TypeScript
  typescript: {
    // Ignorer les erreurs de TypeScript pendant la compilation (optionnel)
    ignoreBuildErrors: false,
  },

  // Configuration de ESLint (optionnel)
  eslint: {
    // Ignorer les erreurs ESLint pendant la compilation (optionnel)
    ignoreDuringBuilds: true,
  },

  // Configuration des en-têtes HTTP (optionnel)
  async headers() {
    return [
      {
        source: '/(.*)', // Appliquer à toutes les routes
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Empêcher l'intégration dans un iframe
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Désactiver la détection automatique du type MIME
          },
        ],
      },
    ];
  },

  // Configuration de la page 404 personnalisée
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },

  // Configuration de la page de fallback pour les routes non trouvées
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(.*)',
          },
        ],
        destination: '/404',
      },
    ];
  },
};

export default nextConfig;
