export interface ObjectFilter {
  after: string;
  before: string;
}

export const objectinit: ObjectFilter = {
  after: '',
  before: '',
};

export enum Filters {
  titulo = 'titulo',
  album = 'album',
  artist = 'artist',
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
