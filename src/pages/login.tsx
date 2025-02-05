import { useState, FormEvent } from 'react';
import { Button, Card, Typography, Input, Box } from '@mui/joy';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation simple des champs
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // Simuler une connexion réussie
    try {
      const fakeUser = { name: 'John Doe', email };
      login(fakeUser);
      router.push('/'); // Rediriger vers la page d'accueil
    } catch (error) {
      setError('Une erreur est survenue lors de la connexion.');
      console.error('Erreur de connexion:', error);
    }
  };

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
          Connexion
        </Typography>
        {error && (
          <Typography color="danger" className={styles.error}>
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <Input
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <Button type="submit" className={styles.button}>
            Se connecter
          </Button>
        </form>
        <Button
          onClick={() => router.push('/register')}
          className={styles.button}
          variant="outlined"
        >
          S'inscrire
        </Button>
      </Card>
    </Box>
  );
}