import { HttpInterceptorFn } from '@angular/common/http';

export const injectTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const cookies = () => {
    return document.cookie
      .split(';')
      .filter((fil) => fil.startsWith('newUser_'));
  };

  let cookie = cookies();

  if (cookie.length === 0) cookie = [''];
  else cookie[0].split('=')[1];

  try {
    let newRequest = req;
    newRequest = req.clone({
      setHeaders: {
        authorization: `Bearer ${cookie}`,
      },
    });

    return next(newRequest);
  } catch (error) {
    console.log('Hubo un error', error);
    return next(req);
  }
};
