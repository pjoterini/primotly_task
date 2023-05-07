import { Button } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { ICharacter, IFilm, IPlanet } from '../../interfaces/APIinterfaces';
import { getFilms, getPagedData } from '../../utils/requests';

interface IProps {
  setCharacters: Dispatch<SetStateAction<ICharacter[] | null>>;
  setPlanets: Dispatch<SetStateAction<IPlanet[] | null>>;
  setFilms: Dispatch<SetStateAction<IFilm[] | null>>;
  searchValue: string;
}

export const RequestBtn = ({
  setCharacters,
  setPlanets,
  setFilms,
  searchValue,
}: IProps) => {
  const getCharactersAndPlanets = async () => {
    const charactersData = await getPagedData('people', searchValue);
    const planetsData = await getPagedData('planets');
    const filmsData = await getFilms();

    setCharacters(charactersData);
    setPlanets(planetsData);
    setFilms(filmsData);
  };

  return (
    <Button onClick={getCharactersAndPlanets} variant="outlined">
      Get Data
    </Button>
  );
};
