export interface ICharacter {
  name: string;
  homeworld: string;
  films: string[];
}

export interface IPlanet {
  name: string;
  population: string;
  url: string;
}

export interface IFilm {
  title: string;
  release_date: Date;
  opening_crawl: string;
  url: string;
}

export type ApiData = ICharacter[] | IPlanet[];
