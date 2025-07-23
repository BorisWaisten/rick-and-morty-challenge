import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Grid, 
  Container,
  CircularProgress,
  Alert,
  Box
} from '@mui/material';
import { useCharacters } from '../hooks/useCharacters';

const CharacterList = () => {
  const { characters, loading, error } = useCharacters();

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        py: { xs: 2, sm: 3, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        align="center" 
        sx={{ 
          mb: { xs: 2, sm: 3, md: 4 },
          fontSize: { xs: '1.6rem', sm: '2rem', md: '3rem' }
        }}
      >
        Rick and Morty - Personajes
      </Typography>
      
      <Grid 
        container 
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{ 
          justifyContent: 'center',
          alignItems: 'stretch',
          maxWidth: '1200px',
          width: '100%',
          px: { xs: 1, sm: 2, md: 0 } // Padding horizontal para mobile
        }}
      >
        {characters.map((character) => (
          <Grid item xs={11} sm={6} md={4} lg={3} xl={2} key={character.id}>
            <Card 
              sx={{ 
                height: '100%',
                mx: {xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto'},
                width: {xs: '75%', sm: '100%', md: '100%', lg: '100%'},
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 3
                }
              }}
            >
              <CardMedia
                component="img"
                image={character.image}
                alt={character.name}
                sx={{ 
                  objectFit: {xs: 'contain', sm: 'fill', md: 'fill', lg: 'fill'},
                  width: '100%',
                  height: { xs: 'auto', sm: '240px', md: '260px', lg: '260px' }
                }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: { xs: 1.5, sm: 2 } }}>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  sx={{ 
                    fontWeight: 'bold',
                    fontSize: { xs: '.9rem', sm: '1rem', md: '1.1rem' }
                  }} 
                  gutterBottom
                >
                  {character.name}
                </Typography>
                <Typography 
                  variant="subtitle2" 
                  color="text.secondary" 
                  sx={{ 
                    textAlign: 'left',
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' }
                  }}
                >
                  species: "{character.species}"<br />
                  status: "{character.status}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ mt: { xs: 2, sm: 3, md: 4 }, textAlign: 'center' }}>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
        >
          Mostrando {characters.length} personajes de Rick and Morty
        </Typography>
      </Box>
    </Container>
  );
};

export default CharacterList; 