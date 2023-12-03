interface ListNav {
  title: string;
  icon: string;
}

export interface MainMenu {
  nav: ListNav[];
  acctions: ListNav[];
}

export const listNavInit: MainMenu = {
  nav: [
    {
      icon: 'uil-estate',
      title: 'Home',
    },
    {
      icon: 'uil-search',
      title: 'Buscar',
    },
    {
      icon: 'uil-estate',
      title: 'Home',
    },
    {
      icon: 'uil-books',
      title: 'Tu biblioteca',
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
