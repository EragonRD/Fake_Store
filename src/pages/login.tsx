import { signIn } from 'next-auth/react';
import { Button, Card, Typography, Input } from '@mui/joy';
import { useState, useEffect } from 'react';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.email && user.password) {
      setEmail(user.email);
      setPassword(user.password);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        console.error('Error during sign in:', result.error);
      } else {
        console.log('Sign in successful:', result);
        router.push('/');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Typography level="h4" className={styles.title}>
          Connexion
        </Typography>
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
          variant="plain"
          color="primary"
          onClick={() => signIn('google')}
          className={styles.googleButton}
        >
          Se connecter avec Google
        </Button>
      </Card>
    </div>
  );
}
