interface ListNav {
  title: string;
  icon: string;
  route: string;
}
interface ListNavOptions {
  title: string;
  icon: string;
}

export interface MainMenu {
  nav: ListNav[];
  acctions: ListNavOptions[];
}

export const listNavInit: MainMenu = {
  nav: [
    {
      icon: 'uil-estate',
      title: 'Home',
      route: '/tracks',
    },
    {
      icon: 'uil-search',
      title: 'Buscar',
      route: '/history',
    },
    {
      icon: 'uil-books',
      title: 'Tu biblioteca',
      route: '/favorites',
    },
  ],
  acctions: [
    {
      title: 'Crear lista',
      icon: 'uil-book-medical',
    },
    {
      title: 'Canciones Favoritas',
      icon: 'uil-heart-alt',
    },
  ],
};

export interface OptionsNav {
  title: string;
}

export const optionsNavInit: OptionsNav[] = [
  {
    title: 'Mi lista',
  },
];
