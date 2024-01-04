import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const sessionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const existCookie = (): boolean => {
    const arrayCookies = document.cookie
      .split(';')
      .filter((fil) => fil.startsWith('newUser_='));

    return arrayCookies.length > 0 ? true : false;
  };

  if (existCookie()) return true;

  return router.navigate(['/', 'auth']);
};
