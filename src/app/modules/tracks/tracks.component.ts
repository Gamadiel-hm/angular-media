import { Component, OnDestroy, OnInit } from '@angular/core';
import { SectionGenericComponent } from '@share/components/section-generic/section-generic.component';
import { SizeSection, TrackModel } from 'src/app/core/artist';
import * as dataRaw from 'src/app/data/tracks.json';
import { TracksService } from './services/tracks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [SectionGenericComponent],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.css',
  providers: [TracksService],
})
export class TracksComponent implements OnInit, OnDestroy {
  titlesSection: string[] = ['Lo mejor de la musica electronica'];
  sizeSection: SizeSection[] = [SizeSection.small, SizeSection.big];
  tracks: TrackModel[] = [];
  arrayObservables: Subscription[] = [];

  constructor(private tracksService: TracksService) {}

  ngOnInit(): void {
    const obs1$ = this.tracksService
      .getTracks()
      .subscribe((res) => (this.tracks = res.data));

    this.arrayObservables.push(obs1$);
  }

  ngOnDestroy(): void {
    this.arrayObservables.forEach((ob) => ob.unsubscribe());
  }
}
