import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import { IconButton, IconButtonProps } from '@mui/joy';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  bio: HTMLInputElement;
}
interface ProfileFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <IconButton
      aria-label="toggle light/dark mode"
      size="sm"
      variant="outlined"
      disabled={!mounted}
      onClick={(event: any) => {
        setMode(mode === 'light' ? 'dark' : 'light');
        onClick?.(event);
      }}
      {...other}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function ProfilePage() {
  return (
    <CssVarsProvider defaultColorScheme="dark">
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s',
          },
        }}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: 'background.level1',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '400px',
            p: 3,
            borderRadius: 'sm',
            boxShadow: 'md',
            backgroundColor: 'background.surface',
          }}
        >
          <Box
            component="header"
            sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}
          >
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <IconButton variant="soft" color="primary" size="sm">
                <BadgeRoundedIcon />
              </IconButton>
              <Typography level="title-lg">Profil</Typography>
            </Box>
            <ColorSchemeToggle />
          </Box>
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <form
              onSubmit={(event: React.FormEvent<ProfileFormElement>) => {
                event.preventDefault();
                const formElements = event.currentTarget.elements;
                const data = {
                  name: formElements.name.value,
                  email: formElements.email.value,
                  bio: formElements.bio.value,
                };
                alert(JSON.stringify(data, null, 2));
              }}
            >
              <FormControl>
                <FormLabel>Nom</FormLabel>
                <Textarea name="message" minRows={4} required />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Textarea name="message" minRows={4} required />
              </FormControl>
              <FormControl>
                <FormLabel>Bio</FormLabel>
                <Textarea name="message" minRows={4} required />
              </FormControl>
              <Button type="submit" fullWidth sx={{ mt: 2 }}>
                Enregistrer
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}