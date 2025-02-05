import { useState, FormEvent } from 'react';
import { Button, Card, Typography, Input, Box } from '@mui/joy';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

export default function Register() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const { register } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation simple des champs
    if (!name || !email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // Simuler l'inscription
    try {
      const newUser = { name, email };
      register(newUser);
      router.push('/'); // Rediriger vers la page d'accueil
    } catch (error) {
      setError('Une erreur est survenue lors de l\'inscription.');
      console.error('Erreur d\'inscription:', error);
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
          Inscription
        </Typography>
        {error && (
          <Typography color="danger" className={styles.error}>
            {error}
          </Typography>
        )}
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
          <Input
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <Button type="submit" className={styles.button}>
            S'inscrire
          </Button>
        </form>
      </Card>
    </Box>
  );
}