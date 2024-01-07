import { Component, OnDestroy, OnInit } from '@angular/core';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { PlayListBodyComponent } from '@share/components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from '@share/components/play-list-header/play-list-header.component';
import { Subscription } from 'rxjs';
import { Result } from 'src/app/core/artist';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [PlayListBodyComponent, PlayListHeaderComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css',
})
export class FavoritesPageComponent implements OnInit, OnDestroy {
  tracks: Result = { data: [] };
  arraySuscribe: Subscription[] = [];

  constructor(private trackService: TracksService) {}

  ngOnInit(): void {
    const getTracks = this.trackService.getTracks().subscribe((res) => {
      this.tracks = res;
    });

    this.arraySuscribe.push(getTracks);
  }

  ngOnDestroy(): void {
    this.arraySuscribe.forEach((subs) => subs.unsubscribe);
  }
}
