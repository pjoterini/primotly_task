import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { ICharacter } from '../interfaces/character';
import { RequestBtn } from '../requestBtn/RequestBtn';
import { SearchBar } from '../searchBar/SearchBar';

export const ToolBar = () => {
  const [characters, setCharacters] = useState<ICharacter[] | []>([]);

  return (
    <>
      <Stack direction="column">
        <RequestBtn setCharacters={setCharacters} />
        <SearchBar />
      </Stack>

      {characters.map(character => (
        <Box key={character.created}>{character.name}</Box>
      ))}
    </>
  );
};
