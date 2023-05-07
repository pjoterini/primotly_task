import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { ICharacter, IFilm, IPlanet } from '../interfaces/APIinterfaces';
import { Cards } from './cards/Cards';
import { RequestBtn } from './requestBtn/RequestBtn';
import { SearchBar } from './searchBar/SearchBar';

export const Swapi = () => {
  const [characters, setCharacters] = useState<ICharacter[] | null>(null);
  const [planets, setPlanets] = useState<IPlanet[] | null>(null);
  const [films, setFilms] = useState<IFilm[] | null>(null);
  const [searchValue, setSearchValue] = useState('');

  return (
    <Box p={4} maxWidth="1200px">
      <Stack width="100%" mb={4} direction="column" alignItems="start">
        <SearchBar setSearchValue={setSearchValue} />
        <Box ml={1}>
          <RequestBtn
            setCharacters={setCharacters}
            setPlanets={setPlanets}
            setFilms={setFilms}
            searchValue={searchValue}
          />
        </Box>
      </Stack>

      {characters && planets && films && (
        <Cards characters={characters} planets={planets} films={films} />
      )}
    </Box>
  );
};
