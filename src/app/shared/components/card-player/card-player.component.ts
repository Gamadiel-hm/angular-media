import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImgBrokenDirective } from '@share/directivas/img-broken.directive';
import { SizeSection, TrackModel, trackInitial } from 'src/app/core/artist';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule, ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css',
})
export class CardPlayerComponent {
  @Input() tracks: TrackModel = trackInitial;
  @Input() sizeCards: SizeSection = SizeSection.small;
}
