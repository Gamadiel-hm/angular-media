import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = 'http://localhost:3000/api/1.0';

  constructor(private httpClient: HttpClient) {}

  sendCredentials(email: string, password: string): Observable<any> {
    const userCrdentials = {
      email,
      password,
    };

    return this.httpClient.post(`${this.URL}/auth/login`, userCrdentials);
  }
}
