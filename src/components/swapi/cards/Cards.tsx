import { Box, Grid, Paper, Typography, styled } from '@mui/material';
import Modal from './modal/Modal';
import { ICharacter, IFilm, IPlanet } from '../../interfaces/APIinterfaces';

interface IProps {
  characters: ICharacter[];
  planets: IPlanet[];
  films: IFilm[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'start',
  color: theme.palette.text.secondary,
}));

export const Cards = ({ characters, planets, films }: IProps) => {
  return (
    <Grid width="100%" container spacing={2}>
      {characters.map(character => (
        <Grid xs={12} md={6} lg={4} item key={character.name}>
          <Item>
            <Typography mb={1} variant="h6">
              {character.name}
            </Typography>
            {planets
              .filter(planet => planet.url === character.homeworld)
              .map(planet => (
                <Box mb={2} key={planet.name}>
                  <Typography mb={0.5} variant="body2">
                    Homeworld: {planet.name}
                  </Typography>
                  <Typography variant="body2">
                    Planet Population: {planet.population}
                  </Typography>
                </Box>
              ))}
            <Modal character={character} films={films} />
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};
