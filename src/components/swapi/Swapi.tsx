import { Container, Stack } from '@mui/material';
import { useState } from 'react';
import { ICharacter, IFilm, IPlanet } from '../interfaces/APIinterfaces';
import { Cards } from './cards/Cards';
import { RequestBtn } from './requestBtn/RequestBtn';
import { SearchBar } from './searchBar/SearchBar';

export enum reqStatus {
  PENDING = 'pending',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export const Swapi = () => {
  const [characters, setCharacters] = useState<ICharacter[] | null>(null);
  const [planets, setPlanets] = useState<IPlanet[] | null>(null);
  const [films, setFilms] = useState<IFilm[] | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [status, setStatus] = useState<reqStatus>(reqStatus.PENDING);

  return (
    <Container maxWidth="lg">
      <Stack
        mb={4}
        sx={{
          alignItems: {
            xs: 'start',
            md: 'center',
          },
        }}
      >
        <SearchBar setSearchValue={setSearchValue} />
        <RequestBtn
          setCharacters={setCharacters}
          setPlanets={setPlanets}
          setFilms={setFilms}
          searchValue={searchValue}
          status={status}
          setStatus={setStatus}
        />
      </Stack>
      <Cards characters={characters} planets={planets} films={films} />
    </Container>
  );
};
