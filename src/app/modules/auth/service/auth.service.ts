import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { enviroments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = enviroments.api;

  constructor(private httpClient: HttpClient) {}

  sendCredentials(email: string, password: string): Observable<any> {
    const userCrdentials = {
      email,
      password,
    };

    return this.httpClient
      .post<any>(`${this.URL}/auth/login`, userCrdentials)
      .pipe(tap((res) => (document.cookie = `newUser_=${res.tokenSession}`)));
  }
}
