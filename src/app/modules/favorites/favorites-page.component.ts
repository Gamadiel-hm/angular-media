import { Component } from '@angular/core';
import { PlayListBodyComponent } from '@share/components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from '@share/components/play-list-header/play-list-header.component';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [PlayListBodyComponent, PlayListHeaderComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css',
})
export class FavoritesPageComponent {}
