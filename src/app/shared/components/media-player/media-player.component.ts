import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlayMediaService } from '@share/services/play-media.service';
import { Subscription } from 'rxjs';
import { TrackModel, trackInitial } from 'src/app/core/artist';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css',
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  track: TrackModel = trackInitial;
  arrayObservables: Subscription[] = [];

  constructor(private playMediaService: PlayMediaService) {}

  ngOnInit(): void {
    const playObservable$ = this.playMediaService.eventTrack.subscribe(
      (response: TrackModel) => {
        this.track = response;
      }
    );

    this.arrayObservables.push(playObservable$);
  }

  ngOnDestroy(): void {
    this.arrayObservables.forEach((ob) => ob.unsubscribe);
  }
}
