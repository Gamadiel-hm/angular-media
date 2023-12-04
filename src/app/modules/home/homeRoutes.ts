import { Route } from '@angular/router';
import { TracksComponent } from '../tracks/tracks.component';

export const Home_Routes: Route[] = [
  {
    path: 'tracks',
    loadComponent: () =>
      import('@modules/tracks/tracks.component').then((c) => c.TracksComponent),
  },
  {
    path: 'history',
    loadComponent: () =>
      import('@modules/history/history.component').then(
        (c) => c.HistoryComponent
      ),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('@modules/favorites/favorites-page.component').then(
        (c) => c.FavoritesPageComponent
      ),
  },
];
