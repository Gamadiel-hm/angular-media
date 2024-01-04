import { HttpInterceptorFn } from '@angular/common/http';

export const injectTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const cookie = () => {
    return document.cookie
      .split(';')
      .filter((fil) => fil.startsWith('newUser_'));
  };

  const token = cookie()[0].split('=')[1];

  try {
    let newRequest = req;
    newRequest = req.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
      },
    });

    return next(newRequest);
  } catch (error) {
    console.log('Hubo un error', error);
    return next(req);
  }
};
