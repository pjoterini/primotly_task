import { DialogTitle, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import { ICharacter, IFilm } from '../../../interfaces/APIinterfaces';

interface IProps {
  character: ICharacter;
  films: IFilm[];
}

export default function Modal({ character, films }: IProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Movies
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          px={4}
          py={2}
        >
          <DialogTitle>{character.name} appeared in:</DialogTitle>
          <Stack spacing={1} pb={2}>
            {films
              .filter(film =>
                character.films.some(element => element === film.url)
              )
              .map(film => (
                <Stack
                  p={2}
                  spacing={1}
                  key={film.title}
                  border="1px solid lightgray"
                >
                  <Typography variant="h6">{film.title}</Typography>
                  <Typography>
                    Release Date: {film.release_date.toString()}
                  </Typography>
                  <Typography>{film.opening_crawl.slice(0, 130)}...</Typography>
                </Stack>
              ))}
          </Stack>
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
        </Stack>
      </Dialog>
    </>
  );
}
