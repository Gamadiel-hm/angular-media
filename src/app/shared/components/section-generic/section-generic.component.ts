import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardPlayerComponent } from '@share/components/card-player/card-player.component';
import { SizeSection, TrackModel } from 'src/app/core/artist';

@Component({
  selector: 'app-section-generic',
  standalone: true,
  imports: [CardPlayerComponent, CommonModule],
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css',
})
export class SectionGenericComponent {
  @Input() sizeInput: SizeSection = SizeSection.small;
  @Input() titleInput: string = '';
  @Input() tracksInput: TrackModel[] = [];
}
