import { Button } from '@mui/material';
import axios from 'axios';
import { ICharacter } from '../interfaces/character';

interface IProps {
  setCharacters: (arg: ICharacter[]) => void;
}

export const RequestBtn = ({ setCharacters }: IProps) => {
  const handleClick = async () => {
    axios
      .get('https://swapi.dev/api/people/')
      .then(function (response) {
        console.log(response);
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Button onClick={handleClick} variant="outlined">
      Get Data
    </Button>
  );
};
