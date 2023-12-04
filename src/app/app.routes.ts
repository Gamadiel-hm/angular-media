import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  {
    path: '', // https://localhost:4200
    component: HomeComponent,
    loadChildren: () =>
      import('./modules/home/homeRoutes').then((rout) => rout.Home_Routes),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./modules/auth/auth.component').then(
        (comp) => comp.AuthComponent
      ),
  },
];
