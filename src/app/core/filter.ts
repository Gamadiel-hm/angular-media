export enum Filters {
  titulo = 'name',
  album = 'album',
  artist = 'artist',
  default = 'default',
}

export const filtersArray: Filters[] = [
  Filters.titulo,
  Filters.album,
  Filters.artist,
];

export interface IconsFilter {
  icon: string;
}

export const objectIcon: IconsFilter[] = [
  {
    icon: 'uil-arrow-up',
  },
  {
    icon: 'uil-arrow-down',
  },
];

export interface ObjectFilter {
  after: Filters;
  before: Filters;
}

export const objectinit: ObjectFilter = {
  after: Filters.default,
  before: Filters.default,
};
