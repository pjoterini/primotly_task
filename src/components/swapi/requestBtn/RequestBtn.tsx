import DownloadIcon from '@mui/icons-material/Download';
import { Button, CircularProgress, Stack } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { ICharacter, IFilm, IPlanet } from '../../interfaces/APIinterfaces';
import { getFilms, getPagedData } from '../../utils/requests';
import { reqStatus } from '../Swapi';

interface IProps {
  setCharacters: Dispatch<SetStateAction<ICharacter[] | null>>;
  setPlanets: Dispatch<SetStateAction<IPlanet[] | null>>;
  setFilms: Dispatch<SetStateAction<IFilm[] | null>>;
  searchValue: string;
  status: reqStatus;
  setStatus: Dispatch<SetStateAction<reqStatus>>;
}

export const RequestBtn = ({
  setCharacters,
  setPlanets,
  setFilms,
  searchValue,
  status,
  setStatus,
}: IProps) => {
  const getCharactersAndPlanets = async () => {
    setStatus(reqStatus.LOADING);
    const charactersData = await getPagedData('people', searchValue);
    const planetsData = await getPagedData('planets');
    const filmsData = await getFilms();

    setCharacters(charactersData);
    setPlanets(planetsData);
    setFilms(filmsData);
    setStatus(reqStatus.SUCCESS);
  };

  return (
    <Stack mt={1} width="100%" maxWidth="237px" alignItems="center">
      <Button
        color="secondary"
        onClick={getCharactersAndPlanets}
        variant="contained"
        endIcon={<DownloadIcon />}
        sx={{
          width: '100%',
        }}
      >
        get data
      </Button>
      {status === reqStatus.LOADING && (
        <CircularProgress sx={{ mt: 5 }} color="secondary" />
      )}
    </Stack>
  );
};
