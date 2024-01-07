import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayListHeaderComponent } from '@share/components/play-list-header/play-list-header.component';
import { SearchService } from './service/search.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [PlayListHeaderComponent, FormsModule, CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  searchTitle: string = '';
  Tracks$: Observable<any> = of([]);

  constructor(private searchService: SearchService) {}

  inputSearch(text: string) {
    this.Tracks$ = this.searchService.getSearch(text);
  }
}
