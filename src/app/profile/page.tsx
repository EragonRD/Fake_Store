import * as React from 'react';
import {
  Typography,
  Avatar,
  Box,
  Card,
  CardContent,
  Button,
} from '@mui/material';

export default function ProfilePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        p: 2,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 400,
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Avatar
            alt="Profil Utilisateur"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
          />
         <p>John Doe</p>
            
          
         <p>   Développeur Full Stack</p>
          <p>
                     Passionné par la création d'applications web modernes et performantes.
         </p>
          <Button  color="primary" fullWidth>
            Modifier le Profil
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}