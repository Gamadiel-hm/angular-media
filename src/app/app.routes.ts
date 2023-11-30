import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // https://localhost:4200
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
