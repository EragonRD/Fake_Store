import { useRouter } from 'next/router';
import { Button, Typography } from '@mui/joy';
import styles from '../styles/404.module.css';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Typography level="h1" className={styles.title}>404 - Page non trouvée</Typography>
      <Typography  className={styles.description}>
        La page que vous recherchez n'existe pas.
      </Typography>
      <Button
        variant="plain"
        color="primary"
        onClick={() => router.push('/')}
        className={styles.button}
      >
        Retourner à l'accueil
      </Button>
    </div>
  );
};

export default NotFound;
