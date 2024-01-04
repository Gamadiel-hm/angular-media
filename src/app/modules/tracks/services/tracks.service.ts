import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result, TrackModel } from 'src/app/core/artist';
import { enviroments } from 'src/environments/environments';
// import * as dataRaw from 'src/app/data/tracks.json';

@Injectable({
  providedIn: 'root',
})
export class TracksService {
  dataTracks: Observable<TrackModel[]> = new Observable();

  constructor(private http: HttpClient) {}

  getTracks(): Observable<Result> {
    return this.http.get<Result>(`${enviroments.api}/tracks`);
  }
}
