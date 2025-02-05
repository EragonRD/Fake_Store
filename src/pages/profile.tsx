import { useState, FormEvent } from 'react';
import { Button, Card, Typography, Input, Box } from '@mui/joy';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

export default function Profile() {
  const { user, updateProfile, logout } = useAuth();
  const [name, setName] = useState<string>(user?.name || '');
  const [email, setEmail] = useState<string>(user?.email || '');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (user) {
      const updatedUser = { name, email };
      updateProfile(updatedUser);
      router.push('/'); // Rediriger vers la page d'accueil après la mise à jour
    }
  };

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'background.level1',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '16px',
          left: '16px',
        }}
      >
        <Button
          variant="plain"
          color="primary"
          onClick={() => router.push('/')}
        >
          Retour
        </Button>
      </Box>
      <Card className={styles.card}>
        <Typography level="h4" className={styles.title}>
          Profil
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            placeholder="Nom"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <Button type="submit" className={styles.button}>
            Mettre à jour
          </Button>
        </form>
        <Button
          onClick={() => {
            logout();
            router.push('/');
          }}
          className={styles.button}
          variant="outlined"
        >
          Se déconnecter
        </Button>
      </Card>
    </Box>
  );
}