import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from 'src/app/core/artist';

@Injectable({
  providedIn: 'root',
})
export class PlayMediaService {
  eventTrack: EventEmitter<TrackModel> = new EventEmitter<TrackModel>();

  constructor() {}

  addTrack(track: TrackModel): void {
    this.eventTrack.emit(track);
  }
}
