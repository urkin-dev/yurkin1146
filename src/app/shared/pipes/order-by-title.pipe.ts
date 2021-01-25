import {
  Pipe,
  PipeTransform
} from '@angular/core';
import { OrderByStatusPipe } from './order-by-status.pipe';

@Pipe({
  name: 'orderByTitle'
})
export class OrderByTitlePipe implements PipeTransform {

  transform(goods: any[], ascOrder: boolean): any[] {
    let order: number;
    ascOrder === true ? order = 1 : order = -1;
    goods.sort((a, b) => {
      if (a.title > b.title) {
        return order;
      }
      if (b.title > a.title) {
        return -order;
      }
      return 0;
    });

    const statusFilter = new OrderByStatusPipe();
    statusFilter.transform(goods, 'status');

    return goods;
  }

}
