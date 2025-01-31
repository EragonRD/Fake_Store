"use client"; // Indique que ce composant est côté client

import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
} from '@mui/material';
import Link from 'next/link';

const pages = [
  { name: 'Accueil', path: '/' },
  { name: 'Produits', path: '/produits' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mon Logo
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          {pages.map((page) => (
            <Link key={page.name} href={page.path} passHref legacyBehavior>
              <Button color="inherit" component="a">
                {page.name}
              </Button>
            </Link>
          ))}
          <Link href="/profile" passHref legacyBehavior>
            <IconButton color="inherit" component="a">
              <Avatar alt="Profil" src="/static/images/avatar/1.jpg" />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;