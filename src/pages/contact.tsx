import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import { useRouter } from 'next/router';

interface FormElements extends HTMLFormControlsCollection {
  subject: HTMLInputElement;
  message: HTMLTextAreaElement; // Changement de type pour le message
}
interface ContactFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function ContactPage() {
  const router = useRouter();

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
            onClick={() => router.back()}
          >
            Retour
          </Button>
        </Box>

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
          <Typography level="h3" sx={{ mb: 2 }}>
            Contactez-nous
          </Typography>
          <form
            onSubmit={(event: React.FormEvent<ContactFormElement>) => {
              event.preventDefault();
              const formElements = event.currentTarget.elements;
              const data = {
                subject: formElements.subject.value,
                message: formElements.message.value,
              };
              alert(JSON.stringify(data, null, 2));
            }}
          >
            <FormControl>
              <FormLabel>Sujet</FormLabel>
              <Input type="text" name="subject" required />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea name="message" minRows={4} required /> {/* Utilisation de Textarea */}
            </FormControl>
            <Button type="submit" fullWidth sx={{ mt: 2 }}>
              Envoyer
            </Button>
          </form>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
