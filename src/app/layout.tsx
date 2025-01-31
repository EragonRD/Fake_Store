// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import theme from '../utils/theme';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
title : "rabah's project",
description: 'Fake boutique',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
     
          {children}
     </body>
    </html>
  );
}