import { Component, OnInit } from '@angular/core';
import { SectionGenericComponent } from '@share/components/section-generic/section-generic.component';
import { SizeSection, TrackModel } from 'src/app/core/artist';
import * as dataRaw from 'src/app/data/tracks.json';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [SectionGenericComponent],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.css',
})
export class TracksComponent implements OnInit {
  titlesSection: string[] = ['Lo mejor de la musica electronica'];
  sizeSection: SizeSection[] = [SizeSection.small, SizeSection.big];
  Tracks: TrackModel[] = [];

  ngOnInit(): void {
    const { data } = (dataRaw as any).default;
    this.Tracks = data;
  }
}
