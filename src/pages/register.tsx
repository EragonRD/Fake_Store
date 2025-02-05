import { useState } from 'react';
import { Button, Card, Typography, Input } from '@mui/joy';
import styles from '../styles/Register.module.css';
import { useRouter } from 'next/router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vérifier si les champs sont remplis
    if (!email || !password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Simuler l'envoi des données à un serveur
    const newUser = { email, password };
    console.log('Simulating POST request to create user:', newUser);

    // Afficher une alerte avec les données envoyées
    alert(JSON.stringify(newUser, null, 2));

    // Rediriger vers la page de connexion
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Typography level="h4" className={styles.title}>
          Inscription
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
            S'inscrire
          </Button>
        </form>
      </Card>
    </div>
  );
}
