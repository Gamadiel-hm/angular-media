import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from 'src/app/core/artist';
import { ObjectFilter } from 'src/app/core/filter';
import { orderFunctions } from './orderFunction';

@Pipe({
  name: 'orderList',
  standalone: true,
})
export class OrderListPipe implements PipeTransform {
  transform(value: TrackModel[], sort: ObjectFilter): TrackModel[] {
    if (typeof value === 'undefined') return value;

    if (sort.after !== sort.before && sort.before !== 'default')
      orderFunctions[sort.before](value);
    else value.reverse();
    return value;
  }
}
