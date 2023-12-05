import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SizeSection, TrackModel, trackInitial } from 'src/app/core/artist';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css',
})
export class CardPlayerComponent {
  @Input() tracks: TrackModel = trackInitial;
  @Input() sizeCards: SizeSection = SizeSection.small;
}
