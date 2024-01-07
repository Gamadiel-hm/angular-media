import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from 'src/app/core/artist';
import { enviroments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly Url: string = enviroments.api;

  constructor(private http: HttpClient) {}

  getSearch(searchTitle: string): Observable<Result> {
    return this.http.get<Result>(`${this.Url}/tracks`);
  }
}
