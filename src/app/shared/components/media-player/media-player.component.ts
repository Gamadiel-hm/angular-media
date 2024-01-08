import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PlayMediaService } from '@share/services/play-media.service';
import { Subscription } from 'rxjs';
import { TrackModel, trackInitial } from 'src/app/core/artist';
import { AudioEnum } from 'src/app/core/audio';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css',
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('scrollBar') scrollBar: ElementRef = new ElementRef('');
  track: TrackModel = trackInitial;
  arrayObservables: Subscription[] = [];
  statusPlay: AudioEnum = AudioEnum.pause;

  constructor(public playMediaService: PlayMediaService) {}

  ngOnInit(): void {
    const observerStatus$ = this.playMediaService.playStatus.subscribe(
      (res) => {
        this.statusPlay = res;
      }
    );
    this.arrayObservables.push(observerStatus$);
  }

  ngOnDestroy(): void {
    this.arrayObservables.forEach((ob) => ob.unsubscribe);
  }

  toogleMedia() {
    this.playMediaService.togglePlay();
  }

  handleBarScroll(event: any) {
    const porcent: number = this.scrollBar.nativeElement.value;
    this.playMediaService.porcentSeek(porcent);
  }
}
