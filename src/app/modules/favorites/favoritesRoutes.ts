import { Route } from '@angular/router';
import { FavoritesPageComponent } from './favorites-page.component';

export const FAVORITES_ROUTES: Route[] = [
  {
    path: '',
    component: FavoritesPageComponent,
  },
];
