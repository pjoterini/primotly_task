import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { ApiData, IFilm } from '../interfaces/APIinterfaces';

export const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const getFilms = async (
  setFilms: Dispatch<SetStateAction<IFilm[] | null>>
) => {
  request
    .get(`/films/`)
    .then(function (response) {
      console.log(response.data);
      setFilms(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getPagedData = async (dataType: string, searchValue = '') => {
  let Counter = 1;
  let nextPage: string | null = 'https://swapi.dev/api/';
  let result: ApiData | null = null;

  do {
    await request
      .get(
        `/${dataType}/${
          searchValue ? `?search=${searchValue}&` : '?'
        }page=${Counter++}`
      )
      .then(function (response) {
        console.log(response.data);

        !result
          ? (result = [...response.data.results])
          : (result = [...result, ...response.data.results]);

        nextPage = response.data.next;
      });
  } while (nextPage);

  return result;
};
