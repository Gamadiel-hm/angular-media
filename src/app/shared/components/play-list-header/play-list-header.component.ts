import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrderListPipe } from '@share/pipe/order-list.pipe';
import { TrackModel } from 'src/app/core/artist';
import {
  Filters,
  IconsFilter,
  ObjectFilter,
  filtersArray,
  objectIcon,
  objectinit,
} from 'src/app/core/filter';
import * as dataRow from 'src/app/data/tracks.json';

@Component({
  selector: 'app-play-list-header',
  standalone: true,
  imports: [CommonModule, OrderListPipe],
  templateUrl: './play-list-header.component.html',
  styleUrl: './play-list-header.component.css',
})
export class PlayListHeaderComponent implements OnInit {
  tracks: TrackModel[] = [];

  objectFilter: ObjectFilter = objectinit;
  filterEnum: Filters[] = filtersArray;
  iconsObject: IconsFilter[] = objectIcon;
  countClick: number = 0;

  ngOnInit(): void {
    const { data } = (dataRow as any).default;
    this.tracks = data;
  }

  changeFilter(filter: Filters) {
    this.objectFilter.after = this.objectFilter.before;

    this.objectFilter = { ...this.objectFilter, before: filter };

    if (this.objectFilter.after === this.objectFilter.before)
      this.countClick += 1;
    else this.countClick = 1;
  }
}
