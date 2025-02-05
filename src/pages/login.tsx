import { useState } from 'react';
import { Button, Card, Typography, Input } from '@mui/joy';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: email,
          password: password
        })
      });

      const text = await response.text();
      console.log('Response text:', text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error('Invalid JSON response');
      }

      if (response.ok) {
        // Simuler la connexion réussie
        login({ name: data.user.name, email: data.user.email });
        router.push('/');
      } else {
        alert('Erreur de connexion: ' + data.message);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('Erreur inattendue: ' + error);
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
      </Card>
    </div>
  );
}
