import axios from 'axios';
import { ApiData, IFilm } from '../interfaces/APIinterfaces';

export const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const getFilms = async () => {
  let result: IFilm[] | null = null;

  await request
    .get(`/films/`)
    .then(function (response) {
      result = [...response.data.results];
    })
    .catch(function (error) {
      console.error(error);
    });

  return result;
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
        !result
          ? (result = [...response.data.results])
          : (result = [...result, ...response.data.results]);

        nextPage = response.data.next;
      })
      .catch(function (error) {
        console.error(error);
      });
  } while (nextPage);

  return result;
};
