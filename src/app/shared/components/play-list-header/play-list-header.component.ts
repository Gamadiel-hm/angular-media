import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ImgBrokenDirective } from '@share/directivas/img-broken.directive';
import { OrderListPipe } from '@share/pipe/order-list.pipe';
import { Result, TrackModel } from 'src/app/core/artist';
import {
  Filters,
  IconsFilter,
  ObjectFilter,
  filtersArray,
  objectIcon,
  objectinit,
} from 'src/app/core/filter';

@Component({
  selector: 'app-play-list-header',
  standalone: true,
  imports: [CommonModule, OrderListPipe, ImgBrokenDirective],
  templateUrl: './play-list-header.component.html',
  styleUrl: './play-list-header.component.css',
})
export class PlayListHeaderComponent implements OnChanges {
  @Input() tracks: Result = { data: [] };
  tracks2: TrackModel[] = [];

  objectFilter: ObjectFilter = objectinit;
  filterEnum: Filters[] = filtersArray;
  iconsObject: IconsFilter[] = objectIcon;
  countClick: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.tracks2 = this.tracks.data;
  }

  changeFilter(filter: Filters) {
    this.objectFilter.after = this.objectFilter.before;

    this.objectFilter = { ...this.objectFilter, before: filter };

    if (this.objectFilter.after === this.objectFilter.before)
      this.countClick += 1;
    else this.countClick = 1;
  }
}
