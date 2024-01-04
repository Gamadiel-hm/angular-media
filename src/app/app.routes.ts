import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { sessionGuard } from './core/guards/session.guard';

export const routes: Routes = [
  {
    path: '', // https://localhost:4200
    component: HomeComponent,
    loadChildren: () =>
      import('./modules/home/homeRoutes').then((rout) => rout.Home_Routes),
    canActivate: [sessionGuard],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./modules/auth/auth.component').then(
        (comp) => comp.AuthComponent
      ),
  },
];
