import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Grid, 
  Container,
  CircularProgress,
  Alert,
  Box,
  Button,
  Collapse,
  Fade,
  Grow
} from '@mui/material';
import { useCharacters } from '../hooks/useCharacters';

const CharacterList = () => {
  const { characters, loading, error } = useCharacters();
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleLearnMore = (characterId) => {
    setExpandedCardId(expandedCardId === characterId ? null : characterId);
  };

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
          width: '100%'
        }}
      >
        {characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={character.id}>
            <Card 
              sx={{ 
                height: '100%', 
                width: {xs: '75%', sm: '100%', md: '100%', lg: '100%'},
                display: 'flex',
                margin: 'auto',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 3
                }
              }}
            >
              <Box sx={{ position: 'relative' }}>
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
                
                {/* Overlay con animación más suave */}
                <Fade 
                  in={expandedCardId === character.id} 
                  timeout={400}
                  unmountOnExit
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(2px)',
                      zIndex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 2,
                      borderRadius: '4px 4px 0 0'
                    }}
                  >
                    <Grow 
                      in={expandedCardId === character.id} 
                      timeout={600}
                      style={{ transformOrigin: '0 0 0' }}
                    >
                      <Box sx={{ textAlign: 'left', width: '100%' }}>
                        <Typography 
                          variant="h6" 
                          component="h2" 
                          sx={{ 
                            fontWeight: 'bold',
                            fontSize: { xs: '.9rem', sm: '.9rem', md: '1rem' },
                            mb: 2,
                            textAlign: 'center'
                          }}
                        >
                          {character.name}
                        </Typography>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            fontWeight: 'bold',
                            fontSize: { xs: '0.8rem', sm: '0.8rem' },
                            mb: 1
                          }}
                        >
                          Descripción:
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            fontSize: { xs: '0.7rem', sm: '0.7rem' },
                            mb: 0.5
                          }}
                        >
                          • Status: {character.status}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            fontSize: { xs: '0.7rem', sm: '0.7rem' },
                            mb: 0.5
                          }}
                        >
                          • Species: {character.species}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            fontSize: { xs: '0.7rem', sm: '0.7rem' },
                            mb: 0.5
                          }}
                        >
                          • Gender: {character.gender}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            fontSize: { xs: '0.7rem', sm: '0.7rem' },
                            mb: 0.5
                          }}
                        >
                          • Origin: {character.origin.name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            fontSize: { xs: '0.7rem', sm: '0.7rem' },
                            mb: 0.5
                          }}
                        >
                          • Location: {character.location.name}
                        </Typography>
                      </Box>
                    </Grow>
                  </Box>
                </Fade>
              </Box>
              
              <CardContent sx={{ 
                flexGrow: 1, 
                textAlign: 'center', 
                p: { xs: 1.5, sm: 2 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '120px'
              }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Collapse 
                    in={expandedCardId !== character.id} 
                    timeout={300}
                    unmountOnExit
                  >
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
                  </Collapse>
                </Box>
                
                <Box sx={{ 
                  mt: 2, 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  flexShrink: 0
                }}>
                  <Button 
                    size="small" 
                    onClick={() => handleLearnMore(character.id)}
                    sx={{ 
                      fontSize: { xs: '0.7rem', sm: '0.8rem' },
                      textTransform: 'none',
                      color: 'primary.main',
                      textDecoration: 'underline',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  >
                    {expandedCardId === character.id ? 'MOSTRAR MENOS' : 'MOSTRAR MÁS'}
                  </Button>
                </Box>
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